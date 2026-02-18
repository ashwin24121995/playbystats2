# Squad Master Sports - Project TODO

## Static Data & Types
- [x] Static match data, player data, contest data, leaderboard data
- [x] TypeScript types for all entities
- [x] Scoring system constants

## Layout & Navigation
- [x] Navbar with logo, links, mobile hamburger menu
- [x] Footer with links, legal, contact info, social links
- [x] Page layout wrapper component

## Pages - Core
- [x] Home page - hero with cricket animations, features, how-it-works, stats, CTA, testimonials
- [x] About page - platform mission, team, values
- [x] Matches page - list upcoming/live/completed matches
- [x] Team Builder page - select players, budget, captain/vc (static demo)
- [x] Contests page - browse and view contests
- [x] Leaderboard page - global rankings
- [x] Dashboard page - user stats overview (static demo)
- [x] Scoring System page - detailed scoring rules

## Pages - Legal & Compliance (Google Ads Compliant)
- [x] Terms & Conditions - company info, geographic restrictions, age 18+
- [x] Privacy Policy - data collection, GDPR, cookies, security
- [x] Fair Play Policy - anti-cheating, bot detection, penalties
- [x] Responsible Gaming - free platform, educational focus
- [x] Refund/Cancellation Policy

## Pages - Educational & Support
- [x] How to Play guide
- [x] Contact page with form
- [x] FAQ section

## Design & Polish
- [x] Framer Motion animations throughout
- [x] Mobile-responsive design (mobile-first)
- [x] Cricket-themed SVG illustrations
- [x] Hover effects on cards and buttons
- [x] Loading states and smooth transitions
- [x] Google Ads policy compliance verification

## Backend & Tests
- [x] Database schema (users, matches, players, teams, contests, leaderboard, contact)
- [x] Backend API routes (matches, players, teams, contests, leaderboard, contact, admin)
- [x] Vitest tests - 22 tests passing (auth, routes, validation, access control)

## Bug Fixes / Policy Compliance
- [x] Remove all WhatsApp links and references from the entire website (policy violation)
- [x] Remove all "Fantasy Sports", "betting", "gambling" terminology — replace with entertainment/fun language
- [x] Remove all geographic/state restrictions from Terms and all pages
- [x] Remove all fake/mock data (user counts, testimonials, fabricated statistics)
- [x] Update Home page to remove fake stats, mock user counts, testimonials
- [x] Update About, Matches, Contests, Leaderboard, Dashboard pages
- [x] Update all legal pages (Terms, Privacy, Fair Play, Responsible Gaming, Refund)
- [x] Update static data file
- [x] Update meta tags and SEO descriptions
- [x] Hide match content behind login — require sign-in for Matches, Contests, TeamBuilder, Leaderboard, Dashboard
- [x] Remove match section from Home page — no match data visible without login
- [x] Create professional logo matching the website's dark blue-gold theme and set as website logo
- [x] Add FAQ section to the Home page
- [x] Rewrite About page with "What We Offer", "Who We Are", "User-Friendly", "Easy & Transparent" sections
- [x] Add "What We Offer" section to the Home page
- [x] Restore Home page to the previous good version (before What We Offer and FAQ additions)
- [x] Remove all Manus OAuth dependencies and replace with custom email/password auth
- [x] Remove Manus managed database and replace with file-based TXT/JSON storage
- [x] Remove all Manus built-in APIs (LLM, storage, notifications)
- [x] Create file-based data storage system (users.json, teams.json, contacts.json, etc.)
- [x] Update all backend routers to use file-based storage
- [x] Update frontend auth flow to use custom login/register forms
- [x] Remove all Manus references from code, env, and config
- [x] Make website fully independent and deployable anywhere (Vercel, etc.)
- [x] Clean up vite.config.ts — remove Manus debug plugin, Manus runtime plugin, Manus allowed hosts
- [x] Clean up package.json — remove Manus-specific dev dependencies
- [x] Write comprehensive README.md with Vercel deployment instructions
- [x] Ensure project is fully Vercel-compatible (vercel.json created)
- [x] Fix vercel.json to resolve NOT_FOUND deployment error (set framework to vite, simplify rewrites, remove legacy config)
- [x] Fix api/index.ts to serve static files for Vercel deployment
- [x] Update company address to "3rd Floor, Crystal Point Mall, Link Road, Andheri West, Mumbai, Maharashtra 400053, India" everywhere
- [x] Update contact number to "1800-000-5533" everywhere
- [x] Remove Dashboard link from footer
- [x] Review and remove all brand names, celebrity names, and external references from website content
