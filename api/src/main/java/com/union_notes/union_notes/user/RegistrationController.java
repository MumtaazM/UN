package com.union_notes.union_notes.user;


// import org.springframework.web.bind.annotation.RestController;

// import java.util.Optional;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestBody;


// @RestController
// public class RegistrationController {
//     @Autowired
//     private MyUserRepository repository;

//     @Autowired
//     private PasswordEncoder passwordEncoder;

//     @PostMapping("auth/register")
//     public ResponseEntity<String> registerUser(@RequestBody MyUser user) {
//         Optional<MyUser> userOptional = repository.findByUsername(user.getUsername());

//         if(userOptional.isPresent()) {
//             return new ResponseEntity<>("Account already exists" , HttpStatus.UNAUTHORIZED);
//         }

//         user.setPassword(passwordEncoder.encode(user.getPassword()));
//         repository.save(user);
//         return new ResponseEntity<>("Account created successfully", HttpStatus.OK);
//     }

//     @PostMapping("auth/login")
//     public ResponseEntity<String> loginUser(@RequestBody MyUser user) {
//         Optional<MyUser> userOptional = repository.findByUsername(user.getUsername());

//         if(userOptional.isPresent()) {
//             MyUser userFromDb = userOptional.get();
//             if(passwordEncoder.matches(user.getPassword(), userFromDb.getPassword())) {
//                 return new ResponseEntity<>("Logged in successfully", HttpStatus.OK);
//             }
//         }
//         return new ResponseEntity<>("Failed to log in", HttpStatus.UNAUTHORIZED);
//     }

//     @PostMapping("/home")
//     public String home() {
//         return "home_logged_in";
//     }
    
// }
