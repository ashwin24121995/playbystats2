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

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

// ─── Static Matches ──────────────────────────────────────────────────────────

export const matches: Match[] = [
  { id: 1, team1: "Mumbai Indians", team1Short: "MI", team2: "Chennai Super Kings", team2Short: "CSK", tournament: "IPL 2026", venue: "Wankhede Stadium, Mumbai", matchDate: "2026-03-22T19:30:00", status: "upcoming" },
  { id: 2, team1: "Royal Challengers Bengaluru", team1Short: "RCB", team2: "Kolkata Knight Riders", team2Short: "KKR", tournament: "IPL 2026", venue: "M. Chinnaswamy Stadium, Bengaluru", matchDate: "2026-03-23T15:30:00", status: "upcoming" },
  { id: 3, team1: "Delhi Capitals", team1Short: "DC", team2: "Rajasthan Royals", team2Short: "RR", tournament: "IPL 2026", venue: "Arun Jaitley Stadium, Delhi", matchDate: "2026-03-24T19:30:00", status: "upcoming" },
  { id: 4, team1: "India", team1Short: "IND", team2: "Australia", team2Short: "AUS", tournament: "ICC Champions Trophy 2026", venue: "Narendra Modi Stadium, Ahmedabad", matchDate: "2026-03-28T14:00:00", status: "upcoming" },
  { id: 5, team1: "Punjab Kings", team1Short: "PBKS", team2: "Sunrisers Hyderabad", team2Short: "SRH", tournament: "IPL 2026", venue: "IS Bindra Stadium, Mohali", matchDate: "2026-03-25T19:30:00", status: "live", team1Score: "185/4 (18.2)", team2Score: "—" },
  { id: 6, team1: "Gujarat Titans", team1Short: "GT", team2: "Lucknow Super Giants", team2Short: "LSG", tournament: "IPL 2026", venue: "Narendra Modi Stadium, Ahmedabad", matchDate: "2026-03-20T19:30:00", status: "completed", team1Score: "192/5 (20)", team2Score: "178/8 (20)", result: "Gujarat Titans won by 14 runs" },
];

// ─── Static Players ──────────────────────────────────────────────────────────

export const playersByMatch: Record<number, Player[]> = {
  1: [
    { id: 1, name: "Rohit Sharma", team: "Mumbai Indians", teamShort: "MI", role: "Batsman", credits: 10, points: 156, imageInitials: "RS", runs: 542, wickets: 0, catches: 8 },
    { id: 2, name: "Ishan Kishan", team: "Mumbai Indians", teamShort: "MI", role: "Wicket-Keeper", credits: 9, points: 134, imageInitials: "IK", runs: 410, wickets: 0, catches: 15 },
    { id: 3, name: "Suryakumar Yadav", team: "Mumbai Indians", teamShort: "MI", role: "Batsman", credits: 10, points: 178, imageInitials: "SY", runs: 620, wickets: 0, catches: 6 },
    { id: 4, name: "Tilak Varma", team: "Mumbai Indians", teamShort: "MI", role: "Batsman", credits: 8, points: 112, imageInitials: "TV", runs: 380, wickets: 0, catches: 4 },
    { id: 5, name: "Hardik Pandya", team: "Mumbai Indians", teamShort: "MI", role: "All-Rounder", credits: 10, points: 198, imageInitials: "HP", runs: 420, wickets: 12, catches: 5 },
    { id: 6, name: "Tim David", team: "Mumbai Indians", teamShort: "MI", role: "All-Rounder", credits: 8, points: 96, imageInitials: "TD", runs: 290, wickets: 0, catches: 3 },
    { id: 7, name: "Jasprit Bumrah", team: "Mumbai Indians", teamShort: "MI", role: "Bowler", credits: 10, points: 210, imageInitials: "JB", runs: 12, wickets: 24, catches: 2 },
    { id: 8, name: "Piyush Chawla", team: "Mumbai Indians", teamShort: "MI", role: "Bowler", credits: 7, points: 78, imageInitials: "PC", runs: 20, wickets: 10, catches: 3 },
    { id: 9, name: "Gerald Coetzee", team: "Mumbai Indians", teamShort: "MI", role: "Bowler", credits: 8, points: 104, imageInitials: "GC", runs: 30, wickets: 14, catches: 1 },
    { id: 10, name: "Akash Madhwal", team: "Mumbai Indians", teamShort: "MI", role: "Bowler", credits: 7, points: 72, imageInitials: "AM", runs: 8, wickets: 9, catches: 2 },
    { id: 11, name: "Naman Dhir", team: "Mumbai Indians", teamShort: "MI", role: "Batsman", credits: 7, points: 64, imageInitials: "ND", runs: 220, wickets: 0, catches: 2 },
    { id: 12, name: "Ruturaj Gaikwad", team: "Chennai Super Kings", teamShort: "CSK", role: "Batsman", credits: 10, points: 168, imageInitials: "RG", runs: 580, wickets: 0, catches: 5 },
    { id: 13, name: "Devon Conway", team: "Chennai Super Kings", teamShort: "CSK", role: "Batsman", credits: 9, points: 142, imageInitials: "DC", runs: 490, wickets: 0, catches: 7 },
    { id: 14, name: "MS Dhoni", team: "Chennai Super Kings", teamShort: "CSK", role: "Wicket-Keeper", credits: 9, points: 120, imageInitials: "MD", runs: 320, wickets: 0, catches: 18 },
    { id: 15, name: "Shivam Dube", team: "Chennai Super Kings", teamShort: "CSK", role: "All-Rounder", credits: 9, points: 148, imageInitials: "SD", runs: 440, wickets: 6, catches: 4 },
    { id: 16, name: "Ravindra Jadeja", team: "Chennai Super Kings", teamShort: "CSK", role: "All-Rounder", credits: 10, points: 202, imageInitials: "RJ", runs: 380, wickets: 16, catches: 12 },
    { id: 17, name: "Moeen Ali", team: "Chennai Super Kings", teamShort: "CSK", role: "All-Rounder", credits: 8, points: 118, imageInitials: "MA", runs: 310, wickets: 8, catches: 3 },
    { id: 18, name: "Deepak Chahar", team: "Chennai Super Kings", teamShort: "CSK", role: "Bowler", credits: 8, points: 108, imageInitials: "DCh", runs: 40, wickets: 14, catches: 2 },
    { id: 19, name: "Matheesha Pathirana", team: "Chennai Super Kings", teamShort: "CSK", role: "Bowler", credits: 9, points: 156, imageInitials: "MP", runs: 10, wickets: 20, catches: 1 },
    { id: 20, name: "Maheesh Theekshana", team: "Chennai Super Kings", teamShort: "CSK", role: "Bowler", credits: 8, points: 98, imageInitials: "MT", runs: 15, wickets: 12, catches: 4 },
    { id: 21, name: "Rachin Ravindra", team: "Chennai Super Kings", teamShort: "CSK", role: "All-Rounder", credits: 8, points: 110, imageInitials: "RR", runs: 350, wickets: 4, catches: 5 },
    { id: 22, name: "Tushar Deshpande", team: "Chennai Super Kings", teamShort: "CSK", role: "Bowler", credits: 7, points: 82, imageInitials: "TDe", runs: 5, wickets: 11, catches: 1 },
  ],
  2: [
    { id: 23, name: "Virat Kohli", team: "Royal Challengers Bengaluru", teamShort: "RCB", role: "Batsman", credits: 11, points: 220, imageInitials: "VK", runs: 740, wickets: 0, catches: 10 },
    { id: 24, name: "Faf du Plessis", team: "Royal Challengers Bengaluru", teamShort: "RCB", role: "Batsman", credits: 9, points: 148, imageInitials: "FP", runs: 510, wickets: 0, catches: 8 },
    { id: 25, name: "Glenn Maxwell", team: "Royal Challengers Bengaluru", teamShort: "RCB", role: "All-Rounder", credits: 9, points: 162, imageInitials: "GM", runs: 420, wickets: 8, catches: 6 },
    { id: 26, name: "Rajat Patidar", team: "Royal Challengers Bengaluru", teamShort: "RCB", role: "Batsman", credits: 8, points: 118, imageInitials: "RP", runs: 390, wickets: 0, catches: 4 },
    { id: 27, name: "Dinesh Karthik", team: "Royal Challengers Bengaluru", teamShort: "RCB", role: "Wicket-Keeper", credits: 8, points: 102, imageInitials: "DK", runs: 280, wickets: 0, catches: 14 },
    { id: 28, name: "Wanindu Hasaranga", team: "Royal Challengers Bengaluru", teamShort: "RCB", role: "All-Rounder", credits: 9, points: 174, imageInitials: "WH", runs: 120, wickets: 18, catches: 5 },
    { id: 29, name: "Mohammed Siraj", team: "Royal Challengers Bengaluru", teamShort: "RCB", role: "Bowler", credits: 9, points: 146, imageInitials: "MS", runs: 20, wickets: 18, catches: 3 },
    { id: 30, name: "Harshal Patel", team: "Royal Challengers Bengaluru", teamShort: "RCB", role: "Bowler", credits: 8, points: 124, imageInitials: "HPa", runs: 60, wickets: 16, catches: 2 },
    { id: 31, name: "Josh Hazlewood", team: "Royal Challengers Bengaluru", teamShort: "RCB", role: "Bowler", credits: 9, points: 138, imageInitials: "JH", runs: 10, wickets: 17, catches: 4 },
    { id: 32, name: "Karn Sharma", team: "Royal Challengers Bengaluru", teamShort: "RCB", role: "Bowler", credits: 7, points: 76, imageInitials: "KS", runs: 30, wickets: 10, catches: 3 },
    { id: 33, name: "Cameron Green", team: "Royal Challengers Bengaluru", teamShort: "RCB", role: "All-Rounder", credits: 9, points: 152, imageInitials: "CG", runs: 360, wickets: 10, catches: 5 },
    { id: 34, name: "Shreyas Iyer", team: "Kolkata Knight Riders", teamShort: "KKR", role: "Batsman", credits: 10, points: 164, imageInitials: "SI", runs: 560, wickets: 0, catches: 7 },
    { id: 35, name: "Venkatesh Iyer", team: "Kolkata Knight Riders", teamShort: "KKR", role: "All-Rounder", credits: 8, points: 116, imageInitials: "VI", runs: 340, wickets: 6, catches: 4 },
    { id: 36, name: "Andre Russell", team: "Kolkata Knight Riders", teamShort: "KKR", role: "All-Rounder", credits: 10, points: 196, imageInitials: "AR", runs: 480, wickets: 14, catches: 6 },
    { id: 37, name: "Sunil Narine", team: "Kolkata Knight Riders", teamShort: "KKR", role: "All-Rounder", credits: 10, points: 208, imageInitials: "SN", runs: 420, wickets: 16, catches: 8 },
    { id: 38, name: "Phil Salt", team: "Kolkata Knight Riders", teamShort: "KKR", role: "Wicket-Keeper", credits: 9, points: 154, imageInitials: "PS", runs: 520, wickets: 0, catches: 12 },
    { id: 39, name: "Rinku Singh", team: "Kolkata Knight Riders", teamShort: "KKR", role: "Batsman", credits: 8, points: 126, imageInitials: "RSi", runs: 410, wickets: 0, catches: 3 },
    { id: 40, name: "Mitchell Starc", team: "Kolkata Knight Riders", teamShort: "KKR", role: "Bowler", credits: 10, points: 186, imageInitials: "MSt", runs: 30, wickets: 22, catches: 2 },
    { id: 41, name: "Varun Chakravarthy", team: "Kolkata Knight Riders", teamShort: "KKR", role: "Bowler", credits: 8, points: 132, imageInitials: "VC", runs: 10, wickets: 16, catches: 5 },
    { id: 42, name: "Harshit Rana", team: "Kolkata Knight Riders", teamShort: "KKR", role: "Bowler", credits: 7, points: 88, imageInitials: "HR", runs: 15, wickets: 11, catches: 1 },
    { id: 43, name: "Ramandeep Singh", team: "Kolkata Knight Riders", teamShort: "KKR", role: "All-Rounder", credits: 7, points: 74, imageInitials: "RaS", runs: 180, wickets: 4, catches: 3 },
    { id: 44, name: "Angkrish Raghuvanshi", team: "Kolkata Knight Riders", teamShort: "KKR", role: "Batsman", credits: 7, points: 62, imageInitials: "ARa", runs: 200, wickets: 0, catches: 2 },
  ],
};

// ─── Static Contests ─────────────────────────────────────────────────────────

export const contests: Contest[] = [
  { id: 1, matchId: 1, name: "MI vs CSK - Free Contest", description: "Free contest for Mumbai Indians vs Chennai Super Kings. Join and compete!", maxParticipants: 1000, currentParticipants: 847, entryFee: 0, prizeDescription: "Leaderboard Rankings & Bragging Rights", status: "open" },
  { id: 2, matchId: 1, name: "MI vs CSK - Mega Contest", description: "Mega free contest with higher competition!", maxParticipants: 5000, currentParticipants: 3241, entryFee: 0, prizeDescription: "Top Rankings & Achievement Badges", status: "open" },
  { id: 3, matchId: 2, name: "RCB vs KKR - Free Contest", description: "Free contest for RCB vs KKR. Show your cricket knowledge!", maxParticipants: 1000, currentParticipants: 612, entryFee: 0, prizeDescription: "Leaderboard Rankings & Bragging Rights", status: "open" },
  { id: 4, matchId: 2, name: "RCB vs KKR - Mega Contest", description: "Mega free contest with higher competition!", maxParticipants: 5000, currentParticipants: 2180, entryFee: 0, prizeDescription: "Top Rankings & Achievement Badges", status: "open" },
  { id: 5, matchId: 3, name: "DC vs RR - Free Contest", description: "Free contest for Delhi Capitals vs Rajasthan Royals!", maxParticipants: 1000, currentParticipants: 456, entryFee: 0, prizeDescription: "Leaderboard Rankings & Bragging Rights", status: "open" },
  { id: 6, matchId: 5, name: "PBKS vs SRH - Live Contest", description: "Live contest in progress!", maxParticipants: 1000, currentParticipants: 998, entryFee: 0, prizeDescription: "Leaderboard Rankings", status: "live" },
  { id: 7, matchId: 6, name: "GT vs LSG - Completed", description: "Contest completed. Check results!", maxParticipants: 1000, currentParticipants: 1000, entryFee: 0, prizeDescription: "Final Rankings Published", status: "completed" },
];

// ─── Static Leaderboard ──────────────────────────────────────────────────────

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, name: "CricketMaster99", totalPoints: 4520, matchesPlayed: 28, contestsWon: 12 },
  { rank: 2, name: "SixerKing", totalPoints: 4380, matchesPlayed: 26, contestsWon: 10 },
  { rank: 3, name: "BowlerBoss", totalPoints: 4210, matchesPlayed: 30, contestsWon: 9 },
  { rank: 4, name: "IPLGuru2026", totalPoints: 4050, matchesPlayed: 25, contestsWon: 8 },
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
  { question: "What is Squad Master Sports?", answer: "Squad Master Sports is India's free dream cricket platform where you can build your dream cricket team, compete with friends, and track your performance. It is 100% free forever with no hidden costs, deposits, or entry fees." },
  { question: "Is it really free to play?", answer: "Yes, absolutely! Squad Master Sports is completely free. There are no entry fees, no premium subscriptions, no in-app purchases, and no virtual currency. All features are unlocked for every user from day one." },
  { question: "How do I create a team?", answer: "After signing up, browse the available matches, select a match, and start building your team. You get 100 credits to select 11 players from both teams. Choose a Captain (2x points) and Vice-Captain (1.5x points) to maximize your score." },
  { question: "How are points calculated?", answer: "Points are calculated based on real match performances. Batsmen earn points for runs, boundaries, and milestones. Bowlers earn points for wickets and maiden overs. Fielders earn points for catches, stumpings, and run-outs. Visit our Scoring System page for full details." },
  { question: "Can I join multiple contests for the same match?", answer: "Yes! You can create multiple teams and join different contests for the same match. Each contest has its own leaderboard and rankings." },
  { question: "Is this platform legal in India?", answer: "Yes. Squad Master Sports is a skill-based gaming platform, which is legal in most Indian states. However, users from Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana are restricted from participating due to state-specific regulations." },
  { question: "What is the minimum age to play?", answer: "You must be at least 18 years old to register and use Squad Master Sports. Age verification may be required." },
  { question: "How do I contact support?", answer: "You can reach us through our Contact page, email us at support@squadmastersports.com, or message us on WhatsApp. Our support team typically responds within 24 hours." },
  { question: "Can I play on mobile?", answer: "Yes! Squad Master Sports is fully responsive and works perfectly on all devices — mobile phones, tablets, and desktops. No app download is required." },
  { question: "How do I become a better player?", answer: "Check out our How to Play guide and educational resources. Study player form, pitch conditions, and head-to-head records. Practice regularly and learn from the leaderboard toppers' strategies." },
];

// ─── Testimonials ────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  { name: "Rahul K.", location: "Mumbai", text: "Best free cricket platform I've ever used. The interface is clean and the scoring is accurate. Love competing with my friends!", rating: 5 },
  { name: "Priya S.", location: "Bengaluru", text: "Finally a platform where I can enjoy dream cricket without spending money. The educational content helped me improve my strategy.", rating: 5 },
  { name: "Amit P.", location: "Delhi", text: "Great platform for cricket enthusiasts. The team builder is intuitive and the leaderboards keep me coming back for more.", rating: 4 },
  { name: "Sneha R.", location: "Chennai", text: "I love how transparent the scoring system is. No hidden fees, no tricks. Just pure cricket fun!", rating: 5 },
  { name: "Vikram M.", location: "Hyderabad", text: "The live scoring feature is amazing. I can track my team's performance in real-time. Highly recommended!", rating: 5 },
  { name: "Ananya D.", location: "Kolkata", text: "As a cricket newbie, the How to Play guide was incredibly helpful. Now I'm in the top 100 on the leaderboard!", rating: 4 },
];

// ─── Team Colors ─────────────────────────────────────────────────────────────

export const teamColors: Record<string, { primary: string; secondary: string; text: string }> = {
  MI: { primary: "#004BA0", secondary: "#D4A843", text: "#FFFFFF" },
  CSK: { primary: "#FCCA06", secondary: "#0081E9", text: "#000000" },
  RCB: { primary: "#EC1C24", secondary: "#2B2A29", text: "#FFFFFF" },
  KKR: { primary: "#3A225D", secondary: "#B3A123", text: "#FFFFFF" },
  DC: { primary: "#004C93", secondary: "#EF1B23", text: "#FFFFFF" },
  RR: { primary: "#EA1A85", secondary: "#254AA5", text: "#FFFFFF" },
  PBKS: { primary: "#ED1B24", secondary: "#A7A9AC", text: "#FFFFFF" },
  SRH: { primary: "#FF822A", secondary: "#000000", text: "#FFFFFF" },
  GT: { primary: "#1C1C1C", secondary: "#A0E6FF", text: "#FFFFFF" },
  LSG: { primary: "#A72056", secondary: "#FFCC00", text: "#FFFFFF" },
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
