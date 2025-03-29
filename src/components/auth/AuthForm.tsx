import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GlassCard } from '@/components/ui/glass-card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { Lock, User, Shield } from 'lucide-react';
import { useAuth, UserRole } from '@/context/AuthContext';

const AuthForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole>('voyager');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login, register } = useAuth();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      if (isSignUp) {
        if (password !== retypePassword) {
          toast({
            title: "Passwords do not match",
            description: "Please make sure both passwords match.",
            variant: "destructive",
          });
          setIsLoading(false);
          return;
        }
        
        // Register new user
        const result = await register(username, password, selectedRole, firstName, lastName);
        
        if (result.success) {
          toast({
            title: "Account created successfully",
            description: `Welcome, ${username}!`,
          });
          
          redirectBasedOnRole(selectedRole);
        } else {
          toast({
            title: "Registration failed",
            description: result.message,
            variant: "destructive",
          });
        }
      } else {
        // Login existing user
        const result = await login(username, password);
        
        if (result.success && result.user) {
          toast({
            title: "Successfully signed in",
            description: `Welcome back, ${username}!`,
          });
          
          redirectBasedOnRole(result.user.role);
        } else {
          toast({
            title: "Sign in failed",
            description: result.message,
            variant: "destructive",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Authentication error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
      console.error("Auth error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const redirectBasedOnRole = (role: UserRole) => {
    if (role === 'voyager') {
      navigate('/dashboard');
    } else if (role === 'admin') {
      navigate('/admin');
    } else if (role === 'manager') {
      navigate('/manager');
    } else if (role === 'head-cook') {
      navigate('/kitchen');
    } else if (role === 'supervisor') {
      navigate('/supervisor');
    }
  };

  return (
    <GlassCard className="w-full max-w-md p-8 mx-auto">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-gradient">Cruise Ship Portal</h2>
          <p className="text-gray-500">
            {isSignUp ? "Create a new account" : "Sign in to access your account"}
          </p>
        </div>
        
        <Tabs defaultValue="voyager" className="w-full" onValueChange={(value) => setSelectedRole(value as UserRole)}>
          <TabsList className="grid grid-cols-3 mb-8 bg-blue-50/40">
            <TabsTrigger value="voyager" className="data-[state=active]:bg-cruise-500 data-[state=active]:text-white">
              Voyager
            </TabsTrigger>
            <TabsTrigger value="admin" className="data-[state=active]:bg-cruise-500 data-[state=active]:text-white">
              Admin
            </TabsTrigger>
            <TabsTrigger value="staff" className="data-[state=active]:bg-cruise-500 data-[state=active]:text-white">
              Staff
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="voyager" className="space-y-6">
            <form onSubmit={handleAuth} className="space-y-4">
              {isSignUp && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input
                      id="first-name"
                      type="text"
                      placeholder="Enter your first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="input-field"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input
                      id="last-name"
                      type="text"
                      placeholder="Enter your last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="input-field"
                    />
                  </div>
                </>
              )}
              <div className="space-y-2">
                <Label htmlFor="username">Voyager ID</Label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <User size={18} />
                  </div>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Enter your voyager ID"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 input-field"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Lock size={18} />
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 input-field"
                  />
                </div>
              </div>

              {isSignUp && (
                <div className="space-y-2">
                  <Label htmlFor="retype-password">Retype Password</Label>
                  <div className="relative">
                    <div className="absolute left-3 top-3 text-gray-400">
                      <Lock size={18} />
                    </div>
                    <Input
                      id="retype-password"
                      type="password"
                      placeholder="Retype your password"
                      value={retypePassword}
                      onChange={(e) => setRetypePassword(e.target.value)}
                      className="pl-10 input-field"
                    />
                  </div>
                </div>
              )}
              
              <Button type="submit" className="w-full bg-cruise-600 hover:bg-cruise-700" disabled={isLoading}>
                {isLoading 
                  ? (isSignUp ? "Creating Account..." : "Signing In...") 
                  : (isSignUp ? "Create Account" : "Sign In")}
              </Button>
              
              <div className="text-center text-sm mt-4">
                <button 
                  type="button" 
                  onClick={() => setIsSignUp(!isSignUp)} 
                  className="text-cruise-600 hover:underline"
                >
                  {isSignUp 
                    ? "Already have an account? Sign in instead" 
                    : "Don't have an account? Create one"}
                </button>
              </div>
            </form>
          </TabsContent>
          
          <TabsContent value="admin" className="space-y-6">
            <form onSubmit={handleAuth} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="admin-username">Admin ID</Label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Shield size={18} />
                  </div>
                  <Input
                    id="admin-username"
                    type="text"
                    placeholder="Enter admin ID"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 input-field"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="admin-password">Password</Label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Lock size={18} />
                  </div>
                  <Input
                    id="admin-password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 input-field"
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-cruise-600 hover:bg-cruise-700" disabled={isLoading}>
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="staff" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="staff-role">Select Role</Label>
              <select 
                className="w-full input-field bg-white"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value as UserRole)}
              >
                <option value="manager">Manager</option>
                <option value="head-cook">Head Cook</option>
                <option value="supervisor">Supervisor</option>
              </select>
            </div>
            
            <form onSubmit={handleAuth} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="staff-username">Staff ID</Label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <User size={18} />
                  </div>
                  <Input
                    id="staff-username"
                    type="text"
                    placeholder="Enter staff ID"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10 input-field"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="staff-password">Password</Label>
                <div className="relative">
                  <div className="absolute left-3 top-3 text-gray-400">
                    <Lock size={18} />
                  </div>
                  <Input
                    id="staff-password"
                    type="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 input-field"
                  />
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-cruise-600 hover:bg-cruise-700" disabled={isLoading}>
                {isLoading ? "Signing In..." : "Sign In"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </div>
    </GlassCard>
  );
};

export default AuthForm;
