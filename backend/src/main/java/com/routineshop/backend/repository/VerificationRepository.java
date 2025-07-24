package com.routineshop.backend.repository;

import com.routineshop.backend.entity.Verification;
import com.routineshop.backend.entity.Purchase;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VerificationRepository extends JpaRepository<Verification, Long> {

    Optional<Verification> findByPurchaseAndDay(Purchase purchase, int day);
}
