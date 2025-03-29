
import { 
  Home, ShoppingCart, FilmIcon, Settings, 
  Users, ChefHat, ClipboardList 
} from 'lucide-react';
import { UserRole } from '@/context/AuthContext';

export const getMenuItemsByRole = (userRole: UserRole) => {
  switch (userRole) {
    case 'admin':
      return [
        { icon: Home, label: 'Dashboard', path: '/admin' },
        { icon: ShoppingCart, label: 'Manage Items', path: '/admin/items' },
        { icon: Users, label: 'Voyager Registration', path: '/admin/voyagers' },
        { icon: Settings, label: 'Settings', path: '/admin/settings' },
      ];
    case 'manager':
      return [
        { icon: Home, label: 'Dashboard', path: '/manager' },
        { icon: FilmIcon, label: 'Movie Bookings', path: '/manager/movies' },
        { icon: Users, label: 'Salon Bookings', path: '/manager/salon' },
        { icon: ShoppingCart, label: 'Fitness Bookings', path: '/manager/fitness' },
        { icon: Users, label: 'Party Hall Bookings', path: '/manager/partyhall' },
      ];
    case 'head-cook':
      return [
        { icon: Home, label: 'Dashboard', path: '/kitchen' },
        { icon: ChefHat, label: 'Catering Orders', path: '/kitchen/orders' },
      ];
    case 'supervisor':
      return [
        { icon: Home, label: 'Dashboard', path: '/supervisor' },
        { icon: ClipboardList, label: 'Stationery Orders', path: '/supervisor/orders' },
      ];
    default: // voyager
      return [
        { icon: Home, label: 'Dashboard', path: '/dashboard' },
        { icon: ShoppingCart, label: 'Catering', path: '/services/catering' },
        { icon: ShoppingCart, label: 'Stationery', path: '/services/stationery' },
        { icon: FilmIcon, label: 'Movies', path: '/services/movies' },
        { icon: Users, label: 'Beauty Salon', path: '/services/salon' },
        { icon: Users, label: 'Fitness Center', path: '/services/fitness' },
        { icon: Users, label: 'Party Hall', path: '/services/partyhall' },
      ];
  }
};

export default getMenuItemsByRole;
