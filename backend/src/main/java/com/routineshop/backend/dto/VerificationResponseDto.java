package com.routineshop.backend.dto;

import com.routineshop.backend.entity.Verification;
import java.time.LocalDate;

public class VerificationResponseDto {

    private int day;
    private boolean verified;
    private LocalDate verifiedAt;

    public VerificationResponseDto(Verification verification) {
        this.day = verification.getDay();
        this.verified = verification.isVerified();
        this.verifiedAt = verification.getVerifiedAt() != null
                ? verification.getVerifiedAt().toLocalDate()
                : null;
    }

    public int getDay() { return day; }
    public boolean isVerified() { return verified; }
    public LocalDate getVerifiedAt() { return verifiedAt; }
}
