import type { ScrollSmoother } from "gsap/ScrollSmoother";

/**
 * Shared handle to the single ScrollSmoother instance so any component
 * (e.g. the nav "scroll to top" or anchor links) can programmatically
 * scroll without recreating the smoother.
 */
export const scrollSmootherRef: { current: ScrollSmoother | null } = {
  current: null,
};
