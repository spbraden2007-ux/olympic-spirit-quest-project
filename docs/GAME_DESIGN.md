# 🎮 Game Design Document

## Overview

**Olympic Spirit Quest** is an educational 3D metaverse experience created for the 2024 Gangwon Winter Youth Olympic Games Alibaba Cloud Hackathon. The game combines exploration, puzzle-solving, and cultural education to engage players with Korean heritage and Olympic values.

---

## Design Goals

1. **Educational**: Teach players about Korean cities and landmarks
2. **Engaging**: Create a quest-based gameplay loop that motivates exploration
3. **Accessible**: Browser-based with no installation, bilingual support
4. **Thematic**: Strong connection to Olympic values and 2024 Gangwon event

---

## Game Mechanics

### Core Loop

```
Explore → Discover → Collect → Progress → Complete
```

1. **Explore**: Navigate 3D environments representing Korean cities
2. **Discover**: Find hidden Olympic ring fragments
3. **Collect**: Click to collect rings (visual + audio feedback)
4. **Progress**: Track collection (0/5 → 5/5) with UI updates
5. **Complete**: Victory sequence with assembled rings

### State Management

The game uses a simple but effective state machine:

```javascript
// Location State
var x = 0;
// 0 = Gangwon Hub
// 1 = Seoul
// 2 = Busan
// 3 = Jeju
// 4 = Jeonju

// Collection State
var ali = 0;  // Total rings collected (0-5)
var green = 1, yellow = 1, red = 1, black = 1, blue = 1;  // Individual ring status
```

### UI System

The game implements a layered UI system:

| Layer | Elements | Purpose |
|-------|----------|---------|
| HUD | Score, Help button, Map | Always visible during gameplay |
| Overlay | City cards, Hints | Context-sensitive information |
| Modal | Goals, Reset confirmation | Full-screen interactions |
| Welcome | City-specific greetings | Transition feedback |

---

## World Design

### Hub (Gangwon Oval)

- **Function**: Central navigation point
- **Elements**: 
  - Korea map (interactive city selection)
  - Portal (transport to selected city)
  - Olympic rings (show collection progress)
  - Sponsor banners (Alibaba Cloud, Youth Olympics)

### City Environments

Each city has unique characteristics:

| City | Visual Theme | Ring Location | Hint |
|------|--------------|---------------|------|
| Seoul | Urban + Traditional | Near Gyeongbokgung | Historical landmark |
| Busan | Industrial + Maritime | Port area | Container district |
| Jeju | Natural + Volcanic | Dol Hareubang area | Stone statues |
| Jeonju | Traditional Korean | Hanok Village | Traditional architecture |

---

## Technical Architecture

### Event System

```
User Input → Event Handler → State Update → Visual Feedback
```

**Example: Ring Collection**
```javascript
aliGreen.onClick(() => {
    // 1. Update state
    ali = ali + 1;
    green = green - 1;
    
    // 2. Visual feedback
    aliGreen.kill();    // Hide collectible
    greenR.revive();    // Show in hub
    
    // 3. UI update
    score.setText('모은 링의 개수 - Rings: ' + ali + '/5');
    
    // 4. Check win condition
    checkAliAndKillTop();
});
```

### Portal System

The portal system uses collision detection for seamless travel:

```javascript
avatar.onCollide(portal1, () => {
    // Check destination based on selected city
    if (x === 1) {
        avatar.go(1211.14, -263.43, 602.51);  // Seoul coordinates
        // Update UI for Seoul
    }
    // ... other cities
});

avatar.onCollide(seoulP, () => {
    avatar.spawn();  // Return to hub
    // Reset UI state
});
```

---

## User Experience Flow

```
┌──────────────────────────────────────────────────────────────────┐
│                        GAME START                                 │
└─────────────────────────────┬────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                    INTRO SCREEN (4 sec)                          │
│              "Welcome to Olympic Spirit Quest"                    │
└─────────────────────────────┬────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                      MAIN HUB (Gangwon)                          │
│    ┌─────────────────────────────────────────────────────┐       │
│    │ Player Actions:                                      │       │
│    │ • View Korea map                                     │       │
│    │ • Select city destination                            │       │
│    │ • Check ring progress                                │       │
│    │ • Access help/tutorial                               │       │
│    └─────────────────────────────────────────────────────┘       │
└─────────────────────────────┬────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                    CITY EXPLORATION                               │
│    ┌─────────────────────────────────────────────────────┐       │
│    │ Per City:                                            │       │
│    │ • Welcome message (2.5 sec)                          │       │
│    │ • Free exploration                                   │       │
│    │ • Find hidden ring                                   │       │
│    │ • View hint (optional)                               │       │
│    │ • Return via portal                                  │       │
│    └─────────────────────────────────────────────────────┘       │
└─────────────────────────────┬────────────────────────────────────┘
                              │
                              │ (Repeat for all 5 rings)
                              ▼
┌──────────────────────────────────────────────────────────────────┐
│                    VICTORY SEQUENCE                               │
│    • Teleport to hub                                              │
│    • Olympic theme music plays                                    │
│    • Assembled rings displayed                                    │
│    • "Thank You For Playing" screen (5 sec delay)                │
└──────────────────────────────────────────────────────────────────┘
```

---

## Future Enhancements

If continued development:

1. **Multiplayer**: Collaborative ring hunting
2. **Leaderboard**: Speedrun times
3. **Additional Cities**: Expand to more Korean destinations
4. **Mini-games**: Cultural challenges in each city
5. **Mobile Optimization**: Touch controls for mobile browsers

---

## Lessons Learned

1. **Scope Management**: 3-day hackathon required focused feature set
2. **State Clarity**: Simple state variables (x, ali) made debugging easier
3. **User Feedback**: Immediate visual/audio response for all actions
4. **Cultural Accuracy**: Research was essential for authentic representation
