import { motion } from "framer-motion";
import { Trophy, Users, Shield, Heart, Target, BookOpen, Award, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

export default function About() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="gradient-hero text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="container relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Dream Cricket for <span className="text-yellow-400">Everyone</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed">
              Squad Master Sports is India's premier free dream cricket platform, built with a mission to make dream cricket accessible to every cricket enthusiast — without any financial risk.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeIn} custom={0}>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Mission</span>
                <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Making Dream Cricket Accessible to All</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We believe that every cricket fan deserves the opportunity to experience the thrill of building their dream team and competing with others — without having to worry about money. That's why Squad Master Sports is, and always will be, 100% free.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our platform is designed to be educational, entertaining, and community-driven. Whether you're a seasoned cricket analyst or a newcomer to the sport, Squad Master Sports provides the tools and resources you need to enjoy dream cricket responsibly.
                </p>
              </motion.div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeIn} custom={1}>
                <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-4">Our Vision</span>
                <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Building India's Largest Free Cricket Community</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We envision a world where cricket fans can connect, compete, and learn together on a platform that prioritizes skill development over financial gain. Our goal is to build the largest community of cricket enthusiasts in India.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through transparent scoring, fair play policies, and educational content, we aim to set the standard for what a responsible dream cricket platform should look like.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>What We Stand For</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Heart, title: "Community First", desc: "We prioritize building a vibrant community of cricket lovers over everything else.", color: "bg-red-50 text-red-600" },
              { icon: Shield, title: "Transparency", desc: "Clear scoring rules, fair play policies, and no hidden costs or surprises.", color: "bg-blue-50 text-blue-600" },
              { icon: BookOpen, title: "Education", desc: "We help users learn cricket strategy, improve their knowledge, and develop skills.", color: "bg-green-50 text-green-600" },
              { icon: Zap, title: "Innovation", desc: "Constantly improving our platform with new features, better UX, and cutting-edge technology.", color: "bg-purple-50 text-purple-600" },
            ].map((value, i) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="h-full text-center border-border/50 hover:shadow-lg transition-all group">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <value.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{value.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Facts */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Platform Highlights</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { label: "Entry Fee", value: "₹0", sub: "Always Free" },
              { label: "Platform", value: "100%", sub: "Skill-Based" },
              { label: "Age Requirement", value: "18+", sub: "Verified Users" },
            ].map((fact, i) => (
              <motion.div key={fact.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center p-8 rounded-2xl bg-card border border-border/50 shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-heading)" }}>{fact.value}</div>
                <div className="text-lg font-semibold mb-1">{fact.label}</div>
                <div className="text-sm text-muted-foreground">{fact.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
