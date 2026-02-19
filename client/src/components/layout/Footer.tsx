import { Link } from "wouter";
import { Mail, MapPin, Trophy, Phone } from "lucide-react";

const footerLinks = {
  platform: [
    { label: "Home", href: "/" },
    { label: "Matches", href: "/matches" },
    { label: "Contests", href: "/contests" },
    { label: "Leaderboard", href: "/leaderboard" },
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
    { label: "Responsible Play", href: "/responsible-gaming" },
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
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073602365/iiNrUjqtKpHLVtsd.png" 
                alt="Play By Stats Logo" 
                className="h-10 w-auto invert"
              />
            </div>
            <p className="text-sm text-background/60 leading-relaxed mb-5">
              India's free cricket entertainment platform. Build your team, compete with friends, and track your performance. 100% free forever. For entertainment purposes only.
            </p>
            <div className="space-y-2.5">
              <a href="mailto:support@playbystats.com" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                support@playbystats.com
              </a>
              <a href="tel:18000005533" className="flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                1800-000-5533
              </a>
              <div className="flex items-start gap-2 text-sm text-background/60">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>3rd Floor, Crystal Point Mall, Link Road, Andheri West, Mumbai, Maharashtra 400053, India</span>
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
              © {new Date().getFullYear()} Play By Stats. All rights reserved. This platform is for entertainment purposes only.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-background/40">100% Free Platform</span>
              <span className="text-xs text-background/40">•</span>
              <span className="text-xs text-background/40">Entertainment Only</span>
              <span className="text-xs text-background/40">•</span>
              <span className="text-xs text-background/40">18+ Only</span>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-background/5">
            <p className="text-[11px] text-background/30 text-center leading-relaxed">
              Play By Stats is a free-to-play cricket entertainment platform. No real money is involved. 
              There are no entry fees, deposits, or cash prizes. This platform is designed purely for fun and entertainment.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
