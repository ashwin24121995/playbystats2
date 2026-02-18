import fs from "fs";
import path from "path";

// ─── File-based JSON storage ────────────────────────────────────────────────
// All data is stored in JSON files.
// On Vercel (serverless), uses /tmp directory since the filesystem is read-only.
// Locally, uses server/data/ directory.
// NOTE: On Vercel, /tmp is ephemeral — data resets between cold starts.
// For persistent data in production, consider using a cloud database.

const IS_VERCEL = process.env.VERCEL === "1" || !!process.env.VERCEL_URL;

const DATA_DIR = IS_VERCEL
  ? path.resolve("/tmp", "squad-master-data")
  : path.resolve(import.meta.dirname, "data");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

function getFilePath(collection: string): string {
  return path.join(DATA_DIR, `${collection}.json`);
}

function readCollection<T>(collection: string): T[] {
  const filePath = getFilePath(collection);
  if (!fs.existsSync(filePath)) {
    return [];
  }
  try {
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as T[];
  } catch {
    return [];
  }
}

function writeCollection<T>(collection: string, data: T[]): void {
  const filePath = getFilePath(collection);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf-8");
}

// ─── Types ──────────────────────────────────────────────────────────────────

export interface StoredUser {
  id: number;
  email: string;
  name: string;
  passwordHash: string;
  role: "user" | "admin";
  totalPoints: number;
  matchesPlayed: number;
  contestsWon: number;
  createdAt: string;
  updatedAt: string;
  lastSignedIn: string;
}

export interface StoredTeam {
  id: number;
  userId: number;
  matchId: number;
  name: string;
  captainId: number;
  viceCaptainId: number;
  playerIds: number[];
  totalCredits: number;
  totalPoints: number;
  createdAt: string;
}

export interface StoredContestEntry {
  id: number;
  contestId: number;
  userId: number;
  teamId: number;
  rank: number | null;
  points: number;
  joinedAt: string;
}

export interface StoredContactMessage {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied";
  createdAt: string;
}

// ─── User Operations ────────────────────────────────────────────────────────

export function getUsers(): StoredUser[] {
  return readCollection<StoredUser>("users");
}

export function getUserById(id: number): StoredUser | undefined {
  return getUsers().find((u) => u.id === id);
}

export function getUserByEmail(email: string): StoredUser | undefined {
  return getUsers().find((u) => u.email.toLowerCase() === email.toLowerCase());
}

export function createUser(user: Omit<StoredUser, "id" | "createdAt" | "updatedAt" | "lastSignedIn" | "totalPoints" | "matchesPlayed" | "contestsWon">): StoredUser {
  const users = getUsers();
  const now = new Date().toISOString();
  const newUser: StoredUser = {
    ...user,
    id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
    totalPoints: 0,
    matchesPlayed: 0,
    contestsWon: 0,
    createdAt: now,
    updatedAt: now,
    lastSignedIn: now,
  };
  users.push(newUser);
  writeCollection("users", users);
  return newUser;
}

export function updateUserSignIn(id: number): void {
  const users = getUsers();
  const idx = users.findIndex((u) => u.id === id);
  if (idx >= 0) {
    users[idx].lastSignedIn = new Date().toISOString();
    users[idx].updatedAt = new Date().toISOString();
    writeCollection("users", users);
  }
}

// ─── Team Operations ────────────────────────────────────────────────────────

export function getTeams(): StoredTeam[] {
  return readCollection<StoredTeam>("teams");
}

export function getTeamsByUser(userId: number): StoredTeam[] {
  return getTeams().filter((t) => t.userId === userId);
}

export function createTeam(team: Omit<StoredTeam, "id" | "createdAt" | "totalPoints">): StoredTeam {
  const teams = getTeams();
  const newTeam: StoredTeam = {
    ...team,
    id: teams.length > 0 ? Math.max(...teams.map((t) => t.id)) + 1 : 1,
    totalPoints: 0,
    createdAt: new Date().toISOString(),
  };
  teams.push(newTeam);
  writeCollection("teams", teams);
  return newTeam;
}

// ─── Contest Entry Operations ───────────────────────────────────────────────

export function getContestEntries(): StoredContestEntry[] {
  return readCollection<StoredContestEntry>("contest_entries");
}

export function getContestEntriesByUser(userId: number): StoredContestEntry[] {
  return getContestEntries().filter((e) => e.userId === userId);
}

export function getContestEntriesByContest(contestId: number): StoredContestEntry[] {
  return getContestEntries().filter((e) => e.contestId === contestId);
}

export function createContestEntry(entry: Omit<StoredContestEntry, "id" | "joinedAt" | "rank" | "points">): StoredContestEntry {
  const entries = getContestEntries();
  const newEntry: StoredContestEntry = {
    ...entry,
    id: entries.length > 0 ? Math.max(...entries.map((e) => e.id)) + 1 : 1,
    rank: null,
    points: 0,
    joinedAt: new Date().toISOString(),
  };
  entries.push(newEntry);
  writeCollection("contest_entries", entries);
  return newEntry;
}

// ─── Contact Message Operations ─────────────────────────────────────────────

export function getContactMessages(): StoredContactMessage[] {
  return readCollection<StoredContactMessage>("contact_messages");
}

export function createContactMessage(msg: Omit<StoredContactMessage, "id" | "createdAt" | "status">): StoredContactMessage {
  const messages = getContactMessages();
  const newMsg: StoredContactMessage = {
    ...msg,
    id: messages.length > 0 ? Math.max(...messages.map((m) => m.id)) + 1 : 1,
    status: "new",
    createdAt: new Date().toISOString(),
  };
  messages.push(newMsg);
  writeCollection("contact_messages", messages);
  return newMsg;
}
