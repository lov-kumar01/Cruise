
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Ship, X } from 'lucide-react';
import Sidebar from './Sidebar';

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: Array<{
    icon: React.ElementType;
    label: string;
    path: string;
  }>;
}

const MobileSidebar = ({ isOpen, onClose, menuItems }: MobileSidebarProps) => {
  return (
    <>
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-200",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />
      
      <div
        className={cn(
          "fixed top-0 bottom-0 left-0 w-64 bg-white z-50 shadow-xl transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center space-x-2">
            <Ship className="h-6 w-6 text-cruise-600" />
            <span className="font-semibold">OceanVoyage</span>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={24} />
          </Button>
        </div>
        
        <div className="p-4">
          <Sidebar menuItems={menuItems} onItemClick={onClose} />
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
