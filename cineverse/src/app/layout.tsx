import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { MovieModal } from "@/components/modals/MovieModal";
import { TrailerModal } from "@/components/modals/TrailerModal";
import { Toaster } from "@/components/ui/Toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CineVerse – Discover Your Next Favorite Film",
  description:
    "Explore trending, popular, top-rated, and upcoming movies. Search, filter, and build your personal watchlist with CineVerse.",
  keywords: "movies, cinema, watchlist, trending, top rated, upcoming, CineVerse, TMDB",
  openGraph: {
    title: "CineVerse – Discover Your Next Favorite Film",
    description: "Explore trending, popular, top-rated, and upcoming movies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <Toaster>
            <Navbar />
            <main>{children}</main>
            <MovieModal />
            <TrailerModal />
          </Toaster>
        </ThemeProvider>
      </body>
    </html>
  );
}
