import { useState } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/_core/hooks/useAuth";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Matches", href: "/matches" },
  { label: "Contests", href: "/contests" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "How to Play", href: "/how-to-play" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663073602365/PhzuDMLrzdbZaUzI.png" 
              alt="Play By Stats Logo" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link key={link.href} href={link.href}>
                  <span
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Auth */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <Link href="/dashboard">
                  <Button variant="outline" size="sm" className="rounded-full">
                    Dashboard
                  </Button>
                </Link>
                <button
                  onClick={() => logout()}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/login">
                  <Button variant="outline" size="sm" className="rounded-full">
                    Sign In
                  </Button>
                </Link>
                <Link href="/register">
                  <Button size="sm" className="rounded-full gradient-primary border-0 text-white shadow-md hover:shadow-lg transition-shadow">
                    Get Started Free
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted/50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border/50 glass overflow-hidden"
          >
            <nav className="container py-4 space-y-1">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link key={link.href} href={link.href}>
                    <span
                      onClick={() => setMobileOpen(false)}
                      className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                        isActive
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-border/50 space-y-2">
                {isAuthenticated ? (
                  <>
                    <Link href="/dashboard">
                      <span
                        onClick={() => setMobileOpen(false)}
                        className="block px-4 py-2.5 rounded-lg text-sm font-medium text-primary"
                      >
                        Dashboard
                      </span>
                    </Link>
                    <button
                      onClick={() => { logout(); setMobileOpen(false); }}
                      className="block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-muted-foreground"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <div className="flex gap-2 px-4">
                    <Link href="/login" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full rounded-full" onClick={() => setMobileOpen(false)}>
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/register" className="flex-1">
                      <Button size="sm" className="w-full rounded-full gradient-primary border-0 text-white" onClick={() => setMobileOpen(false)}>
                        Get Started
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
