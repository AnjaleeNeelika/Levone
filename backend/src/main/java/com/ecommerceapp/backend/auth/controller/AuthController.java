package com.ecommerceapp.backend.auth.controller;

import com.ecommerceapp.backend.auth.dto.LoginRequest;
import com.ecommerceapp.backend.auth.dto.RegistrationRequest;
import com.ecommerceapp.backend.auth.dto.RegistrationResponse;
import com.ecommerceapp.backend.auth.dto.UserToken;
import com.ecommerceapp.backend.auth.entities.User;
import com.ecommerceapp.backend.auth.services.RegistrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    RegistrationService registrationService;

    @PostMapping("/login")
    public ResponseEntity<UserToken> login(@RequestBody LoginRequest loginRequest) {
        try {
            Authentication authentication = UsernamePasswordAuthenticationToken.unauthenticated(loginRequest.getUserName(), loginRequest.getPassword());

            Authentication authenticationResponse = this.authenticationManager.authenticate(authentication);

            if (authenticationResponse.isAuthenticated()) {
                User user = (User) authenticationResponse.getPrincipal();

                if (!user.isEnabled()) {
                    return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
                }

                // Generate JWT Token
                String token = null;
                UserToken userToken = UserToken.builder().token(token).build();

                return new ResponseEntity<>(userToken, HttpStatus.OK);
            }
        } catch (BadCredentialsException e) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @PostMapping("/register")
    public ResponseEntity<RegistrationResponse> register(@RequestBody RegistrationRequest request) {
        RegistrationResponse registrationResponse = registrationService.createUser(request);

        return null;
    }
}