"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, RefreshCw } from "lucide-react";
import type { Movie, Genre, SortOption } from "@/types";
import { MovieGridCard, MovieGridSkeleton } from "@/components/movie/MovieCard";
import {
  getTrending,
  getPopular,
  getTopRated,
  getUpcoming,
  getNowPlaying,
  discoverMovies,
  sortMovies,
} from "@/lib/tmdb";
import { useGenreStore } from "@/store/ui";
import { DEMO_MOVIES } from "@/lib/demoData";

interface FiltersBarProps {
  genres: Genre[];
  selectedGenre: number | null;
  minRating: number;
  sort: SortOption;
  category: string;
  onGenre: (v: number | null) => void;
  onRating: (v: number) => void;
  onSort: (v: SortOption) => void;
  onCategory: (v: string) => void;
  onReset: () => void;
}

function FiltersBar({
  genres,
  selectedGenre,
  minRating,
  sort,
  category,
  onGenre,
  onRating,
  onSort,
  onCategory,
  onReset,
}: FiltersBarProps) {
  const categories = [
    { value: "trending", label: "Trending" },
    { value: "popular", label: "Popular" },
    { value: "toprated", label: "Top Rated" },
    { value: "upcoming", label: "Upcoming" },
    { value: "nowplaying", label: "Now Playing" },
  ];

  return (
    <div className="sticky top-15 z-40 bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border)] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => onCategory(cat.value)}
              className={`filter-tab ${category === cat.value ? "active" : ""}`}
              aria-label={`Show ${cat.label} movies`}
              aria-pressed={category === cat.value}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Filter Row */}
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-1.5 text-[var(--text-secondary)] text-sm font-semibold">
            <Filter size={15} />
            <span>Filters:</span>
          </div>

          {/* Genre */}
          <select
            value={selectedGenre ?? ""}
            onChange={(e) => onGenre(e.target.value ? Number(e.target.value) : null)}
            className="ctrl-select"
            aria-label="Filter by genre"
          >
            <option value="">All Genres</option>
            {genres.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>

          {/* Rating */}
          <select
            value={minRating}
            onChange={(e) => onRating(Number(e.target.value))}
            className="ctrl-select"
            aria-label="Filter by minimum rating"
          >
            <option value={0}>Any Rating</option>
            <option value={5}>5+ ⭐</option>
            <option value={6}>6+ ⭐</option>
            <option value={7}>7+ ⭐</option>
            <option value={7.5}>7.5+ ⭐</option>
            <option value={8}>8+ ⭐</option>
            <option value={9}>9+ ⭐</option>
          </select>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => onSort(e.target.value as SortOption)}
            className="ctrl-select"
            aria-label="Sort movies"
          >
            <option value="popularity">Popularity</option>
            <option value="rating_desc">Rating ↓</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>

          <button
            onClick={onReset}
            className="btn-outline cursor-pointer"
            aria-label="Reset all filters"
          >
            <RefreshCw size={13} />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

interface MoviesViewProps {
  initialCategory?: string;
}

export function MoviesView({ initialCategory = "popular" }: MoviesViewProps) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [category, setCategory] = useState(initialCategory);
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState<SortOption>("popularity");
  const { genres } = useGenreStore();

  const fetchMovies = useCallback(
    async (cat: string, pg: number, genreId: number | null, rating: number) => {
      try {
        let result;
        if (genreId !== null || rating > 0) {
          const tmdbSort: Record<string, string> = {
            popularity: "popularity.desc",
            rating_desc: "vote_average.desc",
            newest: "primary_release_date.desc",
            oldest: "primary_release_date.asc",
          };
          result = await discoverMovies({
            page: pg,
            with_genres: genreId ? String(genreId) : undefined,
            "vote_average.gte": rating || undefined,
            sort_by: tmdbSort[sort] ?? "popularity.desc",
          });
        } else {
          const fetchers: Record<string, (p: number) => Promise<any>> = {
            trending: getTrending,
            popular: getPopular,
            toprated: getTopRated,
            upcoming: getUpcoming,
            nowplaying: getNowPlaying,
          };
          result = await (fetchers[cat] ?? getPopular)(pg);
        }
        return result;
      } catch {
        return null;
      }
    },
    [sort]
  );

  const loadMovies = useCallback(async () => {
    setLoading(true);
    setError(false);
    const result = await fetchMovies(category, 1, selectedGenre, minRating);
    if (!result) {
      setError(true);
      setMovies(DEMO_MOVIES);
      setHasMore(false);
    } else {
      let data = result.results as Movie[];
      data = sortMovies(data, sort);
      if (minRating > 0) data = data.filter((m) => m.vote_average >= minRating);
      setMovies(data);
      setHasMore(result.page < result.total_pages);
      setPage(1);
    }
    setLoading(false);
  }, [category, selectedGenre, minRating, sort, fetchMovies]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  const loadMore = async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    const nextPage = page + 1;
    const result = await fetchMovies(category, nextPage, selectedGenre, minRating);
    if (result) {
      let data = result.results as Movie[];
      data = sortMovies(data, sort);
      if (minRating > 0) data = data.filter((m) => m.vote_average >= minRating);
      setMovies((prev) => [...prev, ...data]);
      setPage(nextPage);
      setHasMore(nextPage < result.total_pages);
    }
    setLoadingMore(false);
  };

  const handleReset = () => {
    setSelectedGenre(null);
    setMinRating(0);
    setSort("popularity");
  };

  const handleCategory = (cat: string) => {
    setCategory(cat);
    setSelectedGenre(null);
    setMinRating(0);
  };

  const categoryTitles: Record<string, string> = {
    trending: "Trending Now",
    popular: "Popular Movies",
    toprated: "Top Rated Movies",
    upcoming: "Upcoming Releases",
    nowplaying: "Now Playing in Theaters",
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-1 tracking-tight">
            {categoryTitles[category] ?? "All Movies"}
          </h1>
          <p className="text-[var(--text-secondary)] text-sm font-medium">
            {movies.length > 0 ? `${movies.length}+ movies available` : "Explore curated cinema"}
          </p>
        </motion.div>
      </div>

      {/* Filters Bar */}
      <FiltersBar
        genres={genres}
        selectedGenre={selectedGenre}
        minRating={minRating}
        sort={sort}
        category={category}
        onGenre={setSelectedGenre}
        onRating={setMinRating}
        onSort={setSort}
        onCategory={handleCategory}
        onReset={handleReset}
      />

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-sm text-[var(--text-secondary)] flex items-center gap-2">
            <span>⚠️</span>
            <span>
              API unavailable — showing demo dataset. Set your TMDB API key in{" "}
              <code className="text-[var(--accent)] font-semibold">.env.local</code>.
            </span>
          </div>
        )}

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
            <MovieGridSkeleton count={12} />
          </div>
        ) : movies.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="text-5xl mb-4">🎬</div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">No movies found</h3>
            <p className="text-[var(--text-secondary)] text-sm max-w-sm mb-6">
              Try adjusting your filter settings or resetting filters to see more results.
            </p>
            <button onClick={handleReset} className="btn-primary cursor-pointer">
              Reset Filters
            </button>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={`${category}-${selectedGenre}-${minRating}-${sort}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
              role="list"
              aria-label="Movies grid"
            >
              {movies.map((movie, i) => (
                <MovieGridCard key={`${movie.id}-${i}`} movie={movie} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        )}

        {/* Load More */}
        {!loading && hasMore && movies.length > 0 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              disabled={loadingMore}
              className="btn-outline px-8 py-3 font-semibold cursor-pointer flex items-center gap-2"
              aria-label="Load more movies"
            >
              {loadingMore ? (
                <>
                  <RefreshCw size={14} className="animate-spin" />
                  Loading...
                </>
              ) : (
                "Load More Movies"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
