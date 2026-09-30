# LUMORA — Coffee. Crafted Beautifully.

> A luxury café web showcase designed and developed by **WebBloomBuilds**.

![Brand Style](https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=85)

---

## ☕ Brand Overview

- **Brand Name**: LUMORA
- **Tagline**: *Coffee. Crafted Beautifully.*
- **Established**: 2021
- **Location**: 24 Garden Avenue, Jubilee Hills, Hyderabad
- **Design Philosophy**: Minimalist warmth, architectural calm, wabi-sabi earthy tones, and precision micro-animations.

---

## 🎨 Design System & Palette

- **Warm Cream**: `#FBF8F3` (Background & light cards)
- **Deep Espresso**: `#130F0C` & `#1C1612` (Headings & dark contrast sections)
- **Artisan Gold**: `#C5A059` & `#D8B36E` (Accents, badges & CTAs)
- **Soft Sand**: `#EDE5D8` (Subtle borders & containers)
- **Muted Earth**: `#766355` & `#9B887A` (Editorial body text)

### Typography
- **Display Headings**: `Cormorant Garamond` & `Italiana` (Serif elegance)
- **Body & Interface**: `Plus Jakarta Sans` (Clean, contemporary legibility)

---

## 🎬 "The Morning Pour" — 8-Second Luxury Café Commercial Sequence

1. **0.0–1.0s (Initial Frame — Empty Cup)**:
   - Serene morning café scene with soft depth of field and table positioned near the window.
   - The ceramic coffee cup is **completely empty** (deep, clean ceramic cavity visible).
   - Natural morning sunlight begins warming the scene.
   - Camera performs an imperceptible push-in (`scale 1.035 → 1.0`).

2. **1.0–2.0s (Coffee Pot Arrives & Anticipation Pause)**:
   - Matte gooseneck kettle enters upright from the upper-right.
   - Approaches above the cup and **pauses briefly** in anticipation.

3. **2.0–4.0s (The Pour & Progressive Cup Filling)**:
   - Kettle tilts gracefully (`-38°`).
   - A continuous, smooth, realistic coffee stream pours directly into the cup.
   - **Progressive liquid filling**: 0% → 25% → 60% → 100% with subtle ripples. Zero splash on table or saucer.

4. **4.0–4.6s (Crema / Foam Moment)**:
   - Stream cuts off cleanly.
   - Kettle pauses briefly.
   - A delicate layer of velvety golden crema and microfoam spreads naturally across the liquid surface.

5. **4.6–5.4s (Pot Exit)**:
   - Kettle tilts back upright, pauses, and physically glides out of the frame in the direction from which it entered.
   - The poured coffee and cup remain permanently on the table.

6. **5.4–6.2s (Rising Steam & Settling Light)**:
   - 2–3 thin, elegant curved steam trails rise and disperse smoothly.
   - Morning sunlight ray warms and settles across the table.

7. **6.2–7.0s (Cinematic Brand Reveal — "LUMORA")**:
   - Soft atmospheric veil passes across the frame.
   - **LUMORA** reveals with large editorial serif typography (`translateY(22px) → 0`, `blur(10px) → 0`, `letter-spacing: 0.32em → 0.22em`).

8. **7.0–8.0s (Tagline & Website UI Reveal)**:
   - Tagline `"COFFEE. CRAFTED BEAUTIFULLY."` slides upward cleanly below the brand name.
   - Website content (eyebrow, description, CTAs, navigation bar, floating badge, and scroll indicator) reveal in staggered sequence.

9. **Interactive Controls & Parallax**:
   - **Desktop Mouse Parallax**: Background shifts 2–4px in opposite direction, table & cup move 3–6px, and sunlight shifts 1–3px.
   - **Scroll Fade**: Cup and table subtly descend and dim as the visitor scrolls into Our Story.
   - **Showcase Replay Button**: *"Replay Pour"* allows potential clients to re-watch the commercial at any time.
   - **Mobile Vertical Cinematic Flow (<= 900px, 430px, 390px, 375px)**:
     - **Top (45–55svh)**: Dedicated cinematic coffee pouring scene (empty cup → kettle arrives & pauses → pour & liquid fill → crema bloom → kettle exit → rising steam).
     - **Natural Flow Below Scene**:
       1. `[ LUMORA ]` (Editorial serif brand reveal)
       2. `[ COFFEE. CRAFTED BEAUTIFULLY. ]` (Brand tagline)
       3. `[ HERO EYEBROW ]` (*Artisan Coffee • Est. 2021*)
       4. `[ EXISTING HERO HEADING ]` (*Thoughtfully Sourced. Handcrafted Daily.*)
       5. `[ EXISTING DESCRIPTION ]`
       6. `[ CTA BUTTONS ]` (*Explore Our Menu* / *Visit Lumora*)
     - **Desktop Independence**: Desktop retain its wide 2-column layout untouched.
   - **Accessibility**: Honors `prefers-reduced-motion` with an instant final state.

2. **Our Story**:
   - Split layout with subtle image parallax and framed gold border
   - Interactive modal detailing direct-trade sourcing, roasting curves, and architecture

3. **Signature Menu**:
   - 4 premium signature cards:
     - `01` Signature Latte — ₹220
     - `02` Lumora Cold Brew — ₹240
     - `03` Pistachio Croissant — ₹190
     - `04` Dark Chocolate Cake — ₹260
   - Interactive full-menu modal with categories (Espresso, Viennoiserie, Teas)

4. **Statistics & Milestones**:
   - Animated number counter via `requestAnimationFrame` when entering viewport:
     - **4.9★** Average Rating
     - **25+** Signature Creations
     - **10K+** Happy Guests
     - **3** Years of Craft

5. **Atmosphere / Experience**:
   - Large architectural photography showcase
   - 3 floating cards with floating CSS keyframe animations: *Freshly Roasted*, *Locally Sourced*, *Handcrafted Daily*

6. **Visual Archive (Gallery)**:
   - 8-photo editorial masonry grid
   - Hover zoom with animated "View" circle
   - Sequential scroll reveal
   - Interactive Lightbox with next/previous keyboard and click controls
   - Responsive 2-column layout on mobile

7. **Guest Testimonials**:
   - Editorial cards featuring Aanya, Rohan, and Meera with star ratings and favourite items

8. **Visit Us & Location**:
   - Hours (Mon-Fri 8am-9pm, Sat-Sun 9am-10pm)
   - 24 Garden Avenue, Jubilee Hills, Hyderabad
   - Interactive Directions modal with copy address and Google Maps integration

9. **Interactive Table Reservation**:
   - Concierge booking modal with party size, atmosphere selection, time slots, guest details, and animated confirmation code receipt

10. **Café Ambience Generator**:
    - Built-in Web Audio API sound generator creating gentle ambient coffeehouse warmth without external media dependencies

---

## 🚀 Running the Project

```bash
# Install dependencies
npm install

# Start Vite development server
npm run dev

# Build for production
npm run build
```
