
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/ui/glass-card';
import { Ship, User, ArrowRight, Anchor, MapPin } from 'lucide-react';
import Footer from '@/components/layout/Footer';
import BookNowButton from '@/components/ui/book-now-button';

const cruiseLines = [
  { 
    name: 'Royal Caribbean', 
    path: '/cruises/royal-caribbean', 
    color: 'bg-blue-100',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1064&auto=format&fit=crop'
  },
  { 
    name: 'Celebrity Cruises', 
    path: '/cruises/celebrity', 
    color: 'bg-purple-100',
    image: 'https://images.unsplash.com/photo-1580541631971-a0e1263c6f67?q=80&w=1000&auto=format&fit=crop'
  },
  { 
    name: 'Carnival Cruise Line', 
    path: '/cruises/carnival', 
    color: 'bg-red-100',
    image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?q=80&w=1074&auto=format&fit=crop'
  },
  { 
    name: 'Norwegian Cruise Line', 
    path: '/cruises/norwegian', 
    color: 'bg-indigo-100',
    image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1064&auto=format&fit=crop'
  },
  { 
    name: 'Disney Cruise Line', 
    path: '/cruises/disney', 
    color: 'bg-pink-100',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1170&auto=format&fit=crop'
  },
  { 
    name: 'MSC Cruises', 
    path: '/cruises/msc', 
    color: 'bg-green-100',
    image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=1252&auto=format&fit=crop'
  },
  { 
    name: 'Princess Cruises', 
    path: '/cruises/princess', 
    color: 'bg-yellow-100',
    image: 'https://images.unsplash.com/photo-1593351415075-3bac9f45c877?q=80&w=1170&auto=format&fit=crop'
  },
  { 
    name: 'Holland America Line', 
    path: '/cruises/holland', 
    color: 'bg-cyan-100',
    image: 'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?q=80&w=1074&auto=format&fit=crop'
  },
  { 
    name: 'Virgin Voyages', 
    path: '/cruises/virgin', 
    color: 'bg-rose-100',
    image: 'https://images.unsplash.com/photo-1566975229104-9e2197e34efc?q=80&w=1074&auto=format&fit=crop'
  },
  { 
    name: 'Luxury Cruise Lines', 
    path: '/cruises/luxury', 
    color: 'bg-amber-100',
    image: 'https://images.unsplash.com/photo-1514339803-9161a926de37?q=80&w=1170&auto=format&fit=crop'
  },
];

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-cruise-50 to-blue-50"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1064&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15
          }}
        />
        <div className="absolute top-0 -left-40 w-80 h-80 bg-cruise-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-cruise-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Navbar */}
      <header className="relative z-10 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Ship className="h-6 w-6 text-cruise-600" />
              <span className="font-semibold text-xl">OceanVoyage</span>
            </div>
            
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-cruise-600 transition-colors">Home</Link>
              <Link to="/cruises" className="text-gray-600 hover:text-cruise-600 transition-colors">Cruises</Link>
              <Link to="/about" className="text-gray-600 hover:text-cruise-600 transition-colors">About</Link>
              <Link to="/privacy-policy" className="text-gray-600 hover:text-cruise-600 transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="text-gray-600 hover:text-cruise-600 transition-colors">Terms & Conditions</Link>
            </div>
            
            <Button 
              onClick={() => navigate('/auth')}
              className="bg-cruise-600 hover:bg-cruise-700 text-white"
            >
              <User size={18} className="mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 relative z-10 py-12">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-12 animate-scale-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Discover Your <span className="text-gradient">Dream Cruise</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the world's finest cruise lines and set sail on an unforgettable adventure
            </p>
            <div className="mt-8">
              <BookNowButton onClick={() => navigate('/cruises')} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
            {cruiseLines.map((cruise, index) => (
              <GlassCard 
                key={index}
                hoverable 
                className="overflow-hidden transform transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => navigate(cruise.path)}
              >
                <div 
                  className="h-40 flex items-center justify-center relative overflow-hidden"
                >
                  <img 
                    src={cruise.image} 
                    alt={cruise.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <Ship size={64} className="text-white opacity-90" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{cruise.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <Button 
                      variant="ghost" 
                      className="text-cruise-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(cruise.path);
                      }}
                    >
                      Explore <ArrowRight size={16} className="ml-2" />
                    </Button>
                    <BookNowButton
                      className="scale-90"
                      onClick={(e: React.MouseEvent) => {
                        e.stopPropagation();
                        navigate(`${cruise.path}/booking`);
                      }}
                    />
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
          
          <div className="mt-12">
            <GlassCard className="p-8 text-center">
              <div className="flex items-center justify-center mb-6">
                <Anchor size={32} className="text-cruise-600 mr-3" />
                <h2 className="text-3xl font-bold">Ready to Set Sail?</h2>
              </div>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join OceanVoyage today and unlock exclusive cruise deals, personalized recommendations, and seamless booking experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/auth')}
                  className="bg-cruise-600 hover:bg-cruise-700 text-white px-8 py-6 text-lg"
                >
                  Sign In Now
                  <ArrowRight className="ml-2" />
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => navigate('/cruises')}
                  className="border-cruise-200 text-cruise-700 hover:bg-cruise-50 px-8 py-6 text-lg"
                >
                  Browse All Cruises
                  <MapPin className="ml-2" />
                </Button>
              </div>
            </GlassCard>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
