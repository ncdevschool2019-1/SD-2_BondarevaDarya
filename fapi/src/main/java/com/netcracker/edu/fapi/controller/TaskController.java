package com.netcracker.edu.fapi.controller;


import com.netcracker.edu.fapi.models.Task;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/tasks")

public class TaskController {
    @RequestMapping
    public ResponseEntity<Task> getTask(){
        return ResponseEntity.ok(new Task("test"));
    }
}
