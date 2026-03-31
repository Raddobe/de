import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = ["about", "skills", "experience", "education", "projects", "contact"];

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const isDark = (resolvedTheme ?? theme) === "dark";
  const toggleTheme = () => setTheme(isDark ? "light" : "dark");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "py-5"
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="font-heading text-xl font-bold">
          <span className="text-gradient">R</span>
          <span className="text-foreground">admehr</span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              {t(`nav.${item}`)}
            </button>
          ))}

          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
            aria-label="Toggle theme"
          >
            <span className="sr-only">Toggle theme</span>
            <span className="w-4 h-4 flex items-center justify-center">
              {mounted ? (isDark ? <Sun size={16} /> : <Moon size={16} />) : null}
            </span>
          </button>

          {/* Language Switcher */}
          <div className="flex items-center gap-1 ml-4 rounded-full border border-border p-1">
            <button
              onClick={() => setLang("de")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                lang === "de" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              DE
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${
                lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-foreground">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass mt-2 mx-4 rounded-lg overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors text-left py-2"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
              <div className="flex gap-2 pt-2 border-t border-border">
                <button
                  onClick={() => setLang("de")}
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    lang === "de" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  DE
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    lang === "en" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={toggleTheme}
                  className="px-3 py-1 rounded-full text-xs font-bold border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  aria-label="Toggle theme"
                >
                  <span className="inline-flex items-center gap-1">
                    {mounted ? (isDark ? <Sun size={14} /> : <Moon size={14} />) : null}
                    {isDark ? "Light" : "Dark"}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
