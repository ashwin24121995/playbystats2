import { motion } from "framer-motion";
import { Heart, Clock, Shield, BookOpen, Users, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import PageLayout from "@/components/layout/PageLayout";

export default function ResponsibleGaming() {
  return (
    <PageLayout>
      <section className="gradient-hero text-white py-12 lg:py-16">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Responsible Gaming</h1>
            <p className="text-white/70">Our commitment to promoting healthy and responsible gaming habits.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
            <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-lg font-bold text-green-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>100% Free Platform</h2>
                  <p className="text-sm text-green-800 leading-relaxed">Squad Master Sports is a completely free platform. There are no entry fees, no deposits, no real money prizes, and no in-app purchases. Our platform is designed purely for entertainment and educational purposes. We believe that dream cricket should be accessible to everyone without financial risk.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Clock, title: "Time Management", desc: "We encourage users to set personal time limits and take regular breaks. Gaming should be a fun activity, not an obsession. Balance your gaming with other activities.", color: "bg-blue-50 text-blue-600" },
                { icon: BookOpen, title: "Educational Focus", desc: "Our platform emphasizes learning and skill development. Use dream cricket as a tool to improve your cricket knowledge and analytical skills.", color: "bg-purple-50 text-purple-600" },
                { icon: Users, title: "Community Support", desc: "We foster a supportive community where users can learn from each other, share strategies, and enjoy cricket together in a positive environment.", color: "bg-teal-50 text-teal-600" },
                { icon: Shield, title: "Age Verification", desc: "We strictly enforce our 18+ age requirement. Minors are not permitted to use our Platform. We may request age verification at any time.", color: "bg-amber-50 text-amber-600" },
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
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>Tips for Responsible Gaming</h2>
                <ul className="list-disc pl-6 space-y-1.5">
                  <li>Set a personal time limit for how long you play each day.</li>
                  <li>Take regular breaks — step away from the screen every hour.</li>
                  <li>Remember that dream cricket is a game of skill and entertainment.</li>
                  <li>Don't let gaming interfere with your work, studies, or relationships.</li>
                  <li>Use our platform as a learning tool to improve your cricket knowledge.</li>
                  <li>Engage positively with the community and respect other players.</li>
                  <li>If you feel that gaming is becoming a problem, take a break or seek help.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>Self-Exclusion</h2>
                <p>If you feel that you need a break from the platform, you can request a temporary or permanent self-exclusion by contacting our support team at <strong className="text-foreground">support@squadmastersports.com</strong>. We will process your request promptly and restrict access to your account for the requested period.</p>
              </div>

              <div className="p-5 rounded-xl bg-amber-50 border border-amber-100">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-base font-semibold text-amber-900 mb-1" style={{ fontFamily: "var(--font-heading)" }}>Need Help?</h3>
                    <p className="text-sm text-amber-800">If you or someone you know is struggling with gaming-related issues, please reach out to professional help services. You can also contact us at support@squadmastersports.com for guidance and support.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
