import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';
    
    const variants = {
      primary: 'bg-[var(--color-brand-gold)] text-white shadow-[0_4px_14px_0_rgba(201,169,110,0.39)] hover:shadow-[0_6px_20px_rgba(201,169,110,0.23)] hover:bg-[#b0905a]',
      secondary: 'bg-[var(--color-brand-black)] text-white hover:bg-[var(--color-brand-gray-dark)] shadow-md',
      outline: 'border-2 border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold)] hover:text-white',
      ghost: 'text-[var(--color-brand-black)] hover:bg-[var(--color-brand-gray)]',
    };

    const sizes = {
      sm: 'h-10 px-4 text-sm',
      md: 'h-12 px-8 text-base',
      lg: 'h-14 px-10 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
