package com.routineshop.backend.controller;

import com.routineshop.backend.service.PurchaseService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/purchase")
public class PurchaseController {

    private final PurchaseService purchaseService;

    @PostMapping("/{routineId}")
    public ResponseEntity<String> purchaseRoutine(@PathVariable Long routineId) {
        purchaseService.purchaseRoutine(routineId);
        return ResponseEntity.ok("루틴 구매 완료");
    }
}