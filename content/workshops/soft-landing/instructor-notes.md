# Instructor Notes: soft_landing

Teaching guide for facilitators running the 2-hour workshop.

---

## Before Class

### Room Setup

- Ensure strong WiFi (test download speeds)
- Have power strips available for every table
- Test projector/screen visibility from all seats
- Prepare backup hotspot in case WiFi fails

### Pre-Check (Day Before)

Send reminder email with:
- Pre-workshop checklist (Homebrew, accounts, software)
- Troubleshooting links if they had issues
- What to bring: laptop, charger, inspiration screenshots
- Note: Homebrew + Node.js installation can take 10-15 minutes

### Your Demo Environment

- Have a fresh repo ready to demo with
- Pre-create Vercel + Resend accounts you can use live
- Test the full flow once yourself that morning
- Have backup code snippets in a separate browser tab

---

## Part 1: Setup (15 min)

### 1.1 Create Repository & Connect Vercel (8 min)

**Demo first, then assist:**

1. Screen share and walk through creating a repo
2. Show the Vercel import flow
3. Pause for participants to catch up

**Common stumbling points:**

- GitHub 2FA prompts (have them complete auth on phone)
- Vercel authorization popup blocked (check browser settings)
- Wrong GitHub account linked to Vercel (sign out, sign back in)

**Timing cue:** At 5 minutes, ask "Has everyone deployed to Vercel?"

### 1.2 Install Next.js (7 min)

**Demo the clone + install:**

Walk through each terminal command. Explain briefly what each does:
- `git clone` — downloads the code
- `npx create-next-app` — scaffolds a new project
- `git push` — sends code to GitHub (which triggers Vercel)

**Common stumbling points:**

- Node.js not installed:
  - Mac: run Homebrew install commands from guide (5-10 min)
  - Windows: download from nodejs.org or use winget
- Windows: PowerShell needs to be run as Administrator for global npm installs
- Wrong directory (they ran commands outside the project folder)
- Git credentials not set up (GitHub Desktop can help)

**Backup plan:** If someone is stuck, have them pair with a neighbor and catch up during the next section.

**Timing cue:** At 12 minutes, say "Let's move to building. If you're not fully set up, follow along and we'll help during design time."

---

## Part 2: Build (85 min)

### 2.1 Landing Page Anatomy (5 min)

**Quick lecture:**

Show 2-3 example landing pages. Point out:
- Hero placement and hierarchy
- How features are structured
- Where social proof appears
- CTA positioning

Ask: "Which sections did you screenshot for inspiration?"

**No demo needed.** This is context-setting before hands-on work.

### 2.2 Design with Aura.build (25 min)

**Demo workflow:**

1. Open Aura
2. Upload an inspiration screenshot
3. Write a detailed prompt (read it aloud)
4. Generate, show iterations
5. Export HTML

**Then release participants to work:**

"You have 20 minutes to generate your Hero, Features, and Social Proof sections. Raise your hand if you need help with prompts."

**Roam and assist:**

- Help with prompt writing (too vague prompts = poor results)
- Show how to iterate ("not quite right? describe what's missing")
- Encourage using templates for ideas

**Common stumbling points:**

- Generic prompts ("make a hero section") yield generic results
- Forgetting to export (remind them to save each section)
- Spending too long perfecting one section

**Timing cues:**
- At 15 min: "You should have at least your Hero done. Start on Features."
- At 22 min: "2 minutes left. Export what you have."

### 2.3 Code Integration with Cursor (30 min)

**Demo the conversion:**

1. Create `Hero.tsx` file
2. Paste Aura HTML
3. Use `Cmd+K` to convert to React
4. Show the before/after

**Key teaching moments:**

- Explain what React components are (reusable building blocks)
- Show how Tailwind classes map to styles
- Demonstrate Cursor's inline edit feature

**Release participants:**

"Convert your sections to React components. I'll come around to help with any errors."

**Common stumbling points:**

- TypeScript errors (usually missing types — Cursor can fix these)
- Import path issues (`@/components/` should work if setup correct)
- CSS conflicts (reset or clean up Aura's extra styles)

**Debugging approach:**

When someone has an error:
1. Read the error message aloud
2. Select the error in Cursor
3. Ask Cursor to fix it
4. Explain what the fix did

**Timing cues:**
- At 15 min: "Your main page should now render at least the Hero."
- At 25 min: "Start combining all sections on your page.tsx."

### 2.4 Newsletter Signup with Resend (25 min)

**Demo the full flow:**

1. Show Resend dashboard, create API key
2. Create `.env.local` file
3. Walk through the API route code
4. Walk through the form component
5. Test submission

**Provide code snippets:**

This section has the most code. Have participants copy from the workshop guide rather than type everything.

"Open the workshop guide, scroll to section 2.4. Copy the API route code first."

**Common stumbling points:**

- Environment variable typos (check for extra spaces)
- Forgot to create Audience in Resend
- `.env.local` not in root directory
- Server not restarted after adding env vars

**Testing checkpoint:**

"Submit your email to your form. Check Resend dashboard. Did it appear in your Audience?"

**Timing cue:** At 20 min, say "We need to deploy in 5 minutes. Make sure your form at least renders."

---

## Part 3: Ship (10 min)

### 3.1 Final Deploy (3 min)

**Quick demo:**

1. Show adding env vars to Vercel
2. Run git add, commit, push
3. Watch deployment start

"Everyone push your code now. Watch your Vercel dashboard."

### 3.2 What's Next (7 min)

**Wrap-up talking points:**

- Congratulate them: they built and deployed a real website
- Custom domains are easy to add
- They can keep iterating on their own
- Pitch the full buildshop workshop

**Call to action:**

"If you want to go deeper—databases, authentication, payments—join our full 48-hour workshop."

Have a signup link or QR code ready.

---

## Timing Summary

| Section | Duration | End Time |
|---------|----------|----------|
| 1.1 Repo + Vercel | 8 min | 0:08 |
| 1.2 Next.js | 7 min | 0:15 |
| 2.1 Anatomy | 5 min | 0:20 |
| 2.2 Aura design | 25 min | 0:45 |
| 2.3 Cursor code | 30 min | 1:15 |
| 2.4 Newsletter | 25 min | 1:40 |
| 3.1 Deploy | 3 min | 1:43 |
| 3.2 Next steps | 7 min | 1:50 |
| Buffer/Q&A | 10 min | 2:00 |

---

## Backup Plans

### WiFi Down

- Have everyone tether to phone hotspots
- Continue with demo-only mode if needed
- Focus on concepts; they can complete at home

### Vercel/GitHub Down

- Use Netlify as backup deployment platform
- Or skip deployment, show locally running sites

### Someone Completely Lost

- Pair them with a neighbor
- Provide a completed starter repo they can clone
- Focus on the design phase (Aura) where they can still participate

### Running Behind

- Cut anatomy section to 2 minutes
- Reduce Aura time (have them do 1 section instead of 3)
- Provide pre-written newsletter code without explanation

---

## Post-Workshop

- Send thank-you email with:
  - Link to workshop guide
  - Troubleshooting resources
  - Next workshop signup
- Collect feedback (short survey)
- Add attendees to mailing list (if they consented)
