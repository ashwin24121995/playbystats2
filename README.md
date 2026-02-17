# Squad Master Sports

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

Squad Master Sports is a cricket entertainment platform where users can:

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
squad-master-sports/
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
│   │   ├── index.ts           # Server entry point
│   │   ├── context.ts         # tRPC context with JWT auth
│   │   ├── trpc.ts            # tRPC procedures
│   │   ├── cookies.ts         # Cookie configuration
│   │   └── vite.ts            # Vite dev server integration
│   ├── data/                  # JSON data files (auto-created)
│   │   ├── users.json         # User accounts
│   │   ├── teams.json         # Created teams
│   │   ├── contest_entries.json
│   │   └── contact_messages.json
│   ├── fileStore.ts           # File-based CRUD operations
│   ├── routers.ts             # All tRPC API routes
│   ├── app.test.ts            # API tests
│   └── auth.logout.test.ts    # Auth logout test
├── shared/                    # Shared types & constants
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

The application uses **JSON file-based storage** instead of a traditional database. All data files are stored in `server/data/` and are auto-created on first use.

| File                     | Contents                        |
|--------------------------|---------------------------------|
| `users.json`             | User accounts with hashed passwords |
| `teams.json`             | Teams created by users          |
| `contest_entries.json`   | Contest participation records   |
| `contact_messages.json`  | Contact form submissions        |

The frontend uses **static data** from `client/src/data/staticData.ts` for matches, players, contests, leaderboard rankings, scoring rules, and FAQs. This means the app works without any external API.

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
| `JWT_SECRET`   | Yes      | `squad-master-sports-secret-key-2026`| Secret key for JWT signing |
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
git clone <your-repo-url>
cd squad-master-sports

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

### Step 1: Push to GitHub

```bash
# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit - Squad Master Sports"

# Create a GitHub repo and push
gh repo create squad-master-sports --public --push --source=.
# OR manually:
git remote add origin https://github.com/YOUR_USERNAME/squad-master-sports.git
git push -u origin main
```

### Step 2: Import to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your GitHub repository
4. Configure the project:

| Setting              | Value                                                    |
|----------------------|----------------------------------------------------------|
| **Framework Preset** | Other                                                    |
| **Build Command**    | `pnpm build`                                             |
| **Output Directory** | `dist/public`                                            |
| **Install Command**  | `pnpm install`                                           |

### Step 3: Set Environment Variables

In Vercel's project settings → Environment Variables, add:

| Key          | Value                        |
|--------------|------------------------------|
| `JWT_SECRET` | (generate a strong random string, e.g., `openssl rand -hex 32`) |
| `NODE_ENV`   | `production`                 |

### Step 4: Configure Vercel for Express Backend

Since this project uses an Express server (not a static site), you need to configure Vercel to run it as a serverless function. Create a `vercel.json` file in the project root:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "dist/index.js",
      "use": "@vercel/node"
    },
    {
      "src": "dist/public/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "dist/index.js"
    },
    {
      "src": "/(.*)",
      "dest": "dist/public/$1"
    }
  ]
}
```

### Step 5: Deploy

Click **"Deploy"** in Vercel. Your site will be live at `https://your-project.vercel.app`.

### Step 6: Custom Domain

1. In Vercel → Project Settings → Domains
2. Add `squadmastersports.com`
3. Update your domain's DNS records as instructed by Vercel:
   - **A Record:** `76.76.21.21`
   - **CNAME:** `cname.vercel-dns.com`

### Important Notes for Vercel

- **File Storage:** Vercel serverless functions have ephemeral filesystems. The JSON file storage will reset on each deployment. For persistent data, consider migrating to a cloud database (e.g., Supabase, PlanetScale, or Vercel Postgres).
- **Static Data:** The frontend static data (matches, players, etc.) is bundled in the client and works perfectly on Vercel.
- **Authentication:** JWT-based auth works on Vercel — just ensure `JWT_SECRET` is set in environment variables.

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
