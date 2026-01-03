"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "children">,
    Pick<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "disabled"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-accent text-text-inverse
    hover:bg-accent-hover
    active:scale-[0.98]
  `,
  secondary: `
    bg-bg-tertiary text-text-primary
    hover:bg-border
    active:scale-[0.98]
  `,
  ghost: `
    bg-transparent text-text-secondary
    hover:bg-bg-tertiary hover:text-text-primary
    active:scale-[0.98]
  `,
  danger: `
    bg-red-500/10 text-red-400
    hover:bg-red-500/20
    active:scale-[0.98]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm gap-1.5",
  md: "h-10 px-4 text-sm gap-2",
  lg: "h-12 px-6 text-base gap-2.5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          // Base styles
          "relative inline-flex items-center justify-center",
          "font-medium rounded-[var(--radius)]",
          "transition-colors duration-[var(--duration-fast)]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-focus focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
          "disabled:opacity-50 disabled:pointer-events-none",
          // Variant and size
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        disabled={disabled || loading}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
        }}
        {...props}
      >
        {loading && (
          <motion.span
            className="absolute inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          </motion.span>
        )}
        <span className={cn("flex items-center gap-2", loading && "invisible")}>
          {children}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = "Button";
