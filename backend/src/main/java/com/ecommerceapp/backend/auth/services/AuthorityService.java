package com.ecommerceapp.backend.auth.services;

import com.ecommerceapp.backend.auth.entities.Authority;
import com.ecommerceapp.backend.auth.repositories.AuthorityRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthorityService {

    @Autowired
    private AuthorityRepository authorityRepository;

    @PostConstruct
    public void initRoles() {
        createRoleIfNotExists("USER", "Regular user role");
        createRoleIfNotExists("ADMIN", "Administrator role");
    }

    private void createRoleIfNotExists(String role, String description) {
        Authority existingAuthority = authorityRepository.findByRoleCode(role);

        if (existingAuthority == null) {
            Authority authority = Authority.builder()
                    .roleCode(role)
                    .roleDescription(description)
                    .build();

            authorityRepository.save(authority);
        }
    }

    // To get authority list
    public List<Authority> getUserAuthority() {
        List<Authority> authorities = new ArrayList<>();
        Authority authority = authorityRepository.findByRoleCode("USER");
        authorities.add(authority);

        return authorities;
    }

    // Create an authority for role
    public Authority createAuthority(String role, String description) {
        Authority authority = Authority.builder().roleCode(role).roleDescription(description).build();

        return authorityRepository.save(authority);
    }
}
