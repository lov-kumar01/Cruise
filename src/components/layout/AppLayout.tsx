
import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MobileSidebar from './MobileSidebar';
import Footer from './Footer';
import { getMenuItemsByRole } from '@/utils/menuItems';

interface AppLayoutProps {
  children: React.ReactNode;
  userRole?: 'voyager' | 'admin' | 'manager' | 'head-cook' | 'supervisor';
}

const AppLayout = ({ children, userRole = 'voyager' }: AppLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  
  const menuItems = getMenuItemsByRole(userRole);

  return (
    <div className="min-h-screen flex flex-col">
      <Header userRole={userRole} onMenuClick={toggleSidebar} />
      
      <div className="flex flex-1">
        {/* Sidebar for desktop */}
        <aside className="hidden lg:block w-64 bg-white/80 backdrop-blur-md border-r border-gray-100 p-4">
          <Sidebar menuItems={menuItems} />
        </aside>
        
        {/* Mobile sidebar */}
        <MobileSidebar 
          isOpen={isSidebarOpen} 
          onClose={closeSidebar} 
          menuItems={menuItems}
        />
        
        {/* Main content */}
        <main className="flex-1 overflow-auto animate-fade-in">
          {children}
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default AppLayout;
