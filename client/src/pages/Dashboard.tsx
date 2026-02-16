import { motion } from "framer-motion";
import { Link } from "wouter";
import { Trophy, Users, Target, TrendingUp, BarChart3, Clock, Star, ArrowRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import PageLayout from "@/components/layout/PageLayout";
import { useAuth } from "@/_core/hooks/useAuth";
import { getLoginUrl } from "@/const";

const demoStats = {
  totalMatches: 24,
  totalContests: 38,
  contestsWon: 6,
  totalPoints: 3420,
  rank: 42,
  winRate: 15.8,
};

const recentTeams = [
  { id: 1, matchName: "MI vs CSK", tournament: "IPL 2026", points: 186, rank: 12, date: "Mar 22, 2026" },
  { id: 2, matchName: "RCB vs KKR", tournament: "IPL 2026", points: 214, rank: 5, date: "Mar 23, 2026" },
  { id: 3, matchName: "DC vs RR", tournament: "IPL 2026", points: 142, rank: 28, date: "Mar 24, 2026" },
  { id: 4, matchName: "IND vs AUS", tournament: "ICC Champions Trophy", points: 198, rank: 8, date: "Mar 28, 2026" },
];

export default function Dashboard() {
  const { user, isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <PageLayout>
        <div className="container py-20 text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
        </div>
      </PageLayout>
    );
  }

  if (!isAuthenticated) {
    return (
      <PageLayout>
        <div className="container py-20 text-center max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Sign In to View Dashboard</h2>
          <p className="text-muted-foreground mb-6">Access your teams, stats, and performance analytics by signing in to your account.</p>
          <a href={getLoginUrl()}>
            <Button className="rounded-full gradient-primary border-0 text-white px-8">
              Sign In to Continue
            </Button>
          </a>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      {/* Header */}
      <section className="gradient-hero text-white py-8 lg:py-12">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center text-white font-bold text-xl">
                {user?.name?.[0] ?? "U"}
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                  Welcome back, {user?.name ?? "Player"}!
                </h1>
                <p className="text-white/60 text-sm">Here's your performance overview</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 lg:py-12">
        <div className="container">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {[
              { label: "Matches", value: demoStats.totalMatches, icon: Trophy, color: "text-blue-600 bg-blue-50" },
              { label: "Contests", value: demoStats.totalContests, icon: Target, color: "text-purple-600 bg-purple-50" },
              { label: "Wins", value: demoStats.contestsWon, icon: Award, color: "text-amber-600 bg-amber-50" },
              { label: "Points", value: demoStats.totalPoints.toLocaleString(), icon: Star, color: "text-green-600 bg-green-50" },
              { label: "Global Rank", value: `#${demoStats.rank}`, icon: TrendingUp, color: "text-red-600 bg-red-50" },
              { label: "Win Rate", value: `${demoStats.winRate}%`, icon: BarChart3, color: "text-teal-600 bg-teal-50" },
            ].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                <Card className="border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-4 text-center">
                    <div className={`w-10 h-10 rounded-xl ${stat.color} flex items-center justify-center mx-auto mb-2`}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Teams */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Recent Teams</h2>
                <Link href="/matches">
                  <Button variant="ghost" size="sm" className="text-primary">View All <ArrowRight className="w-3.5 h-3.5 ml-1" /></Button>
                </Link>
              </div>
              <div className="space-y-3">
                {recentTeams.map((team, i) => (
                  <motion.div key={team.id} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                    <Card className="border-border/50 hover:shadow-sm transition-shadow">
                      <CardContent className="p-4 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-white font-bold text-sm shrink-0">
                          #{team.rank}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium">{team.matchName}</div>
                          <div className="text-xs text-muted-foreground">{team.tournament} · {team.date}</div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className="text-sm font-bold text-primary">{team.points} pts</div>
                          <div className="text-xs text-muted-foreground">Rank #{team.rank}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Quick Actions</h2>
              <div className="space-y-3">
                <Link href="/matches">
                  <Card className="border-border/50 hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Trophy className="w-5 h-5" />
                      </div>
                      <div className="flex-1"><div className="text-sm font-medium">Browse Matches</div><div className="text-xs text-muted-foreground">Find upcoming matches</div></div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/contests">
                  <Card className="border-border/50 hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Target className="w-5 h-5" />
                      </div>
                      <div className="flex-1"><div className="text-sm font-medium">Join Contests</div><div className="text-xs text-muted-foreground">Free contests available</div></div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/leaderboard">
                  <Card className="border-border/50 hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <TrendingUp className="w-5 h-5" />
                      </div>
                      <div className="flex-1"><div className="text-sm font-medium">Leaderboard</div><div className="text-xs text-muted-foreground">Check your ranking</div></div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </Link>
                <Link href="/how-to-play">
                  <Card className="border-border/50 hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group">
                    <CardContent className="p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div className="flex-1"><div className="text-sm font-medium">How to Play</div><div className="text-xs text-muted-foreground">Learn strategies</div></div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
