# Starter Prompts

Ready-to-use prompts for Aura.build and Cursor. Copy, customize, and generate.

---

## Aura.build Prompts

### Hero Section

**Basic hero:**
```
A hero section for [YOUR PRODUCT/SERVICE].
- Bold headline on the left side
- Subheadline explaining the core value (1-2 sentences)
- Primary CTA button (e.g., "Get Started", "Sign Up Free")
- Clean white background
- Modern sans-serif typography
```

**Hero with image:**
```
A hero section for [YOUR PRODUCT/SERVICE].
- Headline and subheadline on the left (60% width)
- Product screenshot or illustration on the right (40% width)
- Primary CTA button below the subheadline
- Secondary text link (e.g., "Learn more")
- Light gradient background (#f8f9fa to white)
```

**Hero with video/demo emphasis:**
```
A hero section for [YOUR PRODUCT/SERVICE].
- Centered layout
- Large headline (48-64px)
- Short subheadline
- Two buttons: primary CTA and "Watch Demo"
- Placeholder for embedded video below
- Minimal, focused design
```

### Features Section

**3-column feature grid:**
```
A features section with 3 feature cards in a row.
Each card has:
- Icon placeholder (simple geometric shape)
- Feature title (bold, 18-20px)
- Description (2 sentences, gray text)
Equal spacing between cards.
White background, subtle shadow on cards.
```

**Alternating feature rows:**
```
A features section with 3 feature blocks.
Each block alternates: image left/text right, then text left/image right.
Each block has:
- Feature image placeholder (60% width)
- Title and description (40% width)
- Clean alignment and generous padding
```

**Icon grid (6 features):**
```
A features section with 6 small feature items in a 3x2 grid.
Each item has:
- Small icon (24px)
- Short title
- One-line description
Compact layout, good for listing many benefits quickly.
```

### Social Proof / Testimonials

**Quote cards:**
```
A testimonials section with 3 customer quote cards.
Each card has:
- Quote text in italics
- Customer name (bold)
- Role and company (gray, smaller)
- Small avatar placeholder
Cards arranged in a row with equal spacing.
Light gray background for the section.
```

**Single featured testimonial:**
```
A testimonial section with one large quote.
- Large quote marks graphic
- Quote text (larger font, 24px)
- Customer name and company below
- Customer photo on the side
Centered layout, generous whitespace.
```

**Logo strip:**
```
A social proof section showing company logos.
- "Trusted by" or "Used by" heading
- Row of 5-6 grayscale logo placeholders
- Simple, understated design
- Light background
```

### CTA / Newsletter Section

**Newsletter signup:**
```
A newsletter signup section.
- Section heading: "Stay Updated" or similar
- Short description (1 sentence about what subscribers receive)
- Email input field
- Submit button
- Centered layout, generous padding
- Subtle background color to distinguish from other sections
```

**Final CTA block:**
```
A call-to-action section for the bottom of the page.
- Bold headline restating the value proposition
- Primary CTA button (large)
- Optional: secondary link
- Darker background to stand out
- White text
```

---

## Cursor Prompts

### HTML to React Conversion

**Basic conversion:**
```
Convert this HTML to a React functional component with TypeScript.
Use a default export.
Keep all Tailwind classes.
```

**With props:**
```
Convert this HTML to a React component with TypeScript.
Extract the headline, subheadline, and button text as props with sensible defaults.
```

**With cleanup:**
```
Convert this HTML to a React component.
- Remove any inline styles
- Clean up redundant wrapper divs
- Keep Tailwind classes
- Add TypeScript types
```

### Styling Fixes

**Responsive adjustments:**
```
Make this component responsive.
- On mobile (< 768px): stack elements vertically
- On tablet (768-1024px): 2 columns
- On desktop: current layout
Use Tailwind responsive prefixes.
```

**Spacing improvements:**
```
Improve the spacing in this component.
- Add more padding inside containers
- Increase margin between sections
- Use consistent spacing scale (multiples of 4)
```

**Color changes:**
```
Update the colors in this component:
- Primary color: [#hex]
- Text color: [#hex]
- Background: [#hex]
Keep hover states consistent.
```

**Typography:**
```
Improve the typography:
- Headline: 48px, bold, tight line-height
- Subheadline: 20px, normal weight, relaxed line-height
- Body: 16px, normal
Use Tailwind text utilities.
```

### Debugging

**Fix TypeScript error:**
```
Fix this TypeScript error: [paste error message]
```

**Fix layout issue:**
```
This component isn't centering properly. The content should be horizontally centered on the page with max-width of 1200px.
```

**Fix image/placeholder:**
```
Replace this image placeholder with a div that has:
- Aspect ratio 16:9
- Gray background
- Rounded corners
```

**Component not rendering:**
```
This component returns null / shows blank. Debug why it's not rendering and fix it.
```

### Enhancements

**Add hover effects:**
```
Add hover effects to the buttons and cards:
- Buttons: slightly darker background, subtle lift
- Cards: light shadow increase
Use Tailwind transition utilities for smooth animation.
```

**Add loading state:**
```
Add a loading state to this form:
- Disable submit button while loading
- Show "Loading..." text on button
- Disable input field
```

**Add animation:**
```
Add a subtle fade-in animation when this section enters the viewport.
Use Tailwind animation classes or add simple CSS keyframes.
```

---

## Quick Reference

### Aura Prompt Tips

1. Be specific about layout (left/right, centered, grid)
2. Mention exact font sizes if you care
3. Describe the background (white, gradient, dark)
4. Reference your inspiration ("similar to the Apple homepage hero")
5. Keep prompts under 100 words for best results

### Cursor Prompt Tips

1. Select the code before pressing Cmd+K
2. Be specific about what you want changed
3. One change at a time works better than many
4. If it doesn't work, rephrase and try again
5. "Fix this error: [paste error]" usually works well
