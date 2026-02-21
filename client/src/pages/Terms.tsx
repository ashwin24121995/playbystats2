import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";

export default function Terms() {
  return (
    <PageLayout>
      <section className="gradient-hero text-white py-12 lg:py-16">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Terms & Conditions</h1>
            <p className="text-white/70">Last updated: February 16, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="prose prose-gray max-w-none">
            <div className="space-y-8 text-sm leading-relaxed text-muted-foreground">
              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>1. Introduction</h2>
                <p>Welcome to StrikePlay ("Platform", "we", "us", or "our"). These Terms and Conditions ("Terms") govern your use of our website located at strikeplayhq.com and all related services. By accessing or using our Platform, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our Platform.</p>
                <p className="mt-2">StrikePlay is a free-to-play cricket entertainment platform. We do not charge any entry fees, deposits, or subscription costs. All features on our Platform are available free of charge and are designed purely for entertainment purposes.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>2. Eligibility</h2>
                <p>To use StrikePlay, you must:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Be at least 18 years of age.</li>
                  <li>Have a valid email address for registration.</li>
                  <li>Not be barred from using online platforms under applicable laws.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>3. Account Registration</h2>
                <p>When creating an account, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>4. Free Platform Policy</h2>
                <p>StrikePlay is a 100% free platform. We do not:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Charge any entry fees or deposits for contests.</li>
                  <li>Offer real money prizes or cash rewards.</li>
                  <li>Require any form of payment for using our services.</li>
                  <li>Sell virtual currency or in-app purchases.</li>
                </ul>
                <p className="mt-2">Our Platform is designed purely for entertainment purposes. Users compete for leaderboard rankings, achievement badges, and bragging rights. No real money is involved at any stage.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>5. Entertainment Purpose</h2>
                <p>StrikePlay is an entertainment platform. The platform allows users to build cricket teams, join free contests, and track performance based on real cricket match outcomes. All activities on this platform are for fun and entertainment only. No financial transactions are involved.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>6. User Conduct</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Create multiple accounts or use fake identities.</li>
                  <li>Use automated bots, scripts, or tools to interact with the Platform.</li>
                  <li>Attempt to manipulate leaderboards or contest results.</li>
                  <li>Share your account credentials with others.</li>
                  <li>Engage in any activity that disrupts the Platform's operation.</li>
                  <li>Use the Platform for any illegal or unauthorized purpose.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>7. Intellectual Property</h2>
                <p>All content on StrikePlay, including but not limited to text, graphics, logos, icons, images, and software, is the property of StrikePlay or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without prior written consent.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>8. Disclaimer of Warranties</h2>
                <p>The Platform is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the Platform will be uninterrupted, error-free, or secure. We are not responsible for any loss or damage arising from your use of the Platform.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>9. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, StrikePlay shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>10. Modifications</h2>
                <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the Platform. Your continued use of the Platform after any modifications constitutes acceptance of the updated Terms.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>11. Governing Law</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra, India.</p>
              </div>

              {/* Internal Links for SEO */}
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                <p className="text-sm text-muted-foreground mb-3">Related Pages:</p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/privacy">
                    <Button variant="outline" size="sm">Privacy Policy</Button>
                  </Link>
                  <Link href="/refund">
                    <Button variant="outline" size="sm">Refund Policy</Button>
                  </Link>
                  <Link href="/fair-play">
                    <Button variant="outline" size="sm">Fair Play Policy</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="sm">Contact Us</Button>
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>12. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <ul className="list-none mt-2 space-y-1">
                  <li><strong className="text-foreground">Email:</strong> support@strikeplayhq.com</li>
                  <li><strong className="text-foreground">Phone:</strong> 1800-000-5533</li>
                  <li><strong className="text-foreground">Website:</strong> strikeplayhq.com</li>
                  <li><strong className="text-foreground">Address:</strong> 3rd Floor, Crystal Point Mall, Link Road, Andheri West, Mumbai, Maharashtra 400053, India</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
