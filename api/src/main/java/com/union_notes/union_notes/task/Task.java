package com.union_notes.union_notes.task;


public record Task(Integer id, String title, String description, String deadline, Status status, Integer userId) {
}