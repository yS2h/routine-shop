package com.routineshop.backend.controller;

import io.swagger.v3.oas.annotations.tags.Tag;
import com.routineshop.backend.dto.PurchasedRoutineResponseDto;
import com.routineshop.backend.entity.User;
import com.routineshop.backend.repository.UserRepository;
import com.routineshop.backend.service.PurchaseQueryService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@Tag(name = "purchased-controller", description = "구매한 루틴 조회 API")
@RestController
@RequestMapping("/purchases")
public class PurchasedController {

    private final PurchaseQueryService purchaseQueryService;
    private final UserRepository userRepository;

    public PurchasedController(PurchaseQueryService purchaseQueryService, UserRepository userRepository) {
        this.purchaseQueryService = purchaseQueryService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public ResponseEntity<List<PurchasedRoutineResponseDto>> getMyPurchasedRoutines() {
        User dummyUser = userRepository.findById(1L)
                .orElseThrow(() -> new IllegalArgumentException("User with ID 1 not found"));

        List<PurchasedRoutineResponseDto> response = purchaseQueryService.getMyPurchasedRoutines(dummyUser.getId());
        return ResponseEntity.ok(response);
    }
}
