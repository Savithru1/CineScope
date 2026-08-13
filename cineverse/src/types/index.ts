// ============================================================
// TMDB Types
// ============================================================

export interface Movie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  vote_average: number;
  vote_count: number;
  release_date: string;
  genre_ids: number[];
  genres?: Genre[];
  popularity: number;
  original_language: string;
  adult: boolean;
  video: boolean;
  runtime?: number;
  tagline?: string;
  status?: string;
  budget?: number;
  revenue?: number;
  production_companies?: ProductionCompany[];
  belongs_to_collection?: Collection | null;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface Collection {
  id: number;
  name: string;
  poster_path: string | null;
  backdrop_path: string | null;
}

export interface Video {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

export interface TMDBResponse<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
  order: number;
}

export interface Credits {
  cast: CastMember[];
  crew: CastMember[];
}

// ============================================================
// App Types
// ============================================================

export type ViewType = "home" | "movies" | "search" | "watchlist";

export type SortOption = "popularity" | "rating_desc" | "newest" | "oldest";

export interface FilterState {
  genre: number | null;
  minRating: number;
  sort: SortOption;
}

export type MovieCategory = "trending" | "popular" | "toprated" | "upcoming";
