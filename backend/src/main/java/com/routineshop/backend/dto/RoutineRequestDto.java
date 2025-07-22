package com.routineshop.backend.dto;

public class RoutineRequestDto {

    private String title;
    private String content;
    private int price;

    public RoutineRequestDto() {}

    public RoutineRequestDto(String title, String content, int price) {
        this.title = title;
        this.content = content;
        this.price = price;
    }

    public String getTitle() {
        return title;
    }

    public String getContent() {
        return content;
    }

    public int getPrice() {
        return price;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
