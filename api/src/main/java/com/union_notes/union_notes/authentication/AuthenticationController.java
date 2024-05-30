package com.union_notes.union_notes.authentication;

import org.springframework.web.bind.annotation.RestController;

import com.union_notes.union_notes.token.JwtService;
import com.union_notes.union_notes.user.MyUser;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class AuthenticationController {
    
    private JwtService jwtService;
    private AuthenticationService authenticationService;

    public AuthenticationController(JwtService jwtService, AuthenticationService authenticationService) {
        this.jwtService = jwtService;
        this.authenticationService = authenticationService;
    }

    @PostMapping("auth/register")
    public ResponseEntity<?> register(@RequestBody AuthenticationRequest request) {
        try {
            MyUser registeredUser = authenticationService.signup(request);
            return ResponseEntity.ok(registeredUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Exception occurred: " + e.getMessage());
        }
    }

    @PostMapping("auth/login")
    public ResponseEntity<?> authenticate(@RequestBody AuthenticationRequest request) {
        try{
            MyUser authenticatedUser = authenticationService.authenticate(request);
            String jwtToken = jwtService.generateToken(authenticatedUser);

            // Decode the token and log the userId claim
            Integer userId = jwtService.extractUserId(jwtToken);
            System.out.println("userId: " + userId);

            AuthenticationResponse loginResponse = new AuthenticationResponse(jwtToken);
            loginResponse.setExpiresIn(jwtService.getExpirationTime());

            return ResponseEntity.ok(loginResponse);
        }
        catch(Exception e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username/password");
        }
       
    }
    
}
