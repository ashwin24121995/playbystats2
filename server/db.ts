import { eq, desc, and, sql, asc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import {
  InsertUser, users,
  matches, InsertMatch,
  players, InsertPlayer,
  teams, InsertTeam,
  teamPlayers, InsertTeamPlayer,
  contests, InsertContest,
  contestEntries, InsertContestEntry,
  contactMessages, InsertContactMessage,
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// ─── User Operations ─────────────────────────────────────────────────────────

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) throw new Error("User openId is required for upsert");
  const db = await getDb();
  if (!db) { console.warn("[Database] Cannot upsert user: database not available"); return; }

  try {
    const values: InsertUser = { openId: user.openId };
    const updateSet: Record<string, unknown> = {};
    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];
    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };
    textFields.forEach(assignNullable);
    if (user.lastSignedIn !== undefined) { values.lastSignedIn = user.lastSignedIn; updateSet.lastSignedIn = user.lastSignedIn; }
    if (user.role !== undefined) { values.role = user.role; updateSet.role = user.role; }
    else if (user.openId === ENV.ownerOpenId) { values.role = 'admin'; updateSet.role = 'admin'; }
    if (!values.lastSignedIn) values.lastSignedIn = new Date();
    if (Object.keys(updateSet).length === 0) updateSet.lastSignedIn = new Date();
    await db.insert(users).values(values).onDuplicateKeyUpdate({ set: updateSet });
  } catch (error) { console.error("[Database] Failed to upsert user:", error); throw error; }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) return undefined;
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

export async function getUserProfile(userId: number) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  return result[0] ?? null;
}

export async function getUserStats(userId: number) {
  const db = await getDb();
  if (!db) return { totalTeams: 0, totalContests: 0, totalPoints: 0, contestsWon: 0 };
  const teamCount = await db.select({ count: sql<number>`count(*)` }).from(teams).where(eq(teams.userId, userId));
  const entryCount = await db.select({ count: sql<number>`count(*)` }).from(contestEntries).where(eq(contestEntries.userId, userId));
  const user = await db.select().from(users).where(eq(users.id, userId)).limit(1);
  return {
    totalTeams: teamCount[0]?.count ?? 0,
    totalContests: entryCount[0]?.count ?? 0,
    totalPoints: user[0]?.totalPoints ?? 0,
    contestsWon: user[0]?.contestsWon ?? 0,
  };
}

// ─── Match Operations ────────────────────────────────────────────────────────

export async function getMatches(status?: string) {
  const db = await getDb();
  if (!db) return [];
  if (status) {
    return db.select().from(matches).where(eq(matches.status, status as any)).orderBy(asc(matches.matchDate));
  }
  return db.select().from(matches).orderBy(asc(matches.matchDate));
}

export async function getMatchById(matchId: number) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(matches).where(eq(matches.id, matchId)).limit(1);
  return result[0] ?? null;
}

export async function createMatch(data: InsertMatch) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const [result] = await db.insert(matches).values(data);
  return { id: result.insertId, ...data };
}

// ─── Player Operations ───────────────────────────────────────────────────────

export async function getPlayersByMatch(matchId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(players).where(eq(players.matchId, matchId)).orderBy(asc(players.team), asc(players.name));
}

export async function createPlayer(data: InsertPlayer) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const [result] = await db.insert(players).values(data);
  return { id: result.insertId, ...data };
}

export async function getPlayerById(playerId: number) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(players).where(eq(players.id, playerId)).limit(1);
  return result[0] ?? null;
}

// ─── Team Operations ─────────────────────────────────────────────────────────

export async function createTeam(data: { userId: number; matchId: number; name: string; captainId: number; viceCaptainId: number; playerIds: number[]; totalCredits: number }) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  const [teamResult] = await db.insert(teams).values({
    userId: data.userId,
    matchId: data.matchId,
    name: data.name,
    captainId: data.captainId,
    viceCaptainId: data.viceCaptainId,
    totalCredits: data.totalCredits,
  });

  const teamId = teamResult.insertId;

  for (const playerId of data.playerIds) {
    await db.insert(teamPlayers).values({
      teamId,
      playerId,
      isCaptain: playerId === data.captainId,
      isViceCaptain: playerId === data.viceCaptainId,
    });
  }

  return { id: teamId, name: data.name };
}

export async function getUserTeams(userId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(teams).where(eq(teams.userId, userId)).orderBy(desc(teams.createdAt));
}

export async function getUserTeamsByMatch(userId: number, matchId: number) {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(teams).where(and(eq(teams.userId, userId), eq(teams.matchId, matchId))).orderBy(desc(teams.createdAt));
}

export async function getTeamWithPlayers(teamId: number) {
  const db = await getDb();
  if (!db) return null;
  const team = await db.select().from(teams).where(eq(teams.id, teamId)).limit(1);
  if (!team[0]) return null;
  const tPlayers = await db.select().from(teamPlayers).where(eq(teamPlayers.teamId, teamId));
  const playerDetails = [];
  for (const tp of tPlayers) {
    const p = await db.select().from(players).where(eq(players.id, tp.playerId)).limit(1);
    if (p[0]) playerDetails.push({ ...p[0], isCaptain: tp.isCaptain, isViceCaptain: tp.isViceCaptain, teamPlayerPoints: tp.points });
  }
  return { ...team[0], players: playerDetails };
}

// ─── Contest Operations ──────────────────────────────────────────────────────

export async function getContests(matchId?: number) {
  const db = await getDb();
  if (!db) return [];
  if (matchId) {
    return db.select().from(contests).where(eq(contests.matchId, matchId)).orderBy(desc(contests.createdAt));
  }
  return db.select().from(contests).orderBy(desc(contests.createdAt));
}

export async function getContestById(contestId: number) {
  const db = await getDb();
  if (!db) return null;
  const result = await db.select().from(contests).where(eq(contests.id, contestId)).limit(1);
  return result[0] ?? null;
}

export async function joinContest(data: { contestId: number; userId: number; teamId: number }) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Check if already joined
  const existing = await db.select().from(contestEntries)
    .where(and(eq(contestEntries.contestId, data.contestId), eq(contestEntries.userId, data.userId)))
    .limit(1);
  if (existing.length > 0) throw new Error("Already joined this contest");

  // Check contest capacity
  const contest = await db.select().from(contests).where(eq(contests.id, data.contestId)).limit(1);
  if (!contest[0]) throw new Error("Contest not found");
  if (contest[0].currentParticipants >= contest[0].maxParticipants) throw new Error("Contest is full");

  await db.insert(contestEntries).values({
    contestId: data.contestId,
    userId: data.userId,
    teamId: data.teamId,
  });

  await db.update(contests)
    .set({ currentParticipants: sql`${contests.currentParticipants} + 1` })
    .where(eq(contests.id, data.contestId));

  return { success: true };
}

export async function getContestLeaderboard(contestId: number) {
  const db = await getDb();
  if (!db) return [];
  const entries = await db.select().from(contestEntries)
    .where(eq(contestEntries.contestId, contestId))
    .orderBy(desc(contestEntries.points));

  const leaderboard = [];
  for (const entry of entries) {
    const user = await db.select().from(users).where(eq(users.id, entry.userId)).limit(1);
    const team = await db.select().from(teams).where(eq(teams.id, entry.teamId)).limit(1);
    leaderboard.push({
      rank: entry.rank,
      userId: entry.userId,
      userName: user[0]?.name ?? "Unknown",
      teamName: team[0]?.name ?? "Unknown",
      points: entry.points,
    });
  }
  return leaderboard;
}

export async function getGlobalLeaderboard(limit = 20) {
  const db = await getDb();
  if (!db) return [];
  return db.select({
    id: users.id,
    name: users.name,
    totalPoints: users.totalPoints,
    matchesPlayed: users.matchesPlayed,
    contestsWon: users.contestsWon,
  }).from(users).orderBy(desc(users.totalPoints)).limit(limit);
}

// ─── Contact Operations ──────────────────────────────────────────────────────

export async function saveContactMessage(data: InsertContactMessage) {
  const db = await getDb();
  if (!db) throw new Error("Database not available");
  const [result] = await db.insert(contactMessages).values(data);
  return { id: result.insertId, success: true };
}

// ─── Admin: Seed Data ────────────────────────────────────────────────────────

export async function seedMatchData() {
  const db = await getDb();
  if (!db) throw new Error("Database not available");

  // Check if data already exists
  const existingMatches = await db.select().from(matches);
  if (existingMatches.length > 0) return { message: "Data already seeded" };

  // Seed sample matches
  const sampleMatches: InsertMatch[] = [
    { team1: "Mumbai Indians", team1Short: "MI", team2: "Chennai Super Kings", team2Short: "CSK", tournament: "IPL 2026", venue: "Wankhede Stadium, Mumbai", matchDate: new Date("2026-03-22T19:30:00"), status: "upcoming" },
    { team1: "Royal Challengers Bengaluru", team1Short: "RCB", team2: "Kolkata Knight Riders", team2Short: "KKR", tournament: "IPL 2026", venue: "M. Chinnaswamy Stadium, Bengaluru", matchDate: new Date("2026-03-23T15:30:00"), status: "upcoming" },
    { team1: "Delhi Capitals", team1Short: "DC", team2: "Rajasthan Royals", team2Short: "RR", tournament: "IPL 2026", venue: "Arun Jaitley Stadium, Delhi", matchDate: new Date("2026-03-24T19:30:00"), status: "upcoming" },
    { team1: "India", team1Short: "IND", team2: "Australia", team2Short: "AUS", tournament: "ICC Champions Trophy 2026", venue: "Narendra Modi Stadium, Ahmedabad", matchDate: new Date("2026-03-28T14:00:00"), status: "upcoming" },
    { team1: "Punjab Kings", team1Short: "PBKS", team2: "Sunrisers Hyderabad", team2Short: "SRH", tournament: "IPL 2026", venue: "IS Bindra Stadium, Mohali", matchDate: new Date("2026-03-25T19:30:00"), status: "upcoming" },
    { team1: "Gujarat Titans", team1Short: "GT", team2: "Lucknow Super Giants", team2Short: "LSG", tournament: "IPL 2026", venue: "Narendra Modi Stadium, Ahmedabad", matchDate: new Date("2026-03-26T19:30:00"), status: "upcoming" },
  ];

  for (const match of sampleMatches) {
    const [result] = await db.insert(matches).values(match);
    const matchId = result.insertId;

    // Seed players for each match
    const team1Players = generatePlayersForTeam(match.team1, match.team1Short, matchId);
    const team2Players = generatePlayersForTeam(match.team2, match.team2Short, matchId);

    for (const p of [...team1Players, ...team2Players]) {
      await db.insert(players).values(p);
    }

    // Seed a contest for each match
    await db.insert(contests).values({
      matchId,
      name: `${match.team1Short} vs ${match.team2Short} - Free Contest`,
      description: `Free contest for ${match.team1} vs ${match.team2}. Join and compete with other cricket enthusiasts!`,
      maxParticipants: 1000,
      entryFee: 0,
      prizeDescription: "Leaderboard Rankings & Bragging Rights",
      status: "open",
    });

    await db.insert(contests).values({
      matchId,
      name: `${match.team1Short} vs ${match.team2Short} - Mega Contest`,
      description: `Mega free contest with higher competition. Show your cricket knowledge!`,
      maxParticipants: 5000,
      entryFee: 0,
      prizeDescription: "Top Rankings & Achievement Badges",
      status: "open",
    });
  }

  return { message: "Data seeded successfully" };
}

function generatePlayersForTeam(teamName: string, teamShort: string, matchId: number): InsertPlayer[] {
  const playerTemplates: Record<string, Array<{ name: string; role: "batsman" | "bowler" | "all-rounder" | "wicket-keeper"; credits: number }>> = {
    "Mumbai Indians": [
      { name: "Rohit Sharma", role: "batsman", credits: 10 }, { name: "Ishan Kishan", role: "wicket-keeper", credits: 9 },
      { name: "Suryakumar Yadav", role: "batsman", credits: 10 }, { name: "Tilak Varma", role: "batsman", credits: 8 },
      { name: "Hardik Pandya", role: "all-rounder", credits: 10 }, { name: "Tim David", role: "all-rounder", credits: 8 },
      { name: "Jasprit Bumrah", role: "bowler", credits: 10 }, { name: "Piyush Chawla", role: "bowler", credits: 7 },
      { name: "Akash Madhwal", role: "bowler", credits: 7 }, { name: "Gerald Coetzee", role: "bowler", credits: 8 },
      { name: "Naman Dhir", role: "batsman", credits: 7 },
    ],
    "Chennai Super Kings": [
      { name: "Ruturaj Gaikwad", role: "batsman", credits: 10 }, { name: "Devon Conway", role: "batsman", credits: 9 },
      { name: "MS Dhoni", role: "wicket-keeper", credits: 9 }, { name: "Shivam Dube", role: "all-rounder", credits: 9 },
      { name: "Ravindra Jadeja", role: "all-rounder", credits: 10 }, { name: "Moeen Ali", role: "all-rounder", credits: 8 },
      { name: "Deepak Chahar", role: "bowler", credits: 8 }, { name: "Tushar Deshpande", role: "bowler", credits: 7 },
      { name: "Matheesha Pathirana", role: "bowler", credits: 9 }, { name: "Maheesh Theekshana", role: "bowler", credits: 8 },
      { name: "Rachin Ravindra", role: "all-rounder", credits: 8 },
    ],
    "Royal Challengers Bengaluru": [
      { name: "Virat Kohli", role: "batsman", credits: 11 }, { name: "Faf du Plessis", role: "batsman", credits: 9 },
      { name: "Glenn Maxwell", role: "all-rounder", credits: 9 }, { name: "Rajat Patidar", role: "batsman", credits: 8 },
      { name: "Dinesh Karthik", role: "wicket-keeper", credits: 8 }, { name: "Wanindu Hasaranga", role: "all-rounder", credits: 9 },
      { name: "Mohammed Siraj", role: "bowler", credits: 9 }, { name: "Harshal Patel", role: "bowler", credits: 8 },
      { name: "Josh Hazlewood", role: "bowler", credits: 9 }, { name: "Karn Sharma", role: "bowler", credits: 7 },
      { name: "Cameron Green", role: "all-rounder", credits: 9 },
    ],
    "Kolkata Knight Riders": [
      { name: "Shreyas Iyer", role: "batsman", credits: 10 }, { name: "Venkatesh Iyer", role: "all-rounder", credits: 8 },
      { name: "Andre Russell", role: "all-rounder", credits: 10 }, { name: "Sunil Narine", role: "all-rounder", credits: 10 },
      { name: "Phil Salt", role: "wicket-keeper", credits: 9 }, { name: "Rinku Singh", role: "batsman", credits: 8 },
      { name: "Mitchell Starc", role: "bowler", credits: 10 }, { name: "Varun Chakravarthy", role: "bowler", credits: 8 },
      { name: "Harshit Rana", role: "bowler", credits: 7 }, { name: "Ramandeep Singh", role: "all-rounder", credits: 7 },
      { name: "Angkrish Raghuvanshi", role: "batsman", credits: 7 },
    ],
    "Delhi Capitals": [
      { name: "David Warner", role: "batsman", credits: 10 }, { name: "Prithvi Shaw", role: "batsman", credits: 8 },
      { name: "Rishabh Pant", role: "wicket-keeper", credits: 10 }, { name: "Axar Patel", role: "all-rounder", credits: 9 },
      { name: "Mitchell Marsh", role: "all-rounder", credits: 9 }, { name: "Tristan Stubbs", role: "batsman", credits: 8 },
      { name: "Anrich Nortje", role: "bowler", credits: 9 }, { name: "Kuldeep Yadav", role: "bowler", credits: 9 },
      { name: "Mukesh Kumar", role: "bowler", credits: 7 }, { name: "Ishant Sharma", role: "bowler", credits: 7 },
      { name: "Abishek Porel", role: "wicket-keeper", credits: 7 },
    ],
    "Rajasthan Royals": [
      { name: "Sanju Samson", role: "wicket-keeper", credits: 10 }, { name: "Jos Buttler", role: "batsman", credits: 10 },
      { name: "Yashasvi Jaiswal", role: "batsman", credits: 10 }, { name: "Shimron Hetmyer", role: "batsman", credits: 8 },
      { name: "Ravichandran Ashwin", role: "all-rounder", credits: 9 }, { name: "Dhruv Jurel", role: "wicket-keeper", credits: 7 },
      { name: "Trent Boult", role: "bowler", credits: 9 }, { name: "Yuzvendra Chahal", role: "bowler", credits: 9 },
      { name: "Sandeep Sharma", role: "bowler", credits: 7 }, { name: "Riyan Parag", role: "all-rounder", credits: 8 },
      { name: "Avesh Khan", role: "bowler", credits: 8 },
    ],
  };

  // Default players for teams not in the template
  const defaultPlayers: Array<{ name: string; role: "batsman" | "bowler" | "all-rounder" | "wicket-keeper"; credits: number }> = [
    { name: `${teamShort} Opener 1`, role: "batsman", credits: 9 },
    { name: `${teamShort} Opener 2`, role: "batsman", credits: 8 },
    { name: `${teamShort} Middle Order 1`, role: "batsman", credits: 8 },
    { name: `${teamShort} Keeper`, role: "wicket-keeper", credits: 8 },
    { name: `${teamShort} All-Rounder 1`, role: "all-rounder", credits: 9 },
    { name: `${teamShort} All-Rounder 2`, role: "all-rounder", credits: 8 },
    { name: `${teamShort} Fast Bowler 1`, role: "bowler", credits: 9 },
    { name: `${teamShort} Fast Bowler 2`, role: "bowler", credits: 8 },
    { name: `${teamShort} Spinner 1`, role: "bowler", credits: 8 },
    { name: `${teamShort} Spinner 2`, role: "bowler", credits: 7 },
    { name: `${teamShort} Batsman 3`, role: "batsman", credits: 7 },
  ];

  const template = playerTemplates[teamName] ?? defaultPlayers;
  return template.map(p => ({
    name: p.name,
    team: teamName,
    teamShort,
    role: p.role,
    credits: p.credits,
    matchId,
    totalPoints: 0,
  }));
}
