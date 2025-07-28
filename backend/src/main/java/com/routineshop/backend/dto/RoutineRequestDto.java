package com.routineshop.backend.dto;

public class RoutineRequestDto {

    private String title;
    private String content;
    private int price;
    private String category;
    private String thumbnailUrl;

    public RoutineRequestDto() {}

    public RoutineRequestDto(String title, String content, int price, String category, String thumbnailUrl) {
        this.title = title;
        this.content = content;
        this.price = price;
        this.category = category;
        this.thumbnailUrl = thumbnailUrl;
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

    public String getCategory() {
        return category;
    }

    public String getThumbnailUrl() {
        return thumbnailUrl;
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

    public void setCategory(String category) {
        this.category = category;
    }

    public void setThumbnailUrl(String thumbnailUrl) {
        this.thumbnailUrl = thumbnailUrl;
    }
}
