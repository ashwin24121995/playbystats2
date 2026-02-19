import { motion } from "framer-motion";
import {
  Trophy, Users, Shield, Heart, Target, BookOpen, Award, Zap,
  Smartphone, MousePointerClick, Eye, Lock, BarChart3, Layers,
  CheckCircle2, Globe, Sparkles, Clock, Headphones, Star
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import PageLayout from "@/components/layout/PageLayout";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function About() {
  return (
    <PageLayout>
      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="gradient-hero text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-primary/10 to-transparent blur-3xl" />
        </div>
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Cricket Entertainment for <span className="text-yellow-400">Everyone</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-2xl mx-auto">
              Play By Stats is India's free cricket entertainment platform, built with a mission to make cricket fun accessible to every cricket enthusiast — completely free of charge.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── Who We Are ───────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeIn} custom={0}>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Who We Are</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                  A Team of Cricket Enthusiasts
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Play By Stats was created by a passionate team of cricket lovers who believe that every fan deserves the opportunity to experience the joy of building their own team and competing with others — without having to worry about money.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our platform is designed to be educational, entertaining, and community-driven. Whether you're a seasoned cricket analyst or a newcomer to the sport, Play By Stats provides the tools and resources you need to enjoy cricket entertainment.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to keeping this platform 100% free forever. There are no hidden charges, no premium tiers, and no in-app purchases. Every feature is available to every user from day one.
                </p>
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Heart, label: "Community First", desc: "Built for cricket fans", color: "bg-red-50 text-red-600" },
                  { icon: Shield, label: "Safe & Secure", desc: "Your data is protected", color: "bg-blue-50 text-blue-600" },
                  { icon: Globe, label: "Open to All", desc: "No geographic restrictions", color: "bg-green-50 text-green-600" },
                  { icon: Sparkles, label: "Always Free", desc: "No hidden costs ever", color: "bg-yellow-50 text-yellow-600" },
                ].map((item, i) => (
                  <motion.div key={item.label} variants={fadeIn} custom={i}>
                    <Card className="h-full border-border/50 hover:shadow-md transition-all group">
                      <CardContent className="p-5">
                        <div className={`w-10 h-10 rounded-lg ${item.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                          <item.icon className="w-5 h-5" />
                        </div>
                        <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
                        <p className="text-muted-foreground text-xs">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── What We Offer ────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              A Complete Cricket Entertainment Experience
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Everything you need to enjoy cricket — all in one place, all completely free.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Users, title: "Team Building", desc: "Select 11 players from match squads within a 100-credit budget. Choose from batsmen, bowlers, all-rounders, and wicket-keepers to build your ideal team.", color: "bg-blue-50 text-blue-600" },
              { icon: Trophy, title: "Free Contests", desc: "Join contests for every match with zero entry fees. Compete with other cricket enthusiasts and see how your team performs against theirs.", color: "bg-yellow-50 text-yellow-600" },
              { icon: BarChart3, title: "Live Scoring", desc: "Track your team's performance in real-time with our comprehensive scoring system. Watch your points update as the match progresses.", color: "bg-green-50 text-green-600" },
              { icon: Award, title: "Leaderboards", desc: "Climb the rankings and earn bragging rights. Our leaderboards track performance across matches so you can see how you stack up.", color: "bg-purple-50 text-purple-600" },
              { icon: BookOpen, title: "Learning Resources", desc: "Access how-to-play guides, strategy tutorials, player analysis tips, and cricket knowledge resources to improve your understanding.", color: "bg-orange-50 text-orange-600" },
              { icon: Target, title: "Detailed Analytics", desc: "Get comprehensive performance analytics for your teams. Track your strengths, identify patterns, and refine your strategy over time.", color: "bg-red-50 text-red-600" },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="h-full border-border/50 hover:shadow-lg transition-all group">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── User-Friendly Experience ─────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">User-Friendly</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Designed for Everyone
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Our platform is built with simplicity at its core. No complicated menus, no confusing interfaces — just a smooth, intuitive experience.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { icon: Smartphone, title: "Mobile-First Design", desc: "Our platform is fully responsive and works seamlessly on any device — phone, tablet, or desktop. Play anytime, anywhere." },
              { icon: MousePointerClick, title: "Intuitive Navigation", desc: "Every feature is just a click away. Our clean, organized layout means you spend less time figuring things out and more time enjoying cricket." },
              { icon: Clock, title: "Quick Setup", desc: "Create your account in seconds and start building your team immediately. No lengthy registration forms or verification delays." },
              { icon: Headphones, title: "Dedicated Support", desc: "Have a question? Our support team is available via email to help you with anything. We respond promptly and care about your experience." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-md transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Easy & Transparent ───────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">Easy & Transparent</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              No Surprises, No Hidden Costs
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              We believe in complete transparency. What you see is what you get — a free, fair, and fun cricket platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Eye, title: "Transparent Scoring", desc: "Our scoring system is published openly. Every point is calculated based on clear, documented rules that anyone can verify." },
              { icon: Lock, title: "No Hidden Fees", desc: "There are zero charges — no entry fees, no deposits, no premium tiers, no in-app purchases. The platform is 100% free." },
              { icon: Shield, title: "Fair Play Guaranteed", desc: "Our fair play policy ensures a level playing field for all users. Anti-cheating measures protect the integrity of every contest." },
              { icon: Layers, title: "Simple Rules", desc: "Our rules are straightforward and easy to understand. No complex terms, no fine print — just clear guidelines for everyone." },
              { icon: CheckCircle2, title: "Honest Communication", desc: "We clearly state that this is an entertainment platform. No misleading claims, no exaggerated promises — just honest fun." },
              { icon: Star, title: "Quality Experience", desc: "We invest in building a high-quality platform with reliable performance, clean design, and regular updates to improve your experience." },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Card className="h-full border-border/50 hover:shadow-md transition-all text-center group">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Platform Highlights ──────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Platform Highlights</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Entry Fee", value: "₹0", sub: "Always Free" },
              { label: "Platform", value: "100%", sub: "Entertainment" },
              { label: "Age Requirement", value: "18+", sub: "Verified Users" },
            ].map((fact, i) => (
              <motion.div key={fact.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-8 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md transition-all">
                <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-heading)" }}>{fact.value}</div>
                <div className="text-lg font-semibold mb-1">{fact.label}</div>
                <div className="text-sm text-muted-foreground">{fact.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 gradient-hero text-white relative overflow-hidden">
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Join the Cricket Fun Today
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-8 text-lg">
              Start building your team and enjoy cricket entertainment — completely free, forever.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/how-to-play">
                <Button size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 shadow-xl text-base font-semibold px-8 h-12 w-full sm:w-auto">
                  Learn How to Play
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 text-base px-8 h-12 w-full sm:w-auto bg-transparent">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
