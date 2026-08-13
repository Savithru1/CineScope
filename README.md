# 🎬 CineVerse — Premium Movie Discovery

CineVerse is a polished, production-quality movie discovery website built with a premium cinematic design.

You have two build and deployment options included in this workspace:
1. **🚀 Zero-Build Static Version (Root Directory)** — Pure HTML, CSS, and Vanilla JS. It requires no backend, installation, or build process. You can open `index.html` directly in the browser or deploy it to Vercel/GitHub Pages instantly.
2. **⚛️ Next.js 14 Web Application (`/cineverse` sub-directory)** — Built using Next.js 14, React, Tailwind CSS, Framer Motion, and Zustand for state management.

---

## ⚡ Option 1: Zero-Build Static Version (Root)

Ideal for instant deployment without any npm installation or build configurations.

### Features:
- **Cinematic Rotating Hero** with backdrop zoom transition, meta rows, and quick actions.
- **Dynamic Content Rows** (Trending, Popular, Top Rated, Upcoming).
- **Search & Filters** (Genre dropdowns, rating thresholds, and sorting parameters).
- **Local Watchlist & Dark/Light Mode** fully persisted using `localStorage`.
- **Responsive Modals** for details and official YouTube trailers.
- **API Fallbacks** — Automatic graceful client-side demo dataset loaded if the API key is missing.

### Local Setup:
1. Open `script.js` and set your key at the top of the file:
   ```javascript
   const TMDB_API_KEY = "YOUR_API_KEY";
   ```
2. Double-click `index.html` to run the site locally!

---

## ⚛️ Option 2: Next.js 14 Web Application (`/cineverse`)

Ideal for advanced development, utilizing React hooks, Framer Motion animations, and Zustand store management.

### Local Setup:
1. Navigate into the Next.js directory:
   ```bash
   cd cineverse
   ```
2. Install the node packages:
   ```bash
   npm install
   ```
3. Set your TMDB key in `.env.local`:
   ```env
   NEXT_PUBLIC_TMDB_API_KEY=your_tmdb_key_here
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

---

## 🔑 Getting a TMDB API Key
1. Sign up for a free account at [themoviedb.org](https://www.themoviedb.org).
2. Navigate to **Settings** → **API** from your profile.
3. Generate a Developer API Key and copy the key (v3 auth).

---

## 🌐 Deploying to Vercel
- **For Vanilla HTML/CSS/JS (Root)**: Deploy the root folder directory directly. Vercel will auto-detect it as a static project and deploy it instantly.
- **For Next.js App (`/cineverse`)**: Deploy the subfolder. Vercel will automatically configure the Next.js builder, compile typescript, and serve the application.
