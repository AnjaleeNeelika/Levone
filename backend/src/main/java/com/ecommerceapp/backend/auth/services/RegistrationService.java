package com.ecommerceapp.backend.auth.services;

import com.ecommerceapp.backend.auth.dto.RegistrationRequest;
import com.ecommerceapp.backend.auth.dto.RegistrationResponse;
import com.ecommerceapp.backend.auth.entities.User;
import com.ecommerceapp.backend.auth.helper.VerificationCodeGenerator;
import com.ecommerceapp.backend.auth.repositories.UserDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ServerErrorException;

@Service
public class RegistrationService {
    @Autowired
    private UserDetailRepository userDetailRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuthorityService authorityService;

    public RegistrationResponse createUser(RegistrationRequest request) {
        User existing = userDetailRepository.findByEmail(request.getEmail());

        if (existing != null) {
            return RegistrationResponse.builder()
                    .code(400)
                    .message("Email already exists!")
                    .build();
        }

        try {
            User user = new User();
            user.setFirstName(request.getFirstName());
            user.setLastName(request.getLastName());
            user.setLastName(request.getEmail());
            user.setEnabled(false);
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user.setProvider("manual");

            String code = VerificationCodeGenerator.generateCode();

            user.setVerificationCode(code);
            user.setAuthorities(authorityService.getUserAuthority());
            userDetailRepository.save(user);

            // Method to send the user verification email
            return RegistrationResponse.builder()
                    .code(200)
                    .message("User created!")
                    .build();

        } catch (Exception e) {
            System.out.println(e.getMessage());
            throw new ServerErrorException(e.getMessage(), e.getCause());
        }
    }
}
