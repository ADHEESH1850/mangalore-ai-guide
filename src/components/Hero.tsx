import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">
              Smart Mangalore
              <span className="block text-gradient">AI Assistant</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Your intelligent city guide for Mangalore. Get real-time bus tracking, 
              college navigation, emergency services, and hospital appointments - all in one place.
            </p>
          </div>

          {/* AI Chat Interface */}
          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 space-y-4 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-primary-foreground/80">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Ask Smart Mangalore AI anything:</span>
            </div>
            
            <div className="flex space-x-3">
              <Input 
                placeholder="Where is the nearest hospital?" 
                className="flex-1 bg-background/20 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Search className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 justify-center">
              {[
                "Tourism guide Mangalore",
                "Bus to Forum Mall",
                "NITK Campus Guide", 
                "Emergency Hospitals",
                "Doctor Appointments",
                "Best homestays near beach"
              ].map((query) => (
                <Button 
                  key={query}
                  variant="secondary" 
                  size="sm"
                  className="text-xs bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/30"
                >
                  {query}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;