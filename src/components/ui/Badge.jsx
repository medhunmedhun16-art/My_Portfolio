import React from "react";

/**
 * Badge — small pill for tech-stack tags, categories, etc.
 *
 * @param {string} label — text to display
 * @param {"default"|"primary"|"success"} variant
 */
const variants = {
  default:
    "bg-gray-100 text-gray-700 dark:bg-dark-200 dark:text-gray-300",
  primary:
    "bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400",
  success:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
};

export default function Badge({ label, variant = "default", className = "" }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-medium rounded-full transition-colors ${variants[variant]} ${className}`}
    >
      {label}
    </span>
  );
}
