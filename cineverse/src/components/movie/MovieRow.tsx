"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import type { Movie } from "@/types";
import { MovieCard, MovieCardSkeleton } from "@/components/movie/MovieCard";
import { useUIStore } from "@/store/ui";

interface MovieRowProps {
  title: string;
  movies: Movie[];
  loading?: boolean;
  category?: string;
}

export function MovieRow({ title, movies, loading = false, category }: MovieRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { setActiveView, setMoviesCategory } = useUIStore();

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 600;
    scrollRef.current.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  const handleSeeAll = () => {
    if (category) setMoviesCategory(category);
    setActiveView("movies");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-6 max-w-7xl mx-auto" aria-label={title}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span className="section-bar" aria-hidden="true" />
          <h2 className="text-lg sm:text-xl font-extrabold text-[var(--text-primary)] tracking-tight">
            {title}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            className="hidden sm:flex w-8 h-8 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-all items-center justify-center cursor-pointer"
            aria-label={`Scroll ${title} left`}
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden sm:flex w-8 h-8 rounded-full border border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--border-hover)] hover:text-[var(--text-primary)] transition-all items-center justify-center cursor-pointer"
            aria-label={`Scroll ${title} right`}
          >
            <ChevronRight size={16} />
          </button>
          <button
            onClick={handleSeeAll}
            className="flex items-center gap-1 text-[var(--accent)] hover:text-[var(--accent-hover)] text-xs font-bold transition-all ml-2 cursor-pointer"
            aria-label={`See all ${title}`}
          >
            SEE ALL <ArrowRight size={14} />
          </button>
        </div>
      </div>

      {/* Row Wrapper with Fade-Edge Effect */}
      <div className="h-scroll-container px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollRef}
          className="h-scroll flex gap-4 overflow-x-auto scroll-smooth pb-3"
          role="list"
          aria-label={`${title} movies`}
        >
          {loading ? (
            <MovieCardSkeleton count={7} />
          ) : movies.length === 0 ? (
            <p className="text-[var(--text-secondary)] text-sm py-6">No movies found.</p>
          ) : (
            movies.map((movie, i) => (
              <MovieCard key={movie.id} movie={movie} index={i} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
