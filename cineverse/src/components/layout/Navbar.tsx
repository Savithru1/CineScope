"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Film,
  Home,
  BookmarkCheck,
  Search,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { useThemeStore, useUIStore } from "@/store/ui";
import { useWatchlistStore } from "@/store/watchlist";

export function Navbar() {
  const { theme, toggle: toggleTheme } = useThemeStore();
  const { activeView, setActiveView, setSearchQuery } = useUIStore();
  const watchlistCount = useWatchlistStore((s) => s.items.length);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Debounced search
  const handleSearch = useCallback(
    (val: string) => {
      setInputVal(val);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        if (val.trim()) {
          setSearchQuery(val.trim());
          setActiveView("search");
        } else {
          setSearchQuery("");
          if (activeView === "search") setActiveView("home");
        }
      }, 400);
    },
    [setSearchQuery, setActiveView, activeView]
  );

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (inputVal.trim()) {
      setSearchQuery(inputVal.trim());
      setActiveView("search");
    }
    setSearchOpen(false);
    setMobileOpen(false);
  };

  const clearSearch = () => {
    setInputVal("");
    setSearchQuery("");
    if (activeView === "search") setActiveView("home");
  };

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      setTimeout(() => searchRef.current?.focus(), 100);
    }
  }, [searchOpen]);

  // Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const navLinks = [
    { label: "Home", view: "home" as const, icon: <Home size={16} /> },
    { label: "Movies", view: "movies" as const, icon: <Film size={16} /> },
    {
      label: "Watchlist",
      view: "watchlist" as const,
      icon: <BookmarkCheck size={16} />,
    },
  ];

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          className="flex items-center gap-2 flex-shrink-0 cursor-pointer group"
          onClick={() => {
            setActiveView("home");
            clearSearch();
          }}
          aria-label="CineVerse Home"
        >
          <span className="text-2xl transition-transform duration-300 group-hover:scale-110">🎬</span>
          <span className="text-xl font-extrabold tracking-tight text-[var(--text-primary)]">
            Cine<span className="text-[var(--accent)]">Verse</span>
          </span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.view}
              onClick={() => {
                setActiveView(link.view);
                clearSearch();
              }}
              className={`nav-link-item py-1.5 text-sm font-semibold transition-colors duration-200 cursor-pointer flex items-center gap-2
                ${
                  activeView === link.view
                    ? "text-[var(--accent)] active"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              aria-label={link.label}
              aria-current={activeView === link.view ? "page" : undefined}
            >
              {link.icon}
              {link.label}
              {link.view === "watchlist" && watchlistCount > 0 && (
                <span className="ml-0.5 bg-[var(--accent)] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-[var(--shadow-accent)]">
                  {watchlistCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Actions Group */}
        <div className="flex items-center gap-3">
          {/* Desktop Search */}
          <div className="hidden md:flex items-center relative">
            <AnimatePresence>
              {searchOpen && (
                <motion.form
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: 220, opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onSubmit={handleSearchSubmit}
                  className="relative overflow-hidden mr-1"
                >
                  <input
                    ref={searchRef}
                    type="search"
                    value={inputVal}
                    onChange={(e) => handleSearch(e.target.value)}
                    placeholder="Search movies..."
                    className="search-input-field"
                    aria-label="Search movies"
                  />
                  {inputVal && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
                      aria-label="Clear search"
                    >
                      <X size={14} />
                    </button>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass)] transition-all cursor-pointer"
              aria-label="Toggle search"
              aria-expanded={searchOpen}
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass)] transition-all cursor-pointer"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass)] transition-all cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[var(--bg-secondary)] border-b border-[var(--border)] px-4 py-4 space-y-4"
            aria-hidden={!mobileOpen}
          >
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="search"
                value={inputVal}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search movies..."
                className="search-input-field"
                aria-label="Search movies on mobile"
              />
              {inputVal && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </form>
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.view}
                  onClick={() => {
                    setActiveView(link.view);
                    setMobileOpen(false);
                    clearSearch();
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-semibold transition-all cursor-pointer
                    ${
                      activeView === link.view
                        ? "text-[var(--accent)] bg-[var(--accent-dim)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--glass)]"
                    }`}
                >
                  {link.icon}
                  {link.label}
                  {link.view === "watchlist" && watchlistCount > 0 && (
                    <span className="ml-auto bg-[var(--accent)] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-[var(--shadow-accent)]">
                      {watchlistCount}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
