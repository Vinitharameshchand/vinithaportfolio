# Warm Aesthetic Background Usage Guide

## Overview
This collection provides 7 beautiful warm-toned background options inspired by the warm colors in your portrait image. Each background uses a palette of reds, oranges, browns, corals, and earth tones to create inviting, friendly atmospheres perfect for personal portfolios.

## Color Palette Inspiration
Based on the warm tones in your image:
- **Warm Reds**: `#d63031`, `#cd5c5c`, `#ff6b6b`
- **Rich Oranges**: `#e17055`, `#ff9a56`, `#fab1a0`
- **Earth Tones**: `#8b4513`, `#b7472a`
- **Soft Accents**: `#ffeaa7`, `#ffb3a7`, `#faf7f2`

## 🎨 **7 Warm Background Options:**

### 1. **Sunset Glow** - Welcoming & Friendly
Perfect for personal portfolios, coaching, or lifestyle brands
```jsx
<div className="bg-sunset-glow">
  <div className="warm-text-overlay">
    {/* Your content */}
  </div>
</div>
```

### 2. **Autumn Leaves** - Creative & Artistic
Ideal for creative professionals, artists, or seasonal content
```jsx
<div className="bg-autumn-leaves">
  <div className="warm-text-overlay">
    {/* Your content */}
  </div>
</div>
```

### 3. **Terracotta Dreams** - Earthy & Grounded
Great for artisans, pottery, handcrafted goods, or sustainable brands
```jsx
<div className="bg-terracotta-dreams">
  <div className="warm-floating-circle coral large top-right"></div>
  <div className="warm-text-light">
    {/* Your content */}
  </div>
</div>
```

### 4. **Coral Breeze** - Soft & Inviting
Perfect for wellness, lifestyle, or feminine-focused brands
```jsx
<div className="bg-coral-breeze">
  <div className="warm-floating-circle coral small top-center"></div>
  <div className="warm-text-light">
    {/* Your content */}
  </div>
</div>
```

### 5. **Warm Minimalist** - Professional & Clean
Ideal for business portfolios that want warmth without overwhelming
```jsx
<div className="bg-warm-minimal">
  <div style="color: var(--warm-dark);">
    {/* Your content */}
  </div>
</div>
```

### 6. **Rustic Charm** - Cozy & Handcrafted
Perfect for vintage brands, craftspeople, or traditional businesses
```jsx
<div className="bg-rustic-charm">
  <div className="warm-text-overlay">
    {/* Your content */}
  </div>
</div>
```

### 7. **Golden Hour** - Dreamy & Elegant
Great for photographers, artists, or luxury brands
```jsx
<div className="bg-golden-hour">
  <div className="warm-floating-circle gold medium top-right"></div>
  <div style="color: var(--warm-dark);">
    {/* Your content */}
  </div>
</div>
```

## 🚀 **Quick Integration:**

### Method 1: Import and Apply
```jsx
// In your App.jsx
import './warm-aesthetic-backgrounds.css';

function App() {
  return (
    <div className="bg-sunset-glow">
      {/* Your existing content */}
    </div>
  );
}
```

### Method 2: Replace Existing Background
In your `App.module.css`:
```css
.App {
  /* Comment out existing background */
  /* background: var(--bg-animated); */
  
  /* Add warm background class */
  width: 100%;
  min-height: 100vh;
  position: relative;
}
```

Then in App.jsx:
```jsx
<div className={`${styles.App} bg-terracotta-dreams`}>
```

### Method 3: Dynamic Background Switcher
```jsx
import { useState } from 'react';
import './warm-aesthetic-backgrounds.css';

function App() {
  const [bg, setBg] = useState('bg-sunset-glow');
  
  const warmBackgrounds = [
    { class: 'bg-sunset-glow', name: 'Sunset Glow' },
    { class: 'bg-autumn-leaves', name: 'Autumn Leaves' },
    { class: 'bg-terracotta-dreams', name: 'Terracotta Dreams' },
    { class: 'bg-coral-breeze', name: 'Coral Breeze' },
    { class: 'bg-warm-minimal', name: 'Warm Minimal' },
    { class: 'bg-rustic-charm', name: 'Rustic Charm' },
    { class: 'bg-golden-hour', name: 'Golden Hour' }
  ];

  return (
    <div className={bg}>
      <div className="background-selector">
        {warmBackgrounds.map(({class: bgClass, name}) => (
          <button key={bgClass} onClick={() => setBg(bgClass)}>
            {name}
          </button>
        ))}
      </div>
      {/* Your content */}
    </div>
  );
}
```

## 🎯 **Text Overlay Classes:**

For optimal readability, use these text overlay classes:

### Dark Text on Light Background:
```jsx
<div className="warm-text-light">
  <h1>Your Heading</h1>
  <p>Your content with dark text on semi-transparent light background</p>
</div>
```

### Light Text on Dark Background:
```jsx
<div className="warm-text-overlay">
  <h1>Your Heading</h1>
  <p>Your content with light text on semi-transparent dark background</p>
</div>
```

## ✨ **Floating Elements:**

Add visual interest with floating circles in warm tones:

```jsx
{/* Coral floating elements */}
<div className="warm-floating-circle coral large top-right"></div>
<div className="warm-floating-circle coral medium bottom-left"></div>

{/* Peach floating elements */}
<div className="warm-floating-circle peach medium center-left"></div>
<div className="warm-floating-circle peach small top-center"></div>

{/* Gold floating elements */}
<div className="warm-floating-circle gold large bottom-left"></div>
<div className="warm-floating-circle gold small top-right"></div>
```

**Available combinations:**
- Colors: `coral`, `peach`, `gold`
- Sizes: `small`, `medium`, `large`
- Positions: `top-right`, `bottom-left`, `center-left`, `top-center`

## 🎨 **Customization:**

Adjust the warm color palette by modifying CSS variables:

```css
:root {
  /* Primary warm colors */
  --warm-red: #d63031;          /* Adjust main red tone */
  --warm-orange: #e17055;       /* Adjust main orange tone */
  --warm-coral: #ff6b6b;        /* Adjust coral accent */
  
  /* Background opacity */
  --warm-overlay-opacity: 0.7;  /* Adjust text overlay transparency */
  
  /* Animation speed */
  --warm-animation-speed: 18s;   /* Adjust background animation timing */
}
```

## 📱 **Mobile Responsiveness:**

All warm backgrounds are fully responsive and include:
- Optimized floating element sizes for mobile
- Adjusted typography scaling
- Touch-friendly navigation
- Reduced animation complexity on smaller screens

## 🎭 **Recommended Use Cases:**

1. **Personal Portfolios**: Sunset Glow, Golden Hour
2. **Creative Professionals**: Autumn Leaves, Terracotta Dreams
3. **Wellness/Lifestyle**: Coral Breeze, Warm Minimal
4. **Artisans/Craftspeople**: Rustic Charm, Terracotta Dreams
5. **Photography**: Golden Hour, Autumn Leaves
6. **Business/Professional**: Warm Minimal, Coral Breeze

## 🔍 **Demo:**

<function_calls>
<invoke name="run_command">
<parameter name="command">open /Users/vinitha/myportfolio/src/warm-background-demo.html
