package com.routineshop.backend.service;

import com.routineshop.backend.dto.RoutineRequestDto;
import com.routineshop.backend.entity.Routine;
import com.routineshop.backend.entity.User;
import com.routineshop.backend.repository.RoutineRepository;
import org.springframework.stereotype.Service;

@Service
public class RoutineService {

    private final RoutineRepository routineRepository;

    public RoutineService(RoutineRepository routineRepository) {
        this.routineRepository = routineRepository;
    }

    public Routine registerRoutine(RoutineRequestDto dto, User creator) {
        Routine routine = new Routine(
                dto.getTitle(),
                dto.getContent(),
                dto.getPrice(),
                creator
        );

        return routineRepository.save(routine);
    }
}
