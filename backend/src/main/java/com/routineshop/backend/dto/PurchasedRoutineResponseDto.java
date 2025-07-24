package com.routineshop.backend.dto;

public class PurchasedRoutineResponseDto {

    private Long id;
    private String title;
    private int price;
    private String creatorNickname;

    public PurchasedRoutineResponseDto() {
        // Jackson이 사용 가능한 기본 생성자 필요
    }

    public PurchasedRoutineResponseDto(Long id, String title, int price, String creatorNickname) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.creatorNickname = creatorNickname;
    }

    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public int getPrice() {
        return price;
    }

    public String getCreatorNickname() {
        return creatorNickname;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public void setCreatorNickname(String creatorNickname) {
        this.creatorNickname = creatorNickname;
    }
}