"use client";

import { createContext, useContext, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Info, AlertCircle, X } from "lucide-react";

type ToastType = "success" | "info" | "error" | "warning";

interface Toast {
  id: string;
  message: string;
  type: ToastType;
}

const ToastCtx = createContext<(msg: string, type?: ToastType) => void>(() => {});

export function useToast() {
  return useContext(ToastCtx);
}

const icons: Record<ToastType, React.ReactNode> = {
  success: <CheckCircle2 size={16} className="text-green-400" />,
  info: <Info size={16} className="text-blue-400" />,
  error: <AlertCircle size={16} className="text-red-400" />,
  warning: <AlertCircle size={16} className="text-yellow-400" />,
};

const colors: Record<ToastType, string> = {
  success: "border-l-green-500",
  info: "border-l-blue-500",
  error: "border-l-red-500",
  warning: "border-l-yellow-500",
};

export function Toaster({ children }: { children?: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((message: string, type: ToastType = "success") => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  }, []);

  const remove = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastCtx.Provider value={addToast}>
      {children}
      {/* Toast Container */}
      <div
        className="fixed bottom-6 right-4 sm:right-6 z-[400] flex flex-col gap-2 pointer-events-none"
        aria-live="polite"
        aria-atomic="true"
      >
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ x: 120, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 120, opacity: 0 }}
              transition={{ type: "spring", damping: 22, stiffness: 280 }}
              className={`pointer-events-auto flex items-center gap-3 bg-[var(--bg-card)] border border-[var(--border)] border-l-4 ${colors[toast.type]} rounded-xl px-4 py-3 shadow-xl min-w-[240px] max-w-[320px]`}
            >
              {icons[toast.type]}
              <p className="flex-1 text-sm font-medium text-[var(--text-primary)]">
                {toast.message}
              </p>
              <button
                onClick={() => remove(toast.id)}
                className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
                aria-label="Dismiss notification"
              >
                <X size={14} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastCtx.Provider>
  );
}
