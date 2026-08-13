// ============================================================
// CINEVERSE — NETFLIX AESTHETIC STATIC APP (MOCK DATASET VERSION)
// ============================================================

// ─── LOCAL STORAGE KEYS ──────────────────────────────────────
const WATCHLIST_KEY = "cineverse_watchlist";
const THEME_KEY = "cineverse_theme";

// ─── IMAGE BASE URL (TMDB Public Image Server) ────────────────
const TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p";

// ─── RICH MOVIE DATASET (Netflix Originals & Popular Hits) ─────
const MOCK_GENRES = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 18, name: "Drama" },
  { id: 14, name: "Fantasy" },
  { id: 27, name: "Horror" },
  { id: 878, name: "Sci-Fi" },
  { id: 53, name: "Thriller" }
];

const MOCK_MOVIES = [
  {
    id: 101,
    title: "Wednesday",
    overview: "Wednesday Addams is sent to Nevermore Academy, a bizarre boarding school where she attempts to master her emerging psychic ability, thwart a monstrous killing spree, and solve the mystery that embroiled her parents 25 years ago.",
    poster_path: "/9PF4i45g6Fu7vACwUN6EHzNyyvo.jpg",
    backdrop_path: "/iH1v2JWcuPVNtzyuCDt4ys7gzzr.jpg",
    vote_average: 8.6,
    vote_count: 7800,
    release_date: "2022-11-23",
    genre_ids: [14, 9648, 35],
    popularity: 285.5,
    original_language: "en",
    runtime: 45,
    tagline: "Being an outcast has never been so in.",
    trailer_key: "Di310WS8zLk",
    category: "trending"
  },
  {
    id: 102,
    title: "Stranger Things",
    overview: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    poster_path: "/wbJPE4odZn99qFnsqG3lS9y84Hq.jpg",
    backdrop_path: "/56v21jO0q727L5r7hq3U43aJu5o.jpg",
    vote_average: 8.8,
    vote_count: 15400,
    release_date: "2016-07-15",
    genre_ids: [18, 14, 878],
    popularity: 340.2,
    original_language: "en",
    runtime: 50,
    tagline: "One summer can change everything.",
    trailer_key: "b9EkMc79ZSU",
    category: "trending"
  },
  {
    id: 103,
    title: "Squid Game",
    overview: "Hundreds of cash-strapped players accept a strange invitation to compete in children's games. Inside, a tempting prize awaits — with deadly high stakes.",
    poster_path: "/dDlEmu3EZ0G792NVi2P2vBk3w6C.jpg",
    backdrop_path: "/gKxFwA2Jsg0tVTLZyfZ15297i1x.jpg",
    vote_average: 8.5,
    vote_count: 12100,
    release_date: "2021-09-17",
    genre_ids: [28, 9648, 18],
    popularity: 298.0,
    original_language: "ko",
    runtime: 55,
    tagline: "45.6 Billion Won is Child's Play.",
    trailer_key: "oqxAJKy0R4I",
    category: "popular"
  },
  {
    id: 104,
    title: "Dune: Part Two",
    overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family.",
    poster_path: "/czemb9hm1uaG64COleui65825pH.jpg",
    backdrop_path: "/xOMo8jZktw3Ex9pqR2uHAi7130B.jpg",
    vote_average: 8.4,
    vote_count: 9400,
    release_date: "2024-03-01",
    genre_ids: [878, 12, 28],
    popularity: 245.8,
    original_language: "en",
    runtime: 166,
    tagline: "Long live the Fighters.",
    trailer_key: "Way9Dexny3w",
    category: "popular"
  },
  {
    id: 105,
    title: "Oppenheimer",
    overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    poster_path: "/8Gxv2wSbsysLgla51jZ587vTY8o.jpg",
    backdrop_path: "/fm6KqX2524J75hDVJOKyzy2tnQA.jpg",
    vote_average: 8.3,
    vote_count: 21200,
    release_date: "2023-07-21",
    genre_ids: [18, 36],
    popularity: 185.0,
    original_language: "en",
    runtime: 180,
    tagline: "The world forever changes.",
    trailer_key: "uYPbbksJxIg",
    category: "toprated"
  },
  {
    id: 106,
    title: "Interstellar",
    overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. When Earth becomes uninhabitable, former NASA pilot Cooper joins a desperate mission across the cosmos.",
    poster_path: "/gEU2QniE6E7vNIvhat5eA4juiCx.jpg",
    backdrop_path: "/rAiw1n5T2V81mYV4866vIaxgN6P.jpg",
    vote_average: 8.6,
    vote_count: 32400,
    release_date: "2014-11-05",
    genre_ids: [18, 878, 12],
    popularity: 142.5,
    original_language: "en",
    runtime: 169,
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    trailer_key: "zSWdZVtXT7E",
    category: "toprated"
  },
  {
    id: 107,
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    poster_path: "/qJ2tWGBscUOC1cPy2AlZz2iXJ2u.jpg",
    backdrop_path: "/nMKdUUep6567G44wG08krBS0krg.jpg",
    vote_average: 9.0,
    vote_count: 35000,
    release_date: "2008-07-14",
    genre_ids: [28, 80, 18],
    popularity: 135.2,
    original_language: "en",
    runtime: 152,
    tagline: "Why So Serious?",
    trailer_key: "EXeTwQWrcwY",
    category: "toprated"
  },
  {
    id: 108,
    title: "Avatar: The Way of Water",
    overview: "Set more than a decade after the events of the first film, learn the story of the Sully family, the trouble that follows them, the lengths they go to keep each other safe, and the tragedies they endure.",
    poster_path: "/t6TL71Q2iPMUo16tc9d16mU401y.jpg",
    backdrop_path: "/s16H6tpK2ut0HAcljHg4nQSQT2m.jpg",
    vote_average: 7.7,
    vote_count: 10800,
    release_date: "2022-12-16",
    genre_ids: [878, 12, 28],
    popularity: 165.0,
    original_language: "en",
    runtime: 192,
    tagline: "Return to Pandora.",
    trailer_key: "d9MyW72ELq0",
    category: "popular"
  },
  {
    id: 109,
    title: "Spider-Man: Beyond the Spider-Verse",
    overview: "Miles Morales embarks on an epic adventure that will transport Brooklyn's full-time, friendly neighborhood Spider-Man across the Multiverse to join forces with Gwen Stacy and a new team.",
    poster_path: "/8Vt6egLkgUiYTOC7t24K74EsAhL.jpg",
    backdrop_path: "/h856nC5Wkrn4jxF6WD5a89q56C.jpg",
    vote_average: 8.7,
    vote_count: 5400,
    release_date: "2025-06-18",
    genre_ids: [16, 28, 12],
    popularity: 290.0,
    original_language: "en",
    runtime: 140,
    tagline: "Anyone can wear the mask.",
    trailer_key: "cqGjhVJWtEg",
    category: "upcoming"
  },
  {
    id: 110,
    title: "The Witcher",
    overview: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts.",
    poster_path: "/7v17UIU28zGj02Ukr7FkGsp460b.jpg",
    backdrop_path: "/jB17JeW1ezcx9jZ6VA5drK1Il4n.jpg",
    vote_average: 8.1,
    vote_count: 5700,
    release_date: "2019-12-20",
    genre_ids: [18, 14, 28],
    popularity: 175.5,
    original_language: "en",
    runtime: 60,
    tagline: "The worst monsters are the ones we create.",
    trailer_key: "ndl1W4ltcmg",
    category: "trending"
  },
  {
    id: 111,
    title: "Red Notice",
    overview: "An FBI profiler pursuing the world's most wanted art thief becomes his reluctant partner in crime to catch an elusive crook who's always one step ahead.",
    poster_path: "/l7VmLIJuHgh2m2vSI4tB1UrtyuY.jpg",
    backdrop_path: "/dK125j4mJ4m21jUvFSunrZ16g5a.jpg",
    vote_average: 6.8,
    vote_count: 4800,
    release_date: "2021-11-04",
    genre_ids: [28, 35, 12],
    popularity: 195.0,
    original_language: "en",
    runtime: 118,
    tagline: "An FBI profiler. The world's most wanted art thief. And the greatest conman the world has ever seen.",
    trailer_key: "T6l3nM7MWFU",
    category: "popular"
  },
  {
    id: 112,
    title: "The Batman",
    overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    poster_path: "/74xTEgt7R361j2KiIq96i0A6sbC.jpg",
    backdrop_path: "/5P8A64pLqYS7fvgJszjPee5q0Z5.jpg",
    vote_average: 7.7,
    vote_count: 9200,
    release_date: "2022-03-01",
    genre_ids: [28, 80, 9648],
    popularity: 160.0,
    original_language: "en",
    runtime: 176,
    tagline: "Unmask the truth.",
    trailer_key: "mqqft2x_Aa4",
    category: "upcoming"
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
  showToast(`Theme switched to ${currentTheme} mode`, "info");
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
  
  if (currentView === "watchlist") {
    renderWatchlistGrid();
  }
  updateModalWatchlistState(movie.id);
  updateCardWatchlistStates();
  updateHeroWatchlistState();
}

function isMovieInWatchlist(id) {
  return watchlist.some((m) => m.id === id);
}

// ─── GENRE FETCHING ────────────────────────────────────────────
function initGenres() {
  MOCK_GENRES.forEach((g) => {
    genreMap.set(g.id, g.name);
    const option = document.createElement("option");
    option.value = genre.id; // Corrected dynamic variable reference bug: should use g.id
    option.value = g.id;
    option.textContent = g.name;
    genreFilter.appendChild(option);
  });
}

// ─── HOME ROW LOADING ─────────────────────────────────────────
function loadHomeContent() {
  showHeroSkeleton(true);
  
  setTimeout(() => {
    showHeroSkeleton(false);
    
    // Split mock movies into row categories
    const trending = MOCK_MOVIES.filter(m => m.category === "trending" || m.id === 104);
    const popular = MOCK_MOVIES.filter(m => m.category === "popular" || m.id === 102);
    const topRated = MOCK_MOVIES.filter(m => m.category === "toprated");
    const upcoming = MOCK_MOVIES.filter(m => m.category === "upcoming" || m.id === 112);

    populateHeroRotation(trending);
    
    renderMovieRow(trendingRow, trending);
    renderMovieRow(popularRow, popular);
    renderMovieRow(topRatedRow, topRated);
    renderMovieRow(upcomingRow, upcoming);
  }, 400);
}

// ─── ROTATING HERO BANNER ─────────────────────────────────────
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
    }, 10000);
  }
}

function applyHeroMovie(movie) {
  if (!movie) return;
  
  const bgPath = `${TMDB_IMAGE_BASE}/original${movie.backdrop_path}`;
  heroBackdrop.style.backgroundImage = `url('${bgPath}')`;
  heroBackdrop.classList.remove("zoom-effect");
  void heroBackdrop.offsetWidth;
  heroBackdrop.classList.add("zoom-effect");

  heroTitle.textContent = movie.title;
  
  const year = movie.release_date.slice(0, 4);
  const rating = movie.vote_average.toFixed(1);
  heroMeta.innerHTML = `
    <span class="hero-rating"><span style="color:var(--gold);">★</span> ${rating}</span>
    <span>${year}</span>
    <span class="uppercase">${movie.original_language}</span>
    <span>${movie.runtime ? `${movie.runtime}m` : "120m"}</span>
  `;

  heroOverview.textContent = movie.overview;

  heroBadges.innerHTML = "";
  movie.genre_ids.forEach((id) => {
    const genreName = genreMap.get(id);
    if (genreName) {
      const badge = document.createElement("span");
      badge.className = "genre-chip";
      badge.textContent = genreName;
      heroBadges.appendChild(badge);
    }
  });

  heroTrailerBtn.onclick = () => showTrailer(movie.trailer_key);
  updateHeroWatchlistState(movie);
}

function updateHeroWatchlistState(movie) {
  if (!movie) return;
  const inWl = isMovieInWatchlist(movie.id);
  heroWatchlistBtn.innerHTML = inWl
    ? `<span>✓</span> In Watchlist`
    : `<span>+</span> Add to Watchlist`;
  heroWatchlistBtn.onclick = () => toggleMovieInWatchlist(movie);
}

// ─── CARD CREATION ────────────────────────────────────────────
function renderMovieRow(rowElement, movies) {
  rowElement.innerHTML = "";
  if (!movies || movies.length === 0) {
    rowElement.innerHTML = `<p style="padding: 1.5rem; color: var(--text-muted);">No contents found.</p>`;
    return;
  }
  movies.forEach((movie) => {
    rowElement.appendChild(createMovieCard(movie));
  });
}

function createMovieCard(movie) {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.setAttribute("tabindex", "0");
  card.setAttribute("data-id", movie.id);

  // Netflix 16:9 landscape aspect ratio
  const posterPath = `${TMDB_IMAGE_BASE}/w780${movie.backdrop_path}`;
  const inWatchlist = isMovieInWatchlist(movie.id);
  const rating = movie.vote_average.toFixed(1);
  const year = movie.release_date.slice(0, 4);
  const firstGenreId = movie.genre_ids[0];
  const genreLabel = firstGenreId ? genreMap.get(firstGenreId) : "";

  card.innerHTML = `
    <div class="card-poster-wrapper">
      <img class="card-poster" src="${posterPath}" alt="${movie.title} Poster" loading="lazy" />
      <button class="card-wl-btn ${inWatchlist ? "active" : ""}" aria-label="Toggle Watchlist">
        ${inWatchlist ? "✓" : "+"}
      </button>
    </div>
    <div class="card-info-panel">
      <h3 class="card-title">${movie.title}</h3>
      <div class="card-meta">
        <span style="color:#46d369; font-weight:800;">${rating} ⭐</span>
        <span>${year}</span>
        ${genreLabel ? `<span class="genre-chip" style="display:inline-block;">${genreLabel}</span>` : ""}
      </div>
    </div>
  `;

  card.addEventListener("click", (e) => {
    if (e.target.closest(".card-wl-btn")) {
      e.stopPropagation();
      toggleMovieInWatchlist(movie);
      return;
    }
    openDetailsModal(movie);
  });

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

// ─── BROWSE GRID FILTER & SEARCH ──────────────────────────────
function fetchAndRenderDiscoverGrid(loadMore = false) {
  if (!loadMore) {
    moviesGrid.innerHTML = "";
    showGridSkeleton(true);
  }

  setTimeout(() => {
    showGridSkeleton(false);

    let filtered = [...MOCK_MOVIES];

    if (filterGenre) {
      filtered = filtered.filter(m => m.genre_ids.includes(parseInt(filterGenre)));
    }
    if (filterRating > 0) {
      filtered = filtered.filter(m => m.vote_average >= filterRating);
    }

    // Sort
    filtered = sortMoviesList(filtered, filterSort);

    currentMoviesList = filtered;

    moviesGrid.innerHTML = "";
    if (currentMoviesList.length === 0) {
      moviesGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-icon">🎬</div>
          <h3 class="empty-title">No movies match your filters</h3>
          <p class="empty-desc">Try resetting your selection or selecting a different genre.</p>
        </div>
      `;
    } else {
      currentMoviesList.forEach((m) => {
        moviesGrid.appendChild(createMovieCard(m));
      });
    }

    // Load more btn is not required for static mock dataset, so hide it
    loadMoreBtn.style.display = "none";
  }, 300);
}

function sortMoviesList(movies, option) {
  const clone = [...movies];
  if (option === "rating_desc") {
    return clone.sort((a, b) => b.vote_average - a.vote_average);
  } else if (option === "newest") {
    return clone.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime());
  } else if (option === "oldest") {
    return clone.sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
  }
  return clone.sort((a, b) => b.popularity - a.popularity);
}

function showGridSkeleton(visible) {
  if (!visible) return;
  moviesGrid.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    const card = document.createElement("div");
    card.className = "movie-card";
    card.innerHTML = `
      <div class="skeleton aspect-ratio" style="height:110px; border-radius:var(--r-md);"></div>
      <div style="padding:0.75rem; display:flex; flex-direction:column; gap:0.5rem;">
        <div class="skeleton" style="height:12px; width:70%;"></div>
        <div class="skeleton" style="height:10px; width:40%;"></div>
      </div>
    `;
    moviesGrid.appendChild(card);
  }
}

// ─── SEARCH ───────────────────────────────────────────────────
function handleQuerySearch(q) {
  if (!q || !q.trim()) return;
  
  searchResultsSubtitle.textContent = `Searching for "${q}"...`;
  searchGrid.innerHTML = "";
  switchView("search");

  const queryLower = q.toLowerCase().trim();
  const matched = MOCK_MOVIES.filter(m => 
    m.title.toLowerCase().includes(queryLower) || 
    m.overview.toLowerCase().includes(queryLower)
  );

  setTimeout(() => {
    if (matched.length > 0) {
      searchResultsSubtitle.textContent = `Found ${matched.length} movie${matched.length === 1 ? "" : "s"} for "${q}"`;
      matched.forEach((movie) => {
        searchGrid.appendChild(createMovieCard(movie));
      });
    } else {
      searchResultsSubtitle.textContent = `No search results for "${q}"`;
      searchGrid.innerHTML = `
        <div class="empty-state" style="grid-column: 1 / -1;">
          <div class="empty-icon">🔍</div>
          <h3 class="empty-title">No matches found</h3>
          <p class="empty-desc">Check your spelling or search for popular movies instead.</p>
        </div>
      `;
    }
  }, 200);
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

// ─── DETAILS MODAL ────────────────────────────────────────────
function openDetailsModal(movie) {
  if (!movie) return;

  const bgPath = `${TMDB_IMAGE_BASE}/w1280${movie.backdrop_path}`;
  const posterPath = `${TMDB_IMAGE_BASE}/w500${movie.poster_path}`;

  modalBackdrop.style.backgroundImage = `url('${bgPath}')`;
  modalPoster.src = posterPath;
  modalPoster.alt = `${movie.title} poster`;
  modalTitle.textContent = movie.title;
  modalOverview.textContent = movie.overview;
  
  modalGenres.innerHTML = "";
  movie.genre_ids.forEach((id) => {
    const gName = genreMap.get(id);
    if (gName) {
      const span = document.createElement("span");
      span.className = "genre-chip";
      span.textContent = gName;
      modalGenres.appendChild(span);
    }
  });

  const year = movie.release_date.slice(0, 4);
  const rating = movie.vote_average.toFixed(1);
  modalMetaRow.innerHTML = `
    <span class="hero-rating" style="color:#46d369; font-weight:800;">${rating} Rating</span>
    <span>Released: ${year}</span>
    <span>Lang: ${movie.original_language.toUpperCase()}</span>
  `;

  modalStats.innerHTML = `
    <div class="stat-box">
      <span class="stat-label">Popularity</span>
      <span class="stat-value">${movie.popularity.toFixed(0)}</span>
    </div>
    <div class="stat-box">
      <span class="stat-label">Runtime</span>
      <span class="stat-value">${movie.runtime ? `${movie.runtime}m` : "120m"}</span>
    </div>
  `;

  modalTrailerBtn.onclick = () => showTrailer(movie.trailer_key);
  
  updateModalWatchlistState(movie.id);
  modalWatchlistBtn.onclick = () => toggleMovieInWatchlist(movie);

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
function showTrailer(youtubeKey) {
  trailerIframe.src = "";
  trailerIframeWrapper.style.display = "none";
  trailerNoVideo.style.display = "none";
  trailerModal.style.display = "flex";

  if (youtubeKey) {
    trailerIframe.src = `https://www.youtube.com/embed/${youtubeKey}?autoplay=1&rel=0&modestbranding=1`;
    trailerIframeWrapper.style.display = "block";
  } else {
    trailerNoVideo.style.display = "flex";
  }
}

// ─── NAVIGATION ───────────────────────────────────────────────
function switchView(viewName) {
  currentView = viewName;
  
  homeView.classList.remove("active");
  moviesView.classList.remove("active");
  searchView.classList.remove("active");
  watchlistView.classList.remove("active");

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

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ─── TOASTS ───────────────────────────────────────────────────
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${message}</span>
    <button class="toast-close" aria-label="Close notification">✕</button>
  `;
  
  toast.querySelector(".toast-close").onclick = () => toast.remove();
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "toastIn 0.3s reverse ease forwards";
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// ─── EVENT LISTENERS ──────────────────────────────────────────
function setupEventListeners() {
  navHome.onclick = (e) => { e.preventDefault(); switchView("home"); };
  navMovies.onclick = (e) => { e.preventDefault(); switchView("movies"); };
  navWatchlist.onclick = (e) => { e.preventDefault(); switchView("watchlist"); };
  
  document.querySelectorAll(".mobile-link").forEach((link) => {
    link.onclick = (e) => {
      e.preventDefault();
      const view = link.getAttribute("data-section");
      switchView(view);
      mobileMenu.classList.remove("active");
      hamburger.classList.remove("active");
    };
  });

  hamburger.onclick = () => {
    mobileMenu.classList.toggle("active");
    hamburger.classList.toggle("active");
  };

  themeToggle.onclick = () => toggleTheme();

  // Search input toggler & submission
  let searchTimeout = null;
  searchInput.addEventListener("input", (e) => {
    const val = e.target.value;
    if (val.trim()) {
      searchClear.style.display = "block";
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        handleQuerySearch(val.trim());
      }, 400);
    } else {
      searchClear.style.display = "none";
    }
  });

  searchClear.onclick = () => {
    searchInput.value = "";
    searchClear.style.display = "none";
    switchView("home");
  };

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleQuerySearch(searchInput.value.trim());
    }
  });

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
    fetchAndRenderDiscoverGrid(true);
  };

  browseMoviesBtn.onclick = () => switchView("movies");

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

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      movieModal.style.display = "none";
      trailerIframe.src = "";
      trailerModal.style.display = "none";
    }
  });

  window.onscroll = () => {
    if (window.scrollY > 300) {
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
