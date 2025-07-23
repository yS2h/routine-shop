package com.routineshop.backend.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Purchase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "routine_id", nullable = false)
    private Routine routine;

    private LocalDateTime purchasedAt = LocalDateTime.now();

    public Purchase() {}

    public Purchase(User user, Routine routine) {
        this.user = user;
        this.routine = routine;
        this.purchasedAt = LocalDateTime.now();
    }

    public Long getId() { return id; }

    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }

    public Routine getRoutine() { return routine; }
    public void setRoutine(Routine routine) { this.routine = routine; }

    public LocalDateTime getPurchasedAt() { return purchasedAt; }
    public void setPurchasedAt(LocalDateTime purchasedAt) { this.purchasedAt = purchasedAt; }
}