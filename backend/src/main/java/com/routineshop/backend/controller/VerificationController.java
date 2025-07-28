package com.routineshop.backend.controller;

import com.routineshop.backend.dto.VerificationRequestDto;
import com.routineshop.backend.dto.VerificationResponseDto;
import com.routineshop.backend.entity.User;
import com.routineshop.backend.repository.UserRepository;
import com.routineshop.backend.service.VerificationService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/verification")
public class VerificationController {

    private final VerificationService verificationService;
    private final UserRepository userRepository;

    public VerificationController(VerificationService verificationService,
                                  UserRepository userRepository) {
        this.verificationService = verificationService;
        this.userRepository = userRepository;
    }

    @PostMapping
    public ResponseEntity<?> verify(@RequestBody VerificationRequestDto request,
                                    @AuthenticationPrincipal User user) {
        verificationService.verify(user, request.getPurchaseId(), request.getDay());
        return ResponseEntity.ok("인증 성공! 10포인트 지급 완료.");
    }

    // 로그인 안 하고 테스트할 수 있는 인증 api
    @PostMapping("/test")
    public ResponseEntity<?> verifyForTest(@RequestBody VerificationRequestDto request) {
        User testUser = userRepository.findById(1L)
                .orElseThrow(() -> new RuntimeException("테스트 유저 없음"));
        verificationService.verify(testUser, request.getPurchaseId(), request.getDay());
        return ResponseEntity.ok("🎉 인증 성공! 10포인트 지급 완료!");
    }

    @GetMapping("/status")
    public ResponseEntity<List<VerificationResponseDto>> getVerificationStatus(
            @RequestParam Long purchaseId,
            @AuthenticationPrincipal User user) {

        List<VerificationResponseDto> result =
                verificationService.getVerificationStatus(user, purchaseId);
        return ResponseEntity.ok(result);
    }

    // 로그인 안 하고 테스트할 수 있는 인증 api
    @GetMapping("/status/test")
    public ResponseEntity<List<VerificationResponseDto>> getVerificationStatusForTest(
            @RequestParam Long purchaseId) {

        User testUser = userRepository.findById(1L)
                .orElseThrow(() -> new RuntimeException("테스트 유저 없음"));

        List<VerificationResponseDto> result =
                verificationService.getVerificationStatus(testUser, purchaseId);

        return ResponseEntity.ok(result);
    }

}
