"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hides the header on scroll down (past a small threshold), shows it again
 * on scroll up or near the top. Paused while `paused` is true (e.g. the nav
 * menu is open) so the header doesn't slide away mid-interaction.
 */
export function useHeaderScroll(paused: boolean) {
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const pausedRef = useRef(paused);

  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    function handleScroll() {
      const currentY = window.scrollY;
      if (pausedRef.current) {
        lastScrollY.current = currentY;
        ticking.current = false;
        return;
      }
      if (currentY > lastScrollY.current && currentY > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
      ticking.current = false;
    }

    function onScroll() {
      if (!ticking.current) {
        window.requestAnimationFrame(handleScroll);
        ticking.current = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Force "shown" while paused without a separate setState — scroll updates
  // are skipped during pause (see handleScroll above), so internal state
  // stays whatever it was and resumes correctly once unpaused.
  return paused ? false : hidden;
}
