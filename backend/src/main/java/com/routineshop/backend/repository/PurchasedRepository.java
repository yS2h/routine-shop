package com.routineshop.backend.repository;

import com.routineshop.backend.entity.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchasedRepository extends JpaRepository<Purchase, Long> {
    List<Purchase> findByUserId(Long userId);
}