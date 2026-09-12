"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type ThemeMode = "light" | "dark";

const STORAGE_KEY = "rsm-theme-mode";

type ThemeContextValue = {
  mode: ThemeMode;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/**
 * Inline script injected in <head> so `data-mode` is set on <html> before
 * React hydrates — avoids a flash of the wrong theme on load. Keep this in
 * sync with the storage key / logic above.
 */
export const noFlashThemeScript = `
(function () {
  try {
    var stored = window.localStorage.getItem("${STORAGE_KEY}");
    var mode = stored === "dark" || stored === "light" ? stored : "light";
    document.documentElement.setAttribute("data-mode", mode);
  } catch (e) {
    document.documentElement.setAttribute("data-mode", "light");
  }
})();
`;

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>("light");

  useEffect(() => {
    // The inline script already set data-mode on <html> before hydration
    // (no flash on screen), but React's server-rendered tree has no way to
    // know that — reading it into state has to happen post-hydration too,
    // or React would flag a mismatch against the "light" it rendered on
    // the server.
    const current = document.documentElement.getAttribute("data-mode");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (current === "dark" || current === "light") setMode(current);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", mode);
  }, [mode]);

  const toggleMode = useCallback(() => {
    setMode((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // localStorage unavailable — ignore
      }
      return next;
    });
  }, []);

  const value = useMemo(() => ({ mode, toggleMode }), [mode, toggleMode]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
