"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Film } from "lucide-react";
import { useUIStore } from "@/store/ui";

export function TrailerModal() {
  const { isTrailerOpen, trailerKey, closeTrailer } = useUIStore();

  const handleClose = useCallback(() => closeTrailer(), [closeTrailer]);

  useEffect(() => {
    if (!isTrailerOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [isTrailerOpen, handleClose]);

  const hasTrailer = !!trailerKey;

  return (
    <AnimatePresence>
      {isTrailerOpen && (
        <motion.div
          className="modal-backdrop z-[300]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Movie trailer"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-black border border-[var(--border)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="modal-close-btn cursor-pointer top-3 right-3 z-10"
              aria-label="Close trailer"
            >
              <X size={18} />
            </button>

            {hasTrailer ? (
              <div className="relative w-full bg-black" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&rel=0&modestbranding=1`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Movie Trailer"
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 px-8 text-center bg-[var(--bg-secondary)]">
                <div className="empty-icon-ring mb-4">
                  <Film size={28} className="text-[var(--text-secondary)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                  No Trailer Available
                </h3>
                <p className="text-[var(--text-secondary)] text-sm max-w-xs">
                  We couldn't find an official YouTube trailer for this movie title.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 btn-primary cursor-pointer text-sm"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
