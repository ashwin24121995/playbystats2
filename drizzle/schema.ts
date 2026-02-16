import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, boolean, json } from "drizzle-orm/mysql-core";

// ─── Users ───────────────────────────────────────────────────────────────────
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  avatar: text("avatar"),
  totalPoints: int("totalPoints").default(0).notNull(),
  matchesPlayed: int("matchesPlayed").default(0).notNull(),
  contestsWon: int("contestsWon").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

// ─── Matches ─────────────────────────────────────────────────────────────────
export const matches = mysqlTable("matches", {
  id: int("id").autoincrement().primaryKey(),
  team1: varchar("team1", { length: 255 }).notNull(),
  team1Short: varchar("team1Short", { length: 10 }).notNull(),
  team2: varchar("team2", { length: 255 }).notNull(),
  team2Short: varchar("team2Short", { length: 10 }).notNull(),
  tournament: varchar("tournament", { length: 255 }).notNull(),
  venue: varchar("venue", { length: 500 }),
  matchDate: timestamp("matchDate").notNull(),
  status: mysqlEnum("status", ["upcoming", "live", "completed"]).default("upcoming").notNull(),
  team1Score: varchar("team1Score", { length: 100 }),
  team2Score: varchar("team2Score", { length: 100 }),
  result: text("result"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Match = typeof matches.$inferSelect;
export type InsertMatch = typeof matches.$inferInsert;

// ─── Players ─────────────────────────────────────────────────────────────────
export const players = mysqlTable("players", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  team: varchar("team", { length: 255 }).notNull(),
  teamShort: varchar("teamShort", { length: 10 }).notNull(),
  role: mysqlEnum("role", ["batsman", "bowler", "all-rounder", "wicket-keeper"]).notNull(),
  credits: int("credits").default(8).notNull(),
  imageUrl: text("imageUrl"),
  battingStyle: varchar("battingStyle", { length: 100 }),
  bowlingStyle: varchar("bowlingStyle", { length: 100 }),
  totalPoints: int("totalPoints").default(0).notNull(),
  matchId: int("matchId").notNull(),
  // Live scoring fields
  runs: int("runs").default(0).notNull(),
  balls: int("balls").default(0).notNull(),
  fours: int("fours").default(0).notNull(),
  sixes: int("sixes").default(0).notNull(),
  wickets: int("wickets").default(0).notNull(),
  maidens: int("maidens").default(0).notNull(),
  catches: int("catches").default(0).notNull(),
  stumpings: int("stumpings").default(0).notNull(),
  runOuts: int("runOuts").default(0).notNull(),
  oversBowled: int("oversBowled").default(0).notNull(),
  runsConceded: int("runsConceded").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Player = typeof players.$inferSelect;
export type InsertPlayer = typeof players.$inferInsert;

// ─── Teams (User-created dream teams) ────────────────────────────────────────
export const teams = mysqlTable("teams", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  matchId: int("matchId").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  captainId: int("captainId"),
  viceCaptainId: int("viceCaptainId"),
  totalCredits: int("totalCredits").default(0).notNull(),
  totalPoints: int("totalPoints").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Team = typeof teams.$inferSelect;
export type InsertTeam = typeof teams.$inferInsert;

// ─── Team Players (Junction table) ──────────────────────────────────────────
export const teamPlayers = mysqlTable("team_players", {
  id: int("id").autoincrement().primaryKey(),
  teamId: int("teamId").notNull(),
  playerId: int("playerId").notNull(),
  isCaptain: boolean("isCaptain").default(false).notNull(),
  isViceCaptain: boolean("isViceCaptain").default(false).notNull(),
  points: int("points").default(0).notNull(),
});

export type TeamPlayer = typeof teamPlayers.$inferSelect;
export type InsertTeamPlayer = typeof teamPlayers.$inferInsert;

// ─── Contests ────────────────────────────────────────────────────────────────
export const contests = mysqlTable("contests", {
  id: int("id").autoincrement().primaryKey(),
  matchId: int("matchId").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  maxParticipants: int("maxParticipants").default(100).notNull(),
  currentParticipants: int("currentParticipants").default(0).notNull(),
  entryFee: int("entryFee").default(0).notNull(),
  prizeDescription: text("prizeDescription"),
  status: mysqlEnum("status", ["open", "live", "completed"]).default("open").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Contest = typeof contests.$inferSelect;
export type InsertContest = typeof contests.$inferInsert;

// ─── Contest Entries ─────────────────────────────────────────────────────────
export const contestEntries = mysqlTable("contest_entries", {
  id: int("id").autoincrement().primaryKey(),
  contestId: int("contestId").notNull(),
  userId: int("userId").notNull(),
  teamId: int("teamId").notNull(),
  rank: int("rank"),
  points: int("points").default(0).notNull(),
  joinedAt: timestamp("joinedAt").defaultNow().notNull(),
});

export type ContestEntry = typeof contestEntries.$inferSelect;
export type InsertContestEntry = typeof contestEntries.$inferInsert;

// ─── Contact Messages ────────────────────────────────────────────────────────
export const contactMessages = mysqlTable("contact_messages", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  subject: varchar("subject", { length: 500 }),
  message: text("message").notNull(),
  status: mysqlEnum("status", ["new", "read", "replied"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ContactMessage = typeof contactMessages.$inferSelect;
export type InsertContactMessage = typeof contactMessages.$inferInsert;
