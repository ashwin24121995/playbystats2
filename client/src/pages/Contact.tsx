import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import PageLayout from "@/components/layout/PageLayout";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent successfully! Our team will get back to you within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <PageLayout>
      <section className="gradient-hero text-white py-12 lg:py-16">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Contact Us</h1>
            <p className="text-white/70 max-w-xl mx-auto">Have a question or feedback? We'd love to hear from you. Our support team is here to help.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 lg:py-16">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-5">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-heading)" }}>Get in Touch</h2>
                <div className="space-y-4">
                  {[
                    { icon: Mail, label: "Email Support", value: "support@playbystats.com", href: "mailto:support@playbystats.com" },
                    { icon: Phone, label: "Phone Support", value: "1800-000-5533", href: "tel:18000005533" },
                    { icon: MapPin, label: "Location", value: "3rd Floor, Crystal Point Mall, Link Road, Andheri West, Mumbai, Maharashtra 400053, India", href: undefined },
                    { icon: Clock, label: "Response Time", value: "Within 24 hours", href: undefined },
                  ].map((item, i) => (
                    <Card key={item.label} className="border-border/50 hover:shadow-sm transition-shadow">
                      <CardContent className="p-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">{item.label}</div>
                          {item.href ? (
                            <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
                              {item.value}
                            </a>
                          ) : (
                            <div className="text-sm font-medium">{item.value}</div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                <Card className="border-border/50">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold mb-5" style={{ fontFamily: "var(--font-heading)" }}>Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-sm mb-1.5 block">Name <span className="text-destructive">*</span></Label>
                          <Input id="name" placeholder="Your name" value={formData.name} onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))} required />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-sm mb-1.5 block">Email <span className="text-destructive">*</span></Label>
                          <Input id="email" type="email" placeholder="your@email.com" value={formData.email} onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))} required />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-sm mb-1.5 block">Subject</Label>
                        <Input id="subject" placeholder="What is this about?" value={formData.subject} onChange={e => setFormData(prev => ({ ...prev, subject: e.target.value }))} />
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-sm mb-1.5 block">Message <span className="text-destructive">*</span></Label>
                        <Textarea id="message" placeholder="Tell us how we can help..." rows={5} value={formData.message} onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))} required />
                      </div>
                      <Button type="submit" className="rounded-full gradient-primary border-0 text-white px-8" disabled={sending}>
                        {sending ? (
                          <span className="flex items-center gap-2"><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Sending...</span>
                        ) : (
                          <span className="flex items-center gap-2"><Send className="w-4 h-4" /> Send Message</span>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
