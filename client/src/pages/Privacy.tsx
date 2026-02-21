import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";

export default function Privacy() {
  return (
    <PageLayout>
      <section className="gradient-hero text-white py-12 lg:py-16">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Privacy Policy</h1>
            <p className="text-white/70">Last updated: February 16, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>1. Introduction</h2>
              <p>StrikePlay ("we", "us", or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website strikeplayhq.com and use our services. Please read this policy carefully.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>2. Information We Collect</h2>
              <p><strong className="text-foreground">Personal Information:</strong> When you register on our Platform, we may collect your name, email address, and login credentials.</p>
              <p className="mt-2"><strong className="text-foreground">Usage Data:</strong> We automatically collect information about how you interact with our Platform, including pages visited, time spent, browser type, device information, and IP address.</p>
              <p className="mt-2"><strong className="text-foreground">Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience. You can control cookie preferences through your browser settings.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>3. How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>To provide, operate, and maintain our Platform.</li>
                <li>To create and manage your user account.</li>
                <li>To personalize your experience and deliver relevant content.</li>
                <li>To communicate with you about updates, features, and support.</li>
                <li>To monitor and analyze usage patterns and trends.</li>
                <li>To detect, prevent, and address technical issues and fraud.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>4. Data Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong className="text-foreground">Service Providers:</strong> We may share data with trusted third-party service providers who assist us in operating our Platform (e.g., hosting, analytics).</li>
                <li><strong className="text-foreground">Legal Requirements:</strong> We may disclose your information if required by law, regulation, or legal process.</li>
                <li><strong className="text-foreground">Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of the transaction.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>5. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, secure servers, and regular security audits. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>6. Your Rights (GDPR Compliance)</h2>
              <p>If you are a resident of the European Economic Area (EEA) or if applicable data protection laws grant you similar rights, you have the following rights:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong className="text-foreground">Right of Access:</strong> You can request a copy of your personal data.</li>
                <li><strong className="text-foreground">Right to Rectification:</strong> You can request correction of inaccurate data.</li>
                <li><strong className="text-foreground">Right to Erasure:</strong> You can request deletion of your personal data.</li>
                <li><strong className="text-foreground">Right to Restrict Processing:</strong> You can request limitation of how we process your data.</li>
                <li><strong className="text-foreground">Right to Data Portability:</strong> You can request your data in a structured, machine-readable format.</li>
                <li><strong className="text-foreground">Right to Object:</strong> You can object to certain types of data processing.</li>
              </ul>
              <p className="mt-2">To exercise any of these rights, please contact us at support@strikeplayhq.com.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>7. Cookies Policy</h2>
              <p>We use the following types of cookies:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong className="text-foreground">Essential Cookies:</strong> Required for the Platform to function properly (e.g., session management).</li>
                <li><strong className="text-foreground">Analytics Cookies:</strong> Help us understand how users interact with our Platform.</li>
                <li><strong className="text-foreground">Preference Cookies:</strong> Remember your settings and preferences.</li>
              </ul>
              <p className="mt-2">You can manage cookie preferences through your browser settings. Disabling certain cookies may affect your experience on our Platform.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>8. Data Retention</h2>
              <p>We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When your data is no longer needed, we will securely delete or anonymize it.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>9. Children's Privacy</h2>
              <p>Our Platform is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child under 18, we will take steps to delete such information promptly.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of the Platform after any changes constitutes acceptance of the updated policy.</p>
            </div>

            {/* Internal Links for SEO */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-sm text-muted-foreground mb-3">Related Pages:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/terms">
                  <Button variant="outline" size="sm">Terms & Conditions</Button>
                </Link>
                <Link href="/refund">
                  <Button variant="outline" size="sm">Refund Policy</Button>
                </Link>
                <Link href="/responsible-gaming">
                  <Button variant="outline" size="sm">Responsible Gaming</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="sm">Contact Us</Button>
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>11. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <ul className="list-none mt-2 space-y-1">
                <li><strong className="text-foreground">Email:</strong> support@strikeplayhq.com</li>
                <li><strong className="text-foreground">Phone:</strong> 1800-000-5533</li>
                <li><strong className="text-foreground">Website:</strong> strikeplayhq.com</li>
                <li><strong className="text-foreground">Address:</strong> 3rd Floor, Crystal Point Mall, Link Road, Andheri West, Mumbai, Maharashtra 400053, India</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
