import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, adminProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  // ─── Match Routes ────────────────────────────────────────────────────────
  matches: router({
    list: publicProcedure
      .input(z.object({ status: z.string().optional() }).optional())
      .query(async ({ input }) => {
        return db.getMatches(input?.status);
      }),
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return db.getMatchById(input.id);
      }),
  }),

  // ─── Player Routes ──────────────────────────────────────────────────────
  players: router({
    byMatch: publicProcedure
      .input(z.object({ matchId: z.number() }))
      .query(async ({ input }) => {
        return db.getPlayersByMatch(input.matchId);
      }),
  }),

  // ─── Team Routes ─────────────────────────────────────────────────────────
  teams: router({
    create: protectedProcedure
      .input(z.object({
        matchId: z.number(),
        name: z.string().min(1).max(50),
        captainId: z.number(),
        viceCaptainId: z.number(),
        playerIds: z.array(z.number()).length(11),
        totalCredits: z.number().max(100),
      }))
      .mutation(async ({ input, ctx }) => {
        if (input.captainId === input.viceCaptainId) {
          throw new Error("Captain and Vice-Captain must be different players");
        }
        return db.createTeam({
          userId: ctx.user.id,
          matchId: input.matchId,
          name: input.name,
          captainId: input.captainId,
          viceCaptainId: input.viceCaptainId,
          playerIds: input.playerIds,
          totalCredits: input.totalCredits,
        });
      }),
    myTeams: protectedProcedure.query(async ({ ctx }) => {
      return db.getUserTeams(ctx.user.id);
    }),
    byMatch: protectedProcedure
      .input(z.object({ matchId: z.number() }))
      .query(async ({ input, ctx }) => {
        return db.getUserTeamsByMatch(ctx.user.id, input.matchId);
      }),
    getWithPlayers: protectedProcedure
      .input(z.object({ teamId: z.number() }))
      .query(async ({ input }) => {
        return db.getTeamWithPlayers(input.teamId);
      }),
  }),

  // ─── Contest Routes ──────────────────────────────────────────────────────
  contests: router({
    list: publicProcedure
      .input(z.object({ matchId: z.number().optional() }).optional())
      .query(async ({ input }) => {
        return db.getContests(input?.matchId);
      }),
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return db.getContestById(input.id);
      }),
    join: protectedProcedure
      .input(z.object({
        contestId: z.number(),
        teamId: z.number(),
      }))
      .mutation(async ({ input, ctx }) => {
        return db.joinContest({
          contestId: input.contestId,
          userId: ctx.user.id,
          teamId: input.teamId,
        });
      }),
    leaderboard: publicProcedure
      .input(z.object({ contestId: z.number() }))
      .query(async ({ input }) => {
        return db.getContestLeaderboard(input.contestId);
      }),
  }),

  // ─── Leaderboard Routes ─────────────────────────────────────────────────
  leaderboard: router({
    global: publicProcedure
      .input(z.object({ limit: z.number().min(1).max(100).optional() }).optional())
      .query(async ({ input }) => {
        return db.getGlobalLeaderboard(input?.limit ?? 20);
      }),
  }),

  // ─── User Dashboard Routes ──────────────────────────────────────────────
  dashboard: router({
    stats: protectedProcedure.query(async ({ ctx }) => {
      return db.getUserStats(ctx.user.id);
    }),
    profile: protectedProcedure.query(async ({ ctx }) => {
      return db.getUserProfile(ctx.user.id);
    }),
  }),

  // ─── Contact Routes ─────────────────────────────────────────────────────
  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1).max(255),
        email: z.string().email().max(320),
        subject: z.string().max(500).optional(),
        message: z.string().min(1).max(5000),
      }))
      .mutation(async ({ input }) => {
        return db.saveContactMessage(input);
      }),
  }),

  // ─── Admin Routes ───────────────────────────────────────────────────────
  admin: router({
    seedData: adminProcedure.mutation(async () => {
      return db.seedMatchData();
    }),
  }),
});

export type AppRouter = typeof appRouter;
