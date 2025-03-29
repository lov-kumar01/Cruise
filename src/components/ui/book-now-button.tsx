
import React from 'react';
import { Button } from '@/components/ui/button';
import { Anchor } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BookNowButtonProps {
  className?: string;
  onClick?: (e?: React.MouseEvent) => void;
}

const BookNowButton = ({ className, onClick }: BookNowButtonProps) => {
  return (
    <Button
      className={cn(
        "bg-cruise-600 hover:bg-cruise-700 text-white font-medium px-6 py-2 rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden group",
        className
      )}
      onClick={onClick}
    >
      <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
      <span className="absolute -inset-full top-0 left-0 h-full w-1/3 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 animate-[shimmer_5s_ease-in-out_infinite]"></span>
      <Anchor className="mr-2 h-4 w-4" />
      Book Now
    </Button>
  );
};

export default BookNowButton;
