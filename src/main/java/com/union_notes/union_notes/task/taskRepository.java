package com.union_notes.union_notes.task;

import jakarta.annotation.PostConstruct;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.util.Assert;

@Repository
public class taskRepository {
    private final JdbcClient jdbcClient;

    public taskRepository(JdbcClient jdbcClient) {
        this.jdbcClient = jdbcClient;
    }

    // private List<Task> tasks = new ArrayList<>();
    
    List<Task> findAll() {
        return jdbcClient.sql("select * from task")
                .query(Task.class)
                .list();
    }

    Optional<Task> findById(Integer id) {
        return jdbcClient.sql("select * from task where id = :id")
                .param("id", id)
                .query(Task.class)
                .optional();
        
    }

    List<Task> findInProgress() {
        return jdbcClient.sql("select * from task where status = 'IN_PROGRESS'")
                .query(Task.class)
                .list();
    }
    List<Task> findCompleted() {
        return jdbcClient.sql("select * from task where status = 'COMPLETED'")
                .query(Task.class)
                .list();
    }

    void create(Task task) {
        var updated = jdbcClient.sql("insert into task(id, title, description, deadline, status) values(?, ?, ?, ?, ?)")
                .params(List.of(task.id(), task.title(), task.description(), task.deadline(), task.status().toString()))
                .update();
        Assert.isTrue(updated == 1, "Failed to create task " + task.title());
    }

    void update(Integer id, Task task) {
        var updated = jdbcClient.sql("update task set id = ?, title = ?, description = ?, deadline = ?, status = ? where id = ?")
                .params(List.of(task.id(), task.title(), task.description(), task.deadline(), task.status().toString(), id))
                .update();

        Assert.isTrue(updated == 1, "Failed to create task " + task.title());
    }

    void delete(Integer id) {
       var deleted = jdbcClient.sql("delete from task where id = ?")
       .param(id)
       .update();

        Assert.isTrue(deleted == 1, "Failed to delete task with id " + id);
    }

}
