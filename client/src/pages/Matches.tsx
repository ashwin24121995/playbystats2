import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Clock, MapPin, Trophy, Radio, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";
import { matches, formatMatchDate, formatMatchTime, teamColors } from "@/data/staticData";

const tabs = [
  { key: "all", label: "All Matches" },
  { key: "upcoming", label: "Upcoming" },
  { key: "live", label: "Live" },
  { key: "completed", label: "Completed" },
];

export default function Matches() {
  const [activeTab, setActiveTab] = useState("all");
  const filtered = activeTab === "all" ? matches : matches.filter(m => m.status === activeTab);

  return (
    <PageLayout>
      <section className="gradient-hero text-white py-12 lg:py-16">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Matches</h1>
            <p className="text-white/70 max-w-xl mx-auto">Browse upcoming, live, and completed matches. Select a match to build your dream team.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="container">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeTab === tab.key
                    ? "bg-primary text-white shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <Trophy className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p>No matches found for this filter.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((match, i) => {
                const t1Color = teamColors[match.team1Short] ?? { primary: "#333", secondary: "#666", text: "#fff" };
                const t2Color = teamColors[match.team2Short] ?? { primary: "#333", secondary: "#666", text: "#fff" };
                return (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 group">
                      <div className="h-1.5 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${t1Color.primary}, ${t2Color.primary})` }} />
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">{match.tournament}</span>
                          {match.status === "live" && (
                            <span className="flex items-center gap-1 text-xs font-medium text-red-600 bg-red-50 px-2.5 py-1 rounded-full">
                              <Radio className="w-3 h-3 animate-pulse" /> LIVE
                            </span>
                          )}
                          {match.status === "completed" && (
                            <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                              <CheckCircle2 className="w-3 h-3" /> Completed
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between my-5">
                          <div className="text-center flex-1">
                            <div className="w-16 h-16 rounded-xl mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg shadow-md" style={{ backgroundColor: t1Color.primary }}>
                              {match.team1Short}
                            </div>
                            <div className="text-sm font-medium">{match.team1}</div>
                            {match.team1Score && <div className="text-xs text-muted-foreground mt-1">{match.team1Score}</div>}
                          </div>
                          <div className="px-3">
                            <div className="text-xs font-bold text-muted-foreground bg-muted px-3 py-1.5 rounded-full">VS</div>
                          </div>
                          <div className="text-center flex-1">
                            <div className="w-16 h-16 rounded-xl mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg shadow-md" style={{ backgroundColor: t2Color.primary }}>
                              {match.team2Short}
                            </div>
                            <div className="text-sm font-medium">{match.team2}</div>
                            {match.team2Score && <div className="text-xs text-muted-foreground mt-1">{match.team2Score}</div>}
                          </div>
                        </div>

                        {match.result && (
                          <div className="text-center text-sm font-medium text-green-700 bg-green-50 rounded-lg py-2 mb-3">{match.result}</div>
                        )}

                        <div className="flex items-center justify-between pt-3 border-t border-border/50">
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                              <Clock className="w-3.5 h-3.5" />
                              {formatMatchDate(match.matchDate)} · {formatMatchTime(match.matchDate)}
                            </div>
                            {match.venue && (
                              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                <MapPin className="w-3.5 h-3.5" />
                                <span className="truncate max-w-[180px]">{match.venue}</span>
                              </div>
                            )}
                          </div>
                          {match.status === "upcoming" && (
                            <Link href={`/team-builder/${match.id}`}>
                              <Button size="sm" className="rounded-full text-xs">Create Team</Button>
                            </Link>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
