package com.routineshop.backend.service;

import com.routineshop.backend.dto.PurchasedRoutineResponseDto;
import com.routineshop.backend.entity.Purchase;
import com.routineshop.backend.entity.Routine;
import com.routineshop.backend.repository.PurchasedRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class PurchaseQueryService {

    private final PurchasedRepository purchaseRepository;

    public PurchaseQueryService(PurchasedRepository purchaseRepository) {
        this.purchaseRepository = purchaseRepository;
    }

    public List<PurchasedRoutineResponseDto> getMyPurchasedRoutines(Long userId) {
        List<Purchase> purchases = purchaseRepository.findByUserId(userId);

        return purchases.stream()
                .map(purchase -> {
                    Routine routine = purchase.getRoutine();
                    return new PurchasedRoutineResponseDto(
                            routine.getId(),
                            routine.getTitle(),
                            routine.getPrice(),
                            routine.getCreator().getNickname()
                    );
                })
                .collect(Collectors.toList());
    }
}