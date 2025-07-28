package com.routineshop.backend.controller;

import com.routineshop.backend.dto.RoutineRequestDto;
import com.routineshop.backend.entity.Routine;
import com.routineshop.backend.entity.User;
import com.routineshop.backend.repository.UserRepository;
import com.routineshop.backend.service.RoutineService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/routines")
public class RoutineController {

    private final RoutineService routineService;
    private final UserRepository userRepository;

    public RoutineController(RoutineService routineService, UserRepository userRepository) {
        this.routineService = routineService;
        this.userRepository = userRepository;
    }

    @PostMapping
    public ResponseEntity<Routine> registerRoutine(
            @RequestBody RoutineRequestDto request
    ) {
        User dummyUser = userRepository.findById(1L)
                .orElseThrow(() -> new IllegalArgumentException("User with ID 1 not found"));

        Routine created = routineService.registerRoutine(request, dummyUser);
        return ResponseEntity.ok(created);
    }
}
