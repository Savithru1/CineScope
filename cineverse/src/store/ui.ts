"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Genre, Movie } from "@/types";

// ─── THEME STORE ─────────────────────────────────────────────
interface ThemeState {
  theme: "dark" | "light";
  toggle: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: "dark",
      toggle: () =>
        set({ theme: get().theme === "dark" ? "light" : "dark" }),
    }),
    { name: "cineverse_theme" }
  )
);

// ─── GENRE STORE ─────────────────────────────────────────────
interface GenreState {
  genres: Genre[];
  genreMap: Map<number, string>;
  setGenres: (genres: Genre[]) => void;
  getName: (id: number) => string;
}

export const useGenreStore = create<GenreState>()((set, get) => ({
  genres: [],
  genreMap: new Map(),
  setGenres: (genres) =>
    set({ genres, genreMap: new Map(genres.map((g) => [g.id, g.name])) }),
  getName: (id) => get().genreMap.get(id) ?? "Unknown",
}));

// ─── UI STORE ─────────────────────────────────────────────────
interface UIState {
  selectedMovie: Movie | null;
  isMovieModalOpen: boolean;
  isTrailerOpen: boolean;
  trailerKey: string | null;
  openMovieModal: (movie: Movie) => void;
  closeMovieModal: () => void;
  openTrailer: (key: string) => void;
  closeTrailer: () => void;
  activeView: "home" | "movies" | "search" | "watchlist";
  setActiveView: (view: "home" | "movies" | "search" | "watchlist") => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  moviesCategory: string;
  setMoviesCategory: (cat: string) => void;
}

export const useUIStore = create<UIState>()((set) => ({
  selectedMovie: null,
  isMovieModalOpen: false,
  isTrailerOpen: false,
  trailerKey: null,
  openMovieModal: (movie) => set({ selectedMovie: movie, isMovieModalOpen: true }),
  closeMovieModal: () => set({ isMovieModalOpen: false }),
  openTrailer: (key) => set({ trailerKey: key, isTrailerOpen: true }),
  closeTrailer: () => set({ isTrailerOpen: false, trailerKey: null }),
  activeView: "home",
  setActiveView: (view) => set({ activeView: view }),
  searchQuery: "",
  setSearchQuery: (q) => set({ searchQuery: q }),
  moviesCategory: "popular",
  setMoviesCategory: (cat) => set({ moviesCategory: cat }),
}));
