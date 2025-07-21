package com.routineshop.backend.repository;

import com.routineshop.backend.entity.Routine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoutineRepository extends JpaRepository<Routine, Long> {

}