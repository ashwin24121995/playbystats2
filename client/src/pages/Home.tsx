import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Trophy, Users, BarChart3, Shield, Star, Zap, Target,
  ChevronRight, CheckCircle2, ArrowRight, Clock, Award,
  TrendingUp, Sparkles, Play, BookOpen, HeadphonesIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";
import { matches, testimonials, formatMatchDate, formatMatchTime, teamColors } from "@/data/staticData";
import { getLoginUrl } from "@/const";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  }),
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

function CricketBallSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="#DC2626" stroke="#B91C1C" strokeWidth="2"/>
      <path d="M30 20 C35 35, 35 65, 30 80" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M70 20 C65 35, 65 65, 70 80" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <line x1="28" y1="25" x2="32" y2="27" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="27" y1="35" x2="31" y2="36" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="27" y1="45" x2="31" y2="45" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="27" y1="55" x2="31" y2="55" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="28" y1="65" x2="32" y2="64" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="29" y1="75" x2="33" y2="73" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="68" y1="27" x2="72" y2="25" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="69" y1="36" x2="73" y2="35" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="69" y1="45" x2="73" y2="45" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="69" y1="55" x2="73" y2="55" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="68" y1="64" x2="72" y2="65" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="67" y1="73" x2="71" y2="75" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function StumpsSVG({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="20" width="4" height="95" rx="2" fill="#D4A843" stroke="#B8922E" strokeWidth="1"/>
      <rect x="38" y="20" width="4" height="95" rx="2" fill="#D4A843" stroke="#B8922E" strokeWidth="1"/>
      <rect x="61" y="20" width="4" height="95" rx="2" fill="#D4A843" stroke="#B8922E" strokeWidth="1"/>
      <rect x="12" y="18" width="56" height="4" rx="2" fill="#E8C55A" stroke="#D4A843" strokeWidth="0.5"/>
      <rect x="12" y="26" width="56" height="4" rx="2" fill="#E8C55A" stroke="#D4A843" strokeWidth="0.5"/>
    </svg>
  );
}

export default function Home() {
  const upcomingMatches = matches.filter(m => m.status === "upcoming").slice(0, 3);

  return (
    <PageLayout>
      {/* ─── Hero Section ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden gradient-hero text-white">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 opacity-10"
          >
            <CricketBallSVG className="w-64 h-64" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-10 -left-10 opacity-5"
          >
            <CricketBallSVG className="w-48 h-48" />
          </motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/10 to-transparent blur-3xl" />
        </div>

        <div className="container relative py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="text-center lg:text-left"
            >
              <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-white/90">100% Free Forever — No Hidden Costs</span>
              </motion.div>

              <motion.h1 variants={fadeUp} custom={1} className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                India's Free{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                  Dream Cricket
                </span>{" "}
                Platform
              </motion.h1>

              <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-white/70 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Build your dream cricket team, compete with friends, and track your performance. 
                No deposits, no entry fees — just pure cricket entertainment.
              </motion.p>

              <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a href={getLoginUrl()}>
                  <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl transition-all text-base font-semibold px-8 h-12 w-full sm:w-auto">
                    Get Started Free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <Link href="/how-to-play">
                  <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 text-base font-medium px-8 h-12 w-full sm:w-auto bg-transparent">
                    <Play className="w-4 h-4 mr-2" />
                    How to Play
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} custom={4} className="flex items-center gap-6 mt-8 justify-center lg:justify-start">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-white/60">No Entry Fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-white/60">Skill-Based</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-white/60">100% Legal</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Hero Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:flex justify-center items-center relative"
            >
              <div className="relative w-80 h-80">
                {/* Cricket field circle */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-500/20 to-green-700/20 border-2 border-green-400/20" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-green-500/10 to-green-700/10 border border-green-400/10" />
                {/* Center pitch */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-32 bg-amber-200/20 rounded-sm border border-amber-300/20" />
                {/* Stumps */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%]">
                  <StumpsSVG className="w-12 h-16" />
                </div>
                {/* Animated ball */}
                <motion.div
                  animate={{ x: [0, 60, -30, 0], y: [0, -40, 20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-16 right-12"
                >
                  <CricketBallSVG className="w-10 h-10 drop-shadow-lg" />
                </motion.div>
                {/* Stats badges */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-4 left-4 bg-white/10 backdrop-blur-md rounded-xl px-3 py-2 border border-white/10"
                >
                  <div className="text-xs text-white/60">Active Users</div>
                  <div className="text-lg font-bold text-white">50K+</div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-8 right-4 bg-white/10 backdrop-blur-md rounded-xl px-3 py-2 border border-white/10"
                >
                  <div className="text-xs text-white/60">Contests</div>
                  <div className="text-lg font-bold text-white">1000+</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80V40C240 0 480 0 720 40C960 80 1200 80 1440 40V80H0Z" fill="oklch(0.99 0.002 260)" />
          </svg>
        </div>
      </section>

      {/* ─── Stats Bar ────────────────────────────────────────────────── */}
      <section className="py-8 -mt-2">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { label: "Active Users", value: "50,000+", icon: Users },
              { label: "Matches Covered", value: "500+", icon: Trophy },
              { label: "Contests Played", value: "10,000+", icon: Target },
              { label: "Teams Created", value: "1,00,000+", icon: BarChart3 },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-5 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-shadow"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Features Section ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Everything You Need for Dream Cricket
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A complete platform designed for cricket enthusiasts who want to enjoy the thrill of dream cricket without any financial risk.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Trophy, title: "Build Your Dream Team", desc: "Select 11 players within a 100-credit budget. Choose from batsmen, bowlers, all-rounders, and wicket-keepers.", color: "bg-blue-50 text-blue-600" },
              { icon: Target, title: "Join Free Contests", desc: "Compete in unlimited free contests for every match. No entry fees, no deposits — ever.", color: "bg-green-50 text-green-600" },
              { icon: TrendingUp, title: "Track Performance", desc: "Real-time scoring, detailed analytics, and comprehensive performance tracking for every match.", color: "bg-purple-50 text-purple-600" },
              { icon: Award, title: "Climb Leaderboards", desc: "Compete for the top spot on global leaderboards. Earn bragging rights and achievement badges.", color: "bg-amber-50 text-amber-600" },
              { icon: Shield, title: "Fair & Transparent", desc: "Transparent scoring system, anti-cheating measures, and fair play policies for all users.", color: "bg-red-50 text-red-600" },
              { icon: BookOpen, title: "Learn & Improve", desc: "Comprehensive guides, strategy tutorials, and cricket knowledge resources to improve your game.", color: "bg-teal-50 text-teal-600" },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="h-full border-border/50 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Simple Steps
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              How It Works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Get started in minutes. Build your team, join contests, and start competing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Sign Up Free", desc: "Create your account in seconds. No payment required.", icon: Users },
              { step: "02", title: "Pick a Match", desc: "Browse upcoming matches and select one to play.", icon: Clock },
              { step: "03", title: "Build Your Team", desc: "Select 11 players within 100 credits. Pick Captain & Vice-Captain.", icon: Zap },
              { step: "04", title: "Compete & Win", desc: "Join contests and track your performance on the leaderboard.", icon: Trophy },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="text-center relative"
              >
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-primary/20" />
                )}
                <div className="w-20 h-20 rounded-2xl gradient-primary mx-auto mb-5 flex items-center justify-center shadow-lg relative z-10">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-xs font-bold text-primary mb-2">STEP {item.step}</div>
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Upcoming Matches ─────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-10"
          >
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                Live & Upcoming
              </span>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                Featured Matches
              </h2>
            </div>
            <Link href="/matches">
              <Button variant="outline" className="rounded-full hidden sm:flex">
                View All Matches
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingMatches.map((match, i) => {
              const t1Color = teamColors[match.team1Short] ?? { primary: "#333", secondary: "#666", text: "#fff" };
              const t2Color = teamColors[match.team2Short] ?? { primary: "#333", secondary: "#666", text: "#fff" };
              return (
                <motion.div
                  key={match.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link href={`/matches`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-border/50 group cursor-pointer">
                      <div className="h-1.5 bg-gradient-to-r" style={{ backgroundImage: `linear-gradient(to right, ${t1Color.primary}, ${t2Color.primary})` }} />
                      <CardContent className="p-5">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">{match.tournament}</span>
                          <span className="text-xs text-muted-foreground">{formatMatchDate(match.matchDate)}</span>
                        </div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-center flex-1">
                            <div className="w-14 h-14 rounded-xl mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg shadow-md" style={{ backgroundColor: t1Color.primary }}>
                              {match.team1Short}
                            </div>
                            <div className="text-sm font-medium truncate px-1">{match.team1}</div>
                          </div>
                          <div className="px-4">
                            <div className="text-xs font-bold text-muted-foreground bg-muted px-3 py-1.5 rounded-full">VS</div>
                          </div>
                          <div className="text-center flex-1">
                            <div className="w-14 h-14 rounded-xl mx-auto mb-2 flex items-center justify-center text-white font-bold text-lg shadow-md" style={{ backgroundColor: t2Color.primary }}>
                              {match.team2Short}
                            </div>
                            <div className="text-sm font-medium truncate px-1">{match.team2}</div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-3 border-t border-border/50">
                          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                            <Clock className="w-3.5 h-3.5" />
                            {formatMatchTime(match.matchDate)}
                          </div>
                          <span className="text-xs font-medium text-primary group-hover:underline">
                            Create Team →
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/matches">
              <Button variant="outline" className="rounded-full">
                View All Matches
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              What Our Users Say
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.slice(0, 6).map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Card className="h-full border-border/50 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-white text-sm font-bold">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{t.name}</div>
                        <div className="text-xs text-muted-foreground">{t.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ──────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 opacity-5"
          >
            <CricketBallSVG className="w-40 h-40" />
          </motion.div>
        </div>
        <div className="container relative text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Join thousands of cricket enthusiasts on India's premier free dream cricket platform. 
              No deposits, no entry fees — just pure cricket entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={getLoginUrl()}>
                <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 shadow-xl text-base font-semibold px-10 h-13 w-full sm:w-auto">
                  Start Playing Free
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <Link href="/how-to-play">
                <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 text-base px-8 h-13 w-full sm:w-auto bg-transparent">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
