package com.routineshop.backend.service;

import com.routineshop.backend.entity.Purchase;
import com.routineshop.backend.entity.Routine;
import com.routineshop.backend.entity.User;
import com.routineshop.backend.entity.Verification;
import com.routineshop.backend.repository.PurchaseRepository;
import com.routineshop.backend.repository.RoutineRepository;
import com.routineshop.backend.repository.UserRepository;
import com.routineshop.backend.repository.VerificationRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class PurchaseService {

    private final PurchaseRepository purchaseRepository;
    private final UserRepository userRepository;
    private final RoutineRepository routineRepository;
    private final VerificationRepository verificationRepository;

    @Transactional
    public void purchaseRoutine(Long routineId) {
        // 테스트를 위한 유저아이디
        Long userId = 1L;

        User user = userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다."));
        Routine routine = routineRepository.findById(routineId)
                .orElseThrow(() -> new IllegalArgumentException("루틴을 찾을 수 없습니다."));

        int price = routine.getPrice();
        if (user.getPoint() < price) {
            throw new IllegalStateException("포인트가 부족합니다.");
        }

        user.setPoint(user.getPoint() - price);

        Purchase purchase = new Purchase();
        purchase.setUser(user);
        purchase.setRoutine(routine);
        purchase.setPurchasedAt(LocalDateTime.now());
        purchaseRepository.save(purchase);

        for (int day = 1; day <= 30; day++) {
            Verification verification = new Verification(purchase, day);
            verificationRepository.save(verification);
        }
    }
}