
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  path: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon: Icon, label, path, active, onClick }: SidebarItemProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(path);
    if (onClick) onClick();
  };
  
  return (
    <button
      onClick={handleClick}
      className={cn(
        'flex items-center w-full space-x-3 px-4 py-3 rounded-lg transition-all duration-200',
        active 
          ? 'bg-cruise-500 text-white' 
          : 'text-gray-700 hover:bg-cruise-50'
      )}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default SidebarItem;
