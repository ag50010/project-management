"use client";

import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            // Base styles
            "w-full h-11 px-4",
            "bg-bg-secondary text-text-primary placeholder:text-text-tertiary",
            "rounded-[var(--radius)] border border-border",
            "transition-all duration-[var(--duration-fast)]",
            // Focus styles
            "focus:outline-none focus:border-border-focus focus:ring-2 focus:ring-border-focus/20",
            "focus:scale-[1.01] origin-center",
            // Error styles
            error && "border-red-400 focus:border-red-400 focus:ring-red-400/20",
            // Disabled styles
            "disabled:opacity-50 disabled:cursor-not-allowed",
            className
          )}
          {...props}
        />
        {(error || hint) && (
          <p
            className={cn(
              "mt-2 text-sm",
              error ? "text-red-400" : "text-text-tertiary"
            )}
          >
            {error || hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-text-secondary mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={inputId}
          className={cn(
            // Base styles
            "w-full min-h-[120px] px-4 py-3",
            "bg-bg-secondary text-text-primary placeholder:text-text-tertiary",
            "rounded-[var(--radius)] border border-border",
            "transition-all duration-[var(--duration-fast)]",
            "resize-y",
            // Focus styles
            "focus:outline-none focus:border-border-focus focus:ring-2 focus:ring-border-focus/20",
            // Error styles
            error && "border-red-400 focus:border-red-400 focus:ring-red-400/20",
            // Disabled styles
            "disabled:opacity-50 disabled:cursor-not-allowed",
            className
          )}
          {...props}
        />
        {(error || hint) && (
          <p
            className={cn(
              "mt-2 text-sm",
              error ? "text-red-400" : "text-text-tertiary"
            )}
          >
            {error || hint}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
