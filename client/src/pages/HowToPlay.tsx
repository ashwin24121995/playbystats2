import { motion } from "framer-motion";
import { Link } from "wouter";
import { Users, Trophy, Target, Zap, Star, Crown, BarChart3, BookOpen, ArrowRight, CheckCircle2, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";

export default function HowToPlay() {
  return (
    <PageLayout>
      <section className="gradient-hero text-white py-12 lg:py-16">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>How to Play</h1>
            <p className="text-white/70 max-w-xl mx-auto">Your complete guide to building winning teams and competing on Squad Master Sports.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="container max-w-4xl">
          {/* Steps */}
          <div className="space-y-8 mb-16">
            {[
              { step: 1, icon: Users, title: "Create Your Free Account", desc: "Sign up in seconds with your email. No payment required, no credit card needed. Your account gives you full access to all features on the platform.", tips: ["Use a valid email for account recovery", "Choose a unique username for the leaderboard", "Complete your profile for a personalized experience"] },
              { step: 2, icon: Trophy, title: "Browse Available Matches", desc: "Explore upcoming cricket matches from domestic leagues, international series, and other tournaments. Each match shows the teams, venue, date, and available contests.", tips: ["Check match timings to plan your team early", "Look for matches between teams you know well", "Live matches show real-time scores and updates"] },
              { step: 3, icon: Zap, title: "Build Your Team", desc: "Select 11 players from both teams within a 100-credit budget. Choose a balanced mix of batsmen, bowlers, all-rounders, and wicket-keepers.", tips: ["Balance your team across all roles", "Don't spend all credits on star players", "Check recent form and pitch conditions", "Maximum 7 players from one team"] },
              { step: 4, icon: Crown, title: "Pick Captain & Vice-Captain", desc: "Choose your Captain (2x points) and Vice-Captain (1.5x points) wisely. These selections can make or break your team's total score.", tips: ["Pick consistent performers as Captain", "All-rounders make great Captain choices", "Consider the match conditions for your picks"] },
              { step: 5, icon: Target, title: "Join Free Contests", desc: "Enter any number of free contests for each match. Compete against other players and climb the leaderboard with your cricket knowledge.", tips: ["Join multiple contests for more fun", "Try different team combinations", "All contests are 100% free to enter"] },
              { step: 6, icon: BarChart3, title: "Track Your Performance", desc: "Watch your points accumulate as the match progresses. Track live scores, player performances, and your position on the leaderboard in real-time.", tips: ["Check the live leaderboard during matches", "Analyze your team's performance after each match", "Learn from top-performing teams on the leaderboard"] },
            ].map((item, i) => (
              <motion.div key={item.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Card className="border-border/50 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-20 gradient-primary flex items-center justify-center py-4 md:py-0">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white">{item.step}</div>
                        </div>
                      </div>
                      <div className="flex-1 p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                            <item.icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-lg font-bold" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                        <div className="space-y-1.5">
                          {item.tips.map((tip, j) => (
                            <div key={j} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                              <span className="text-xs text-muted-foreground">{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Strategy Tips */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-center mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-3">Pro Tips</span>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Strategy & Tips</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { title: "Study Player Form", desc: "Check recent performances, batting averages, and bowling figures before selecting players. In-form players are more likely to score well." },
                { title: "Analyze Pitch Conditions", desc: "Different pitches favor different types of players. Flat pitches favor batsmen, while green pitches help bowlers." },
                { title: "Head-to-Head Records", desc: "Some players perform exceptionally well against certain teams. Check historical data for matchup advantages." },
                { title: "Weather & Toss Impact", desc: "Weather conditions and toss results can significantly impact match outcomes. Adjust your team accordingly." },
                { title: "Diversify Your Picks", desc: "Don't put all your eggs in one basket. Spread your selections across both teams for balanced scoring potential." },
                { title: "Learn from the Best", desc: "Study the teams of top leaderboard players. Analyze their selection patterns and strategies to improve your own game." },
              ].map((tip, i) => (
                <Card key={tip.title} className="border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-sm font-semibold mb-1">{tip.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{tip.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center p-8 rounded-2xl gradient-primary text-white">
            <h2 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Ready to Start Playing?</h2>
            <p className="text-white/70 mb-6 max-w-md mx-auto">Put your cricket knowledge to the test. Build your team and compete for free!</p>
            <div className="flex gap-3 justify-center">
              <Link href="/matches">
                <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90">
                  Browse Matches <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/scoring">
                <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 bg-transparent">
                  Scoring Rules
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
