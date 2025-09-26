import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, AlertTriangle } from 'lucide-react';
import logo from '@/assets/smart-mangalore-logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <img 
              src={logo} 
              alt="Smart Mangalore Logo" 
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div>
              <h1 className="text-xl font-bold text-gradient">Smart Mangalore</h1>
              <p className="text-xs text-muted-foreground">AI City Guide</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <Button variant="outline" className="emergency-btn">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Emergency
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
            <Button variant="outline" className="emergency-btn w-full">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Emergency
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;