import { useEffect, useRef } from "react";

/**
 * Per-element reveal hook: attach ref to an element with className="reveal".
 * Adds "in-view" when intersecting and unobserves.
 */
export const useReveal = <T extends HTMLElement = HTMLDivElement>() => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
};

/**
 * Global reveal: scans every `.reveal` element in the document and
 * adds `in-view` when it intersects. This means descendant cards
 * (that don't individually use `useReveal`) still animate in.
 */
export const useGlobalReveal = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -5% 0px" }
    );

    const scan = () => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.in-view)");
      els.forEach((el) => obs.observe(el));
    };

    scan();

    // Watch for dynamically added reveal elements (route changes etc.)
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    // Safety net: after 1.5s force-reveal anything still hidden above the fold or stuck.
    const safety = window.setTimeout(() => {
      document
        .querySelectorAll<HTMLElement>(".reveal:not(.in-view)")
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight) el.classList.add("in-view");
        });
    }, 1500);

    return () => {
      obs.disconnect();
      mo.disconnect();
      window.clearTimeout(safety);
    };
  }, []);
};
