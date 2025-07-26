package com.routineshop.backend.service;

import com.routineshop.backend.dto.VerificationResponseDto;
import com.routineshop.backend.entity.*;
import com.routineshop.backend.repository.*;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class VerificationService {

    private final VerificationRepository verificationRepository;
    private final PurchaseRepository purchaseRepository;
    private final UserRepository userRepository;

    public VerificationService(VerificationRepository verificationRepository,
                               PurchaseRepository purchaseRepository,
                               UserRepository userRepository) {
        this.verificationRepository = verificationRepository;
        this.purchaseRepository = purchaseRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public void verify(User user, Long purchaseId, int day) {
        Purchase purchase = purchaseRepository.findById(purchaseId)
                .orElseThrow(() -> new IllegalArgumentException("해당 구매 내역이 없습니다"));

        if (!purchase.getUser().getId().equals(user.getId())) {
            throw new IllegalArgumentException("본인의 구매 내역이 아닙니다");
        }

        Verification verification = verificationRepository.findByPurchaseAndDay(purchase, day)
                .orElseThrow(() -> new IllegalArgumentException("해당 인증 카드가 없습니다"));

        if (verification.isVerified()) {
            throw new IllegalStateException("이미 인증한 날짜입니다");
        }

        // 인증 처리
        verification.verify();
        verificationRepository.save(verification);

        // 보상 지급
        user.setPoint(user.getPoint() + 10);
        userRepository.save(user);
    }

    public List<VerificationResponseDto> getVerificationStatus(User user, Long purchaseId) {
        Purchase purchase = purchaseRepository.findById(purchaseId)
                .orElseThrow(() -> new IllegalArgumentException("구매 정보를 찾을 수 없습니다."));

        if (!purchase.getUser().getId().equals(user.getId())) {
            throw new SecurityException("본인의 구매 내역이 아닙니다.");
        }

        List<Verification> verifications = verificationRepository.findAllByPurchaseIdOrderByDayAsc(purchaseId);

        return verifications.stream()
                .map(VerificationResponseDto::new)
                .collect(Collectors.toList());
    }
}
