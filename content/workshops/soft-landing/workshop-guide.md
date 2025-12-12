# soft_landing: Build a Landing Page in 2 Hours

A step-by-step guide for building and deploying your first landing page using AI-assisted development.

---

## Before the Workshop

Complete these steps at least 48 hours before class. Each takes 5-10 minutes.

### 1. Install Node.js and pnpm

**Mac:**

Install Homebrew first (makes developer tools easy to manage). Open Terminal and run:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Follow the prompts. Then install Node.js and pnpm:

```bash
brew install node
brew install pnpm
```

**Windows:**

Option A — Direct download (simplest):
1. Go to [nodejs.org](https://nodejs.org)
2. Download the LTS version
3. Run the installer, accept defaults
4. Open PowerShell and install pnpm:

```powershell
npm install -g pnpm
```

Option B — Using winget (Windows 10/11):

Open PowerShell and run:

```powershell
winget install OpenJS.NodeJS.LTS
npm install -g pnpm
```

**Verify installation (both platforms):**

```bash
node --version
pnpm --version
```

Both commands should return version numbers.

### 2. Gather Inspiration

Find 2-3 landing pages you admire. Screenshot specific sections:
- A hero section (the top fold)
- A features or benefits section
- A testimonials or social proof section

Save these screenshots to a folder on your desktop. You'll upload them during the workshop.

Good places to find inspiration:
- [Landingfolio](https://landingfolio.com)
- [Lapa.ninja](https://lapa.ninja)
- [Awwwards](https://awwwards.com)

### 3. Create a GitHub Account

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Follow the prompts to create your account
4. Verify your email address

### 4. Install Cursor

1. Go to [cursor.com](https://cursor.com)
2. Download the installer for your operating system
3. Run the installer
4. Open Cursor once to complete setup

### 5. Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Start Deploying"
3. Choose "Continue with GitHub"
4. Authorize Vercel to access your GitHub account

### 6. Create an Aura Account

1. Go to [aura.build](https://aura.build)
2. Sign up for a free account
3. Explore the interface briefly to familiarize yourself

---

## Part 1: Setup (15 min)

### 1.1 Create Repository & Connect Vercel

**Create your repository:**

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `my-landing-page` (or something descriptive)
3. Select "Public"
4. Check "Add a README file"
5. Click "Create repository"

**Connect to Vercel:**

1. Go to [vercel.com/new](https://vercel.com/new)
2. Click "Import Git Repository"
3. Select your `my-landing-page` repository
4. Click "Import"
5. Click "Deploy" (leave all settings as default)

Wait for deployment to complete. You now have a live URL. Every time you push code to GitHub, Vercel will automatically update your site.

### 1.2 Install Next.js

**Clone your repository:**

1. Open Cursor
2. Press `Cmd/Ctrl + Shift + P`
3. Type "Git: Clone"
4. Paste your repository URL: `https://github.com/YOUR-USERNAME/my-landing-page`
5. Choose a folder to save it

**Install Next.js:**

1. Open the terminal in Cursor (`Cmd/Ctrl + ~`)
2. Run:

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
```

3. When prompted about overwriting files, select "Yes"

**First deploy:**

```bash
git add .
git commit -m "Initial Next.js setup"
git push
```

Open your Vercel dashboard. Watch the deployment happen automatically. Visit your URL to see "Hello World" live on the internet.

---

## Part 2: Build (85 min)

### 2.1 Landing Page Anatomy (5 min)

A landing page typically has these sections:

1. **Hero** — First thing visitors see. Headline, subheadline, call-to-action
2. **Features/Benefits** — What you offer, why it matters
3. **Social Proof** — Testimonials, logos, stats
4. **CTA** — Final call-to-action (newsletter signup, contact form)

Look at your inspiration screenshots. Identify which section each represents. You'll recreate these using AI.

### 2.2 Design with Aura.build (25 min)

**Generate your Hero section:**

1. Go to [aura.build](https://aura.build)
2. Click "New Project" or "Create"
3. Upload your hero inspiration screenshot
4. In the prompt builder, describe what you want:

```
A hero section for [YOUR PRODUCT/SERVICE].
Clean, modern design with:
- Bold headline on the left
- Subheadline explaining the value proposition
- Primary CTA button
- Optional: hero image on the right
Background: white or light gradient
Typography: modern sans-serif
```

5. Generate and iterate until you're satisfied
6. Click "Export" → "HTML/Tailwind"
7. Copy the code

**Generate your Features section:**

1. Upload your features inspiration screenshot
2. Describe what you want:

```
A features section with 3-4 feature cards.
Each card has:
- Icon or small image
- Feature title
- Short description (1-2 sentences)
Grid layout, clean spacing.
Matches the style of my hero section.
```

3. Generate, iterate, export

**Generate Social Proof / About section:**

1. Upload your testimonials/about inspiration
2. Describe:

```
A testimonials section with 2-3 customer quotes.
Each testimonial has:
- Quote text
- Person's name
- Role/company (optional)
Clean, trustworthy appearance.
```

3. Generate, iterate, export

Save each exported code snippet in separate text files or tabs. You'll combine them next.

### 2.3 Code Integration with Cursor (30 min)

**Create component files:**

In Cursor, create these files in `src/components/`:

- `Hero.tsx`
- `Features.tsx`
- `Testimonials.tsx`

**Convert Aura HTML to React:**

1. Open `src/components/Hero.tsx`
2. Paste your Aura-generated HTML
3. Select all the code
4. Press `Cmd/Ctrl + K` (Cursor AI)
5. Type: "Convert this HTML to a React functional component with TypeScript"
6. Accept the changes

Repeat for Features and Testimonials.

**Combine on your main page:**

Open `src/app/page.tsx` and replace the contents:

```tsx
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
    </main>
  )
}
```

**Preview locally:**

```bash
npm run dev
```

Open [localhost:3000](http://localhost:3000) to see your page.

**Iterate with Cursor:**

Not happy with something? Select the code and use Cursor AI:

- "Make the headline larger and bolder"
- "Add more spacing between sections"
- "Change the button color to blue"
- "Make this responsive for mobile"

Keep iterating until the design feels right.

### 2.4 Newsletter Signup with Resend (25 min)

**Create a Resend account:**

1. Go to [resend.com](https://resend.com)
2. Sign up with your email
3. Go to "API Keys"
4. Click "Create API Key"
5. Copy the key (you'll only see it once)

**Add environment variables:**

Create a file called `.env.local` in your project root:

```
RESEND_API_KEY=re_your_api_key_here
```

**Install packages:**

```bash
npm install resend
```

**Create the API route:**

Create file `src/app/api/subscribe/route.ts`:

```typescript
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { email } = await request.json()

  const { error } = await resend.contacts.create({
    email,
    audienceId: process.env.RESEND_AUDIENCE_ID || '',
  })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 })
  }

  return NextResponse.json({ success: true })
}
```

Note: You'll need to create an Audience in Resend and add the `RESEND_AUDIENCE_ID` to your `.env.local`.

**Create the newsletter form component:**

Create file `src/components/NewsletterForm.tsx`:

```tsx
'use client'

import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    if (response.ok) {
      setStatus('success')
      setEmail('')
    } else {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'success' && (
        <p className="text-green-600">Thanks for subscribing.</p>
      )}
      {status === 'error' && (
        <p className="text-red-600">Something went wrong. Try again.</p>
      )}
    </form>
  )
}
```

**Add to your page:**

Update `src/app/page.tsx`:

```tsx
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import NewsletterForm from '@/components/NewsletterForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Testimonials />
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Stay Updated</h2>
        <NewsletterForm />
      </section>
    </main>
  )
}
```

**Test locally:**

1. Run `npm run dev`
2. Go to your newsletter section
3. Enter your email
4. Submit
5. Check Resend dashboard to confirm the contact was added

---

## Part 3: Ship (10 min)

### 3.1 Final Deploy

Add your environment variables to Vercel:

1. Go to your project in [vercel.com](https://vercel.com)
2. Click "Settings" → "Environment Variables"
3. Add `RESEND_API_KEY` with your key
4. Add `RESEND_AUDIENCE_ID` with your audience ID

Deploy your changes:

```bash
git add .
git commit -m "Add landing page sections and newsletter form"
git push
```

Watch the deployment in your Vercel dashboard. Once complete, visit your live URL.

### 3.2 What's Next

**Custom domain (optional):**

In Vercel, go to Settings → Domains. You can add a custom domain or use the free `.vercel.app` subdomain.

**Keep iterating:**

- Try different color schemes
- Add animations
- Improve mobile responsiveness
- A/B test different headlines

**Continue learning:**

Consider joining a buildshop full workshop to go deeper:
- Build full applications with databases
- Add authentication
- Process payments
- Launch a complete product

---

## Troubleshooting

**Node.js / pnpm issues:**

Mac:
- If `brew` command not found, restart Terminal after Homebrew install
- Run `brew doctor` to check for issues

Windows:
- Run PowerShell as Administrator for global installs (`npm install -g pnpm`)
- If `node` command not found, restart PowerShell after installation
- Check that Node.js was added to PATH during installation

**Build errors:**

If `npm run dev` fails, check:
- Are you in the correct directory?
- Did `npm install` complete successfully?
- Are there TypeScript errors? (Check the terminal output)

**Vercel deploy fails:**

- Check the build logs in Vercel dashboard
- Make sure all environment variables are set
- Verify your code works locally first

**Resend not working:**

- Confirm your API key is correct
- Check you created an Audience and have the right ID
- Look at Resend dashboard for error logs

**Cursor AI not responding:**

- Make sure you're signed in to Cursor
- Try selecting smaller code blocks
- Rephrase your prompt to be more specific

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Resend Documentation](https://resend.com/docs)
- [Aura.build](https://aura.build)
- [Vercel Documentation](https://vercel.com/docs)
