package com.routineshop.backend.dto;

public class PurchaseRequestDto {

    private Long routineId;

    public PurchaseRequestDto() {}

    public PurchaseRequestDto(Long routineId) {
        this.routineId = routineId;
    }

    public Long getRoutineId() {
        return routineId;
    }

    public void setRoutineId(Long routineId) {
        this.routineId = routineId;
    }
}