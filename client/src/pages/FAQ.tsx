import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageLayout from "@/components/layout/PageLayout";
import { faqs } from "@/data/staticData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <PageLayout>
      <section className="gradient-hero text-white py-12 lg:py-16">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Frequently Asked Questions</h1>
            <p className="text-white/70 max-w-xl mx-auto">Find answers to the most common questions about Squad Master Sports.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="container max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className={`rounded-xl border transition-all ${isOpen ? "border-primary/30 bg-primary/5 shadow-sm" : "border-border/50 bg-card"}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? "text-primary" : "text-muted-foreground"}`} />
                      <span className={`text-sm font-medium transition-colors ${isOpen ? "text-foreground" : "text-foreground"}`}>
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown className={`w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pl-12">
                          <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 text-center p-8 rounded-2xl bg-muted/30 border border-border/50">
            <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>Still Have Questions?</h3>
            <p className="text-sm text-muted-foreground mb-4">Our support team is happy to help you with any questions or concerns.</p>
            <Link href="/contact">
              <Button className="rounded-full">
                Contact Support <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
