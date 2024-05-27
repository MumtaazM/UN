package com.union_notes.union_notes.authentication;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.union_notes.union_notes.user.MyUser;
import com.union_notes.union_notes.user.MyUserRepository;


@Service
public class AuthenticationService {
    private final MyUserRepository userRepository;
    
    private final PasswordEncoder passwordEncoder;
    
    private final AuthenticationManager authenticationManager;

    public AuthenticationService(
        MyUserRepository userRepository,
        AuthenticationManager authenticationManager,
        PasswordEncoder passwordEncoder
    ) {
        this.authenticationManager = authenticationManager;
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public MyUser signup(AuthenticationRequest input) {
        MyUser user = new MyUser();

        if(userRepository.findByUsername(input.getUsername()).isPresent()) {
            throw new IllegalArgumentException("Username already exists");
        }
        else{
            user.setUsername(input.getUsername());
            user.setPassword(passwordEncoder.encode(input.getPassword()));
            if(input.getRole() == null){
               user.setRole("USER");
            }
            else{
                user.setRole(input.getRole());
            }

            return userRepository.save(user);
        }
    }

    public MyUser authenticate(AuthenticationRequest input) {

        try{
            authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        input.getUsername(),
                        input.getPassword()
                )
        );
        }catch(Exception e){
            throw new IllegalArgumentException("Invalid username/password");
        }

        return userRepository.findByUsername(input.getUsername())
                .orElseThrow();
    }
}
