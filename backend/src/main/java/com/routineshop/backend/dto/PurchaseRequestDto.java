package com.routineshop.backend.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.NoArgsConstructor;

@Getter
@Setter
@NoArgsConstructor
public class PurchaseRequestDto {
    private Long userId;
    private Long routineId;
}
