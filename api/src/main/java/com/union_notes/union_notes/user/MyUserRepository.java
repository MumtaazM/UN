package com.union_notes.union_notes.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MyUserRepository extends JpaRepository<MyUser, Long>{

    public Optional<MyUser> findByUsername(String username);
    
}