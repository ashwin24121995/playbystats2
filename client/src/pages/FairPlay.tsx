import { motion } from "framer-motion";
import { Shield, AlertTriangle, Eye, Ban, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";

export default function FairPlay() {
  return (
    <PageLayout>
      <section className="gradient-hero text-white py-12 lg:py-16">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Fair Play Policy</h1>
            <p className="text-white/70">Our commitment to a fair and transparent gaming experience for all users.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/10">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>Our Commitment</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">Squad Master Sports is committed to providing a fair, transparent, and enjoyable experience for all users. We employ multiple measures to ensure that every player competes on a level playing field. Our platform is built on the principles of integrity, fairness, and sportsmanship.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Ban, title: "No Multi-Accounting", desc: "Each user is allowed only one account. Creating multiple accounts to gain unfair advantages is strictly prohibited and will result in permanent suspension.", color: "bg-red-50 text-red-600" },
                { icon: Eye, title: "Bot Detection", desc: "We employ advanced algorithms to detect automated bots, scripts, and tools. Any automated interaction with our Platform is prohibited.", color: "bg-blue-50 text-blue-600" },
                { icon: AlertTriangle, title: "Collusion Prevention", desc: "Users are prohibited from colluding with others to manipulate contest outcomes. We monitor for suspicious patterns and coordinated activity.", color: "bg-amber-50 text-amber-600" },
                { icon: CheckCircle2, title: "Transparent Scoring", desc: "Our scoring system is fully transparent and based on official match data. All scoring rules are publicly available on our Scoring System page.", color: "bg-green-50 text-green-600" },
              ].map((item, i) => (
                <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                  <Card className="h-full border-border/50">
                    <CardContent className="p-5">
                      <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-3`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6 text-sm leading-relaxed text-muted-foreground">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>Prohibited Activities</h2>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>Using automated software, bots, or scripts to interact with the Platform.</li>
                  <li>Creating or operating multiple accounts.</li>
                  <li>Sharing account credentials with other users.</li>
                  <li>Colluding with other users to manipulate contest results.</li>
                  <li>Exploiting bugs, glitches, or vulnerabilities in the Platform.</li>
                  <li>Using insider information not available to the general public.</li>
                  <li>Engaging in abusive, threatening, or harassing behavior toward other users.</li>
                  <li>Attempting to reverse-engineer or decompile any part of the Platform.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>Penalties for Violations</h2>
                <p>Users found violating our Fair Play Policy may face the following consequences:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1.5">
                  <li><strong className="text-foreground">Warning:</strong> First-time minor violations may result in a warning.</li>
                  <li><strong className="text-foreground">Temporary Suspension:</strong> Repeated or moderate violations may result in temporary account suspension.</li>
                  <li><strong className="text-foreground">Permanent Ban:</strong> Serious violations, including multi-accounting, bot usage, and collusion, will result in permanent account termination.</li>
                  <li><strong className="text-foreground">Leaderboard Removal:</strong> Violators will have their scores and rankings removed from all leaderboards.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>Reporting Violations</h2>
                <p>If you suspect any user of violating our Fair Play Policy, please report it to us at <strong className="text-foreground">support@squadmastersports.com</strong>. All reports are investigated confidentially, and we take appropriate action based on our findings.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
