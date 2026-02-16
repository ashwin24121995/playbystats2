import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Trophy, Users, Radio, CheckCircle2, Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import PageLayout from "@/components/layout/PageLayout";
import { contests, matches, teamColors } from "@/data/staticData";
import { toast } from "sonner";

export default function Contests() {
  const [filter, setFilter] = useState<string>("all");
  const filtered = filter === "all" ? contests : contests.filter(c => c.status === filter);

  const handleJoin = (contestName: string) => {
    toast.success(`Joined "${contestName}" successfully! This is a demo — in the full version, you'd select a team to enter.`);
  };

  return (
    <PageLayout>
      <section className="gradient-hero text-white py-12 lg:py-16">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Contests</h1>
            <p className="text-white/70 max-w-xl mx-auto">Browse and join free contests for upcoming and live matches. All contests are 100% free.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="container">
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
            {[
              { key: "all", label: "All Contests" },
              { key: "open", label: "Open" },
              { key: "live", label: "Live" },
              { key: "completed", label: "Completed" },
            ].map(tab => (
              <button key={tab.key} onClick={() => setFilter(tab.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${filter === tab.key ? "bg-primary text-white shadow-md" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                {tab.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-muted-foreground">
              <Trophy className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p>No contests found for this filter.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((contest, i) => {
                const match = matches.find(m => m.id === contest.matchId);
                const fillPercent = (contest.currentParticipants / contest.maxParticipants) * 100;
                const t1Color = teamColors[match?.team1Short ?? ""] ?? { primary: "#333" };
                const t2Color = teamColors[match?.team2Short ?? ""] ?? { primary: "#333" };

                return (
                  <motion.div key={contest.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50">
                      <div className="h-1.5 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${t1Color.primary}, ${t2Color.primary})` }} />
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-sm font-semibold truncate pr-2">{contest.name}</h3>
                          {contest.status === "live" && (
                            <span className="flex items-center gap-1 text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full shrink-0">
                              <Radio className="w-3 h-3 animate-pulse" /> LIVE
                            </span>
                          )}
                          {contest.status === "completed" && (
                            <span className="flex items-center gap-1 text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full shrink-0">
                              <CheckCircle2 className="w-3 h-3" /> Done
                            </span>
                          )}
                          {contest.status === "open" && (
                            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full shrink-0">Open</span>
                          )}
                        </div>

                        {match && (
                          <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                            <div className="w-5 h-5 rounded flex items-center justify-center text-white text-[8px] font-bold" style={{ backgroundColor: t1Color.primary }}>{match.team1Short}</div>
                            <span>vs</span>
                            <div className="w-5 h-5 rounded flex items-center justify-center text-white text-[8px] font-bold" style={{ backgroundColor: t2Color.primary }}>{match.team2Short}</div>
                            <span className="ml-1">{match.tournament}</span>
                          </div>
                        )}

                        <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{contest.description}</p>

                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="p-2.5 rounded-lg bg-muted/50 text-center">
                            <div className="text-xs text-muted-foreground">Entry Fee</div>
                            <div className="text-sm font-bold text-green-600">FREE</div>
                          </div>
                          <div className="p-2.5 rounded-lg bg-muted/50 text-center">
                            <div className="text-xs text-muted-foreground">Prize</div>
                            <div className="text-xs font-medium truncate">{contest.prizeDescription}</div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="flex justify-between text-xs text-muted-foreground mb-1.5">
                            <span>{contest.currentParticipants.toLocaleString()} joined</span>
                            <span>{contest.maxParticipants.toLocaleString()} spots</span>
                          </div>
                          <Progress value={fillPercent} className="h-1.5" />
                        </div>

                        {contest.status === "open" ? (
                          <Button onClick={() => handleJoin(contest.name)} className="w-full rounded-full" size="sm">
                            Join Contest Free
                            <ArrowRight className="w-3.5 h-3.5 ml-1" />
                          </Button>
                        ) : (
                          <Button variant="outline" className="w-full rounded-full" size="sm" disabled>
                            {contest.status === "live" ? "In Progress" : "Contest Ended"}
                          </Button>
                        )}
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
