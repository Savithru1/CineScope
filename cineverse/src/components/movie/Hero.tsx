"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Plus, Check, Star, ChevronLeft, ChevronRight, Info } from "lucide-react";
import type { Movie } from "@/types";
import {
  IMG,
  formatRating,
  getRatingColor,
  getMovieVideos,
  getYouTubeTrailer,
} from "@/lib/tmdb";
import { useUIStore, useGenreStore } from "@/store/ui";
import { useWatchlistStore } from "@/store/watchlist";
import { useToast } from "@/components/ui/Toaster";

interface HeroProps {
  movies: Movie[];
}

export function Hero({ movies }: HeroProps) {
  const [current, setCurrent] = useState(0);
  const [imgError, setImgError] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const { openMovieModal, openTrailer } = useUIStore();
  const { getName } = useGenreStore();
  const { has, toggle } = useWatchlistStore();
  const toast = useToast();

  const movie = movies[current];
  const inWatchlist = movie ? has(movie.id) : false;

  const go = (dir: 1 | -1) => {
    setCurrent((c) => (c + dir + movies.length) % movies.length);
    setImgError(false);
    resetInterval();
  };

  const resetInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % movies.length);
      setImgError(false);
    }, 8000);
  };

  useEffect(() => {
    if (movies.length > 1) resetInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [movies.length]);

  const handleTrailer = async () => {
    if (!movie) return;
    try {
      const data = await getMovieVideos(movie.id);
      const key = getYouTubeTrailer(data.results);
      openTrailer(key ?? "");
    } catch {
      openTrailer("");
    }
  };

  const handleWatchlist = () => {
    if (!movie) return;
    toggle(movie);
    toast(
      inWatchlist ? "Removed from watchlist" : "Added to watchlist",
      inWatchlist ? "info" : "success"
    );
  };

  if (!movie) return <HeroSkeleton />;

  const year = movie.release_date?.slice(0, 4) ?? "";
  const genres = (movie.genre_ids ?? []).slice(0, 3).map((id) => getName(id)).filter(Boolean);
  const ratingColor = getRatingColor(movie.vote_average);

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ height: "min(85vh, 680px)", minHeight: 480 }}
      aria-label="Featured movies"
    >
      {/* Backdrop with Slow Zoom and Crossfade Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={movie.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 z-0"
        >
          {movie.backdrop_path && !imgError ? (
            <Image
              src={IMG.backdrop(movie.backdrop_path, "original")}
              alt={`${movie.title} backdrop`}
              fill
              sizes="100vw"
              className="object-cover object-center bg-slow-zoom"
              priority
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)]" />
          )}
          {/* Overlay gradient vignettes */}
          <div className="hero-backdrop-gradient absolute inset-0" />
        </motion.div>
      </AnimatePresence>

      {/* Slide Progress Indicator Bar */}
      {movies.length > 1 && (
        <div className="absolute top-0 left-0 w-full h-[3px] bg-white/10 z-30">
          <motion.div
            key={movie.id}
            className="hero-progress h-full bg-[var(--accent)]"
            style={{ width: "100%" }}
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 h-full flex items-end pb-12 sm:pb-16 px-4 sm:px-10 lg:px-16 max-w-7xl mx-auto">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
            >
              {/* Badge info */}
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-[var(--accent)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-[var(--shadow-accent)] uppercase tracking-wide">
                  🔥 Trending #{current + 1}
                </span>
                {year && (
                  <span className="text-white/80 text-sm font-semibold tracking-wider bg-black/35 px-2 py-0.5 rounded backdrop-blur-sm">
                    {year}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="hero-title-text text-3xl sm:text-5xl md:text-6xl font-black text-white leading-none mb-3 drop-shadow-md tracking-tight font-sans">
                {movie.title}
              </h1>

              {/* Meta */}
              <div className="flex items-center flex-wrap gap-2.5 mb-4">
                <div className="flex items-center gap-1.5 bg-black/35 backdrop-blur-sm px-2.5 py-1 rounded-[var(--r-sm)] border border-white/5">
                  <Star size={14} className="text-[var(--gold)] fill-[var(--gold)]" />
                  <span className={`text-sm font-extrabold ${ratingColor}`}>
                    {formatRating(movie.vote_average)}
                  </span>
                  <span className="text-white/40 text-xs">/ 10</span>
                </div>
                
                {genres.map((g) => (
                  <span key={g} className="genre-chip bg-black/30 border-white/10 text-white/90">
                    {g}
                  </span>
                ))}
              </div>

              {/* Overview */}
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-6 line-clamp-3 max-w-xl drop-shadow-sm font-medium">
                {movie.overview}
              </p>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleTrailer}
                  className="btn-primary cursor-pointer shadow-lg"
                  aria-label="Watch trailer"
                >
                  <Play size={16} className="fill-current" />
                  Watch Trailer
                </button>
                <button
                  onClick={handleWatchlist}
                  className={`btn-ghost cursor-pointer ${
                    inWatchlist ? "btn-ghost-filled" : ""
                  }`}
                  aria-label={inWatchlist ? "Remove from watchlist" : "Add to watchlist"}
                >
                  {inWatchlist ? <Check size={16} /> : <Plus size={16} />}
                  {inWatchlist ? "In Watchlist" : "Add to Watchlist"}
                </button>
                <button
                  onClick={() => openMovieModal(movie)}
                  className="btn-ghost cursor-pointer bg-black/40 hover:bg-black/60 border border-white/10"
                  aria-label="More information"
                >
                  <Info size={16} />
                  More Info
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      {movies.length > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-[var(--accent)] text-white/90 hover:text-white transition-all flex items-center justify-center cursor-pointer border border-white/5 backdrop-blur-sm"
            aria-label="Previous featured movie"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => go(1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-[var(--accent)] text-white/90 hover:text-white transition-all flex items-center justify-center cursor-pointer border border-white/5 backdrop-blur-sm"
            aria-label="Next featured movie"
          >
            <ChevronRight size={20} />
          </button>

          {/* Indicators dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {movies.slice(0, 8).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i);
                  setImgError(false);
                  resetInterval();
                }}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  i === current ? "w-6 bg-[var(--accent)]" : "w-1.5 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to featured movie slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function HeroSkeleton() {
  return (
    <div
      className="relative w-full bg-[var(--bg-secondary)]"
      style={{ height: "min(85vh, 680px)", minHeight: 480 }}
    >
      <div className="skeleton absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] to-transparent" />
      <div className="relative z-10 h-full flex items-end pb-12 px-6 sm:px-10 lg:px-16">
        <div className="max-w-2xl w-full space-y-4">
          <div className="skeleton h-5 w-32 rounded-full" />
          <div className="skeleton h-14 w-3/4 rounded-xl" />
          <div className="skeleton h-5 w-1/2 rounded" />
          <div className="skeleton h-4 w-full rounded" />
          <div className="skeleton h-4 w-5/6 rounded" />
          <div className="flex gap-3 pt-2">
            <div className="skeleton h-12 w-32 rounded-xl" />
            <div className="skeleton h-12 w-36 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
