import { useState, useMemo } from "react";
import { useParams } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Users, Star, Crown, Award, CheckCircle2, X, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import PageLayout from "@/components/layout/PageLayout";
import { getMatchById, getPlayersByMatchId, getRoleBadgeColor, teamColors, type Player } from "@/data/staticData";
import { toast } from "sonner";

type RoleFilter = "All" | "Batsman" | "Bowler" | "All-Rounder" | "Wicket-Keeper";

export default function TeamBuilder() {
  const params = useParams<{ matchId: string }>();
  const matchId = parseInt(params.matchId ?? "1");
  const match = getMatchById(matchId);
  const allPlayers = getPlayersByMatchId(matchId);

  const [selectedPlayers, setSelectedPlayers] = useState<Player[]>([]);
  const [captainId, setCaptainId] = useState<number | null>(null);
  const [viceCaptainId, setViceCaptainId] = useState<number | null>(null);
  const [roleFilter, setRoleFilter] = useState<RoleFilter>("All");
  const [teamFilter, setTeamFilter] = useState<string>("All");
  const [showTeamPreview, setShowTeamPreview] = useState(false);

  const totalCredits = useMemo(() => selectedPlayers.reduce((sum, p) => sum + p.credits, 0), [selectedPlayers]);
  const remainingCredits = 100 - totalCredits;

  const filteredPlayers = useMemo(() => {
    let result = allPlayers;
    if (roleFilter !== "All") result = result.filter(p => p.role === roleFilter);
    if (teamFilter !== "All") result = result.filter(p => p.teamShort === teamFilter);
    return result;
  }, [allPlayers, roleFilter, teamFilter]);

  const teams = useMemo(() => {
    const set = new Set(allPlayers.map(p => p.teamShort));
    return ["All", ...Array.from(set)];
  }, [allPlayers]);

  const togglePlayer = (player: Player) => {
    const isSelected = selectedPlayers.some(p => p.id === player.id);
    if (isSelected) {
      setSelectedPlayers(prev => prev.filter(p => p.id !== player.id));
      if (captainId === player.id) setCaptainId(null);
      if (viceCaptainId === player.id) setViceCaptainId(null);
    } else {
      if (selectedPlayers.length >= 11) { toast.error("Maximum 11 players allowed"); return; }
      if (totalCredits + player.credits > 100) { toast.error("Not enough credits"); return; }
      // Max 7 from one team
      const sameTeamCount = selectedPlayers.filter(p => p.teamShort === player.teamShort).length;
      if (sameTeamCount >= 7) { toast.error("Maximum 7 players from one team"); return; }
      setSelectedPlayers(prev => [...prev, player]);
    }
  };

  const handleSaveTeam = () => {
    if (selectedPlayers.length !== 11) { toast.error("Select exactly 11 players"); return; }
    if (!captainId) { toast.error("Select a Captain"); return; }
    if (!viceCaptainId) { toast.error("Select a Vice-Captain"); return; }
    toast.success("Team saved successfully! This is a demo — in the full version, your team would be saved to your account.");
    setShowTeamPreview(true);
  };

  if (!match) {
    return (
      <PageLayout>
        <div className="container py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Match Not Found</h2>
          <p className="text-muted-foreground mb-6">Players are available for Match 1 (MI vs CSK) and Match 2 (RCB vs KKR) in this demo.</p>
          <Link href="/matches"><Button className="rounded-full">Browse Matches</Button></Link>
        </div>
      </PageLayout>
    );
  }

  if (allPlayers.length === 0) {
    return (
      <PageLayout>
        <div className="container py-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Players Not Available</h2>
          <p className="text-muted-foreground mb-6">Player data is available for MI vs CSK and RCB vs KKR matches in this demo.</p>
          <Link href="/team-builder/1"><Button className="rounded-full mr-2">MI vs CSK</Button></Link>
          <Link href="/team-builder/2"><Button variant="outline" className="rounded-full">RCB vs KKR</Button></Link>
        </div>
      </PageLayout>
    );
  }

  const t1Color = teamColors[match.team1Short] ?? { primary: "#333" };
  const t2Color = teamColors[match.team2Short] ?? { primary: "#333" };

  return (
    <PageLayout>
      {/* Header */}
      <section className="gradient-hero text-white py-6 lg:py-8">
        <div className="container">
          <div className="flex items-center gap-3 mb-3">
            <Link href="/matches"><span className="text-white/60 hover:text-white transition-colors"><ArrowLeft className="w-5 h-5" /></span></Link>
            <h1 className="text-xl md:text-2xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Create Your Team</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: t1Color.primary }}>{match.team1Short}</div>
            <span className="text-white/60 text-sm">vs</span>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ backgroundColor: t2Color.primary }}>{match.team2Short}</div>
            <span className="text-sm text-white/60 ml-2">{match.tournament}</span>
          </div>
        </div>
      </section>

      <section className="py-6 lg:py-8">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Player List */}
            <div className="lg:col-span-2">
              {/* Budget Bar */}
              <Card className="mb-4 border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-4">
                      <div><span className="text-sm text-muted-foreground">Players</span><div className="text-lg font-bold">{selectedPlayers.length}/11</div></div>
                      <div className="w-px h-8 bg-border" />
                      <div><span className="text-sm text-muted-foreground">Credits Left</span><div className="text-lg font-bold text-primary">{remainingCredits}</div></div>
                    </div>
                    <Button onClick={handleSaveTeam} disabled={selectedPlayers.length !== 11 || !captainId || !viceCaptainId} className="rounded-full" size="sm">
                      Save Team
                    </Button>
                  </div>
                  <Progress value={(selectedPlayers.length / 11) * 100} className="h-2" />
                </CardContent>
              </Card>

              {/* Filters */}
              <div className="flex flex-wrap gap-2 mb-4">
                {(["All", "Batsman", "Bowler", "All-Rounder", "Wicket-Keeper"] as RoleFilter[]).map(role => (
                  <button key={role} onClick={() => setRoleFilter(role)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${roleFilter === role ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                    {role}
                  </button>
                ))}
                <div className="w-px h-6 bg-border self-center mx-1" />
                {teams.map(t => (
                  <button key={t} onClick={() => setTeamFilter(t)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${teamFilter === t ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
                    {t}
                  </button>
                ))}
              </div>

              {/* Player Cards */}
              <div className="space-y-2">
                {filteredPlayers.map(player => {
                  const isSelected = selectedPlayers.some(p => p.id === player.id);
                  const isCaptain = captainId === player.id;
                  const isVC = viceCaptainId === player.id;
                  return (
                    <motion.div key={player.id} layout initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <Card className={`border transition-all cursor-pointer ${isSelected ? "border-primary/50 bg-primary/5 shadow-sm" : "border-border/50 hover:border-border"}`}
                        onClick={() => togglePlayer(player)}>
                        <CardContent className="p-3 flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 ${isSelected ? "ring-2 ring-primary ring-offset-2" : ""}`}
                            style={{ backgroundColor: teamColors[player.teamShort]?.primary ?? "#333" }}>
                            {player.imageInitials}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-medium truncate">{player.name}</span>
                              {isCaptain && <Badge variant="default" className="text-[10px] py-0 px-1.5 bg-amber-500">C</Badge>}
                              {isVC && <Badge variant="default" className="text-[10px] py-0 px-1.5 bg-blue-500">VC</Badge>}
                            </div>
                            <div className="flex items-center gap-2 mt-0.5">
                              <span className="text-xs text-muted-foreground">{player.teamShort}</span>
                              <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${getRoleBadgeColor(player.role)}`}>{player.role}</span>
                            </div>
                          </div>
                          <div className="text-right shrink-0">
                            <div className="text-sm font-bold">{player.credits} Cr</div>
                            <div className="text-xs text-muted-foreground">{player.points} pts</div>
                          </div>
                          <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${isSelected ? "bg-primary border-primary" : "border-border"}`}>
                            {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Team Preview Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-20">
                <Card className="border-border/50">
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Your Team ({selectedPlayers.length}/11)</h3>
                    {selectedPlayers.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <Users className="w-10 h-10 mx-auto mb-2 opacity-30" />
                        <p className="text-sm">Select players to build your team</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {selectedPlayers.map(player => (
                          <div key={player.id} className="flex items-center gap-2 p-2 rounded-lg bg-muted/50">
                            <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                              style={{ backgroundColor: teamColors[player.teamShort]?.primary ?? "#333" }}>
                              {player.imageInitials}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-xs font-medium truncate">{player.name}</div>
                              <div className="text-[10px] text-muted-foreground">{player.role}</div>
                            </div>
                            <div className="flex gap-1 shrink-0">
                              <button
                                onClick={(e) => { e.stopPropagation(); setCaptainId(captainId === player.id ? null : player.id); if (viceCaptainId === player.id) setViceCaptainId(null); }}
                                className={`w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center transition-all ${captainId === player.id ? "bg-amber-500 text-white" : "bg-muted border border-border text-muted-foreground hover:border-amber-400"}`}
                                title="Captain (2x points)">C</button>
                              <button
                                onClick={(e) => { e.stopPropagation(); setViceCaptainId(viceCaptainId === player.id ? null : player.id); if (captainId === player.id) setCaptainId(null); }}
                                className={`w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center transition-all ${viceCaptainId === player.id ? "bg-blue-500 text-white" : "bg-muted border border-border text-muted-foreground hover:border-blue-400"}`}
                                title="Vice-Captain (1.5x points)">VC</button>
                            </div>
                            <button onClick={(e) => { e.stopPropagation(); togglePlayer(player); }} className="text-muted-foreground hover:text-destructive transition-colors">
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {selectedPlayers.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border/50 space-y-2">
                        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Total Credits</span><span className="font-medium">{totalCredits}/100</span></div>
                        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Captain</span><span className="font-medium">{captainId ? selectedPlayers.find(p => p.id === captainId)?.name : "Not selected"}</span></div>
                        <div className="flex justify-between text-sm"><span className="text-muted-foreground">Vice-Captain</span><span className="font-medium">{viceCaptainId ? selectedPlayers.find(p => p.id === viceCaptainId)?.name : "Not selected"}</span></div>
                      </div>
                    )}

                    {selectedPlayers.length === 11 && (!captainId || !viceCaptainId) && (
                      <div className="mt-3 flex items-start gap-2 p-2.5 rounded-lg bg-amber-50 text-amber-800">
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <p className="text-xs">Select a Captain (C) and Vice-Captain (VC) to save your team.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
