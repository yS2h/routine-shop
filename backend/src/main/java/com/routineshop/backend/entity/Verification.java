package com.routineshop.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Entity
public class Verification {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Setter
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "purchase_id", nullable = false)
    private Purchase purchase;

    @Setter
    @Column(nullable = false)
    private int day;

    @Column(nullable = false)
    private boolean verified = false;

    private LocalDateTime verifiedAt;

    public Verification() {}

    public void verify() {
        this.verified = true;
        this.verifiedAt = LocalDateTime.now();
    }
}
