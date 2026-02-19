// ─── Types ────────────────────────────────────────────────────────────────────

export interface Match {
  id: number;
  team1: string;
  team1Short: string;
  team2: string;
  team2Short: string;
  tournament: string;
  venue: string;
  matchDate: string;
  status: "upcoming" | "live" | "completed";
  team1Score?: string;
  team2Score?: string;
  result?: string;
}

export interface Player {
  id: number;
  name: string;
  team: string;
  teamShort: string;
  role: "Batsman" | "Bowler" | "All-Rounder" | "Wicket-Keeper";
  credits: number;
  points: number;
  imageInitials: string;
  runs?: number;
  wickets?: number;
  catches?: number;
}

export interface Contest {
  id: number;
  matchId: number;
  name: string;
  description: string;
  maxParticipants: number;
  currentParticipants: number;
  entryFee: number;
  prizeDescription: string;
  status: "open" | "live" | "completed";
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  totalPoints: number;
  matchesPlayed: number;
  contestsWon: number;
}

export interface ScoringRule {
  category: string;
  action: string;
  points: string;
}

export interface FAQ {
  question: string;
  answer: string;
}


// ─── Static Matches ──────────────────────────────────────────────────────────

export const matches: Match[] = [
  { id: 1, team1: "Mumbai Strikers", team1Short: "MS", team2: "Chennai Champions", team2Short: "CC", tournament: "Premier Cricket League 2026", venue: "City Stadium, Mumbai", matchDate: "2026-03-22T19:30:00", status: "upcoming" },
  { id: 2, team1: "Bengaluru Warriors", team1Short: "BW", team2: "Kolkata Tigers", team2Short: "KT", tournament: "Premier Cricket League 2026", venue: "Central Stadium, Bengaluru", matchDate: "2026-03-23T15:30:00", status: "upcoming" },
  { id: 3, team1: "Delhi Defenders", team1Short: "DD", team2: "Rajasthan Rangers", team2Short: "RG", tournament: "Premier Cricket League 2026", venue: "Capital Stadium, Delhi", matchDate: "2026-03-24T19:30:00", status: "upcoming" },
  { id: 4, team1: "India", team1Short: "IND", team2: "Australia", team2Short: "AUS", tournament: "International Cricket Championship 2026", venue: "National Stadium, Ahmedabad", matchDate: "2026-03-28T14:00:00", status: "upcoming" },
  { id: 5, team1: "Punjab Panthers", team1Short: "PP", team2: "Hyderabad Hawks", team2Short: "HH", tournament: "Premier Cricket League 2026", venue: "Regional Stadium, Mohali", matchDate: "2026-03-25T19:30:00", status: "live", team1Score: "185/4 (18.2)", team2Score: "—" },
  { id: 6, team1: "Gujarat Giants", team1Short: "GG", team2: "Lucknow Lions", team2Short: "LL", tournament: "Premier Cricket League 2026", venue: "National Stadium, Ahmedabad", matchDate: "2026-03-20T19:30:00", status: "completed", team1Score: "192/5 (20)", team2Score: "178/8 (20)", result: "Gujarat Giants won by 14 runs" },
];

// ─── Static Players ──────────────────────────────────────────────────────────

export const playersByMatch: Record<number, Player[]> = {
  1: [
    { id: 1, name: "Arjun Mehta", team: "Mumbai Strikers", teamShort: "MS", role: "Batsman", credits: 10, points: 156, imageInitials: "AM", runs: 542, wickets: 0, catches: 8 },
    { id: 2, name: "Karan Singh", team: "Mumbai Strikers", teamShort: "MS", role: "Wicket-Keeper", credits: 9, points: 134, imageInitials: "KS", runs: 410, wickets: 0, catches: 15 },
    { id: 3, name: "Rahul Verma", team: "Mumbai Strikers", teamShort: "MS", role: "Batsman", credits: 10, points: 178, imageInitials: "RV", runs: 620, wickets: 0, catches: 6 },
    { id: 4, name: "Vikram Patel", team: "Mumbai Strikers", teamShort: "MS", role: "Batsman", credits: 8, points: 112, imageInitials: "VP", runs: 380, wickets: 0, catches: 4 },
    { id: 5, name: "Rohan Kapoor", team: "Mumbai Strikers", teamShort: "MS", role: "All-Rounder", credits: 10, points: 198, imageInitials: "RK", runs: 420, wickets: 12, catches: 5 },
    { id: 6, name: "James Miller", team: "Mumbai Strikers", teamShort: "MS", role: "All-Rounder", credits: 8, points: 96, imageInitials: "JM", runs: 290, wickets: 0, catches: 3 },
    { id: 7, name: "Aditya Kumar", team: "Mumbai Strikers", teamShort: "MS", role: "Bowler", credits: 10, points: 210, imageInitials: "AK", runs: 12, wickets: 24, catches: 2 },
    { id: 8, name: "Pradeep Rao", team: "Mumbai Strikers", teamShort: "MS", role: "Bowler", credits: 7, points: 78, imageInitials: "PR", runs: 20, wickets: 10, catches: 3 },
    { id: 9, name: "Marcus Johnson", team: "Mumbai Strikers", teamShort: "MS", role: "Bowler", credits: 8, points: 104, imageInitials: "MJ", runs: 30, wickets: 14, catches: 1 },
    { id: 10, name: "Sanjay Reddy", team: "Mumbai Strikers", teamShort: "MS", role: "Bowler", credits: 7, points: 72, imageInitials: "SR", runs: 8, wickets: 9, catches: 2 },
    { id: 11, name: "Nitin Sharma", team: "Mumbai Strikers", teamShort: "MS", role: "Batsman", credits: 7, points: 64, imageInitials: "NS", runs: 220, wickets: 0, catches: 2 },
    { id: 12, name: "Ravi Krishnan", team: "Chennai Champions", teamShort: "CC", role: "Batsman", credits: 10, points: 168, imageInitials: "RK2", runs: 580, wickets: 0, catches: 5 },
    { id: 13, name: "David Wilson", team: "Chennai Champions", teamShort: "CC", role: "Batsman", credits: 9, points: 142, imageInitials: "DW", runs: 490, wickets: 0, catches: 7 },
    { id: 14, name: "Manoj Iyer", team: "Chennai Champions", teamShort: "CC", role: "Wicket-Keeper", credits: 9, points: 120, imageInitials: "MI", runs: 320, wickets: 0, catches: 18 },
    { id: 15, name: "Amit Desai", team: "Chennai Champions", teamShort: "CC", role: "All-Rounder", credits: 9, points: 148, imageInitials: "AD", runs: 440, wickets: 6, catches: 4 },
    { id: 16, name: "Rajesh Nair", team: "Chennai Champions", teamShort: "CC", role: "All-Rounder", credits: 10, points: 202, imageInitials: "RN", runs: 380, wickets: 16, catches: 12 },
    { id: 17, name: "Michael Brown", team: "Chennai Champions", teamShort: "CC", role: "All-Rounder", credits: 8, points: 118, imageInitials: "MB", runs: 310, wickets: 8, catches: 3 },
    { id: 18, name: "Deepak Joshi", team: "Chennai Champions", teamShort: "CC", role: "Bowler", credits: 8, points: 108, imageInitials: "DJ", runs: 40, wickets: 14, catches: 2 },
    { id: 19, name: "Carlos Rodriguez", team: "Chennai Champions", teamShort: "CC", role: "Bowler", credits: 9, points: 156, imageInitials: "CR", runs: 10, wickets: 20, catches: 1 },
    { id: 20, name: "Suresh Pillai", team: "Chennai Champions", teamShort: "CC", role: "Bowler", credits: 8, points: 98, imageInitials: "SP", runs: 15, wickets: 12, catches: 4 },
    { id: 21, name: "Nathan Clarke", team: "Chennai Champions", teamShort: "CC", role: "All-Rounder", credits: 8, points: 110, imageInitials: "NC", runs: 350, wickets: 4, catches: 5 },
    { id: 22, name: "Tushar Gupta", team: "Chennai Champions", teamShort: "CC", role: "Bowler", credits: 7, points: 82, imageInitials: "TG", runs: 5, wickets: 11, catches: 1 },
  ],
  2: [
    { id: 23, name: "Anil Reddy", team: "Bengaluru Warriors", teamShort: "BW", role: "Batsman", credits: 11, points: 220, imageInitials: "AR2", runs: 740, wickets: 0, catches: 10 },
    { id: 24, name: "Peter Thompson", team: "Bengaluru Warriors", teamShort: "BW", role: "Batsman", credits: 9, points: 148, imageInitials: "PT", runs: 510, wickets: 0, catches: 8 },
    { id: 25, name: "Daniel White", team: "Bengaluru Warriors", teamShort: "BW", role: "All-Rounder", credits: 9, points: 162, imageInitials: "DW2", runs: 420, wickets: 8, catches: 6 },
    { id: 26, name: "Sandeep Kumar", team: "Bengaluru Warriors", teamShort: "BW", role: "Batsman", credits: 8, points: 118, imageInitials: "SK", runs: 390, wickets: 0, catches: 4 },
    { id: 27, name: "Vijay Menon", team: "Bengaluru Warriors", teamShort: "BW", role: "Wicket-Keeper", credits: 8, points: 102, imageInitials: "VM", runs: 280, wickets: 0, catches: 14 },
    { id: 28, name: "Alex Martinez", team: "Bengaluru Warriors", teamShort: "BW", role: "All-Rounder", credits: 9, points: 174, imageInitials: "AM2", runs: 120, wickets: 18, catches: 5 },
    { id: 29, name: "Naveen Patil", team: "Bengaluru Warriors", teamShort: "BW", role: "Bowler", credits: 9, points: 146, imageInitials: "NP", runs: 20, wickets: 18, catches: 3 },
    { id: 30, name: "Praveen Shah", team: "Bengaluru Warriors", teamShort: "BW", role: "Bowler", credits: 8, points: 124, imageInitials: "PS", runs: 60, wickets: 16, catches: 2 },
    { id: 31, name: "Ryan Anderson", team: "Bengaluru Warriors", teamShort: "BW", role: "Bowler", credits: 9, points: 138, imageInitials: "RA", runs: 10, wickets: 17, catches: 4 },
    { id: 32, name: "Ashok Rao", team: "Bengaluru Warriors", teamShort: "BW", role: "Bowler", credits: 7, points: 76, imageInitials: "AR3", runs: 30, wickets: 10, catches: 3 },
    { id: 33, name: "Luke Harris", team: "Bengaluru Warriors", teamShort: "BW", role: "All-Rounder", credits: 9, points: 152, imageInitials: "LH", runs: 360, wickets: 10, catches: 5 },
    { id: 34, name: "Siddharth Roy", team: "Kolkata Tigers", teamShort: "KT", role: "Batsman", credits: 10, points: 164, imageInitials: "SR2", runs: 560, wickets: 0, catches: 7 },
    { id: 35, name: "Ankit Ghosh", team: "Kolkata Tigers", teamShort: "KT", role: "All-Rounder", credits: 8, points: 116, imageInitials: "AG", runs: 340, wickets: 6, catches: 4 },
    { id: 36, name: "Chris Evans", team: "Kolkata Tigers", teamShort: "KT", role: "All-Rounder", credits: 10, points: 196, imageInitials: "CE", runs: 480, wickets: 14, catches: 6 },
    { id: 37, name: "Abhishek Sen", team: "Kolkata Tigers", teamShort: "KT", role: "All-Rounder", credits: 10, points: 208, imageInitials: "AS", runs: 420, wickets: 16, catches: 8 },
    { id: 38, name: "Robert Taylor", team: "Kolkata Tigers", teamShort: "KT", role: "Wicket-Keeper", credits: 9, points: 154, imageInitials: "RT", runs: 520, wickets: 0, catches: 12 },
    { id: 39, name: "Manish Das", team: "Kolkata Tigers", teamShort: "KT", role: "Batsman", credits: 8, points: 126, imageInitials: "MD", runs: 410, wickets: 0, catches: 3 },
    { id: 40, name: "Steven Clark", team: "Kolkata Tigers", teamShort: "KT", role: "Bowler", credits: 10, points: 186, imageInitials: "SC", runs: 30, wickets: 22, catches: 2 },
    { id: 41, name: "Vishal Bose", team: "Kolkata Tigers", teamShort: "KT", role: "Bowler", credits: 8, points: 132, imageInitials: "VB", runs: 10, wickets: 16, catches: 5 },
    { id: 42, name: "Tarun Dutta", team: "Kolkata Tigers", teamShort: "KT", role: "Bowler", credits: 7, points: 88, imageInitials: "TD", runs: 15, wickets: 11, catches: 1 },
    { id: 43, name: "Suraj Banerjee", team: "Kolkata Tigers", teamShort: "KT", role: "All-Rounder", credits: 7, points: 74, imageInitials: "SB", runs: 180, wickets: 4, catches: 3 },
    { id: 44, name: "Aryan Mukherjee", team: "Kolkata Tigers", teamShort: "KT", role: "Batsman", credits: 7, points: 62, imageInitials: "AM3", runs: 200, wickets: 0, catches: 2 },
  ],
};

// ─── Static Contests ─────────────────────────────────────────────────────────

export const contests: Contest[] = [
  { id: 1, matchId: 1, name: "MS vs CC - Free Contest", description: "Free contest for Mumbai Strikers vs Chennai Champions. Join and compete!", maxParticipants: 1000, currentParticipants: 847, entryFee: 0, prizeDescription: "Leaderboard Rankings & Bragging Rights", status: "open" },
  { id: 2, matchId: 1, name: "MS vs CC - Mega Contest", description: "Mega free contest with higher competition!", maxParticipants: 5000, currentParticipants: 3241, entryFee: 0, prizeDescription: "Top Rankings & Achievement Badges", status: "open" },
  { id: 3, matchId: 2, name: "BW vs KT - Free Contest", description: "Free contest for Bengaluru Warriors vs Kolkata Tigers. Show your cricket knowledge!", maxParticipants: 1000, currentParticipants: 612, entryFee: 0, prizeDescription: "Leaderboard Rankings & Bragging Rights", status: "open" },
  { id: 4, matchId: 2, name: "BW vs KT - Mega Contest", description: "Mega free contest with higher competition!", maxParticipants: 5000, currentParticipants: 2180, entryFee: 0, prizeDescription: "Top Rankings & Achievement Badges", status: "open" },
  { id: 5, matchId: 3, name: "DD vs RG - Free Contest", description: "Free contest for Delhi Defenders vs Rajasthan Rangers!", maxParticipants: 1000, currentParticipants: 456, entryFee: 0, prizeDescription: "Leaderboard Rankings & Bragging Rights", status: "open" },
  { id: 6, matchId: 5, name: "PP vs HH - Live Contest", description: "Live contest in progress!", maxParticipants: 1000, currentParticipants: 998, entryFee: 0, prizeDescription: "Leaderboard Rankings", status: "live" },
  { id: 7, matchId: 6, name: "GG vs LL - Completed", description: "Contest completed. Check results!", maxParticipants: 1000, currentParticipants: 1000, entryFee: 0, prizeDescription: "Final Rankings Published", status: "completed" },
];

// ─── Static Leaderboard ──────────────────────────────────────────────────────

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "CricketMaster99", totalPoints: 4520, matchesPlayed: 28, contestsWon: 12 },
  { rank: 2, name: "SixerKing", totalPoints: 4380, matchesPlayed: 26, contestsWon: 10 },
  { rank: 3, name: "BowlerBoss", totalPoints: 4210, matchesPlayed: 30, contestsWon: 9 },
  { rank: 4, name: "CricketGuru2026", totalPoints: 4050, matchesPlayed: 25, contestsWon: 8 },
  { rank: 5, name: "SquadChamp", totalPoints: 3890, matchesPlayed: 27, contestsWon: 7 },
  { rank: 6, name: "CricFanatic", totalPoints: 3740, matchesPlayed: 24, contestsWon: 7 },
  { rank: 7, name: "WicketWizard", totalPoints: 3620, matchesPlayed: 22, contestsWon: 6 },
  { rank: 8, name: "RunMachine", totalPoints: 3510, matchesPlayed: 28, contestsWon: 5 },
  { rank: 9, name: "SpinLegend", totalPoints: 3380, matchesPlayed: 20, contestsWon: 5 },
  { rank: 10, name: "BatFirst", totalPoints: 3250, matchesPlayed: 23, contestsWon: 4 },
  { rank: 11, name: "PaceAttack", totalPoints: 3120, matchesPlayed: 21, contestsWon: 4 },
  { rank: 12, name: "AllRounderX", totalPoints: 2990, matchesPlayed: 19, contestsWon: 3 },
  { rank: 13, name: "CaptainCool", totalPoints: 2870, matchesPlayed: 22, contestsWon: 3 },
  { rank: 14, name: "StumpKing", totalPoints: 2740, matchesPlayed: 18, contestsWon: 2 },
  { rank: 15, name: "CricketNerd", totalPoints: 2610, matchesPlayed: 20, contestsWon: 2 },
];

// ─── Scoring Rules ───────────────────────────────────────────────────────────

export const scoringRules: ScoringRule[] = [
  { category: "Batting", action: "Run scored", points: "1 point per run" },
  { category: "Batting", action: "Boundary (4)", points: "+1 bonus point" },
  { category: "Batting", action: "Six (6)", points: "+2 bonus points" },
  { category: "Batting", action: "Half-century (50 runs)", points: "+8 bonus points" },
  { category: "Batting", action: "Century (100 runs)", points: "+16 bonus points" },
  { category: "Batting", action: "Duck (0 runs, out)", points: "-2 points" },
  { category: "Bowling", action: "Wicket taken", points: "25 points" },
  { category: "Bowling", action: "Maiden over", points: "12 points" },
  { category: "Bowling", action: "3 wickets bonus", points: "+4 bonus points" },
  { category: "Bowling", action: "4 wickets bonus", points: "+8 bonus points" },
  { category: "Bowling", action: "5 wickets bonus", points: "+16 bonus points" },
  { category: "Bowling", action: "Economy rate < 5", points: "+6 bonus points" },
  { category: "Fielding", action: "Catch taken", points: "8 points" },
  { category: "Fielding", action: "Stumping", points: "12 points" },
  { category: "Fielding", action: "Run out (direct hit)", points: "12 points" },
  { category: "Fielding", action: "Run out (assist)", points: "6 points" },
  { category: "Multiplier", action: "Captain", points: "2x total points" },
  { category: "Multiplier", action: "Vice-Captain", points: "1.5x total points" },
];

// ─── FAQs ────────────────────────────────────────────────────────────────────

export const faqs: FAQ[] = [
  { question: "What is Play By Stats?", answer: "Play By Stats is India's free cricket entertainment platform where you can build your cricket team, compete with friends, and track your performance. It is 100% free forever with no hidden costs, deposits, or entry fees. The platform is designed purely for fun and entertainment." },
  { question: "Is it really free to play?", answer: "Yes, absolutely! Play By Stats is completely free. There are no entry fees, no premium subscriptions, no in-app purchases, and no virtual currency. All features are unlocked for every user from day one." },
  { question: "How do I create a team?", answer: "After signing up, browse the available matches, select a match, and start building your team. You get 100 credits to select 11 players from both teams. Choose a Captain (2x points) and Vice-Captain (1.5x points) to maximize your score." },
  { question: "How are points calculated?", answer: "Points are calculated based on real match performances. Batsmen earn points for runs, boundaries, and milestones. Bowlers earn points for wickets and maiden overs. Fielders earn points for catches, stumpings, and run-outs. Visit our Scoring System page for full details." },
  { question: "Can I join multiple contests for the same match?", answer: "Yes! You can create multiple teams and join different contests for the same match. Each contest has its own leaderboard and rankings." },
  { question: "Is this an entertainment platform?", answer: "Yes. Play By Stats is a free-to-play cricket entertainment platform. No real money is involved at any stage. There are no entry fees, no deposits, and no cash prizes. It is designed purely for fun and entertainment." },
  { question: "What is the minimum age to play?", answer: "You must be at least 18 years old to register and use Play By Stats. Age verification may be required." },
  { question: "How do I contact support?", answer: "You can reach us through our Contact page or email us at support@playbystats.com. Our support team typically responds within 24 hours." },
  { question: "Can I play on mobile?", answer: "Yes! Play By Stats is fully responsive and works perfectly on all devices — mobile phones, tablets, and desktops. No app download is required." },
  { question: "How do I become a better player?", answer: "Check out our How to Play guide and educational resources. Study player form, pitch conditions, and head-to-head records. Practice regularly and learn from the leaderboard toppers' strategies." },
];


// ─── Team Colors ─────────────────────────────────────────────────────────────

export const teamColors: Record<string, { primary: string; secondary: string; text: string }> = {
  MS: { primary: "#004BA0", secondary: "#D4A843", text: "#FFFFFF" },
  CC: { primary: "#FCCA06", secondary: "#0081E9", text: "#000000" },
  BW: { primary: "#EC1C24", secondary: "#2B2A29", text: "#FFFFFF" },
  KT: { primary: "#3A225D", secondary: "#B3A123", text: "#FFFFFF" },
  DD: { primary: "#004C93", secondary: "#EF1B23", text: "#FFFFFF" },
  RG: { primary: "#EA1A85", secondary: "#254AA5", text: "#FFFFFF" },
  PP: { primary: "#ED1B24", secondary: "#A7A9AC", text: "#FFFFFF" },
  HH: { primary: "#FF822A", secondary: "#000000", text: "#FFFFFF" },
  GG: { primary: "#1C1C1C", secondary: "#A0E6FF", text: "#FFFFFF" },
  LL: { primary: "#A72056", secondary: "#FFCC00", text: "#FFFFFF" },
  IND: { primary: "#0066B3", secondary: "#FF9933", text: "#FFFFFF" },
  AUS: { primary: "#FFD700", secondary: "#003831", text: "#000000" },
};

// ─── Helper Functions ────────────────────────────────────────────────────────

export function getMatchById(id: number): Match | undefined {
  return matches.find(m => m.id === id);
}

export function getContestsByMatch(matchId: number): Contest[] {
  return contests.filter(c => c.matchId === matchId);
}

export function getPlayersByMatchId(matchId: number): Player[] {
  return playersByMatch[matchId] ?? [];
}

export function formatMatchDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short", year: "numeric" });
}

export function formatMatchTime(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });
}

export function getRoleBadgeColor(role: string): string {
  switch (role) {
    case "Batsman": return "bg-blue-100 text-blue-800";
    case "Bowler": return "bg-red-100 text-red-800";
    case "All-Rounder": return "bg-purple-100 text-purple-800";
    case "Wicket-Keeper": return "bg-amber-100 text-amber-800";
    default: return "bg-gray-100 text-gray-800";
  }
}
