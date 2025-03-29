import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type UserRole = 'voyager' | 'admin' | 'manager' | 'head-cook' | 'supervisor';

interface User {
  id: string;
  username: string;
  role: UserRole;
}

interface AuthResult {
  success: boolean;
  message: string;
  token?: string;
  user?: User;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<AuthResult>;
  register: (username: string, password: string, role: UserRole, firstName: string, lastName: string) => Promise<AuthResult>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock user data - in a real app, this would be validated against a backend
const MOCK_USERS = [
  { id: '1', username: 'admin', password: 'admin123', role: 'admin' as UserRole },
  { id: '2', username: 'voyager', password: 'voyage123', role: 'voyager' as UserRole },
  { id: '3', username: 'manager', password: 'manage123', role: 'manager' as UserRole },
  { id: '4', username: 'cook', password: 'cook123', role: 'head-cook' as UserRole },
  { id: '5', username: 'supervisor', password: 'super123', role: 'supervisor' as UserRole },
];

// Simple token generation (for demo purposes only)
const generateToken = (user: User): string => {
  return btoa(JSON.stringify({ id: user.id, username: user.username, role: user.role }));
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('auth_token');
    if (token) {
      try {
        const userData = JSON.parse(atob(token));
        if (userData && userData.username) {
          setUser({
            id: userData.id,
            username: userData.username,
            role: userData.role,
          });
        }
      } catch (error) {
        console.error('Invalid token', error);
        localStorage.removeItem('auth_token');
      }
    }
    setLoading(false);
  }, []);

  const login = async (username: string, password: string): Promise<AuthResult> => {
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    try {
      // Find user in mock data
      const mockUser = MOCK_USERS.find(
        u => u.username.toLowerCase() === username.toLowerCase() && u.password === password
      );
      
      if (mockUser) {
        const userData = {
          id: mockUser.id,
          username: mockUser.username,
          role: mockUser.role,
        };
        
        const token = generateToken(userData);
        localStorage.setItem('auth_token', token);
        setUser(userData);
        
        return {
          success: true,
          message: 'Login successful',
          token,
          user: userData,
        };
      }
      
      return {
        success: false,
        message: 'Invalid username or password',
      };
    } finally {
      setLoading(false);
    }
  };

  const register = async (
    username: string,
    password: string,
    role: UserRole = 'voyager',
    firstName: string,
    lastName: string
  ): Promise<AuthResult> => {
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    try {
      // Check if username exists
      const userExists = MOCK_USERS.some(
        u => u.username.toLowerCase() === username.toLowerCase()
      );
      
      if (userExists) {
        return {
          success: false,
          message: 'Username already exists',
        };
      }
      
      // In a real app, we would call an API to create a user
      // For this demo, we'll just pretend it worked
      const newUserId = `user_${Math.random().toString(36).substring(2, 9)}`;
      
      const userData = {
        id: newUserId,
        username,
        role,
        firstName,
        lastName,
      };
      
      const token = generateToken(userData);
      localStorage.setItem('auth_token', token);
      setUser(userData);
      
      return {
        success: true,
        message: 'Registration successful',
        token,
        user: userData,
      };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
