// ============================================================
// CINEVERSE — PURE VANILLA JAVASCRIPT
// ============================================================

// ─── CONFIGURATION ───────────────────────────────────────────
const TMDB_API_KEY = "YOUR_API_KEY"; // Set your key here or leave it empty to trigger demo fallback
const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";

// ─── LOCAL STORAGE KEYS ──────────────────────────────────────
const WATCHLIST_KEY = "cineverse_watchlist";
const THEME_KEY = "cineverse_theme";

// ─── FALLBACK DEMO DATASET ──────────────────────────────────
const DEMO_GENRES = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 18, name: "Drama" },
  { id: 14, name: "Fantasy" },
  { id: 27, name: "Horror" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 53, name: "Thriller" }
];

const DEMO_MOVIES = [
  {
    id: 101,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. When Earth becomes uninhabitable, former NASA pilot Cooper joins a desperate mission across the cosmos.",
    poster_path: null,
    backdrop_path: null,
    vote_average: 8.6,
    vote_count: 32400,
    release_date: "2014-11-05",
    genre_ids: [18, 878, 12],
    popularity: 142.5,
    original_language: "en",
    runtime: 169,
    tagline: "Mankind was born on Earth. It was never meant to die here."
  },
  {
    id: 102,
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster_path: null,
    backdrop_path: null,
    vote_average: 9.0,
    vote_count: 35000,
    release_date: "2008-07-14",
    genre_ids: [28, 80, 18],
    popularity: 135.2,
    original_language: "en",
    runtime: 152,
    tagline: "Why So Serious?"
  },
  {
    id: 103,
    title: "Inception",
    overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    poster_path: null,
    backdrop_path: null,
    vote_average: 8.8,
    vote_count: 36200,
    release_date: "2010-07-16",
    genre_ids: [28, 878, 12],
    popularity: 128.0,
    original_language: "en",
    runtime: 148,
    tagline: "Your mind is the scene of the crime."
  },
  {
    id: 104,
    title: "Dune: Part Two",
    overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
    poster_path: null,
    backdrop_path: null,
    vote_average: 8.4,
    vote_count: 9400,
    release_date: "2024-03-01",
    genre_ids: [878, 12, 28],
    popularity: 245.8,
    original_language: "en",
    runtime: 166,
    tagline: "Long live the Fighters."
  },
  {
    id: 105,
    title: "Oppenheimer",
    overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    poster_path: null,
    backdrop_path: null,
    vote_average: 8.3,
    vote_count: 21200,
    release_date: "2023-07-21",
    genre_ids: [18, 36],
    popularity: 185.0,
    original_language: "en",
    runtime: 180,
    tagline: "The world forever changes."
  },
  {
    id: 106,
    title: "The Shawshank Redemption",
    overview: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic human decency.",
    poster_path: null,
    backdrop_path: null,
    vote_average: 8.7,
    vote_count: 28400,
    release_date: "1994-09-23",
    genre_ids: [18, 80],
    popularity: 98.5,
    original_language: "en",
    runtime: 142,
    tagline: "Fear can hold you prisoner. Hope can set you free."
  },
  {
    id: 107,
    title: "Parasite",
    overview: "All unemployed, Ki-taek's family takes a wealthy family's house over as they begin to systematically infiltrate their household and start living their dreams.",
    poster_path: null,
    backdrop_path: null,
    vote_average: 8.5,
    vote_count: 18200,
    release_date: "2019-05-30",
    genre_ids: [35, 18, 53],
    popularity: 110.3,
    original_language: "ko",
    runtime: 132,
    tagline: "Act like you own the place."
  },
  {
    id: 108,
    title: "Inside Out 2",
    overview: "Teenager Riley's mind headquarters is suddenly turned upside down when Joy, Sadness, Anger, Fear and Disgust who've long been running a successful operation, are forced to make room for a whole new roster of emotions.",
    poster_path: null,
    backdrop_path: null,
    vote_average: 7.8,
    vote_count: 8700,
    release_date: "2024-06-14",
    genre_ids: [16, 12, 35],
    popularity: 195.0,
    original_language: "en",
    runtime: 100,
    tagline: "Make room for new emotions."
  }
];

// ─── STATE VARIABLES ──────────────────────────────────────────
let currentTheme = "dark";
let watchlist = [];
let genreMap = new Map();
let currentView = "home";
let activeHeroIndex = 0;
let heroRotationInterval = null;

// Filter configurations
let filterGenre = "";
let filterRating = 0;
let filterSort = "popularity";
let currentMoviesList = [];
let discoverPage = 1;

// ─── ELEMENT SELECTORS ────────────────────────────────────────
const navbar = document.getElementById("navbar");
const navHome = document.getElementById("navHome");
const navMovies = document.getElementById("navMovies");
const navWatchlist = document.getElementById("navWatchlist");
const watchlistBadge = document.getElementById("watchlistBadge");
const watchlistBadgeMobile = document.getElementById("watchlistBadgeMobile");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchClear = document.getElementById("searchClear");
const mobileSearchInput = document.getElementById("mobileSearchInput");
const mobileSearchBtn = document.getElementById("mobileSearchBtn");

const mainContent = document.getElementById("mainContent");
const homeView = document.getElementById("homeView");
const moviesView = document.getElementById("moviesView");
const searchView = document.getElementById("searchView");
const watchlistView = document.getElementById("watchlistView");

// Hero elements
const heroBackdrop = document.getElementById("heroBackdrop");
const heroInfo = document.getElementById("heroInfo");
const heroSkeleton = document.getElementById("heroSkeleton");
const heroBadges = document.getElementById("heroBadges");
const heroTitle = document.getElementById("heroTitle");
const heroMeta = document.getElementById("heroMeta");
const heroOverview = document.getElementById("heroOverview");
const heroTrailerBtn = document.getElementById("heroTrailerBtn");
const heroWatchlistBtn = document.getElementById("heroWatchlistBtn");

// Rows
const trendingRow = document.getElementById("trendingRow");
const popularRow = document.getElementById("popularRow");
const topRatedRow = document.getElementById("topRatedRow");
const upcomingRow = document.getElementById("upcomingRow");

// Filter elements
const genreFilter = document.getElementById("genreFilter");
const ratingFilter = document.getElementById("ratingFilter");
const sortFilter = document.getElementById("sortFilter");
const resetFilters = document.getElementById("resetFilters");
const moviesGrid = document.getElementById("moviesGrid");
const loadMoreBtn = document.getElementById("loadMoreBtn");

// Search & Watchlist layout elements
const searchGrid = document.getElementById("searchGrid");
const searchResultsSubtitle = document.getElementById("searchResultsSubtitle");
const watchlistGrid = document.getElementById("watchlistGrid");
const watchlistSubtitle = document.getElementById("watchlistSubtitle");
const watchlistEmpty = document.getElementById("watchlistEmpty");
const browseMoviesBtn = document.getElementById("browseMoviesBtn");

// Modals
const movieModal = document.getElementById("movieModal");
const modalClose = document.getElementById("modalClose");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalPoster = document.getElementById("modalPoster");
const modalGenres = document.getElementById("modalGenres");
const modalTitle = document.getElementById("modalTitle");
const modalMetaRow = document.getElementById("modalMetaRow");
const modalOverview = document.getElementById("modalOverview");
const modalStats = document.getElementById("modalStats");
const modalTrailerBtn = document.getElementById("modalTrailerBtn");
const modalWatchlistBtn = document.getElementById("modalWatchlistBtn");

// Trailer Modal
const trailerModal = document.getElementById("trailerModal");
const trailerClose = document.getElementById("trailerClose");
const trailerIframe = document.getElementById("trailerIframe");
const trailerIframeWrapper = document.getElementById("trailerIframeWrapper");
const trailerNoVideo = document.getElementById("trailerNoVideo");

// Toast and Scroll Top
const toastContainer = document.getElementById("toastContainer");
const scrollTopBtn = document.getElementById("scrollTopBtn");

// ─── INITIALIZATION ───────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initWatchlist();
  initGenres();
  initViews();
  setupEventListeners();
  loadHomeContent();
});

// ─── THEME LOGIC ──────────────────────────────────────────────
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  if (savedTheme) {
    currentTheme = savedTheme;
  } else if (window.matchMedia("(prefers-color-scheme: light)").matches) {
    currentTheme = "light";
  }
  applyTheme();
}

function applyTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme);
  themeIcon.textContent = currentTheme === "dark" ? "☀️" : "🌙";
  localStorage.setItem(THEME_KEY, currentTheme);
}

function toggleTheme() {
  currentTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme();
  showToast(`Switched to ${currentTheme} mode`, "info");
}

// ─── WATCHLIST LOGIC ──────────────────────────────────────────
function initWatchlist() {
  const savedList = localStorage.getItem(WATCHLIST_KEY);
  if (savedList) {
    try {
      watchlist = JSON.parse(savedList);
    } catch (e) {
      watchlist = [];
    }
  }
  updateWatchlistBadges();
}

function updateWatchlistBadges() {
  const count = watchlist.length;
  watchlistBadge.textContent = count;
  watchlistBadgeMobile.textContent = count;
  watchlistBadge.style.display = count > 0 ? "inline-block" : "none";
}

function saveWatchlist() {
  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(watchlist));
  updateWatchlistBadges();
}

function toggleMovieInWatchlist(movie) {
  const index = watchlist.findIndex((m) => m.id === movie.id);
  if (index > -1) {
    watchlist.splice(index, 1);
    showToast(`Removed from watchlist`, "info");
  } else {
    watchlist.unshift(movie);
    showToast(`Added to watchlist`, "success");
  }
  saveWatchlist();
  
  // Refresh views as needed
  if (currentView === "watchlist") {
    renderWatchlistGrid();
  }
  // If modal is open, update modal buttons
  updateModalWatchlistState(movie.id);
  updateCardWatchlistStates();
  updateHeroWatchlistState();
}

function isMovieInWatchlist(id) {
  return watchlist.some((m) => m.id === id);
}

// ─── API FETCH HELPER ──────────────────────────────────────────
async function tmdbFetch(endpoint, queryParams = {}) {
  if (!TMDB_API_KEY || TMDB_API_KEY === "YOUR_API_KEY" || TMDB_API_KEY === "") {
    throw new Error("Missing TMDB API key");
  }
  
  const params = new URLSearchParams({
    api_key: TMDB_API_KEY,
    language: "en-US",
    ...queryParams
  });
  
  const url = `${TMDB_BASE_URL}${endpoint}?${params.toString()}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  return await response.json();
}

// ─── GENRE FETCHING ────────────────────────────────────────────
async function initGenres() {
  try {
    const data = await tmdbFetch("/genre/movie/list");
    data.genres.forEach((g) => {
      genreMap.set(g.id, g.name);
      addGenreOption(g);
    });
  } catch (e) {
    // Fallback to demo genres
    DEMO_GENRES.forEach((g) => {
      genreMap.set(g.id, g.name);
      addGenreOption(g);
    });
  }
}

function addGenreOption(genre) {
  const option = document.createElement("option");
  option.value = genre.id;
  option.textContent = genre.name;
  genreFilter.appendChild(option);
}

// ─── MAIN HOME VIEW POPULATE ──────────────────────────────────
async function loadHomeContent() {
  showHeroSkeleton(true);
  try {
    const [trending, nowPlaying, popular, topRated, upcoming] = await Promise.all([
      tmdbFetch("/trending/movie/week"),
      tmdbFetch("/movie/now_playing"),
      tmdbFetch("/movie/popular"),
      tmdbFetch("/movie/top_rated"),
      tmdbFetch("/movie/upcoming")
    ]);

    showHeroSkeleton(false);
    populateHeroRotation(trending.results.slice(0, 8));
    
    renderMovieRow(trendingRow, trending.results);
    renderMovieRow(upcomingRow, upcoming.results);
    renderMovieRow(popularRow, popular.results);
    renderMovieRow(topRatedRow, topRated.results);
  } catch (e) {
    console.warn("Using local demo data fallback as TMDB key is missing or failed.", e);
    showHeroSkeleton(false);
    
    populateHeroRotation(DEMO_MOVIES);
    renderMovieRow(trendingRow, DEMO_MOVIES);
    renderMovieRow(upcomingRow, DEMO_MOVIES);
    renderMovieRow(popularRow, [...DEMO_MOVIES].reverse());
    renderMovieRow(topRatedRow, [...DEMO_MOVIES].sort((a,b) => b.vote_average - a.vote_average));
  }
}

// ─── ROTATING FEATURED HERO ───────────────────────────────────
function showHeroSkeleton(visible) {
  if (visible) {
    heroSkeleton.style.display = "block";
    heroInfo.style.display = "none";
  } else {
    heroSkeleton.style.display = "none";
    heroInfo.style.display = "block";
  }
}

function populateHeroRotation(movies) {
  if (heroRotationInterval) clearInterval(heroRotationInterval);
  if (!movies || movies.length === 0) return;

  activeHeroIndex = 0;
  applyHeroMovie(movies[activeHeroIndex]);

  if (movies.length > 1) {
    heroRotationInterval = setInterval(() => {
      activeHeroIndex = (activeHeroIndex + 1) % movies.length;
      applyHeroMovie(movies[activeHeroIndex]);
    }, 9000);
  }
}

function applyHeroMovie(movie) {
  if (!movie) return;
  
  // Backdrop Image handling
  const bgPath = movie.backdrop_path ? `${TMDB_IMAGE_BASE}/original${movie.backdrop_path}` : "/placeholder-backdrop.svg";
  heroBackdrop.style.backgroundImage = `url('${bgPath}')`;
  heroBackdrop.classList.remove("zoom-effect");
  void heroBackdrop.offsetWidth; // trigger reflow
  heroBackdrop.classList.add("zoom-effect");

  // Title
  heroTitle.textContent = movie.title;
  
  // Meta Info
  const year = movie.release_date ? movie.release_date.slice(0,4) : "N/A";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";
  heroMeta.innerHTML = `
    <span class="hero-rating"><span style="color:var(--gold);">★</span> ${rating}</span>
    <span>${year}</span>
    <span>${movie.original_language ? movie.original_language.toUpperCase() : "EN"}</span>
  `;

  // Overview
  heroOverview.textContent = movie.overview || "Explore detailed statistics, genres, ratings, and trailers.";

  // Badges (Genres)
  heroBadges.innerHTML = "";
  const maxGenres = 3;
  let genreCount = 0;
  if (movie.genre_ids) {
    movie.genre_ids.forEach((id) => {
      if (genreCount >= maxGenres) return;
      const genreName = genreMap.get(id);
      if (genreName) {
        const badge = document.createElement("span");
        badge.className = "genre-chip";
        badge.textContent = genreName;
        heroBadges.appendChild(badge);
        genreCount++;
      }
    });
  }

  // Set action buttons click listeners
  heroTrailerBtn.onclick = () => showTrailer(movie.id);
  
  updateHeroWatchlistState(movie);
}

function updateHeroWatchlistState(movie) {
  const currentMovie = movie || DEMO_MOVIES[activeHeroIndex];
  if (!currentMovie) return;

  const inWl = isMovieInWatchlist(currentMovie.id);
  heroWatchlistBtn.innerHTML = inWl
    ? `<span>✓</span> In Watchlist`
    : `<span>+</span> Add to Watchlist`;
  
  heroWatchlistBtn.onclick = () => toggleMovieInWatchlist(currentMovie);
}

// ─── MOVIE CARD RENDERING ─────────────────────────────────────
function renderMovieRow(rowElement, movies) {
  rowElement.innerHTML = "";
  if (!movies || movies.length === 0) {
    rowElement.innerHTML = `<p style="padding: 1rem; color: var(--text-secondary);">No content available</p>`;
    return;
  }

  movies.forEach((movie) => {
    const card = createMovieCard(movie);
    rowElement.appendChild(card);
  });
}

function createMovieCard(movie) {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.setAttribute("tabindex", "0");
  card.setAttribute("data-id", movie.id);

  // Netflix layout: prioritize horizontal backdrop path for 16:9 aspect ratio
  const posterPath = movie.backdrop_path 
    ? `${TMDB_IMAGE_BASE}/w342${movie.backdrop_path}` 
    : (movie.poster_path ? `${TMDB_IMAGE_BASE}/w342${movie.poster_path}` : "/placeholder-backdrop.svg");

  const inWatchlist = isMovieInWatchlist(movie.id);
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "0.0";
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "N/A";
  const firstGenreId = movie.genre_ids && movie.genre_ids[0];
  const genreLabel = firstGenreId ? genreMap.get(firstGenreId) : "";

  card.innerHTML = `
    <div class="card-poster-wrapper">
      <img class="card-poster" src="${posterPath}" alt="${movie.title} Poster" loading="lazy" />
      <div class="card-rating-badge">
        <span style="color:var(--gold);">★</span> ${rating}
      </div>
      <button class="card-wl-btn ${inWatchlist ? "active" : ""}" aria-label="Toggle Watchlist">
        ${inWatchlist ? "✓" : "+"}
      </button>
    </div>
    <div class="card-info-panel">
      <h3 class="card-title">${movie.title}</h3>
      <div class="card-meta">
        <span>${year}</span>
        ${genreLabel ? `<span class="genre-chip">${genreLabel}</span>` : ""}
      </div>
    </div>
  `;

  // Attach card detail clicks
  card.addEventListener("click", (e) => {
    // If user clicked the watchlist button, bypass opening modal details
    if (e.target.closest(".card-wl-btn")) {
      e.stopPropagation();
      toggleMovieInWatchlist(movie);
      return;
    }
    openDetailsModal(movie);
  });

  // Enter key support for accessibility
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      openDetailsModal(movie);
    }
  });

  return card;
}

function updateCardWatchlistStates() {
  document.querySelectorAll(".movie-card").forEach((card) => {
    const id = parseInt(card.getAttribute("data-id"));
    if (id) {
      const active = isMovieInWatchlist(id);
      const btn = card.querySelector(".card-wl-btn");
      if (btn) {
        btn.innerHTML = active ? "✓" : "+";
        if (active) btn.classList.add("active");
        else btn.classList.remove("active");
      }
    }
  });
}

// ─── MOVIES EXPLORE GRID & DISCOVER ───────────────────────────
async function fetchAndRenderDiscoverGrid(loadMore = false) {
  if (!loadMore) {
    discoverPage = 1;
    moviesGrid.innerHTML = "";
    // Show skeleton loads
    showGridSkeleton(true);
  } else {
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = "Loading...";
  }

  try {
    let result;
    if (filterGenre || filterRating > 0) {
      // discover endpoint
      result = await tmdbFetch("/discover/movie", {
        page: discoverPage,
        with_genres: filterGenre || undefined,
        "vote_average.gte": filterRating || undefined,
        sort_by: filterSort === "popularity" ? "popularity.desc" : 
                 filterSort === "rating_desc" ? "vote_average.desc" :
                 filterSort === "newest" ? "primary_release_date.desc" : "primary_release_date.asc"
      });
    } else {
      // standard category endpoints
      const endpoint = "/movie/popular";
      result = await tmdbFetch(endpoint, { page: discoverPage });
    }

    showGridSkeleton(false);
    loadMoreBtn.disabled = false;
    loadMoreBtn.textContent = "Load More";

    if (result && result.results) {
      let finalMovies = result.results;

      // Local client sorting/filtering triggers
      if (filterGenre) {
        finalMovies = finalMovies.filter(m => m.genre_ids && m.genre_ids.includes(parseInt(filterGenre)));
      }
      if (filterRating > 0) {
        finalMovies = finalMovies.filter(m => m.vote_average >= filterRating);
      }
      
      // Perform final sort
      finalMovies = sortMoviesList(finalMovies, filterSort);

      if (!loadMore) {
        currentMoviesList = finalMovies;
      } else {
        currentMoviesList = [...currentMoviesList, ...finalMovies];
      }

      if (currentMoviesList.length === 0) {
        moviesGrid.innerHTML = `
          <div class="empty-state" style="grid-column: 1 / -1;">
            <div class="empty-icon">🎬</div>
            <h3 class="empty-title">No movies match your filters</h3>
            <p class="empty-desc">Try resetting your selection or selecting a different genre.</p>
          </div>
        `;
        loadMoreBtn.style.display = "none";
      } else {
        moviesGrid.innerHTML = "";
        currentMoviesList.forEach((m) => {
          moviesGrid.appendChild(createMovieCard(m));
        });
        loadMoreBtn.style.display = result.page < result.total_pages ? "block" : "none";
      }
    }
  } catch (e) {
    // API failed, fallback to local dataset
    showGridSkeleton(false);
    loadMoreBtn.style.display = "none";
    
    let localData = [...DEMO_MOVIES];
    if (filterGenre) {
      localData = localData.filter(m => m.genre_ids && m.genre_ids.includes(parseInt(filterGenre)));
    }
    if (filterRating > 0) {
      localData = localData.filter(m => m.vote_average >= filterRating);
    }
    localData = sortMoviesList(localData, filterSort);

    moviesGrid.innerHTML = "";
    if (localData.length === 0) {
      moviesGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-icon">🎬</div>
          <h3 class="empty-title">No matching demo movies</h3>
        </div>
      `;
    } else {
      localData.forEach((m) => {
        moviesGrid.appendChild(createMovieCard(m));
      });
    }
  }
}

function sortMoviesList(movies, option) {
  const clone = [...movies];
  if (option === "rating_desc") {
    return clone.sort((a, b) => b.vote_average - a.vote_average);
  } else if (option === "newest") {
    return clone.sort((a, b) => new Date(b.release_date || 0).getTime() - new Date(a.release_date || 0).getTime());
  } else if (option === "oldest") {
    return clone.sort((a, b) => new Date(a.release_date || 0).getTime() - new Date(b.release_date || 0).getTime());
  }
  // Popularity default
  return clone.sort((a, b) => b.popularity - a.popularity);
}

function showGridSkeleton(visible) {
  if (!visible) return;
  moviesGrid.innerHTML = "";
  for (let i = 0; i < 6; i++) {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <div class="skeleton aspect-ratio" style="height:230px; border-radius:var(--r-md);"></div>
      <div style="padding:0.75rem; display:flex; flex-direction:column; gap:0.5rem;">
        <div class="skeleton" style="height:15px; width:80%;"></div>
        <div class="skeleton" style="height:12px; width:50%;"></div>
      </div>
    `;
    moviesGrid.appendChild(card);
  }
}

// ─── SEARCH LOGIC ─────────────────────────────────────────────
async function handleQuerySearch(q) {
  if (!q || !q.trim()) return;
  
  searchResultsSubtitle.textContent = `Searching for "${q}"...`;
  searchGrid.innerHTML = "";
  switchView("search");

  try {
    const result = await tmdbFetch("/search/movie", { query: q });
    if (result && result.results && result.results.length > 0) {
      searchResultsSubtitle.textContent = `Found ${result.results.length} movie${result.results.length === 1 ? "" : "s"} for "${q}"`;
      result.results.forEach((movie) => {
        searchGrid.appendChild(createMovieCard(movie));
      });
    } else {
      showSearchEmptyState(q);
    }
  } catch (e) {
    // fallback fuzzy search in demo
    const match = DEMO_MOVIES.filter(m => m.title.toLowerCase().includes(q.toLowerCase()));
    if (match.length > 0) {
      searchResultsSubtitle.textContent = `Showing demo matches for "${q}"`;
      match.forEach(m => searchGrid.appendChild(createMovieCard(m)));
    } else {
      showSearchEmptyState(q);
    }
  }
}

function showSearchEmptyState(q) {
  searchResultsSubtitle.textContent = `No search results for "${q}"`;
  searchGrid.innerHTML = `
    <div class="empty-state" style="grid-column: 1 / -1;">
      <div class="empty-icon">🔍</div>
      <h3 class="empty-title">No matches found</h3>
      <p class="empty-desc">Check your spelling or look up popular movies instead.</p>
    </div>
  `;
}

// ─── WATCHLIST GRID VIEW ──────────────────────────────────────
function renderWatchlistGrid() {
  watchlistGrid.innerHTML = "";
  if (watchlist.length === 0) {
    watchlistSubtitle.style.display = "none";
    watchlistEmpty.style.display = "flex";
  } else {
    watchlistSubtitle.style.display = "block";
    watchlistSubtitle.textContent = `${watchlist.length} movie${watchlist.length === 1 ? "" : "s"} saved`;
    watchlistEmpty.style.display = "none";
    
    watchlist.forEach((movie) => {
      watchlistGrid.appendChild(createMovieCard(movie));
    });
  }
}

// ─── DETAIL MODAL RENDERING ───────────────────────────────────
async function openDetailsModal(movie) {
  if (!movie) return;

  // Set default fallback backdrop and posters
  const bgPath = movie.backdrop_path ? `${TMDB_IMAGE_BASE}/w780${movie.backdrop_path}` : "/placeholder-backdrop.svg";
  const posterPath = movie.poster_path ? `${TMDB_IMAGE_BASE}/w342${movie.poster_path}` : "/placeholder-poster.svg";

  modalBackdrop.style.backgroundImage = `url('${bgPath}')`;
  modalPoster.src = posterPath;
  modalPoster.alt = `${movie.title} poster`;
  modalTitle.textContent = movie.title;
  modalOverview.textContent = movie.overview || "Details are unavailable for this movie title.";
  
  // Genres list
  modalGenres.innerHTML = "";
  if (movie.genre_ids) {
    movie.genre_ids.forEach((id) => {
      const gName = genreMap.get(id);
      if (gName) {
        const span = document.createElement("span");
        span.className = "genre-chip";
        span.textContent = gName;
        modalGenres.appendChild(span);
      }
    });
  } else if (movie.genres) {
    movie.genres.forEach((g) => {
      const span = document.createElement("span");
      span.className = "genre-chip";
      span.textContent = g.name;
      modalGenres.appendChild(span);
    });
  }

  // Meta row information
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "N/A";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "0.0";
  modalMetaRow.innerHTML = `
    <span class="hero-rating" style="background:rgba(255,255,255,0.05);"><span style="color:var(--gold);">★</span> ${rating}</span>
    <span>Released: ${year}</span>
    <span>Lang: ${movie.original_language ? movie.original_language.toUpperCase() : "EN"}</span>
  `;

  // Stats boxes
  modalStats.innerHTML = `
    <div class="stat-box">
      <span class="stat-label">Popularity</span>
      <span class="stat-value">${movie.popularity ? movie.popularity.toFixed(0) : "N/A"}</span>
    </div>
    <div class="stat-box">
      <span class="stat-label">Runtime</span>
      <span class="stat-value">${movie.runtime ? `${movie.runtime}m` : "N/A"}</span>
    </div>
  `;

  // Action links
  modalTrailerBtn.onclick = () => showTrailer(movie.id);
  
  updateModalWatchlistState(movie.id);
  modalWatchlistBtn.onclick = () => toggleMovieInWatchlist(movie);

  // Show Modal overlay
  movieModal.style.display = "flex";
}

function updateModalWatchlistState(id) {
  const inWl = isMovieInWatchlist(id);
  modalWatchlistBtn.innerHTML = inWl
    ? `<span>✓</span> In Watchlist`
    : `<span>+</span> Add to Watchlist`;
  if (inWl) {
    modalWatchlistBtn.className = "btn btn-primary";
  } else {
    modalWatchlistBtn.className = "btn btn-secondary";
  }
}

// ─── TRAILER OVERLAY ──────────────────────────────────────────
async function showTrailer(movieId) {
  trailerIframe.src = "";
  trailerIframeWrapper.style.display = "none";
  trailerNoVideo.style.display = "none";
  trailerModal.style.display = "flex";

  try {
    const data = await tmdbFetch(`/movie/${movieId}/videos`);
    const videos = data.results || [];
    
    // Search for a suitable YouTube key
    const officialTrailer = videos.find(v => v.site === "YouTube" && v.type === "Trailer");
    const anyVideo = videos.find(v => v.site === "YouTube");
    const key = officialTrailer ? officialTrailer.key : (anyVideo ? anyVideo.key : null);

    if (key) {
      trailerIframe.src = `https://www.youtube.com/embed/${key}?autoplay=1&rel=0&modestbranding=1`;
      trailerIframeWrapper.style.display = "block";
    } else {
      trailerNoVideo.style.display = "flex";
    }
  } catch (e) {
    // API failed or missing trailer
    trailerNoVideo.style.display = "flex";
  }
}

// ─── NAVIGATION VIEWS CONTROLLER ──────────────────────────────
function initViews() {
  switchView("home");
}

function switchView(viewName) {
  currentView = viewName;
  
  // Update views styling
  homeView.classList.remove("active");
  moviesView.classList.remove("active");
  searchView.classList.remove("active");
  watchlistView.classList.remove("active");

  // Deactivate all nav buttons
  navHome.classList.remove("active");
  navMovies.classList.remove("active");
  navWatchlist.classList.remove("active");

  if (viewName === "home") {
    homeView.classList.add("active");
    navHome.classList.add("active");
  } else if (viewName === "movies") {
    moviesView.classList.add("active");
    navMovies.classList.add("active");
    fetchAndRenderDiscoverGrid();
  } else if (viewName === "search") {
    searchView.classList.add("active");
  } else if (viewName === "watchlist") {
    watchlistView.classList.add("active");
    navWatchlist.classList.add("active");
    renderWatchlistGrid();
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ─── TOAST MESSAGING ──────────────────────────────────────────
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${message}</span>
    <button class="toast-close" aria-label="Close notification">✕</button>
  `;
  
  toast.querySelector(".toast-close").onclick = () => {
    toast.remove();
  };

  toastContainer.appendChild(toast);

  // Auto remove
  setTimeout(() => {
    toast.style.animation = "toastIn 0.3s reverse ease forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ─── EVENT LISTENERS CONFIG ────────────────────────────────────
function setupEventListeners() {
  // Navigation
  navHome.onclick = (e) => { e.preventDefault(); switchView("home"); };
  navMovies.onclick = (e) => { e.preventDefault(); switchView("movies"); };
  navWatchlist.onclick = (e) => { e.preventDefault(); switchView("watchlist"); };
  
  // Mobile menu navigation
  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.onclick = (e) => {
      e.preventDefault();
      const view = link.getAttribute("data-section");
      switchView(view);
      mobileMenu.classList.remove("active");
      hamburger.classList.remove("active");
    };
  });

  // Hamburger toggling
  hamburger.onclick = () => {
    mobileMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  };

  // Theme changing
  themeToggle.onclick = () => toggleTheme();

  // Search input listeners (Debounced input)
  let searchTimeout = null;
  searchInput.addEventListener("input", (e) => {
    const val = e.target.value;
    if (val.trim()) {
      searchClear.style.display = "block";
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        handleQuerySearch(val.trim());
      }, 500);
    } else {
      searchClear.style.display = "none";
    }
  });

  searchClear.onclick = () => {
    searchInput.value = "";
    searchClear.style.display = "none";
    switchView("home");
  };

  // Search Submit Enter
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleQuerySearch(searchInput.value.trim());
    }
  });

  // Mobile search Submit
  mobileSearchBtn.onclick = () => {
    const val = mobileSearchInput.value;
    if (val.trim()) {
      handleQuerySearch(val.trim());
      mobileMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  };

  mobileSearchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleQuerySearch(mobileSearchInput.value.trim());
      mobileMenu.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });

  // Filters change
  genreFilter.onchange = (e) => {
    filterGenre = e.target.value;
    fetchAndRenderDiscoverGrid();
  };
  ratingFilter.onchange = (e) => {
    filterRating = parseFloat(e.target.value);
    fetchAndRenderDiscoverGrid();
  };
  sortFilter.onchange = (e) => {
    filterSort = e.target.value;
    fetchAndRenderDiscoverGrid();
  };

  resetFilters.onclick = () => {
    genreFilter.value = "";
    ratingFilter.value = "0";
    sortFilter.value = "popularity";
    filterGenre = "";
    filterRating = 0;
    filterSort = "popularity";
    fetchAndRenderDiscoverGrid();
  };

  loadMoreBtn.onclick = () => {
    discoverPage++;
    fetchAndRenderDiscoverGrid(true);
  };

  // Empty Watchlist Browse button
  browseMoviesBtn.onclick = () => switchView("movies");

  // Modals closing triggers
  modalClose.onclick = () => { movieModal.style.display = "none"; };
  movieModal.onclick = (e) => { if (e.target === movieModal) movieModal.style.display = "none"; };

  trailerClose.onclick = () => {
    trailerIframe.src = "";
    trailerModal.style.display = "none";
  };
  trailerModal.onclick = (e) => {
    if (e.target === trailerModal) {
      trailerIframe.src = "";
      trailerModal.style.display = "none";
    }
  };

  // Close modals on escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      movieModal.style.display = "none";
      trailerIframe.src = "";
      trailerModal.style.display = "none";
    }
  });

  // Scroll to Top visibility
  window.onscroll = () => {
    if (window.scrollY > 400) {
      scrollTopBtn.style.display = "flex";
      navbar.classList.add("scrolled");
    } else {
      scrollTopBtn.style.display = "none";
      navbar.classList.remove("scrolled");
    }
  };

  scrollTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
