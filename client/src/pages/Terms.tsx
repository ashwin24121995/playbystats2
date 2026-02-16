import { motion } from "framer-motion";
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
                <p>Welcome to Squad Master Sports ("Platform", "we", "us", or "our"). These Terms and Conditions ("Terms") govern your use of our website located at squadmastersports.com and all related services. By accessing or using our Platform, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our Platform.</p>
                <p className="mt-2">Squad Master Sports is a free-to-play, skill-based dream cricket entertainment platform. We do not charge any entry fees, deposits, or subscription costs. All features on our Platform are available free of charge.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>2. Eligibility</h2>
                <p>To use Squad Master Sports, you must:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Be at least 18 years of age.</li>
                  <li>Be a resident of India (subject to geographic restrictions below).</li>
                  <li>Have a valid email address for registration.</li>
                  <li>Not be barred from using online platforms under applicable laws.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>3. Geographic Restrictions</h2>
                <p>Due to state-specific regulations regarding online gaming in India, users from the following states are <strong className="text-foreground">NOT permitted</strong> to participate on Squad Master Sports:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li><strong className="text-foreground">Andhra Pradesh</strong></li>
                  <li><strong className="text-foreground">Assam</strong></li>
                  <li><strong className="text-foreground">Nagaland</strong></li>
                  <li><strong className="text-foreground">Odisha</strong></li>
                  <li><strong className="text-foreground">Sikkim</strong></li>
                  <li><strong className="text-foreground">Telangana</strong></li>
                </ul>
                <p className="mt-2">Users from these states are prohibited from creating accounts, building teams, or participating in any contests on our Platform. We reserve the right to verify your location and suspend accounts that violate this restriction.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>4. Account Registration</h2>
                <p>When creating an account, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>5. Free Platform Policy</h2>
                <p>Squad Master Sports is a 100% free platform. We do not:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Charge any entry fees or deposits for contests.</li>
                  <li>Offer real money prizes or cash rewards.</li>
                  <li>Require any form of payment for using our services.</li>
                  <li>Sell virtual currency or in-app purchases.</li>
                </ul>
                <p className="mt-2">Our Platform is designed purely for entertainment and educational purposes. Users compete for leaderboard rankings, achievement badges, and bragging rights.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>6. Skill-Based Gaming</h2>
                <p>Squad Master Sports is a game of skill. Success on our Platform depends on your knowledge of cricket, understanding of player form, pitch conditions, and strategic team selection. The outcome is determined by actual match performances and your ability to analyze and predict player performances.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>7. User Conduct</h2>
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
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>8. Intellectual Property</h2>
                <p>All content on Squad Master Sports, including but not limited to text, graphics, logos, icons, images, and software, is the property of Squad Master Sports or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without prior written consent.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>9. Disclaimer of Warranties</h2>
                <p>The Platform is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the Platform will be uninterrupted, error-free, or secure. We are not responsible for any loss or damage arising from your use of the Platform.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>10. Limitation of Liability</h2>
                <p>To the maximum extent permitted by law, Squad Master Sports shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Platform.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>11. Modifications</h2>
                <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on the Platform. Your continued use of the Platform after any modifications constitutes acceptance of the updated Terms.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>12. Governing Law</h2>
                <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Karnataka, India.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>13. Contact Us</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <ul className="list-none mt-2 space-y-1">
                  <li><strong className="text-foreground">Email:</strong> support@squadmastersports.com</li>
                  <li><strong className="text-foreground">Website:</strong> squadmastersports.com</li>
                  <li><strong className="text-foreground">Location:</strong> Karnataka, India</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
