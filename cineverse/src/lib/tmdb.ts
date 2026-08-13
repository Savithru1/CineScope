// ============================================================
// TMDB API Configuration & Helpers
// ============================================================

import axios from "axios";
import type {
  Movie,
  Genre,
  Video,
  TMDBResponse,
  Credits,
} from "@/types";

// ─── CONFIG ──────────────────────────────────────────────────────────────────
// Replace with your actual TMDB API key from https://www.themoviedb.org/settings/api
export const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || "YOUR_API_KEY";
export const TMDB_BASE_URL = "https://api.themoviedb.org/3";
export const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";

export const IMG = {
  poster: (path: string | null, size: "w342" | "w500" | "original" = "w500") =>
    path ? `${TMDB_IMAGE_BASE}/${size}${path}` : "/placeholder-poster.svg",
  backdrop: (
    path: string | null,
    size: "w780" | "w1280" | "original" = "w1280"
  ) =>
    path ? `${TMDB_IMAGE_BASE}/${size}${path}` : "/placeholder-backdrop.svg",
  avatar: (path: string | null) =>
    path ? `${TMDB_IMAGE_BASE}/w185${path}` : "/placeholder-avatar.svg",
};

// ─── AXIOS INSTANCE ──────────────────────────────────────────────────────────
const tmdb = axios.create({
  baseURL: TMDB_BASE_URL,
  params: { api_key: TMDB_API_KEY, language: "en-US" },
  timeout: 8000,
});

// ─── API FUNCTIONS ───────────────────────────────────────────────────────────

export async function getTrending(
  page = 1
): Promise<TMDBResponse<Movie>> {
  const res = await tmdb.get(`/trending/movie/week`, { params: { page } });
  return res.data;
}

export async function getPopular(page = 1): Promise<TMDBResponse<Movie>> {
  const res = await tmdb.get(`/movie/popular`, { params: { page } });
  return res.data;
}

export async function getTopRated(page = 1): Promise<TMDBResponse<Movie>> {
  const res = await tmdb.get(`/movie/top_rated`, { params: { page } });
  return res.data;
}

export async function getNowPlaying(page = 1): Promise<TMDBResponse<Movie>> {
  const res = await tmdb.get(`/movie/now_playing`, { params: { page } });
  return res.data;
}

export async function getUpcoming(page = 1): Promise<TMDBResponse<Movie>> {
  const res = await tmdb.get(`/movie/upcoming`, { params: { page } });
  return res.data;
}

export async function searchMovies(
  query: string,
  page = 1
): Promise<TMDBResponse<Movie>> {
  const res = await tmdb.get(`/search/movie`, {
    params: { query, page, include_adult: false },
  });
  return res.data;
}

export async function getMovieDetails(id: number): Promise<Movie> {
  const res = await tmdb.get(`/movie/${id}`);
  return res.data;
}

export async function getMovieVideos(id: number): Promise<{ results: Video[] }> {
  const res = await tmdb.get(`/movie/${id}/videos`);
  return res.data;
}

export async function getMovieCredits(id: number): Promise<Credits> {
  const res = await tmdb.get(`/movie/${id}/credits`);
  return res.data;
}

export async function getGenres(): Promise<{ genres: Genre[] }> {
  const res = await tmdb.get(`/genre/movie/list`);
  return res.data;
}

export async function discoverMovies(params: {
  page?: number;
  with_genres?: string;
  "vote_average.gte"?: number;
  sort_by?: string;
}): Promise<TMDBResponse<Movie>> {
  const res = await tmdb.get(`/discover/movie`, { params });
  return res.data;
}

// ─── HELPERS ─────────────────────────────────────────────────────────────────

export function getYouTubeTrailer(videos: Video[]): string | null {
  const preferred = ["Official Trailer", "Trailer", "Teaser Trailer", "Teaser"];
  for (const name of preferred) {
    const v = videos.find(
      (v) => v.site === "YouTube" && v.type === "Trailer" && v.name.includes(name)
    );
    if (v) return v.key;
  }
  // fallback: any YouTube trailer
  const trailer = videos.find(
    (v) => v.site === "YouTube" && v.type === "Trailer"
  );
  if (trailer) return trailer.key;
  // fallback: any YouTube video
  const any = videos.find((v) => v.site === "YouTube");
  return any ? any.key : null;
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}

export function formatDate(dateStr: string): string {
  if (!dateStr) return "Unknown";
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatRuntime(minutes: number): string {
  if (!minutes) return "N/A";
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

export function getRatingColor(rating: number): string {
  if (rating >= 8) return "text-emerald-400";
  if (rating >= 7) return "text-yellow-400";
  if (rating >= 5) return "text-orange-400";
  return "text-red-400";
}

// ─── SORT HELPERS ────────────────────────────────────────────────────────────
export function sortMovies(
  movies: Movie[],
  sort: string
): Movie[] {
  const clone = [...movies];
  switch (sort) {
    case "rating_desc":
      return clone.sort((a, b) => b.vote_average - a.vote_average);
    case "newest":
      return clone.sort(
        (a, b) =>
          new Date(b.release_date).getTime() -
          new Date(a.release_date).getTime()
      );
    case "oldest":
      return clone.sort(
        (a, b) =>
          new Date(a.release_date).getTime() -
          new Date(b.release_date).getTime()
      );
    case "popularity":
    default:
      return clone.sort((a, b) => b.popularity - a.popularity);
  }
}
