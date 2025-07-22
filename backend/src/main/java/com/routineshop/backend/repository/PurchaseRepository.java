package com.routineshop.backend.repository;

import com.routineshop.backend.entity.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PurchaseRepository extends JpaRepository<Purchase, Long> {
    // 필요한 경우: 중복 구매 확인 메서드
    boolean existsByUserIdAndRoutineId(Long userId, Long routineId);
}