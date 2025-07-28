package com.routineshop.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Routine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false)
    private String category;

    @Column(nullable = true)
    private String thumbnailUrl;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "creator_id", nullable = false)
    private User creator;

    private LocalDateTime createdAt = LocalDateTime.now();

    public Routine(String title, String content, int price, String category, String thumbnailUrl, User creator) {
        this.title = title;
        this.content = content;
        this.price = price;
        this.category = category;
        this.thumbnailUrl = thumbnailUrl;
        this.creator = creator;
        this.createdAt = LocalDateTime.now();
    }

    public Routine(String title, String content, int price, User creator) {
        this.title = title;
        this.content = content;
        this.price = price;
        this.creator = creator;
        this.createdAt = LocalDateTime.now();
    }

    public Routine() {}

    // getter/setter
    public Long getId() { return id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public int getPrice() { return price; }
    public void setPrice(int price) { this.price = price; }

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category; }

    public String getThumbnailUrl() { return thumbnailUrl; }
    public void setThumbnailUrl(String thumbnailUrl) { this.thumbnailUrl = thumbnailUrl; }

    public User getCreator() { return creator; }
    public void setCreator(User creator) { this.creator = creator; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
