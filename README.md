# 🛒 루틴 # (Routine#)

> 당신의 성공 루틴을 공유하고, 판매하고, 보상받는 플랫폼

성공한 사람들의 루틴은 곧 자산이 됩니다.  
**루틴 # (SHOP)** 은 사용자가 자신의 루틴을 등록하고 판매할 수 있으며,  
구매자는 루틴을 실천하고 인증을 통해 리워드를 획득하는 루틴 거래 플랫폼입니다.

---

## 📅 프로젝트 기간

- 2025.06.24 ~ 2025.07.28
- SW PILOT 3rd ‘SAEKKI’ TEAM

---

## 👥 팀 구성

| 이름 | 역할 |
|------|------|
| 윤수현 | 팀장 |
| 강수현 | 팀원 |
| 김시원 | 팀원 |

---

## 🛠 기술 스택

### 🔹 Backend
- Spring Boot
- JPA
- RESTful API 설계

### 🔹 Frontend
- React
- Vite
- TypeScript
- Tailwind CSS

### 🔹 Database
- MySQL

<img width="1026" height="277" alt="image" src="https://github.com/user-attachments/assets/5f598d25-0ddf-4bb8-a4b3-b942890b55ca" />
---

## 🏗 아키텍처

- 도메인 중심의 계층형 구조
- Controller / Service / Repository 패턴
- RESTful API 설계
- 브랜치 단위 기능 개발 후 통합
- Tailwind 기반 반응형 UI 구성

---

## ✨ 주요 기능


### 1️⃣ 루틴 등록 및 판매
- 사용자가 자신의 성공 루틴을 등록
- 온라인 마켓 형태로 판매 가능
- 판매 수익은 포인트로 적립
- 월 단위 정산 가능

### 2️⃣ 루틴 구매
- 다른 사용자의 루틴 구매 가능
- 구매 완료 후 인증 카드 자동 생성

### 3️⃣ 일일 인증 시스템
- 루틴 수행 후 인증 기능 제공
- 인증 시 리워드 지급
- 획득한 리워드로 다른 루틴 재구매 가능

### 시연 영상
![미디어1](https://github.com/user-attachments/assets/b98b2f41-1beb-4cd6-87a3-511ab630a768)

---

## 🐞 트러블슈팅

### 🔸 구매 후 인증 카드 생성 문제
- routinePurchase 저장 이후 후속 로직이 누락됨
- 트랜잭션 흐름을 재정비하여 인증 카드 생성 로직 추가

### 🔸 루틴 등록 시 사용자 정보 null 문제
- Routine 생성 시 creator 필드가 null로 저장되는 문제 발생
- 엔티티 매핑 수정 및 null 검증 로직 추가하여 해결

---

## 🚀 향후 개선 사항

- 루틴 추천 알고리즘 도입
- 포인트 사용 내역 시각화
- 관리자 페이지 추가
- 성능 최적화 및 캐싱 적용

---
