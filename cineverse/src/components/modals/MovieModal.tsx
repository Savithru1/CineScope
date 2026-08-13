"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Star,
  Calendar,
  Clock,
  Globe,
  Bookmark,
  BookmarkCheck,
  Play,
  TrendingUp,
} from "lucide-react";
import { useUIStore, useGenreStore } from "@/store/ui";
import { useWatchlistStore } from "@/store/watchlist";
import { useToast } from "@/components/ui/Toaster";
import {
  IMG,
  formatRating,
  formatDate,
  formatRuntime,
  getRatingColor,
  getMovieVideos,
  getYouTubeTrailer,
} from "@/lib/tmdb";

export function MovieModal() {
  const { selectedMovie, isMovieModalOpen, closeMovieModal, openTrailer } = useUIStore();
  const { getName } = useGenreStore();
  const { has, toggle } = useWatchlistStore();
  const toast = useToast();

  const inWatchlist = selectedMovie ? has(selectedMovie.id) : false;

  const handleClose = useCallback(() => closeMovieModal(), [closeMovieModal]);

  // Handle escape key
  useEffect(() => {
    if (!isMovieModalOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [isMovieModalOpen, handleClose]);

  const handleWatchTrailer = async () => {
    if (!selectedMovie) return;
    try {
      const data = await getMovieVideos(selectedMovie.id);
      const key = getYouTubeTrailer(data.results);
      openTrailer(key ?? "");
    } catch {
      openTrailer("");
    }
  };

  const handleWatchlist = () => {
    if (!selectedMovie) return;
    toggle(selectedMovie);
    toast(
      inWatchlist ? "Removed from watchlist" : "Added to watchlist",
      inWatchlist ? "info" : "success"
    );
  };

  if (!selectedMovie) return null;

  const genres = selectedMovie.genres
    ? selectedMovie.genres
    : (selectedMovie.genre_ids ?? []).map((id) => ({ id, name: getName(id) }));

  const ratingColor = getRatingColor(selectedMovie.vote_average);
  const year = selectedMovie.release_date?.slice(0, 4) ?? "N/A";

  return (
    <AnimatePresence>
      {isMovieModalOpen && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Details for ${selectedMovie.title}`}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="modal-panel max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="modal-close-btn cursor-pointer"
              aria-label="Close movie details"
            >
              <X size={18} />
            </button>

            {/* Backdrop image */}
            {selectedMovie.backdrop_path && (
              <div className="relative h-60 sm:h-80 w-full overflow-hidden">
                <Image
                  src={IMG.backdrop(selectedMovie.backdrop_path)}
                  alt={`${selectedMovie.title} backdrop`}
                  fill
                  sizes="(max-width: 768px) 100vw, 780px"
                  className="object-cover bg-slow-zoom"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-secondary)] via-black/40 to-transparent" />
              </div>
            )}

            {/* Content Body */}
            <div className="flex flex-col sm:flex-row gap-6 p-6 -mt-20 sm:-mt-24 relative z-10">
              {/* Poster image */}
              <div className="flex-shrink-0 mx-auto sm:mx-0">
                <div className="relative w-36 sm:w-44 aspect-[2/3] rounded-xl overflow-hidden border border-[var(--border-hover)] shadow-2xl bg-[var(--bg-card)]">
                  <Image
                    src={IMG.poster(selectedMovie.poster_path)}
                    alt={`${selectedMovie.title} poster`}
                    fill
                    sizes="176px"
                    className="object-cover"
                    priority
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder-poster.svg";
                    }}
                  />
                </div>
              </div>

              {/* Info Column */}
              <div className="flex-1 min-w-0">
                {/* Genres */}
                <div className="flex flex-wrap gap-1.5 mb-3 justify-center sm:justify-start">
                  {genres.slice(0, 4).map((g) => (
                    <span key={g.id} className="genre-chip">
                      {g.name}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl font-black text-[var(--text-primary)] mb-1 leading-tight text-center sm:text-left tracking-tight">
                  {selectedMovie.title}
                </h2>
                {selectedMovie.tagline && (
                  <p className="text-[var(--text-secondary)] italic text-xs mb-3 text-center sm:text-left">
                    "{selectedMovie.tagline}"
                  </p>
                )}

                {/* Meta details */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 mb-4 text-xs font-semibold">
                  <div className="flex items-center gap-1 bg-black/45 px-2 py-0.5 rounded border border-white/5">
                    <Star size={12} className="text-[var(--gold)] fill-[var(--gold)]" />
                    <span className={ratingColor}>
                      {formatRating(selectedMovie.vote_average)}
                    </span>
                    <span className="text-[var(--text-secondary)] text-[10px]">
                      ({selectedMovie.vote_count?.toLocaleString()})
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-[var(--text-secondary)]">
                    <Calendar size={12} />
                    <span>{year}</span>
                  </div>
                  {selectedMovie.runtime ? (
                    <div className="flex items-center gap-1 text-[var(--text-secondary)]">
                      <Clock size={12} />
                      <span>{formatRuntime(selectedMovie.runtime)}</span>
                    </div>
                  ) : null}
                  {selectedMovie.original_language && (
                    <div className="flex items-center gap-1 text-[var(--text-secondary)]">
                      <Globe size={12} />
                      <span className="uppercase">{selectedMovie.original_language}</span>
                    </div>
                  )}
                </div>

                {/* Overview */}
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 line-clamp-4 text-center sm:text-left">
                  {selectedMovie.overview || "No overview available."}
                </p>

                {/* Stat cards */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-6">
                  <div className="stat-card">
                    <div className="flex items-center gap-1 text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-0.5">
                      <TrendingUp size={10} />
                      Popularity
                    </div>
                    <span className="text-sm font-extrabold text-[var(--text-primary)]">
                      {selectedMovie.popularity?.toFixed(0)}
                    </span>
                  </div>
                  <div className="stat-card">
                    <div className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-0.5">
                      Released
                    </div>
                    <span className="text-sm font-extrabold text-[var(--text-primary)]">
                      {formatDate(selectedMovie.release_date)}
                    </span>
                  </div>
                  {selectedMovie.status && (
                    <div className="stat-card">
                      <div className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-wider mb-0.5">
                        Status
                      </div>
                      <span className="text-sm font-extrabold text-[var(--text-primary)]">
                        {selectedMovie.status}
                      </span>
                    </div>
                  )}
                </div>

                {/* Action CTA Buttons */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                  <button
                    onClick={handleWatchTrailer}
                    className="btn-primary cursor-pointer text-sm shadow-md"
                    aria-label="Watch trailer"
                  >
                    <Play size={15} className="fill-current" />
                    Watch Trailer
                  </button>
                  <button
                    onClick={handleWatchlist}
                    className={`btn-ghost cursor-pointer text-sm ${
                      inWatchlist ? "btn-ghost-filled" : ""
                    }`}
                    aria-label={inWatchlist ? "Remove from watchlist" : "Add to watchlist"}
                  >
                    {inWatchlist ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                    {inWatchlist ? "In Watchlist" : "Add to Watchlist"}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
