// ==========================================================================
// CINESCOPE — PREMIUM STATIC CINEMA ENGINE (MOCK DATASET + LIVE API DUALITY)
// ==========================================================================

// ─── LOCAL STORAGE KEYS ──────────────────────────────────────────────────
const WATCHLIST_KEY = "cinescope_watchlist";
const THEME_KEY = "cinescope_theme";
const API_KEY_STORE = "cinescope_tmdb_key";
const API_MODE_STORE = "cinescope_api_mode";
const REVIEWS_STORE = "cinescope_user_reviews";

// ─── IMAGES CDN (TMDB Public CDN Paths) ──────────────────────────────────
const TMDB_IMAGE_BASE_W500 = "https://image.tmdb.org/t/p/w500";
const TMDB_IMAGE_BASE_W1280 = "https://image.tmdb.org/t/p/w1280";

// ─── RICH MOCK GENRE DEFINITIONS ─────────────────────────────────────────
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
  { id: 53, name: "Thriller" },
  { id: 9648, name: "Mystery" }
];

// ─── HIGH-FIDELITY BUILT-IN MOCK DATASET ─────────────────────────────────
const MOCK_MOVIES = [
  {
    id: 101,
    title: "Wednesday",
    tagline: "Being an outcast has never been so in.",
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
    trailer_key: "Di310WS8zLk",
    category: "trending",
    cast: [
      { name: "Jenna Ortega", character: "Wednesday Addams", profile_path: "/q1r4st6a4b1e5.jpg" },
      { name: "Emma Myers", character: "Enid Sinclair", profile_path: "/mmyers.jpg" },
      { name: "Hunter Doohan", character: "Tyler Galpin", profile_path: "/hdoohan.jpg" }
    ],
    director: "Tim Burton",
    writer: "Alfred Gough",
    production_company: "MGM Television"
  },
  {
    id: 102,
    title: "Stranger Things",
    tagline: "One summer can change everything.",
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
    trailer_key: "b9EkMc79ZSU",
    category: "trending",
    cast: [
      { name: "Millie Bobby Brown", character: "Eleven", profile_path: "/mbrown.jpg" },
      { name: "Finn Wolfhard", character: "Mike Wheeler", profile_path: "/fwolf.jpg" },
      { name: "Winona Ryder", character: "Joyce Byers", profile_path: "/wryder.jpg" }
    ],
    director: "The Duffer Brothers",
    writer: "Matt Duffer",
    production_company: "21 Laps Entertainment"
  },
  {
    id: 103,
    title: "Squid Game",
    tagline: "45.6 Billion Won is Child's Play.",
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
    trailer_key: "oqxAJKy0R4I",
    category: "popular",
    cast: [
      { name: "Lee Jung-jae", character: "Seong Gi-hun", profile_path: "/ljung.jpg" },
      { name: "Park Hae-soo", character: "Cho Sang-woo", profile_path: "/phaesoo.jpg" },
      { name: "Hoyeon Jung", character: "Kang Sae-byeok", profile_path: "/hjung.jpg" }
    ],
    director: "Hwang Dong-hyuk",
    writer: "Hwang Dong-hyuk",
    production_company: "Siren Pictures"
  },
  {
    id: 104,
    title: "Dune: Part Two",
    tagline: "Long live the Fighters.",
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
    trailer_key: "Way9Dexny3w",
    category: "popular",
    cast: [
      { name: "Timothée Chalamet", character: "Paul Atreides", profile_path: "/tchalamet.jpg" },
      { name: "Zendaya", character: "Chani", profile_path: "/zendaya.jpg" },
      { name: "Rebecca Ferguson", character: "Lady Jessica", profile_path: "/rferg.jpg" }
    ],
    director: "Denis Villeneuve",
    writer: "Denis Villeneuve",
    production_company: "Legendary Pictures"
  },
  {
    id: 105,
    title: "Oppenheimer",
    tagline: "The world forever changes.",
    overview: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.",
    poster_path: "/8Gxv2wSbsysLgla51jZ587vTY8o.jpg",
    backdrop_path: "/fm6KqX2524J75hDVJOKyzy2tnQA.jpg",
    vote_average: 8.7,
    vote_count: 11200,
    release_date: "2023-07-21",
    genre_ids: [18, 9648],
    popularity: 215.4,
    original_language: "en",
    runtime: 180,
    trailer_key: "uYPbbksJxIg",
    category: "top_rated",
    cast: [
      { name: "Cillian Murphy", character: "J. Robert Oppenheimer", profile_path: "/cmurphy.jpg" },
      { name: "Emily Blunt", character: "Kitty Oppenheimer", profile_path: "/eblunt.jpg" },
      { name: "Matt Damon", character: "Leslie Groves", profile_path: "/mdamon.jpg" }
    ],
    director: "Christopher Nolan",
    writer: "Christopher Nolan",
    production_company: "Syncopy Inc."
  },
  {
    id: 106,
    title: "Spider-Man: Across the Spider-Verse",
    tagline: "It's how you wear the mask.",
    overview: "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
    poster_path: "/8Vt1t4j9SilayKqnNHj4jPJvjtw.jpg",
    backdrop_path: "/ctoFm0c9v8p68g4z7v7iX09.jpg",
    vote_average: 8.9,
    vote_count: 8500,
    release_date: "2023-06-02",
    genre_ids: [16, 28, 12, 878],
    popularity: 260.1,
    original_language: "en",
    runtime: 140,
    trailer_key: "shW9i6k8Mc0",
    category: "trending",
    cast: [
      { name: "Shameik Moore", character: "Miles Morales", profile_path: "/smoore.jpg" },
      { name: "Hailee Steinfeld", character: "Gwen Stacy", profile_path: "/hstein.jpg" },
      { name: "Oscar Isaac", character: "Miguel O'Hara", profile_path: "/oisaac.jpg" }
    ],
    director: "Joaquim Dos Santos",
    writer: "Phil Lord",
    production_company: "Columbia Pictures"
  },
  {
    id: 107,
    title: "Interstellar",
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    poster_path: "/gEU2Qv0w3jB26IC4QEvocbpjga1.jpg",
    backdrop_path: "/xJHcv1Z11Tyv06MRL5Uu5Xm5v9M.jpg",
    vote_average: 8.6,
    vote_count: 32000,
    release_date: "2014-11-05",
    genre_ids: [878, 18, 12],
    popularity: 195.9,
    original_language: "en",
    runtime: 169,
    trailer_key: "zSWdZAibgU4",
    category: "top_rated",
    cast: [
      { name: "Matthew McConaughey", character: "Cooper", profile_path: "/mmcc.jpg" },
      { name: "Anne Hathaway", character: "Brand", profile_path: "/ahath.jpg" },
      { name: "Jessica Chastain", character: "Murph", profile_path: "/jchast.jpg" }
    ],
    director: "Christopher Nolan",
    writer: "Jonathan Nolan",
    production_company: "Paramount Pictures"
  },
  {
    id: 108,
    title: "Everything Everywhere All at Once",
    tagline: "The universe is so much bigger than you realize.",
    overview: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.",
    poster_path: "/w3Lw8tRBmgZ2rF77V7y2iGtyxyO.jpg",
    backdrop_path: "/43U594SgZgX0N3VvW8N4BvN124n.jpg",
    vote_average: 8.3,
    vote_count: 6700,
    release_date: "2022-03-24",
    genre_ids: [28, 12, 878, 35],
    popularity: 154.6,
    original_language: "en",
    runtime: 139,
    trailer_key: "wxN1T1uxQ2g",
    category: "popular",
    cast: [
      { name: "Michelle Yeoh", character: "Evelyn Wang", profile_path: "/myeoh.jpg" },
      { name: "Ke Huy Quan", character: "Waymond Wang", profile_path: "/kquan.jpg" },
      { name: "Jamie Lee Curtis", character: "Deirdre Beaubeirdre", profile_path: "/jcurtis.jpg" }
    ],
    director: "Daniel Kwan",
    writer: "Daniel Scheinert",
    production_company: "A24"
  },
  {
    id: 109,
    title: "The Dark Knight",
    tagline: "Why So Serious?",
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets.",
    poster_path: "/qJ2tWGB2Z1YUn03wH6wtdnd3gKA.jpg",
    backdrop_path: "/nMKgE41pTz54A9bZ1gD2W9l.jpg",
    vote_average: 9.0,
    vote_count: 31000,
    release_date: "2008-07-16",
    genre_ids: [28, 80, 18, 53],
    popularity: 188.4,
    original_language: "en",
    runtime: 152,
    trailer_key: "EXeTwQWrcwY",
    category: "top_rated",
    cast: [
      { name: "Christian Bale", character: "Bruce Wayne / Batman", profile_path: "/cbale.jpg" },
      { name: "Heath Ledger", character: "Joker", profile_path: "/hledger.jpg" },
      { name: "Gary Oldman", character: "Jim Gordon", profile_path: "/goldman.jpg" }
    ],
    director: "Christopher Nolan",
    writer: "David S. Goyer",
    production_company: "Warner Bros. Pictures"
  },
  {
    id: 110,
    title: "Inception",
    tagline: "Your mind is the scene of the crime.",
    overview: "Cobb, a skilled thief who is absolute best in the dangerous art of extraction, steals valuable secrets from deep within the subconscious during the dream state.",
    poster_path: "/l9WM2FpE8k87U51fO8b54C758.jpg",
    backdrop_path: "/s3TBrRGB1Wg7gOY2qB7QR4n2IV3.jpg",
    vote_average: 8.8,
    vote_count: 34500,
    release_date: "2010-07-14",
    genre_ids: [28, 878, 12, 53],
    popularity: 165.7,
    original_language: "en",
    runtime: 148,
    trailer_key: "YoHD9XEInc0",
    category: "top_rated",
    cast: [
      { name: "Leonardo DiCaprio", character: "Cobb", profile_path: "/ldicaprio.jpg" },
      { name: "Joseph Gordon-Levitt", character: "Arthur", profile_path: "/jglevitt.jpg" },
      { name: "Elliot Page", character: "Ariadne", profile_path: "/epage.jpg" }
    ],
    director: "Christopher Nolan",
    writer: "Christopher Nolan",
    production_company: "Legendary Pictures"
  },
  {
    id: 111,
    title: "Barbie",
    tagline: "She's everything. He's just Ken.",
    overview: "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbieland. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    poster_path: "/iuFNMSq55topns7XKV8M4R6rdsY.jpg",
    backdrop_path: "/ctMGCwVw5061oEyhII4okS5Xjxt.jpg",
    vote_average: 7.2,
    vote_count: 8500,
    release_date: "2023-07-21",
    genre_ids: [35, 12, 14],
    popularity: 142.3,
    original_language: "en",
    runtime: 114,
    trailer_key: "pBk4NYhWNMM",
    category: "popular",
    cast: [
      { name: "Margot Robbie", character: "Barbie", profile_path: "/mrobbie.jpg" },
      { name: "Ryan Gosling", character: "Ken", profile_path: "/rgosling.jpg" },
      { name: "America Ferrera", character: "Gloria", profile_path: "/aferrera.jpg" }
    ],
    director: "Greta Gerwig",
    writer: "Noah Baumbach",
    production_company: "Warner Bros. Pictures"
  },
  {
    id: 112,
    title: "John Wick: Chapter 4",
    tagline: "No path back. Only one way out.",
    overview: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe.",
    poster_path: "/vZ7w9jIEw82n21Vj6li3QJCI6oc.jpg",
    backdrop_path: "/h8g0t7n4x6k8Yw2rS8G32v.jpg",
    vote_average: 7.8,
    vote_count: 5800,
    release_date: "2023-03-22",
    genre_ids: [28, 53, 80],
    popularity: 172.9,
    original_language: "en",
    runtime: 169,
    trailer_key: "qEVUarkF2p0",
    category: "trending",
    cast: [
      { name: "Keanu Reeves", character: "John Wick", profile_path: "/kreeves.jpg" },
      { name: "Donnie Yen", character: "Caine", profile_path: "/dyen.jpg" },
      { name: "Bill Skarsgård", character: "Marquis", profile_path: "/bskars.jpg" }
    ],
    director: "Chad Stahelski",
    writer: "Derek Kolstad",
    production_company: "Summit Entertainment"
  }
];

// ─── BUILT-IN COMMUNITY REVIEWS ──────────────────────────────────────────
const BUILT_IN_REVIEWS = [
  {
    movieId: 101,
    author: "NevermoreFan",
    rating: 9,
    content: "Ortega is the absolute perfect Wednesday. The show maintains a fantastic creepy, kooky vibe throughout, and Burton's signature styling is everywhere.",
    date: "2026-01-12"
  },
  {
    movieId: 104,
    author: "ArrakisDreamer",
    rating: 10,
    content: "An absolute masterpiece of audio-visual engineering. Denis has somehow topped the first film with incredible battle sequences, sound design, and depth.",
    date: "2026-03-05"
  },
  {
    movieId: 109,
    author: "GothamKnight",
    rating: 10,
    content: "The best superhero film ever made. Heath Ledger's legendary performance as the Joker will be remembered for decades.",
    date: "2026-02-18"
  }
];

// ─── ENGINE STATE ────────────────────────────────────────────────────────
const state = {
  currentView: "home", // "home" | "browse" | "watchlist" | "settings" | "search"
  watchlist: [],
  customReviews: [],
  tmdbApiKey: "",
  apiMode: false, // false = Mock, true = Live TMDB API
  
  // Carousel State
  carouselIndex: 0,
  carouselTimer: null,
  featuredMovies: [],
  
  // Browse Pagination / Cache
  browsePage: 1,
  hasMoreBrowse: true,
  liveMoviesCache: [],
  
  // Selected Movie for Modal
  selectedMovie: null
};

// ==========================================================================
// BOOTSTRAP INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  loadLocalStorage();
  setupTheme();
  setupNavigation();
  setupSearch();
  setupSettingsUI();
  setupModalTabs();
  setupMovieShelvesScrolling();
  setupReviewSubmission();
  setupClearActions();
  
  // Load initial content
  refreshEngineData();
  
  // Scroll to Top Listener
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollTopBtn.style.display = "flex";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// ==========================================================================
// DATA LOADERS & API CONTROLLERS
// ==========================================================================
function loadLocalStorage() {
  // Load Watchlist
  try {
    state.watchlist = JSON.parse(localStorage.getItem(WATCHLIST_KEY)) || [];
  } catch (e) {
    state.watchlist = [];
  }
  updateWatchlistBadges();

  // Load Custom Reviews
  try {
    state.customReviews = JSON.parse(localStorage.getItem(REVIEWS_STORE)) || [];
  } catch (e) {
    state.customReviews = [];
  }

  // Load API Key & API Mode
  state.tmdbApiKey = localStorage.getItem(API_KEY_STORE) || "";
  state.apiMode = localStorage.getItem(API_MODE_STORE) === "true";
  
  if (state.tmdbApiKey && state.apiMode) {
    updateApiStatusUI(true);
  } else {
    state.apiMode = false;
    updateApiStatusUI(false);
  }
}

function updateWatchlistBadges() {
  const badge = document.getElementById("watchlistBadge");
  const mobileBadge = document.getElementById("watchlistBadgeMobile");
  const countText = document.getElementById("watchlistCountText");
  const length = state.watchlist.length;

  if (length > 0) {
    badge.textContent = length;
    badge.style.display = "inline-flex";
    mobileBadge.textContent = length;
    mobileBadge.style.display = "inline-flex";
  } else {
    badge.style.display = "none";
    mobileBadge.style.display = "none";
  }

  if (countText) {
    countText.textContent = `${length} ${length === 1 ? 'title' : 'titles'} saved for later`;
  }
}

// Switch UI styling based on API connection status
function updateApiStatusUI(isLive) {
  const dot = document.querySelector("#modeStatus .status-dot");
  const text = document.getElementById("statusText");
  const banner = document.getElementById("apiStatusBanner");
  const disconnectBtn = document.getElementById("disconnectApiBtn");
  const apiKeyInput = document.getElementById("apiKeyInput");
  const saveBtn = document.getElementById("saveApiKeyBtn");

  if (isLive) {
    dot.className = "status-dot blue";
    text.textContent = "Live API Mode";
    if (banner) {
      banner.className = "api-status-banner connected";
      banner.innerHTML = `
        <div class="banner-icon">📡</div>
        <div class="banner-text">
          <strong>Connected to Live TMDB Server:</strong> Accessing real-time database queries, live cast arrays, and dynamic trailers.
        </div>
      `;
    }
    if (disconnectBtn) disconnectBtn.style.display = "inline-flex";
    if (apiKeyInput) {
      apiKeyInput.value = "••••••••••••••••••••••••••••••••";
      apiKeyInput.disabled = true;
    }
    if (saveBtn) saveBtn.style.display = "none";
  } else {
    dot.className = "status-dot green";
    text.textContent = "Mock Mode";
    if (banner) {
      banner.className = "api-status-banner mock";
      banner.innerHTML = `
        <div class="banner-icon">💡</div>
        <div class="banner-text">
          <strong>Running in Offline Mock Mode:</strong> Using high-fidelity built-in dataset containing featured trailers, reviews, and categories. No setup required!
        </div>
      `;
    }
    if (disconnectBtn) disconnectBtn.style.display = "none";
    if (apiKeyInput) {
      apiKeyInput.value = "";
      apiKeyInput.disabled = false;
    }
    if (saveBtn) saveBtn.style.display = "inline-flex";
  }
}

// Refresh Shelves and Hero data
async function refreshEngineData() {
  populateGenreFilterOptions();
  
  if (state.apiMode && state.tmdbApiKey) {
    showSpinnerForShelves();
    try {
      await fetchLiveApiShelves();
      setupCarousel(state.featuredMovies);
    } catch (err) {
      console.error("Live TMDB fetch error. Reverting to Mock Mode:", err);
      showToast("Could not connect to TMDB. Reverting to offline data.", "error");
      toggleMode(false);
      loadMockDataShelves();
    }
  } else {
    loadMockDataShelves();
  }
}

// Helper to fill genre dropdown
function populateGenreFilterOptions() {
  const filterGenre = document.getElementById("filterGenre");
  if (!filterGenre) return;
  
  // Clear but keep first
  filterGenre.innerHTML = '<option value="all">All Genres</option>';
  MOCK_GENRES.forEach(g => {
    const opt = document.createElement("option");
    opt.value = g.id;
    opt.textContent = g.name;
    filterGenre.appendChild(opt);
  });
}

// Populate shelves with Offline mock details
function loadMockDataShelves() {
  // Sort or separate mock movies
  const trending = MOCK_MOVIES.filter(m => m.category === "trending" || m.category === "popular");
  const popular = MOCK_MOVIES.filter(m => m.category === "popular" || m.category === "top_rated");
  const topRated = MOCK_MOVIES.filter(m => m.category === "top_rated" || m.vote_average >= 8.5);

  renderMovieRow(trending, "shelfTrending");
  renderMovieRow(popular, "shelfPopular");
  renderMovieRow(topRated, "shelfTopRated");

  // Hero carousel movies
  state.featuredMovies = MOCK_MOVIES.slice(0, 5);
  setupCarousel(state.featuredMovies);
  
  // Load browse grid
  renderBrowseGrid(MOCK_MOVIES);
}

function showSpinnerForShelves() {
  const containers = ["shelfTrending", "shelfPopular", "shelfTopRated", "browseGrid"];
  containers.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = '<div class="shelf-loading"><div class="spinner"></div>Loading titles...</div>';
  });
}

// Fetch lists from TMDB Server
async function fetchLiveApiShelves() {
  const trendingUrl = `https://api.themoviedb.org/3/trending/movie/week?api_key=${state.tmdbApiKey}`;
  const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${state.tmdbApiKey}`;
  const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${state.tmdbApiKey}`;

  const [resTrending, resPopular, resTopRated] = await Promise.all([
    fetch(trendingUrl).then(r => r.json()),
    fetch(popularUrl).then(r => r.json()),
    fetch(topRatedUrl).then(r => r.json())
  ]);

  if (resTrending.results) renderMovieRow(resTrending.results.slice(0, 10), "shelfTrending");
  if (resPopular.results) renderMovieRow(resPopular.results.slice(0, 10), "shelfPopular");
  if (resTopRated.results) renderMovieRow(resTopRated.results.slice(0, 10), "shelfTopRated");

  // Keep a merged pool for browse/carousel
  const allFetched = [
    ...(resTrending.results || []),
    ...(resPopular.results || []),
    ...(resTopRated.results || [])
  ];
  
  // De-duplicate
  const uniqueMovies = [];
  const map = new Map();
  for (const item of allFetched) {
    if(!map.has(item.id)) {
      map.set(item.id, true);
      uniqueMovies.push(item);
    }
  }

  state.liveMoviesCache = uniqueMovies;
  state.featuredMovies = uniqueMovies.slice(0, 5);
  renderBrowseGrid(state.liveMoviesCache);
}

// Render utility for movie rows
function renderMovieRow(movies, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = "";

  if (!movies || movies.length === 0) {
    container.innerHTML = '<div class="shelf-empty">No movies found.</div>';
    return;
  }

  movies.forEach(movie => {
    const card = createMovieCard(movie);
    container.appendChild(card);
  });
}

// Create a landscape movie card element
function createMovieCard(movie) {
  const card = document.createElement("div");
  card.className = "movie-card";
  card.setAttribute("role", "listitem");
  
  // Decide Poster Backdrop Image
  let imageUrl = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=500";
  if (movie.backdrop_path) {
    imageUrl = `${TMDB_IMAGE_BASE_W500}${movie.backdrop_path}`;
  } else if (movie.poster_path) {
    imageUrl = `${TMDB_IMAGE_BASE_W500}${movie.poster_path}`;
  }

  const voteAverage = movie.vote_average ? movie.vote_average.toFixed(1) : "0.0";
  const releaseYear = movie.release_date ? movie.release_date.split("-")[0] : "N/A";
  
  // Check if saved in Watchlist
  const isSaved = state.watchlist.some(w => w.id === movie.id);

  card.innerHTML = `
    <div class="card-backdrop-wrapper">
      <img src="${imageUrl}" alt="${movie.title}" class="card-backdrop" loading="lazy" />
      <div class="card-quick-actions">
        <button class="btn btn-primary btn-sm quick-play-btn" data-id="${movie.id}" aria-label="Play Trailer">
          Play
        </button>
        <button class="btn btn-secondary btn-sm quick-watchlist-btn" data-id="${movie.id}" aria-label="Add to Watchlist">
          ${isSaved ? "✓ Saved" : "+ List"}
        </button>
      </div>
    </div>
    <div class="card-info">
      <h3 class="card-title">${movie.title}</h3>
      <div class="card-meta-row">
        <span>${releaseYear}</span>
        <span class="card-rating">★ ${voteAverage}</span>
      </div>
    </div>
  `;

  // Bind click listener for main card click (trigger details modal)
  card.addEventListener("click", (e) => {
    if (e.target.closest(".quick-play-btn") || e.target.closest(".quick-watchlist-btn")) {
      return; // Handled separately
    }
    openMovieDetails(movie.id);
  });

  // Bind quick action listeners
  const quickPlay = card.querySelector(".quick-play-btn");
  quickPlay.addEventListener("click", (e) => {
    e.stopPropagation();
    openTrailerDirect(movie.id);
  });

  const quickWatchlist = card.querySelector(".quick-watchlist-btn");
  quickWatchlist.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleWatchlistState(movie, quickWatchlist);
  });

  return card;
}

// ==========================================================================
// DYNAMIC VIEW ROUTER & TABS
// ==========================================================================
function setupNavigation() {
  const views = ["home", "browse", "watchlist", "settings", "search"];
  
  // Desktop navigation binds
  const desktopButtons = {
    home: document.getElementById("navHomeBtn"),
    browse: document.getElementById("navBrowseBtn"),
    watchlist: document.getElementById("navWatchlistBtn"),
    settings: document.getElementById("navSettingsBtn")
  };

  Object.entries(desktopButtons).forEach(([viewKey, btn]) => {
    if (btn) {
      btn.addEventListener("click", () => navigateToView(viewKey));
    }
  });

  // Logo navigates home
  const logo = document.getElementById("navLogo");
  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault();
      navigateToView("home");
    });
  }

  // Mobile Drawer navigation binds
  const mobileToggle = document.getElementById("mobileMenuToggleBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener("click", () => {
      const expanded = mobileToggle.getAttribute("aria-expanded") === "true";
      mobileToggle.setAttribute("aria-expanded", !expanded);
      mobileMenu.classList.toggle("open");
      mobileMenu.setAttribute("aria-hidden", expanded);
    });

    // Mobile links click
    const mobileLinks = mobileMenu.querySelectorAll(".mobile-link");
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        const view = link.getAttribute("data-view");
        navigateToView(view);
        
        // Close menu
        mobileToggle.setAttribute("aria-expanded", "false");
        mobileMenu.classList.remove("open");
        mobileMenu.setAttribute("aria-hidden", "true");
      });
    });
  }

  // Sub-Browse/Explore buttons
  const watchlistBrowse = document.getElementById("watchlistBrowseBtn");
  if (watchlistBrowse) {
    watchlistBrowse.addEventListener("click", () => navigateToView("browse"));
  }
}

function navigateToView(viewName) {
  state.currentView = viewName;
  
  // Reset scroll position
  window.scrollTo({ top: 0, behavior: "instant" });

  // Update active view layout
  const allViews = document.querySelectorAll(".site-view");
  allViews.forEach(v => v.classList.remove("active"));
  
  const activeViewEl = document.getElementById(`view${capitalizeFirst(viewName)}`);
  if (activeViewEl) {
    activeViewEl.classList.add("active");
  }

  // Update Desktop active nav indicator
  const desktopButtons = {
    home: document.getElementById("navHomeBtn"),
    browse: document.getElementById("navBrowseBtn"),
    watchlist: document.getElementById("navWatchlistBtn"),
    settings: document.getElementById("navSettingsBtn")
  };

  Object.entries(desktopButtons).forEach(([key, btn]) => {
    if (btn) {
      if (key === viewName) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    }
  });

  // Update Mobile links active
  const mobileLinks = document.querySelectorAll(".mobile-link");
  mobileLinks.forEach(link => {
    if (link.getAttribute("data-view") === viewName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Call render functions depending on screen
  if (viewName === "watchlist") {
    renderWatchlistView();
  } else if (viewName === "browse") {
    triggerBrowseFilters();
  }
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ==========================================================================
// CINEMATIC CAROUSEL LOGIC
// ==========================================================================
function setupCarousel(movies) {
  const container = document.getElementById("heroSlidesContainer");
  const indicators = document.getElementById("carouselIndicators");
  
  if (!container || !indicators || !movies || movies.length === 0) return;
  
  container.innerHTML = "";
  indicators.innerHTML = "";
  
  // Build slide panels
  movies.forEach((movie, index) => {
    const slide = document.createElement("div");
    slide.className = `hero-slide ${index === 0 ? 'active' : ''}`;
    slide.setAttribute("data-slide", index);

    let backdropUrl = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200";
    if (movie.backdrop_path) {
      backdropUrl = `${TMDB_IMAGE_BASE_W1280}${movie.backdrop_path}`;
    }

    const voteAverage = movie.vote_average ? movie.vote_average.toFixed(1) : "0.0";
    const releaseYear = movie.release_date ? movie.release_date.split("-")[0] : "N/A";
    const overview = movie.overview || "Explore detailed statistics, cinematic trailer, and reviews for this film.";
    
    // Genre string
    let genreNames = "Featured Content";
    if (movie.genre_ids && movie.genre_ids.length > 0) {
      const matched = movie.genre_ids.map(id => MOCK_GENRES.find(g => g.id === id)?.name).filter(Boolean);
      if (matched.length > 0) genreNames = matched.slice(0, 2).join(" • ");
    }

    slide.innerHTML = `
      <img src="${backdropUrl}" alt="${movie.title}" class="hero-backdrop-img" />
      <div class="hero-backdrop-overlay"></div>
      <div class="hero-slide-content">
        <div class="hero-meta-row">
          <span class="badge badge-accent">${genreNames}</span>
          <span class="badge">★ ${voteAverage}</span>
          <span class="badge">${releaseYear}</span>
        </div>
        <h1 class="hero-title-text">${movie.title}</h1>
        <p class="hero-desc-text">${overview}</p>
        <div class="hero-actions-container">
          <button class="btn btn-primary hero-play-btn" data-id="${movie.id}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,3 20,12 6,21"/></svg>
            Play Trailer
          </button>
          <button class="btn btn-secondary hero-details-btn" data-id="${movie.id}">
            More Details
          </button>
        </div>
      </div>
    `;

    // Click handler for details
    slide.querySelector(".hero-details-btn").addEventListener("click", () => {
      openMovieDetails(movie.id);
    });

    slide.querySelector(".hero-play-btn").addEventListener("click", () => {
      openTrailerDirect(movie.id);
    });

    container.appendChild(slide);

    // Indicator Dot
    const dot = document.createElement("span");
    dot.className = `indicator-dot ${index === 0 ? 'active' : ''}`;
    dot.addEventListener("click", () => {
      goToCarouselSlide(index);
    });
    indicators.appendChild(dot);
  });

  // Cycle automatically
  if (state.carouselTimer) clearInterval(state.carouselTimer);
  state.carouselIndex = 0;
  state.carouselTimer = setInterval(rotateCarousel, 6000);
}

function rotateCarousel() {
  const slides = document.querySelectorAll(".hero-slide");
  if (slides.length <= 1) return;

  let nextIndex = state.carouselIndex + 1;
  if (nextIndex >= slides.length) nextIndex = 0;
  goToCarouselSlide(nextIndex);
}

function goToCarouselSlide(index) {
  state.carouselIndex = index;
  
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".indicator-dot");

  slides.forEach((slide, idx) => {
    if (idx === index) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });

  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// ==========================================================================
// BROWSE FILTERS PANEL
// ==========================================================================
function triggerBrowseFilters() {
  const filterGenre = document.getElementById("filterGenre").value;
  const filterRating = parseFloat(document.getElementById("filterRating").value) || 0;
  const filterYearRange = document.getElementById("filterYear").value;
  const filterSort = document.getElementById("filterSort").value;

  let sourcePool = state.apiMode ? state.liveMoviesCache : MOCK_MOVIES;

  // 1. Filter by Genre
  if (filterGenre !== "all") {
    const genreId = parseInt(filterGenre);
    sourcePool = sourcePool.filter(m => m.genre_ids && m.genre_ids.includes(genreId));
  }

  // 2. Filter by Rating
  if (filterRating > 0) {
    sourcePool = sourcePool.filter(m => m.vote_average >= filterRating);
  }

  // 3. Filter by Year Range
  if (filterYearRange !== "all") {
    sourcePool = sourcePool.filter(m => {
      if (!m.release_date) return false;
      const year = parseInt(m.release_date.split("-")[0]);
      if (filterYearRange === "2020s") return year >= 2020;
      if (filterYearRange === "2010s") return year >= 2010 && year <= 2019;
      if (filterYearRange === "2000s") return year >= 2000 && year <= 2009;
      if (filterYearRange === "classic") return year < 2000;
      return true;
    });
  }

  // 4. Sort By Method
  sourcePool.sort((a, b) => {
    if (filterSort === "popularity") {
      return (b.popularity || 0) - (a.popularity || 0);
    }
    if (filterSort === "rating") {
      return (b.vote_average || 0) - (a.vote_average || 0);
    }
    if (filterSort === "release_date") {
      const dateA = a.release_date ? new Date(a.release_date) : new Date(0);
      const dateB = b.release_date ? new Date(b.release_date) : new Date(0);
      return dateB - dateA;
    }
    return 0;
  });

  renderBrowseGrid(sourcePool);
}

function renderBrowseGrid(movies) {
  const grid = document.getElementById("browseGrid");
  if (!grid) return;
  grid.innerHTML = "";

  if (movies.length === 0) {
    grid.innerHTML = `
      <div class="empty-state-box" style="grid-column: 1 / -1;">
        <span class="empty-icon">🔍</span>
        <h2>No Matches Found</h2>
        <p>Try resetting the genre filter or lowering the minimum score rating threshold.</p>
      </div>
    `;
    return;
  }

  movies.forEach(movie => {
    const card = createMovieCard(movie);
    grid.appendChild(card);
  });
}

// Hook up changes
document.getElementById("filterGenre").addEventListener("change", triggerBrowseFilters);
document.getElementById("filterRating").addEventListener("change", triggerBrowseFilters);
document.getElementById("filterYear").addEventListener("change", triggerBrowseFilters);
document.getElementById("filterSort").addEventListener("change", triggerBrowseFilters);
document.getElementById("clearFiltersBtn").addEventListener("click", () => {
  document.getElementById("filterGenre").value = "all";
  document.getElementById("filterRating").value = "0";
  document.getElementById("filterYear").value = "all";
  document.getElementById("filterSort").value = "popularity";
  triggerBrowseFilters();
  showToast("Filters successfully reset", "success");
});

// ==========================================================================
// PERSONAL WATCHLIST PANEL
// ==========================================================================
function renderWatchlistView() {
  const grid = document.getElementById("watchlistGrid");
  const emptyState = document.getElementById("watchlistEmptyState");
  
  if (!grid || !emptyState) return;

  grid.innerHTML = "";
  
  if (state.watchlist.length === 0) {
    grid.style.display = "none";
    emptyState.style.display = "flex";
  } else {
    grid.style.display = "grid";
    emptyState.style.display = "none";

    state.watchlist.forEach(movie => {
      const card = createMovieCard(movie);
      grid.appendChild(card);
    });
  }
}

function toggleWatchlistState(movie, buttonElement = null) {
  const index = state.watchlist.findIndex(w => w.id === movie.id);
  let saved = false;

  if (index > -1) {
    state.watchlist.splice(index, 1);
    showToast(`Removed "${movie.title}" from watchlist`, "success");
  } else {
    state.watchlist.push(movie);
    saved = true;
    showToast(`Added "${movie.title}" to watchlist`, "success");
  }

  localStorage.setItem(WATCHLIST_KEY, JSON.stringify(state.watchlist));
  updateWatchlistBadges();

  // If in watchlist view, reload
  if (state.currentView === "watchlist") {
    renderWatchlistView();
  }

  // Update card buttons if provided
  if (buttonElement) {
    buttonElement.textContent = saved ? "✓ Saved" : "+ List";
  }

  // Update modal button if currently viewing this movie
  const modalToggleBtn = document.getElementById("modalWatchlistToggleBtn");
  if (modalToggleBtn && state.selectedMovie && state.selectedMovie.id === movie.id) {
    modalToggleBtn.textContent = saved ? "✓ In Watchlist" : "+ My List";
  }
}

// ==========================================================================
// SEARCH BAR PANEL
// ==========================================================================
function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchClearBtn = document.getElementById("searchClearBtn");
  
  const mobileSearchInput = document.getElementById("mobileSearchInput");
  const mobileSearchBtn = document.getElementById("mobileSearchBtn");

  // Keyboard and Input Events
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.trim();
      if (query.length > 0) {
        searchClearBtn.style.display = "block";
      } else {
        searchClearBtn.style.display = "none";
      }
    });

    searchInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        performSearch(searchInput.value.trim());
      }
    });
  }

  if (searchClearBtn) {
    searchClearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchClearBtn.style.display = "none";
      navigateToView("home");
    });
  }

  // Mobile trigger search
  if (mobileSearchBtn && mobileSearchInput) {
    mobileSearchBtn.addEventListener("click", () => {
      const q = mobileSearchInput.value.trim();
      if (q) {
        // Close drawer
        document.getElementById("mobileMenuToggleBtn").click();
        performSearch(q);
      }
    });
  }
}

async function performSearch(query) {
  if (!query) return;
  
  navigateToView("search");
  document.getElementById("searchResultTitle").textContent = `Results for "${query}"`;
  
  const grid = document.getElementById("searchGrid");
  const meta = document.getElementById("searchResultMeta");
  
  grid.innerHTML = '<div class="shelf-loading"><div class="spinner"></div>Searching libraries...</div>';
  meta.textContent = "Scanning database match points...";

  if (state.apiMode && state.tmdbApiKey) {
    try {
      const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${state.tmdbApiKey}&query=${encodeURIComponent(query)}`;
      const res = await fetch(searchUrl).then(r => r.json());
      
      grid.innerHTML = "";
      if (res.results && res.results.length > 0) {
        meta.textContent = `Found ${res.results.length} matched files in Live Server`;
        res.results.forEach(m => grid.appendChild(createMovieCard(m)));
      } else {
        meta.textContent = "0 matched results";
        grid.innerHTML = `<div class="empty-state-box" style="grid-column: 1 / -1;"><span class="empty-icon">🍿</span><h2>No Live Movies Found</h2><p>Double check spelling or try other keywords.</p></div>`;
      }
    } catch (e) {
      grid.innerHTML = '<div class="shelf-empty">Search operation failed. Check key settings.</div>';
    }
  } else {
    // Offline Mock Search
    const lowerQuery = query.toLowerCase();
    const results = MOCK_MOVIES.filter(m => 
      m.title.toLowerCase().includes(lowerQuery) || 
      (m.overview && m.overview.toLowerCase().includes(lowerQuery)) ||
      (m.director && m.director.toLowerCase().includes(lowerQuery))
    );

    grid.innerHTML = "";
    if (results.length > 0) {
      meta.textContent = `Found ${results.length} matches offline`;
      results.forEach(m => grid.appendChild(createMovieCard(m)));
    } else {
      meta.textContent = "0 matched results";
      grid.innerHTML = `<div class="empty-state-box" style="grid-column: 1 / -1;"><span class="empty-icon">🍿</span><h2>No Offline Results</h2><p>Try searching "Wednesday", "Interstellar", or "Barbie".</p></div>`;
    }
  }
}

// ==========================================================================
// SYSTEM SETTINGS & CACHE MANAGERS
// ==========================================================================
function setupSettingsUI() {
  const apiKeyInput = document.getElementById("apiKeyInput");
  const saveBtn = document.getElementById("saveApiKeyBtn");
  const disconnectBtn = document.getElementById("disconnectApiBtn");

  if (saveBtn) {
    saveBtn.addEventListener("click", async () => {
      const key = apiKeyInput.value.trim();
      if (!key) {
        showToast("Please paste a valid TMDB key", "error");
        return;
      }

      saveBtn.textContent = "Validating...";
      saveBtn.disabled = true;

      // Test Key with a light fetch
      try {
        const testUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=1`;
        const res = await fetch(testUrl);
        if (res.status === 200) {
          localStorage.setItem(API_KEY_STORE, key);
          localStorage.setItem(API_MODE_STORE, "true");
          state.tmdbApiKey = key;
          state.apiMode = true;
          
          updateApiStatusUI(true);
          showToast("Live TMDB API connected successfully!", "success");
          refreshEngineData();
        } else {
          showToast("API Key validation failed. Check characters.", "error");
          saveBtn.textContent = "Enable Live API";
          saveBtn.disabled = false;
        }
      } catch (err) {
        showToast("Network failure. Validation timed out.", "error");
        saveBtn.textContent = "Enable Live API";
        saveBtn.disabled = false;
      }
    });
  }

  if (disconnectBtn) {
    disconnectBtn.addEventListener("click", () => {
      toggleMode(false);
      showToast("Disconnected live API. Reverted to offline mode.", "success");
    });
  }
}

function toggleMode(live) {
  state.apiMode = live;
  localStorage.setItem(API_MODE_STORE, live ? "true" : "false");
  if (!live) {
    state.tmdbApiKey = "";
    localStorage.removeItem(API_KEY_STORE);
  }
  updateApiStatusUI(live);
  refreshEngineData();
}

function setupClearActions() {
  document.getElementById("clearReviewsBtn").addEventListener("click", () => {
    localStorage.removeItem(REVIEWS_STORE);
    state.customReviews = [];
    showToast("All custom user reviews deleted from cache", "success");
  });

  document.getElementById("clearWatchlistBtn").addEventListener("click", () => {
    localStorage.removeItem(WATCHLIST_KEY);
    state.watchlist = [];
    updateWatchlistBadges();
    showToast("Watchlist fully cleared", "success");
    if (state.currentView === "watchlist") renderWatchlistView();
  });

  document.getElementById("resetAppSettingsBtn").addEventListener("click", () => {
    localStorage.clear();
    state.watchlist = [];
    state.customReviews = [];
    state.apiMode = false;
    state.tmdbApiKey = "";
    
    setupTheme();
    updateWatchlistBadges();
    updateApiStatusUI(false);
    refreshEngineData();
    navigateToView("home");
    
    showToast("System configurations reset to factory defaults", "success");
  });
}

// ==========================================================================
// TABS & DETAIL MODAL CONTROLLER
// ==========================================================================
function setupModalTabs() {
  const tabOverviewBtn = document.getElementById("tabOverviewBtn");
  const tabCastBtn = document.getElementById("tabCastBtn");
  const tabReviewsBtn = document.getElementById("tabReviewsBtn");

  const paneOverview = document.getElementById("paneOverview");
  const paneCast = document.getElementById("paneCast");
  const paneReviews = document.getElementById("paneReviews");

  const tabs = [tabOverviewBtn, tabCastBtn, tabReviewsBtn];
  const panes = [paneOverview, paneCast, paneReviews];

  tabs.forEach((tab, index) => {
    if (tab) {
      tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        panes.forEach(p => p.classList.remove("active"));

        tab.classList.add("active");
        panes[index].classList.add("active");
      });
    }
  });

  // Close bindings
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modal = document.getElementById("movieDetailModal");
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", () => {
      modal.style.display = "none";
      // Clear Trailer if running
      const iframe = document.getElementById("trailerIframe");
      if (iframe) iframe.src = "";
    });
  }
}

// Open Movie Modal by ID
async function openMovieDetails(movieId) {
  const modal = document.getElementById("movieDetailModal");
  if (!modal) return;
  modal.style.display = "flex";
  
  // Default to overview tab
  document.getElementById("tabOverviewBtn").click();

  let movie = null;

  // Retrieve details
  if (state.apiMode && state.tmdbApiKey) {
    // Show details skeleton or loading
    document.getElementById("modalMovieTitle").textContent = "Loading Film...";
    try {
      const detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${state.tmdbApiKey}&append_to_response=videos,credits`;
      movie = await fetch(detailsUrl).then(r => r.json());
    } catch (e) {
      console.error(e);
      showToast("Failed to retrieve movie details", "error");
      modal.style.display = "none";
      return;
    }
  } else {
    // Offline dataset
    movie = MOCK_MOVIES.find(m => m.id === parseInt(movieId));
  }

  if (!movie) return;
  state.selectedMovie = movie;

  // 1. Populate Hero Billboard
  const modalHeroBg = document.getElementById("modalHeroBg");
  let backdropUrl = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200";
  if (movie.backdrop_path) {
    backdropUrl = `${TMDB_IMAGE_BASE_W1280}${movie.backdrop_path}`;
  }
  modalHeroBg.style.backgroundImage = `url(${backdropUrl})`;

  const posterImg = document.getElementById("modalPosterImg");
  let posterUrl = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=400";
  if (movie.poster_path) {
    posterUrl = `${TMDB_IMAGE_BASE_W500}${movie.poster_path}`;
  }
  posterImg.src = posterUrl;

  document.getElementById("modalTagline").textContent = movie.tagline || "";
  document.getElementById("modalMovieTitle").textContent = movie.title;
  document.getElementById("modalVoteAvg").textContent = `⭐ ${movie.vote_average ? movie.vote_average.toFixed(1) : "0.0"}`;
  document.getElementById("modalReleaseDate").textContent = movie.release_date ? movie.release_date.split("-")[0] : "N/A";
  document.getElementById("modalRuntime").textContent = movie.runtime ? `${movie.runtime} min` : "N/A";
  document.getElementById("modalLanguage").textContent = (movie.original_language || "EN").toUpperCase();

  // 2. Watchlist CTA Button text
  const isSaved = state.watchlist.some(w => w.id === movie.id);
  const modalWatchlistToggleBtn = document.getElementById("modalWatchlistToggleBtn");
  modalWatchlistToggleBtn.textContent = isSaved ? "✓ In Watchlist" : "+ My List";
  
  // Re-bind click event
  modalWatchlistToggleBtn.replaceWith(modalWatchlistToggleBtn.cloneNode(true));
  const newWatchlistBtn = document.getElementById("modalWatchlistToggleBtn");
  newWatchlistBtn.addEventListener("click", () => {
    toggleWatchlistState(movie, null);
  });

  // Re-bind trailer play button
  const modalPlayTrailerBtn = document.getElementById("modalPlayTrailerBtn");
  modalPlayTrailerBtn.replaceWith(modalPlayTrailerBtn.cloneNode(true));
  const newPlayBtn = document.getElementById("modalPlayTrailerBtn");
  newPlayBtn.addEventListener("click", () => {
    openTrailerDirect(movie.id);
  });

  // 3. Overview Pane
  document.getElementById("modalOverviewPlot").textContent = movie.overview || "No synopsis available.";
  const genresContainer = document.getElementById("modalGenresRow");
  genresContainer.innerHTML = "";
  
  if (movie.genres) {
    movie.genres.forEach(g => {
      const b = document.createElement("span");
      b.className = "badge badge-accent";
      b.textContent = g.name;
      genresContainer.appendChild(b);
    });
  } else if (movie.genre_ids) {
    movie.genre_ids.forEach(id => {
      const g = MOCK_GENRES.find(g => g.id === id);
      if (g) {
        const b = document.createElement("span");
        b.className = "badge badge-accent";
        b.textContent = g.name;
        genresContainer.appendChild(b);
      }
    });
  }

  // 4. Cast & Details Pane
  const castGrid = document.getElementById("modalCastGrid");
  castGrid.innerHTML = "";

  let castList = [];
  if (movie.credits && movie.credits.cast) {
    castList = movie.credits.cast.slice(0, 6);
  } else if (movie.cast) {
    castList = movie.cast;
  }

  if (castList.length > 0) {
    castList.forEach(c => {
      const card = document.createElement("div");
      card.className = "cast-card";
      
      let pic = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150";
      if (c.profile_path) {
        pic = c.profile_path.startsWith("http") ? c.profile_path : `${TMDB_IMAGE_BASE_W500}${c.profile_path}`;
      }

      card.innerHTML = `
        <img src="${pic}" alt="${c.name}" class="cast-profile-pic" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150'"/>
        <span class="cast-name">${c.name}</span>
        <span class="cast-role">${c.character || "Actor"}</span>
      `;
      castGrid.appendChild(card);
    });
  } else {
    castGrid.innerHTML = '<span class="text-muted">No principal cast loaded.</span>';
  }

  // Production crew details
  let director = movie.director || "-";
  let writer = movie.writer || "-";
  let prodCo = movie.production_company || "-";

  if (movie.credits && movie.credits.crew) {
    const dObj = movie.credits.crew.find(c => c.job === "Director");
    if (dObj) director = dObj.name;

    const wObj = movie.credits.crew.find(c => c.job === "Writer" || c.job === "Screenplay");
    if (wObj) writer = wObj.name;
  }

  if (movie.production_companies && movie.production_companies.length > 0) {
    prodCo = movie.production_companies.map(c => c.name).slice(0, 2).join(", ");
  }

  document.getElementById("modalDirector").textContent = director;
  document.getElementById("modalWriter").textContent = writer;
  document.getElementById("modalProductionCo").textContent = prodCo;

  // 5. Populate Reviews
  renderModalReviews(movie.id);
}

// Render the reviews inside movie modal
function renderModalReviews(movieId) {
  const container = document.getElementById("modalReviewsList");
  if (!container) return;
  container.innerHTML = "";

  // Combine built-in mock reviews + custom stored reviews
  const localList = state.customReviews.filter(r => r.movieId === movieId);
  const builtInList = BUILT_IN_REVIEWS.filter(r => r.movieId === movieId);
  
  const allReviews = [...localList, ...builtInList];

  if (allReviews.length === 0) {
    container.innerHTML = '<span class="text-muted">No reviews posted yet. Be the first to share your thoughts!</span>';
    return;
  }

  // Sort newest first
  allReviews.sort((a,b) => new Date(b.date) - new Date(a.date));

  allReviews.forEach(r => {
    const starString = "★".repeat(r.rating) + "☆".repeat(10 - r.rating);
    const card = document.createElement("div");
    card.className = "review-item-card";
    card.innerHTML = `
      <div class="review-item-header">
        <span class="review-item-author">${r.author}</span>
        <span class="review-item-stars">${starString}</span>
      </div>
      <p class="review-item-text">${escapeHtml(r.content)}</p>
      <div class="review-item-date">${r.date}</div>
    `;
    container.appendChild(card);
  });
}

function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Setup custom reviews listener
function setupReviewSubmission() {
  const form = document.getElementById("newReviewForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (!state.selectedMovie) {
      showToast("Error. No film loaded.", "error");
      return;
    }

    const ratingInput = form.querySelector('input[name="userScore"]:checked');
    const authorVal = document.getElementById("reviewAuthorInput").value.trim();
    const contentVal = document.getElementById("reviewTextInput").value.trim();

    if (!ratingInput) {
      showToast("Please choose a star score first", "error");
      return;
    }

    const score = parseInt(ratingInput.value);
    const newRev = {
      movieId: state.selectedMovie.id,
      author: authorVal || "Anonymous",
      rating: score,
      content: contentVal,
      date: new Date().toISOString().split("T")[0]
    };

    state.customReviews.push(newRev);
    localStorage.setItem(REVIEWS_STORE, JSON.stringify(state.customReviews));

    // Reload reviews list
    renderModalReviews(state.selectedMovie.id);
    showToast("Review submitted successfully!", "success");

    // Clear form
    form.reset();
  });
}

// ==========================================================================
// TRAILER PLAYER OVERLAY MODAL
// ==========================================================================
async function openTrailerDirect(movieId) {
  const modal = document.getElementById("trailerModal");
  const iframe = document.getElementById("trailerIframe");
  const noTrailer = document.getElementById("noTrailerState");

  if (!modal || !iframe || !noTrailer) return;

  modal.style.display = "flex";
  iframe.style.display = "none";
  iframe.src = "";
  noTrailer.style.display = "none";

  let videoKey = "";

  if (state.apiMode && state.tmdbApiKey) {
    try {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${state.tmdbApiKey}`;
      const res = await fetch(url).then(r => r.json());
      if (res.results && res.results.length > 0) {
        // Find trailer or teaser
        const matched = res.results.find(v => v.type === "Trailer" && v.site === "YouTube") || res.results.find(v => v.site === "YouTube");
        if (matched) videoKey = matched.key;
      }
    } catch (e) {
      console.error(e);
    }
  } else {
    // Offline dataset
    const m = MOCK_MOVIES.find(m => m.id === parseInt(movieId));
    if (m) videoKey = m.trailer_key;
  }

  if (videoKey) {
    iframe.src = `https://www.youtube.com/embed/${videoKey}?autoplay=1`;
    iframe.style.display = "block";
  } else {
    noTrailer.style.display = "flex";
  }

  // Close handlers
  const closeBtn = document.getElementById("trailerCloseBtn");
  
  const closeHandler = () => {
    modal.style.display = "none";
    iframe.src = "";
  };

  closeBtn.onclick = closeHandler;
  modal.onclick = (e) => {
    if (e.target === modal) closeHandler();
  };
}

// ==========================================================================
// SCROLL SHELF NAVIGATIONS
// ==========================================================================
function setupMovieShelvesScrolling() {
  const shelves = document.querySelectorAll(".movie-shelf");
  shelves.forEach(shelf => {
    const leftBtn = shelf.querySelector(".shelf-btn-left");
    const rightBtn = shelf.querySelector(".shelf-btn-right");
    const row = shelf.querySelector(".shelf-row");

    if (leftBtn && rightBtn && row) {
      leftBtn.addEventListener("click", () => {
        row.scrollBy({ left: -320, behavior: "smooth" });
      });

      rightBtn.addEventListener("click", () => {
        row.scrollBy({ left: 320, behavior: "smooth" });
      });
    }
  });
}

// ==========================================================================
// LIGHT / DARK SYSTEM THEMES
// ==========================================================================
function setupTheme() {
  const toggleBtn = document.getElementById("themeToggleBtn");
  if (!toggleBtn) return;

  const sunIcon = toggleBtn.querySelector(".theme-icon-sun");
  const moonIcon = toggleBtn.querySelector(".theme-icon-moon");

  let savedTheme = localStorage.getItem(THEME_KEY);
  if (!savedTheme) {
    // Default to dark
    savedTheme = "dark";
  }

  applyTheme(savedTheme, sunIcon, moonIcon);

  // Toggle handler
  toggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const target = current === "light" ? "dark" : "light";
    applyTheme(target, sunIcon, moonIcon);
    localStorage.setItem(THEME_KEY, target);
    showToast(`Switched to ${target} mode`, "success");
  });
}

function applyTheme(theme, sunIcon, moonIcon) {
  document.documentElement.setAttribute("data-theme", theme);
  if (theme === "light") {
    sunIcon.style.display = "none";
    moonIcon.style.display = "block";
  } else {
    sunIcon.style.display = "block";
    moonIcon.style.display = "none";
  }
}

// ==========================================================================
// TOAST NOTIFICATIONS POPUPS
// ==========================================================================
function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span>${message}</span>
    <span class="toast-close">✕</span>
  `;

  // Click close
  toast.querySelector(".toast-close").addEventListener("click", () => {
    toast.remove();
  });

  // Auto remove after 4.5 seconds
  setTimeout(() => {
    toast.style.animation = "fadeIn 0.3s reverse forwards";
    setTimeout(() => toast.remove(), 300);
  }, 4500);

  container.appendChild(toast);
}
