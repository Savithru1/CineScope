"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Movie } from "@/types";

interface WatchlistState {
  items: Movie[];
  add: (movie: Movie) => void;
  remove: (id: number) => void;
  toggle: (movie: Movie) => void;
  has: (id: number) => boolean;
}

export const useWatchlistStore = create<WatchlistState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (movie) =>
        set((state) => ({
          items: state.items.some((m) => m.id === movie.id)
            ? state.items
            : [movie, ...state.items],
        })),
      remove: (id) =>
        set((state) => ({ items: state.items.filter((m) => m.id !== id) })),
      toggle: (movie) => {
        if (get().has(movie.id)) get().remove(movie.id);
        else get().add(movie);
      },
      has: (id) => get().items.some((m) => m.id === id),
    }),
    {
      name: "cineverse_watchlist",
    }
  )
);
