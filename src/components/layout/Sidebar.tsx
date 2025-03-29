
import React from 'react';
import { useLocation } from 'react-router-dom';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  menuItems: Array<{
    icon: React.ElementType;
    label: string;
    path: string;
  }>;
  onItemClick?: () => void;
}

const Sidebar = ({ menuItems, onItemClick }: SidebarProps) => {
  const location = useLocation();
  
  return (
    <nav className="space-y-1">
      {menuItems.map((item) => (
        <SidebarItem
          key={item.path}
          icon={item.icon}
          label={item.label}
          path={item.path}
          active={location.pathname === item.path}
          onClick={onItemClick}
        />
      ))}
    </nav>
  );
};

export default Sidebar;
