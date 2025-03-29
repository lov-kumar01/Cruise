
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Ship, User, Menu, LogOut, ChevronDown, Home, FileText, ShieldCheck } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"

interface HeaderProps {
  userRole: string;
  onMenuClick: () => void;
}

const Header = ({ userRole, onMenuClick }: HeaderProps) => {
  const navigate = useNavigate();
  const { logout, user } = useAuth();
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={onMenuClick}
              className="lg:hidden"
            >
              <Menu size={24} />
            </Button>
            
            <Link to="/" className="flex items-center space-x-2">
              <Ship className="h-6 w-6 text-cruise-600" />
              <span className="font-semibold text-xl">OceanVoyage</span>
            </Link>

            <div className="hidden lg:flex items-center ml-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/" className={navigationMenuTriggerStyle()}>
                      <Home size={16} className="mr-2" />
                      Home
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Cruise Lines</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        <ListItem href="/cruises/royal-caribbean" title="Royal Caribbean">
                          Adventure and innovation for families
                        </ListItem>
                        <ListItem href="/cruises/celebrity" title="Celebrity Cruises">
                          Modern luxury and premium experiences
                        </ListItem>
                        <ListItem href="/cruises/carnival" title="Carnival Cruise Line">
                          Fun, affordable vacations for all
                        </ListItem>
                        <ListItem href="/cruises/norwegian" title="Norwegian Cruise Line">
                          Freestyle cruising with flexibility
                        </ListItem>
                        <ListItem href="/cruises/disney" title="Disney Cruise Line">
                          Magical family experiences
                        </ListItem>
                        <ListItem href="/cruises" title="All Cruise Lines" className="col-span-2">
                          View all our partnered cruise lines
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <Link to="/about" className={navigationMenuTriggerStyle()}>
                      <FileText size={16} className="mr-2" />
                      About
                    </Link>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Legal</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4">
                        <ListItem href="/privacy-policy" title="Privacy Policy">
                          Learn how we protect your information
                        </ListItem>
                        <ListItem href="/terms-conditions" title="Terms & Conditions">
                          Our service terms and legal agreements
                        </ListItem>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <LogOut size={18} className="mr-2" />
                  <span>Sign Out</span>
                </Button>
                
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-cruise-100 flex items-center justify-center">
                    <User size={18} className="text-cruise-600" />
                  </div>
                  <div className="hidden md:block">
                    <p className="text-sm font-medium">{user?.username || 'Guest'}</p>
                    <p className="text-xs text-gray-500 capitalize">{userRole}</p>
                  </div>
                </div>
              </>
            ) : (
              <Button 
                onClick={() => navigate('/auth')}
                className="bg-cruise-600 hover:bg-cruise-700 text-white"
              >
                <User size={18} className="mr-2" />
                Sign In
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

export default Header;
