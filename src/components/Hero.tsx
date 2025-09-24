import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MessageCircle } from 'lucide-react';
import heroImage from '@/assets/mangalore-clocktower.jpg';
import kambalaImage from '@/assets/kambala-racing.jpg';

const Hero = () => {
  return (
    <section className="hero-bg min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground">
                Smart Mangalore
                <span className="block text-gradient">AI Assistant</span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-2xl">
                Your intelligent city guide for Mangalore. Get real-time bus tracking, 
                college navigation, emergency services, and hospital appointments - all in one place.
              </p>
            </div>

            {/* AI Chat Interface */}
            <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-2 text-primary-foreground/80">
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
              <div className="flex flex-wrap gap-2">
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

          {/* Images Grid */}
          <div className="space-y-6">
            {/* Modern Mangalore - Clock Tower */}
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-primary-glow/20 rounded-3xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="Mangalore Clock Tower - Modern City" 
                className="relative rounded-3xl shadow-2xl w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2">
                <p className="text-sm font-medium text-foreground">Modern Mangalore</p>
              </div>
            </div>

            {/* Cultural Heritage - Kambala */}
            <div className="relative animate-float" style={{ animationDelay: '2s' }}>
              <div className="absolute inset-0 bg-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src={kambalaImage} 
                alt="Traditional Kambala Buffalo Racing - Mangalore Culture" 
                className="relative rounded-3xl shadow-2xl w-full h-64 object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg px-3 py-2">
                <p className="text-sm font-medium text-foreground">Cultural Heritage - Kambala</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;