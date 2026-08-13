"use client";

import { useEffect, useState } from "react";
import type { Movie, Genre } from "@/types";
import { Hero } from "@/components/movie/Hero";
import { MovieRow } from "@/components/movie/MovieRow";
import {
  getTrending,
  getPopular,
  getTopRated,
  getUpcoming,
  getNowPlaying,
  getGenres,
} from "@/lib/tmdb";
import { useGenreStore } from "@/store/ui";
import { DEMO_MOVIES, DEMO_GENRES } from "@/lib/demoData";

interface HomeData {
  trending: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
  nowPlaying: Movie[];
}

export function HomeView() {
  const [data, setData] = useState<HomeData>({
    trending: [],
    popular: [],
    topRated: [],
    upcoming: [],
    nowPlaying: [],
  });
  const [loading, setLoading] = useState(true);
  const { setGenres } = useGenreStore();

  useEffect(() => {
    async function load() {
      try {
        const [trending, popular, topRated, upcoming, nowPlaying, genreData] = await Promise.all([
          getTrending(),
          getPopular(),
          getTopRated(),
          getUpcoming(),
          getNowPlaying(),
          getGenres(),
        ]);
        setData({
          trending: trending.results,
          popular: popular.results,
          topRated: topRated.results,
          upcoming: upcoming.results,
          nowPlaying: nowPlaying.results,
        });
        setGenres(genreData.genres);
      } catch {
        // Fallback to demo data
        setData({
          trending: DEMO_MOVIES,
          popular: [...DEMO_MOVIES].reverse(),
          topRated: [...DEMO_MOVIES].sort((a, b) => b.vote_average - a.vote_average),
          upcoming: DEMO_MOVIES.slice(0, 8),
          nowPlaying: DEMO_MOVIES.slice(4, 12),
        });
        setGenres(DEMO_GENRES);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [setGenres]);

  return (
    <div className="pt-16">
      {/* Hero — use trending movies */}
      <Hero movies={loading ? [] : data.trending.slice(0, 8)} />

      {/* Movie Rows */}
      <div className="space-y-2 pb-16">
        <MovieRow
          title="Trending Now 🔥"
          movies={data.trending}
          loading={loading}
          category="trending"
        />
        <MovieRow
          title="Now Playing in Theaters 🍿"
          movies={data.nowPlaying}
          loading={loading}
          category="nowplaying"
        />
        <MovieRow
          title="Popular Movies"
          movies={data.popular}
          loading={loading}
          category="popular"
        />
        <MovieRow
          title="Top Rated ⭐"
          movies={data.topRated}
          loading={loading}
          category="toprated"
        />
        <MovieRow
          title="Upcoming Movies 🎬"
          movies={data.upcoming}
          loading={loading}
          category="upcoming"
        />
      </div>
    </div>
  );
}
