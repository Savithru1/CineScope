"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Bookmark, BookmarkCheck, Play } from "lucide-react";
import type { Movie } from "@/types";
import { IMG, formatRating, getRatingColor } from "@/lib/tmdb";
import { useUIStore, useGenreStore } from "@/store/ui";
import { useWatchlistStore } from "@/store/watchlist";
import { useToast } from "@/components/ui/Toaster";
import { useState } from "react";

interface MovieCardProps {
  movie: Movie;
  index?: number;
  variant?: "default" | "compact";
}

export function MovieCard({ movie, index = 0, variant = "default" }: MovieCardProps) {
  const { openMovieModal } = useUIStore();
  const { getName } = useGenreStore();
  const { has, toggle } = useWatchlistStore();
  const toast = useToast();
  const [imgError, setImgError] = useState(false);

  const inWatchlist = has(movie.id);
  const ratingColor = getRatingColor(movie.vote_average);
  const year = movie.release_date?.slice(0, 4) ?? "N/A";
  const primaryGenre = movie.genre_ids?.[0]
    ? getName(movie.genre_ids[0])
    : movie.genres?.[0]?.name ?? "";

  const handleWatchlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggle(movie);
    toast(
      inWatchlist ? `Removed from watchlist` : `Added to watchlist`,
      inWatchlist ? "info" : "success"
    );
  };

  // Netflix landscape aspect ratio: prioritize backdrop
  const cardImagePath = movie.backdrop_path 
    ? IMG.backdrop(movie.backdrop_path, "w780") 
    : (movie.poster_path ? IMG.poster(movie.poster_path, "w500") : "/placeholder-backdrop.svg");

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.3) }}
      className="card-root group relative flex-shrink-0 cursor-pointer rounded-[var(--r-sm)] overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-hover)] shadow-[var(--shadow-card)] hover:shadow-2xl transition-all duration-300 flex flex-col"
      style={variant === "default" ? { width: 220 } : { width: "100%" }}
      onClick={() => openMovieModal(movie)}
      role="listitem"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && openMovieModal(movie)}
      aria-label={`${movie.title}, rated ${formatRating(movie.vote_average)}`}
    >
      {/* Poster wrapper (aspect-video for 16:9 landscape) */}
      <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-secondary)]">
        <Image
          src={imgError ? "/placeholder-backdrop.svg" : cardImagePath}
          alt={`${movie.title} poster`}
          fill
          sizes="220px"
          className="poster-img object-cover"
          loading="lazy"
          onError={() => setImgError(true)}
        />

        {/* Watchlist button (Always Visible but styled nicely) */}
        <button
          onClick={handleWatchlist}
          className={`wl-btn-always ${
            inWatchlist
              ? "bg-[var(--accent)] text-white shadow-[var(--shadow-accent)]"
              : "bg-black/60 text-white/80 hover:bg-[var(--accent)] hover:text-white"
          }`}
          aria-label={inWatchlist ? "Remove from watchlist" : "Add to watchlist"}
        >
          {inWatchlist ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
        </button>

        {/* Hover overlay & quick CTA */}
        <div className="card-overlay" />
        
        <div className="card-actions flex justify-center">
          <span className="flex items-center gap-1.5 bg-white text-black font-bold text-xs py-2 px-4 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Play size={12} className="fill-black" />
            Details
          </span>
        </div>
      </div>

      {/* Info Panel */}
      <div className="card-info flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-[var(--text-primary)] text-sm font-semibold leading-tight line-clamp-1 mb-1.5 group-hover:text-[var(--accent)] transition-colors">
            {movie.title}
          </h3>
        </div>
        <div className="flex items-center justify-between gap-1 mt-auto">
          <span className="text-[var(--text-secondary)] text-[11px] font-medium">{year}</span>
          <div className="rating-pill bg-transparent border-none p-0">
            <Star size={10} className="text-[var(--gold)] fill-[var(--gold)] mr-0.5" />
            <span className={ratingColor}>{formatRating(movie.vote_average)}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

// ─── SKELETON ────────────────────────────────────────────────
export function MovieCardSkeleton({ count = 6 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex-shrink-0 rounded-[var(--r-sm)] overflow-hidden bg-[var(--bg-card)] border border-[var(--border)]"
          style={{ width: 220 }}
          aria-hidden="true"
        >
          <div className="skeleton aspect-video w-full" />
          <div className="p-3.5 space-y-2.5">
            <div className="skeleton h-3 w-11/12 rounded" />
            <div className="flex justify-between items-center">
              <div className="skeleton h-3 w-1/3 rounded" />
              <div className="skeleton h-3 w-1/4 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

// ─── GRID CARD (wider, optimized for search & watchlist views) ───────────────────
export function MovieGridCard({ movie, index = 0 }: { movie: Movie; index?: number }) {
  const { openMovieModal } = useUIStore();
  const { getName } = useGenreStore();
  const { has, toggle } = useWatchlistStore();
  const toast = useToast();
  const [imgError, setImgError] = useState(false);

  const inWatchlist = has(movie.id);
  const ratingColor = getRatingColor(movie.vote_average);
  const year = movie.release_date?.slice(0, 4) ?? "N/A";

  const handleWatchlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggle(movie);
    toast(
      inWatchlist ? `Removed from watchlist` : `Added to watchlist`,
      inWatchlist ? "info" : "success"
    );
  };

  // Netflix landscape aspect ratio: prioritize backdrop
  const cardImagePath = movie.backdrop_path 
    ? IMG.backdrop(movie.backdrop_path, "w780") 
    : (movie.poster_path ? IMG.poster(movie.poster_path, "w500") : "/placeholder-backdrop.svg");

  return (
    <motion.article
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.4) }}
      className="card-root group cursor-pointer rounded-[var(--r-sm)] overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] hover:border-[var(--border-hover)] shadow-[var(--shadow-card)] transition-all duration-300 flex flex-col"
      onClick={() => openMovieModal(movie)}
      role="listitem"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && openMovieModal(movie)}
      aria-label={`${movie.title}, rated ${formatRating(movie.vote_average)}`}
    >
      {/* Poster */}
      <div className="relative aspect-video w-full overflow-hidden bg-[var(--bg-secondary)]">
        <Image
          src={imgError ? "/placeholder-backdrop.svg" : cardImagePath}
          alt={`${movie.title} poster`}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
          className="poster-img object-cover"
          loading="lazy"
          onError={() => setImgError(true)}
        />

        {/* Watchlist Button */}
        <button
          onClick={handleWatchlist}
          className={`wl-btn-always ${
            inWatchlist
              ? "bg-[var(--accent)] text-white shadow-[var(--shadow-accent)]"
              : "bg-black/60 text-white/80 hover:bg-[var(--accent)] hover:text-white"
          }`}
          aria-label={inWatchlist ? "Remove from watchlist" : "Add to watchlist"}
        >
          {inWatchlist ? <BookmarkCheck size={14} /> : <Bookmark size={14} />}
        </button>

        {/* Hover overlay */}
        <div className="card-overlay" />
        <div className="card-actions flex justify-center">
          <span className="flex items-center gap-1.5 bg-white text-black font-bold text-xs py-2 px-4 rounded-full shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Play size={12} className="fill-black" />
            Details
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="card-info flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-[var(--text-primary)] text-sm font-semibold leading-tight line-clamp-1 mb-1.5 group-hover:text-[var(--accent)] transition-colors">
            {movie.title}
          </h3>
        </div>
        <div className="flex items-center justify-between gap-1 flex-wrap mt-auto">
          <span className="text-[var(--text-secondary)] text-[11px] font-medium">{year}</span>
          <div className="rating-pill bg-transparent border-none p-0">
            <Star size={10} className="text-[var(--gold)] fill-[var(--gold)] mr-0.5" />
            <span className={ratingColor}>{formatRating(movie.vote_average)}</span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function MovieGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="rounded-[var(--r-sm)] overflow-hidden bg-[var(--bg-card)] border border-[var(--border)] flex flex-col"
          aria-hidden="true"
        >
          <div className="skeleton aspect-video w-full" />
          <div className="p-3.5 space-y-2.5">
            <div className="skeleton h-3 w-11/12 rounded" />
            <div className="flex justify-between items-center">
              <div className="skeleton h-3 w-1/3 rounded" />
              <div className="skeleton h-3 w-1/4 rounded-full" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
