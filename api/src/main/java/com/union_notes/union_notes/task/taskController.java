package com.union_notes.union_notes.task;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tasks")
public class taskController {

    private final taskRepository repository;

    taskController(taskRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/all/{id}")
    List<Task> findAllByUserId(@PathVariable Integer id) {
        return repository.findAllByUserId(id);
    }

    @GetMapping("/{id}")
    Task findById(@PathVariable Integer id) {
        Optional<Task> task = repository.findById(id);
        if(task.isPresent()){
            return task.get();
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Task not found");
        }
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("")
    void create(@RequestBody Task task) {
        repository.create(task);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PutMapping("/{id}")
    void update(@PathVariable Integer id, @RequestBody Task task) {
        repository.update(id, task);
    }

    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{id}")
    void delete(@PathVariable Integer id) {
        repository.delete(id);
    }
}