package com.union_notes.union_notes.authentication;

public class AuthenticationRequest {
    private String name;
    private String username;
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    private String password;
    private String role;
    
    public String getRole() {
        return role;
    }
    public void setRole(String role) {
        this.role = role;
    }
    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }
    public String getPassword() {
        return password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
}