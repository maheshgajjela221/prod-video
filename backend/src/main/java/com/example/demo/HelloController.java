package com.example.demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")   // 👈 ADD THIS LINE
@RestController
public class HelloController {

    @GetMapping("/api")
    public String hello() {
        return "Hello from Java Backend 🚀";
    }
}
