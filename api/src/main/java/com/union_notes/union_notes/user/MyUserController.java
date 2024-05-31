package com.union_notes.union_notes.user;

import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class MyUserController  {

    private final MyUserRepository repository;
    private final PasswordEncoder passwordEncoder;

    MyUserController(MyUserRepository repository,  PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping("/")
    List<MyUser> findAllUsers() {
        return repository.findAll();
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{userId}")
    void update(@PathVariable Long userId, @RequestBody MyUser user) {
        user.setId(userId); 

        Optional<MyUser> optionalUser = repository.findById(user.getId());
        if (optionalUser.isPresent()) {
            MyUser existingUser = optionalUser.get();
            
            if(user.getName() != null){
                existingUser.setName(user.getName());
            }

            else if(user.getEmail() != null){
                existingUser.setEmail(user.getEmail());
            }
            
            else if(user.getPassword() != null){
                existingUser.setPassword(passwordEncoder.encode(user.getPassword()));
            }

            else if(user.getRole() != null){
                existingUser.setRole(user.getRole());
            }

            repository.save(existingUser);


        } else {
            // User not found
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found");
        }
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{userId}")
    void delete(@PathVariable Long userId) {
        repository.deleteById(userId);
    }
}
