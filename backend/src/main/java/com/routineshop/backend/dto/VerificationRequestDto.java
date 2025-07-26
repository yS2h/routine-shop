package com.routineshop.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class VerificationRequestDto {
    private Long purchaseId;
    private int day;

}
