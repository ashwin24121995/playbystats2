import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import PageLayout from "@/components/layout/PageLayout";

export default function Refund() {
  return (
    <PageLayout>
      <section className="gradient-hero text-white py-12 lg:py-16">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Refund & Cancellation Policy</h1>
            <p className="text-white/70">Last updated: February 16, 2026</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 text-sm leading-relaxed text-muted-foreground">
            <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
              <h2 className="text-lg font-bold text-green-900 mb-2" style={{ fontFamily: "var(--font-heading)" }}>Free Platform — No Refunds Applicable</h2>
              <p className="text-green-800">StrikePlay is a 100% free platform. Since we do not charge any fees, accept any deposits, or process any payments, there are no refunds applicable. This policy exists for transparency and compliance purposes.</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>1. No Monetary Transactions</h2>
              <p>StrikePlay does not involve any monetary transactions. We do not:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Charge entry fees for any contests.</li>
                <li>Accept deposits or payments of any kind.</li>
                <li>Offer real money prizes or cash rewards.</li>
                <li>Sell virtual currency, tokens, or in-app purchases.</li>
                <li>Require any form of subscription or premium membership.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>2. Account Cancellation</h2>
              <p>Users may request account cancellation at any time by contacting our support team at <strong className="text-foreground">support@strikeplayhq.com</strong>. Upon cancellation:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Your account will be deactivated and your data will be handled as per our Privacy Policy.</li>
                <li>Your teams, contest history, and leaderboard rankings will be removed.</li>
                <li>This action is irreversible — once cancelled, your data cannot be recovered.</li>
              </ul>
            </div>

            {/* Internal Links for SEO */}
            <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
              <p className="text-sm text-muted-foreground mb-3">Related Pages:</p>
              <div className="flex flex-wrap gap-2">
                <Link href="/terms">
                  <Button variant="outline" size="sm">Terms & Conditions</Button>
                </Link>
                <Link href="/privacy">
                  <Button variant="outline" size="sm">Privacy Policy</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="sm">Contact Us</Button>
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-foreground mb-3" style={{ fontFamily: "var(--font-heading)" }}>3. Contact Us</h2>
              <p>If you have any questions about this policy, please contact us at:</p>
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
