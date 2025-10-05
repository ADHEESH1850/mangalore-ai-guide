import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, AlertTriangle, LogIn, LogOut, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import logo from '@/assets/smart-mangalore-brain-logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  const navItems = [
    { name: 'Tourism', href: '#tourism' },
    { name: 'Bus Tracking', href: '#bus-tracking' },
    { name: 'College Guide', href: '#college-guide' },
    { name: 'Emergency', href: '#emergency' },
    { name: 'Appointments', href: '#appointments' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img 
                src={logo} 
                alt="Smart Mangalore Logo" 
                className="w-14 h-14 rounded-lg object-cover shadow-lg backdrop-blur-sm bg-white/10 border border-white/20"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">Smart Mangalore</h1>
              <p className="text-xs text-muted-foreground">AI City Guide</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            {isAdmin && (
              <Link 
                to="/mobility" 
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Dashboard
              </Link>
            )}
            {user && (
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <User className="h-4 w-4" />
                <span className="max-w-[120px] truncate">{user.email}</span>
              </div>
            )}
            <Button onClick={handleAuthAction} variant="outline" size="sm">
              {user ? (
                <>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </>
              ) : (
                <>
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </>
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <Link 
              to="/" 
              className="block py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {isAdmin && (
              <Link 
                to="/mobility" 
                className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </Link>
            )}
            {user && (
              <div className="flex items-center gap-2 text-sm text-foreground/80 py-2">
                <User className="h-4 w-4" />
                <span className="truncate">{user.email}</span>
              </div>
            )}
            <Button onClick={handleAuthAction} variant="outline" size="sm" className="w-full">
              {user ? (
                <>
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </>
              ) : (
                <>
                  <LogIn className="h-4 w-4 mr-2" />
                  Sign In
                </>
              )}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;