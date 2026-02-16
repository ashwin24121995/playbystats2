import { motion } from "framer-motion";
import { Zap, Target, Shield, Crown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";
import { scoringRules } from "@/data/staticData";

const categories = ["Batting", "Bowling", "Fielding", "Multiplier"];
const categoryIcons: Record<string, typeof Zap> = { Batting: Zap, Bowling: Target, Fielding: Shield, Multiplier: Crown };
const categoryColors: Record<string, string> = { Batting: "bg-blue-50 text-blue-600", Bowling: "bg-red-50 text-red-600", Fielding: "bg-green-50 text-green-600", Multiplier: "bg-amber-50 text-amber-600" };

export default function Scoring() {
  return (
    <PageLayout>
      <section className="gradient-hero text-white py-12 lg:py-16">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Scoring System</h1>
            <p className="text-white/70 max-w-xl mx-auto">Understand how points are calculated for every action on the field. Our scoring system is transparent and fair.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="container max-w-4xl">
          <div className="space-y-8">
            {categories.map((cat, ci) => {
              const Icon = categoryIcons[cat] ?? Zap;
              const color = categoryColors[cat] ?? "bg-gray-50 text-gray-600";
              const rules = scoringRules.filter(r => r.category === cat);
              return (
                <motion.div key={cat} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.1 }}>
                  <Card className="border-border/50 overflow-hidden">
                    <div className="p-5 flex items-center gap-3 border-b border-border/50 bg-muted/20">
                      <div className={`w-10 h-10 rounded-xl ${color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>{cat}</h2>
                    </div>
                    <CardContent className="p-0">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border/30 bg-muted/10">
                            <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider py-2.5 px-5">Action</th>
                            <th className="text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider py-2.5 px-5">Points</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rules.map((rule, i) => (
                            <tr key={i} className="border-b border-border/20 last:border-0 hover:bg-muted/10 transition-colors">
                              <td className="py-3 px-5 text-sm">{rule.action}</td>
                              <td className="py-3 px-5 text-sm font-semibold text-primary text-right">{rule.points}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-10 p-6 rounded-2xl bg-primary/5 border border-primary/10">
            <h3 className="text-lg font-semibold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Important Notes</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />Points are calculated based on actual match performances from official scorecards.</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />Captain earns 2x points and Vice-Captain earns 1.5x points on their total score.</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />Bonus points for milestones (half-century, century, etc.) are added on top of per-run points.</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />Economy rate bonuses apply only to bowlers who bowl a minimum of 2 overs.</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
