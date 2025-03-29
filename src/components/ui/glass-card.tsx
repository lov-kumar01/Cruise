
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'dark';
  hoverable?: boolean;
  bordered?: boolean;
  elevated?: boolean;
  className?: string;
  children: React.ReactNode;
}

const GlassCard = ({
  variant = 'light',
  hoverable = false,
  bordered = true,
  elevated = true,
  className,
  children,
  ...props
}: GlassCardProps) => {
  return (
    <div
      className={cn(
        'rounded-xl backdrop-blur-md transition-all duration-300',
        variant === 'light' 
          ? 'bg-white/70 text-gray-900' 
          : 'bg-black/10 text-white',
        bordered && (variant === 'light' 
          ? 'border border-white/30' 
          : 'border border-white/10'),
        elevated && (variant === 'light' 
          ? 'shadow-soft' 
          : 'shadow-medium'),
        hoverable && 'hover:shadow-medium hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export { GlassCard };
