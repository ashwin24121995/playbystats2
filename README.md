# StrikePlay

**India's Free Cricket Entertainment Platform** — a fully independent, production-ready web application for cricket enthusiasts. Build teams, join contests, climb leaderboards, and enjoy the game. 100% free, for entertainment purposes only.

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Features](#features)
5. [Pages](#pages)
6. [Data Storage](#data-storage)
7. [Authentication](#authentication)
8. [API Routes](#api-routes)
9. [Environment Variables](#environment-variables)
10. [Local Development](#local-development)
11. [Vercel Deployment](#vercel-deployment)
12. [Other Deployment Options](#other-deployment-options)
13. [Google Ads Compliance](#google-ads-compliance)
14. [License](#license)

---

## Overview

StrikePlay is a cricket entertainment platform where users can:

- Browse upcoming, live, and completed cricket matches
- Build teams of 11 players within a 100-credit budget
- Select Captain (2x points) and Vice-Captain (1.5x points)
- Join free contests and compete on leaderboards
- Track performance through a personal dashboard

The platform uses **no external APIs or databases** — all data is stored in local JSON files and the frontend uses static sample data for matches, players, and contests.

---

## Tech Stack

| Layer       | Technology                                                   |
|-------------|--------------------------------------------------------------|
| Frontend    | React 19, TypeScript, Tailwind CSS 4, Framer Motion         |
| UI Library  | shadcn/ui (Radix UI primitives)                              |
| Routing     | Wouter (lightweight React router)                            |
| Backend     | Express 4, tRPC 11                                           |
| Auth        | Custom JWT (jose) + bcryptjs password hashing                |
| Storage     | JSON file-based storage (no database required)               |
| Build       | Vite 7, esbuild                                              |
| Testing     | Vitest                                                       |
| Fonts       | Google Fonts (Inter + Poppins)                               |

---

## Project Structure

```
play-by-stats/
├── api/                       # Vercel serverless function entry
│   └── index.ts               # Express app exported for Vercel
├── client/                    # Frontend (React + Vite)
│   ├── public/                # Static assets
│   ├── src/
│   │   ├── _core/             # Auth hooks
│   │   ├── components/        # Reusable UI components
│   │   │   ├── layout/        # Navbar, Footer, PageLayout
│   │   │   └── ui/            # shadcn/ui components
│   │   ├── contexts/          # React contexts (Theme)
│   │   ├── data/              # Static data (matches, players, etc.)
│   │   ├── hooks/             # Custom hooks
│   │   ├── lib/               # tRPC client
│   │   ├── pages/             # All page components (20 pages)
│   │   ├── App.tsx            # Routes & layout
│   │   ├── main.tsx           # App entry point
│   │   └── index.css          # Global styles & theme
│   └── index.html             # HTML template with meta tags
├── server/
│   ├── _core/                 # Server framework (Express, tRPC, Vite)
│   │   ├── index.ts           # Server entry point (local dev)
│   │   ├── context.ts         # tRPC context with JWT auth
│   │   ├── trpc.ts            # tRPC procedures
│   │   ├── cookies.ts         # Cookie configuration
│   │   └── vite.ts            # Vite dev server integration
│   ├── data/                  # JSON data files (auto-created)
│   ├── fileStore.ts           # File-based CRUD operations
│   ├── routers.ts             # All tRPC API routes
│   ├── app.test.ts            # API tests
│   └── auth.logout.test.ts    # Auth logout test
├── shared/                    # Shared types & constants
├── vercel.json                # Vercel deployment configuration
├── package.json
├── vite.config.ts
├── tsconfig.json
└── vitest.config.ts
```

---

## Features

### Core Features
- **Team Builder** — Select 11 players from match squads within 100-credit budget, pick Captain/Vice-Captain
- **Match Browser** — View upcoming, live, and completed matches with filters
- **Contest System** — Browse and join free contests
- **Leaderboard** — Global rankings with podium display
- **Dashboard** — Personal stats, recent teams, quick actions
- **Scoring System** — Detailed scoring rules for batting, bowling, fielding with multipliers

### Legal & Compliance (Google Ads Ready)
- **Terms & Conditions** — Full legal terms, entertainment-only disclaimers
- **Privacy Policy** — GDPR-compliant data handling
- **Fair Play Policy** — Anti-cheating measures
- **Responsible Play** — Healthy usage guidelines
- **Refund Policy** — Clear refund terms (free platform)

### Educational Content
- **How to Play** — Step-by-step guide
- **Scoring Rules** — Detailed point breakdowns
- **FAQ** — Common questions answered

### Design & UX
- Elegant dark theme with blue-gold color palette
- Framer Motion animations throughout
- Mobile-first responsive design
- Google Fonts (Inter + Poppins)
- Interactive FAQ accordions
- Animated hero section with cricket illustrations

---

## Pages

| Route                  | Page               | Auth Required |
|------------------------|--------------------|:------------:|
| `/`                    | Home               | No           |
| `/about`               | About              | No           |
| `/matches`             | Matches            | Yes          |
| `/team-builder/:id`    | Team Builder       | Yes          |
| `/contests`            | Contests           | Yes          |
| `/leaderboard`         | Leaderboard        | Yes          |
| `/dashboard`           | Dashboard          | Yes          |
| `/scoring`             | Scoring System     | No           |
| `/how-to-play`         | How to Play        | No           |
| `/contact`             | Contact            | No           |
| `/faq`                 | FAQ                | No           |
| `/login`               | Login              | No           |
| `/register`            | Register           | No           |
| `/terms`               | Terms & Conditions | No           |
| `/privacy`             | Privacy Policy     | No           |
| `/fair-play`           | Fair Play Policy   | No           |
| `/responsible-gaming`  | Responsible Play   | No           |
| `/refund`              | Refund Policy      | No           |

---

## Data Storage

The application uses **JSON file-based storage** instead of a traditional database. All data files are stored in `server/data/` (local) or `/tmp/squad-master-data/` (Vercel) and are auto-created on first use.

| File                     | Contents                        |
|--------------------------|---------------------------------|
| `users.json`             | User accounts with hashed passwords |
| `teams.json`             | Teams created by users          |
| `contest_entries.json`   | Contest participation records   |
| `contact_messages.json`  | Contact form submissions        |

The frontend uses **static data** from `client/src/data/staticData.ts` for matches, players, contests, leaderboard rankings, scoring rules, and FAQs. This means the app works without any external API.

**Note:** On Vercel, the `/tmp` directory is ephemeral — data resets between cold starts. For persistent data in production, consider migrating to a cloud database (e.g., Supabase, PlanetScale, or Vercel Postgres).

---

## Authentication

The app uses a custom authentication system:

1. **Registration** — User provides name, email, password. Password is hashed with bcryptjs (10 salt rounds).
2. **Login** — Email/password verified against stored hash. JWT token generated with `jose` library.
3. **Session** — JWT stored in an HTTP-only secure cookie (7-day expiry).
4. **Protected Routes** — Frontend `AuthGuard` component redirects unauthenticated users to login.
5. **Server Protection** — `protectedProcedure` in tRPC validates JWT from cookie on each request.

---

## API Routes

All API routes are served under `/api/trpc` using tRPC.

| Route                    | Type     | Auth     | Description                    |
|--------------------------|----------|----------|--------------------------------|
| `auth.me`                | Query    | Public   | Get current user               |
| `auth.register`          | Mutation | Public   | Register new account           |
| `auth.login`             | Mutation | Public   | Login with email/password      |
| `auth.logout`            | Mutation | Public   | Clear session cookie           |
| `teams.create`           | Mutation | Protected| Create a new team              |
| `teams.myTeams`          | Query    | Protected| Get user's teams               |
| `contests.list`          | Query    | Public   | List contests                  |
| `contests.join`          | Mutation | Protected| Join a contest                 |
| `contact.submit`         | Mutation | Public   | Submit contact form            |
| `leaderboard.global`     | Query    | Public   | Get global leaderboard         |
| `dashboard.stats`        | Query    | Protected| Get user dashboard stats       |
| `dashboard.profile`      | Query    | Protected| Get user profile               |
| `admin.seedData`         | Mutation | Admin    | Seed data (placeholder)        |
| `admin.messages`         | Query    | Admin    | View contact messages          |
| `system.health`          | Query    | Public   | Health check                   |

---

## Environment Variables

| Variable       | Required | Default                              | Description                |
|----------------|:--------:|--------------------------------------|----------------------------|
| `JWT_SECRET`   | Yes      | `play-by-stats-secret-key-2026`| Secret key for JWT signing |
| `PORT`         | No       | `3000`                               | Server port                |
| `NODE_ENV`     | No       | `development`                        | Environment mode           |

**Important:** For production, always set a strong, unique `JWT_SECRET` value.

---

## Local Development

### Prerequisites
- Node.js 18+ (recommended: 22.x)
- pnpm (recommended) or npm

### Setup

```bash
# Clone the repository
git clone https://github.com/ashwin24121995/playbystats2.git
cd playbystats2

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:3000`.

### Available Scripts

| Command         | Description                          |
|-----------------|--------------------------------------|
| `pnpm dev`      | Start development server with HMR    |
| `pnpm build`    | Build for production                 |
| `pnpm start`    | Start production server              |
| `pnpm test`     | Run all tests                        |
| `pnpm check`    | TypeScript type checking             |
| `pnpm format`   | Format code with Prettier            |

---

## Vercel Deployment

### How It Works

This project is configured for Vercel with a **hybrid architecture**:

- **Frontend (SPA):** Vite builds the React app to `dist/public/`. Vercel serves these as static files.
- **Backend (Serverless):** The `api/index.ts` file exports an Express app that Vercel runs as a serverless function. All `/api/*` requests are routed to this function.
- **Data Storage:** On Vercel, JSON files are stored in `/tmp/` (ephemeral). The app auto-detects the Vercel environment and switches storage paths.

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - StrikePlay"
git remote add origin https://github.com/YOUR_USERNAME/play-by-stats.git
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your **play-by-stats** repository
4. Vercel will auto-detect the settings from `vercel.json`. If not, configure manually:

| Setting              | Value              |
|----------------------|--------------------|
| **Framework Preset** | Other              |
| **Build Command**    | `pnpm build`       |
| **Output Directory** | `dist/public`      |
| **Install Command**  | `pnpm install`     |

### Step 3: Set Environment Variables

In Vercel → Project Settings → Environment Variables, add:

| Key          | Value                                                    |
|--------------|----------------------------------------------------------|
| `JWT_SECRET` | (generate a strong random string: `openssl rand -hex 32`) |

### Step 4: Deploy

Click **"Deploy"**. Vercel will:
1. Install dependencies (`pnpm install`)
2. Build the frontend (`vite build`) and bundle the server (`esbuild`)
3. Deploy static files from `dist/public/`
4. Create a serverless function from `api/index.ts`

Your site will be live at `https://your-project.vercel.app`.

### Step 5: Custom Domain

1. In Vercel → Project Settings → Domains
2. Add `strikeplayhq.com`
3. Update your domain's DNS records as instructed by Vercel:
   - **A Record:** `76.76.21.21`
   - **CNAME:** `cname.vercel-dns.com`

### Troubleshooting Vercel

| Issue | Solution |
|-------|----------|
| **NOT_FOUND error** | Ensure `vercel.json` is in the project root with correct rewrites |
| **API calls fail** | Check that `/api/trpc` routes are working — visit `/api/health` to test |
| **Auth not working** | Ensure `JWT_SECRET` is set in Vercel environment variables |
| **Data resets** | Expected on Vercel — `/tmp` is ephemeral. Use a cloud database for persistence |
| **Build fails** | Run `pnpm build` locally first to catch errors |

---

## Other Deployment Options

### Self-Hosted (VPS / DigitalOcean / AWS EC2)

```bash
# Build the project
pnpm build

# Set environment variables
export JWT_SECRET="your-secret-key"
export NODE_ENV=production
export PORT=3000

# Start the server
pnpm start
```

The JSON file storage works perfectly on self-hosted servers since the filesystem is persistent.

### Docker

Create a `Dockerfile`:

```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build
ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
CMD ["node", "dist/index.js"]
```

```bash
docker build -t squad-master-sports .
docker run -p 3000:3000 -e JWT_SECRET=your-secret squad-master-sports
```

---

## Google Ads Compliance

This platform is designed to be fully compliant with Google Ads policies:

- **No gambling or betting terminology** — uses "entertainment" and "fun" language throughout
- **No real money involved** — 100% free to play, clearly stated on every page
- **No geographic restrictions** — available to everyone
- **Complete legal pages** — Terms, Privacy, Fair Play, Responsible Play, Refund
- **Entertainment disclaimers** — prominently displayed on the homepage and footer
- **Contact information** — full contact page with email support
- **Transparent scoring** — detailed scoring rules page

---

## License

MIT License — free to use, modify, and distribute.
