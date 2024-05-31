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

        if(userRepository.findByEmail(input.getEmail()).isPresent()) {
            throw new IllegalArgumentException("Email already exists");
        }
        else{
            System.out.println("User: " + input.getName());
            user.setName(input.getName());
            user.setEmail(input.getEmail());
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
                        input.getEmail(),
                        input.getPassword()
                )
        );
        }catch(Exception e){
            throw new IllegalArgumentException("Invalid email/password");
        }

        return userRepository.findByEmail(input.getEmail())
                .orElseThrow();
    }
}
