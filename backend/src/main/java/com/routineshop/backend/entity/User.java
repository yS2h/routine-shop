package com.routineshop.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = true, unique = true)
    private String email; 

    @Column(nullable = false)
    private String nickname; 

    //private String profileImage; 

    // 소셜 로그인에 필요한 부분
    @Column(nullable = false)
    private String provider; 

    @Column(nullable = false)
    private String providerId;

    private String role = "USER"; 

    private int point = 5000; // 회원가입 시 기본 지급 5000포인트

    private LocalDateTime createdAt = LocalDateTime.now();

    public User() {}

    public User(String email, String nickname, String provider, String providerId) {
        this.email = email;
        this.nickname = nickname;
        this.provider = provider;
        this.providerId = providerId;
        this.createdAt = LocalDateTime.now();
        this.point = 5000;
        this.role = "USER";
    }

    public Long getId() { return id; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getNickname() { return nickname; }
    public void setNickname(String nickname) { this.nickname = nickname; }

    //public String getProfileImage() { return profileImage; }
    //public void setProfileImage(String profileImage) { this.profileImage = profileImage; }

    public String getProvider() { return provider; }
    public void setProvider(String provider) { this.provider = provider; }

    public String getProviderId() { return providerId; }
    public void setProviderId(String providerId) { this.providerId = providerId; }

    public String getRole() { return role; }
    public void setRole(String role) { this.role = role; }

    public int getPoint() { return point; }
    public void setPoint(int point) { this.point = point; }

    public LocalDateTime getCreatedAt() { return createdAt; }
    public void setCreatedAt(LocalDateTime createdAt) { this.createdAt = createdAt; }
}
