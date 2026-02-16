import { Link } from "wouter";
import { Trophy, Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const footerLinks = {
  platform: [
    { label: "Home", href: "/" },
    { label: "Matches", href: "/matches" },
    { label: "Contests", href: "/contests" },
    { label: "Leaderboard", href: "/leaderboard" },
    { label: "Dashboard", href: "/dashboard" },
  ],
  learn: [
    { label: "How to Play", href: "/how-to-play" },
    { label: "Scoring System", href: "/scoring" },
    { label: "About Us", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact Us", href: "/contact" },
  ],
  legal: [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Fair Play Policy", href: "/fair-play" },
    { label: "Responsible Gaming", href: "/responsible-gaming" },
    { label: "Refund Policy", href: "/refund" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background/80">
      {/* Main Footer */}
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold leading-tight text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  Squad Master
                </span>
                <span className="text-[10px] font-medium text-background/50 uppercase tracking-widest leading-none">
                  Sports
                </span>
              </div>
            </div>
            <p className="text-sm text-background/60 leading-relaxed mb-5">
              India's free dream cricket platform. Build your dream team, compete with friends, and track your performance. 100% free forever.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:support@squadmastersports.com" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                support@squadmastersports.com
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <MessageCircle className="w-4 h-4 shrink-0" />
                WhatsApp Support
              </a>
              <div className="flex items-start gap-2 text-sm text-background/60">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2.5">
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-background/60 hover:text-background transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Learn & Support</h4>
            <ul className="space-y-2.5">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-background/60 hover:text-background transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-background/60 hover:text-background transition-colors">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-background/40 text-center md:text-left">
              © {new Date().getFullYear()} Squad Master Sports. All rights reserved. This platform is for entertainment purposes only.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-background/40">100% Free Platform</span>
              <span className="text-xs text-background/40">•</span>
              <span className="text-xs text-background/40">Skill-Based Gaming</span>
              <span className="text-xs text-background/40">•</span>
              <span className="text-xs text-background/40">18+ Only</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-background/5">
            <p className="text-[11px] text-background/30 text-center leading-relaxed">
              This game involves an element of financial risk and may be addictive. Please play responsibly and at your own risk. 
              This platform is not available in Andhra Pradesh, Assam, Nagaland, Odisha, Sikkim, and Telangana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
