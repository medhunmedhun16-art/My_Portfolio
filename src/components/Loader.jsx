import React from "react";

/**
 * Loader — full-screen loading animation shown while the app hydrates.
 *
 * Uses three bouncing dots with staggered CSS animation.
 */
export default function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-dark">
      <div className="flex space-x-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="loader-dot h-4 w-4 rounded-full bg-primary-500"
          />
        ))}
      </div>
    </div>
  );
}
