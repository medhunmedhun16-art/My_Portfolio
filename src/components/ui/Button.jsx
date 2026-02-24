import React from "react";

/**
 * Button — reusable button / link component.
 *
 * @param {"primary"|"outline"|"ghost"} variant — visual style
 * @param {"sm"|"md"|"lg"} size — padding & font size
 * @param {string} href — if provided, renders an <a> tag instead
 * @param {React.ReactNode} icon — optional leading icon
 */
const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

const variantClasses = {
  primary:
    "bg-primary-500 text-white hover:bg-primary-600 shadow-md hover:shadow-glow",
  outline:
    "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-500 dark:hover:text-white",
  ghost:
    "text-primary-500 hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-dark-200",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  icon,
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 dark:focus:ring-offset-dark";

  const classes = `${base} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  // Render as anchor when href is provided
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {icon && <span className="text-lg">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </button>
  );
}
