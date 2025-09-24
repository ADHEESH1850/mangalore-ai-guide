import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Bus, 
  GraduationCap, 
  AlertTriangle, 
  Calendar,
  MapPin,
  Clock,
  Navigation,
  Heart
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Bus className="w-8 h-8" />,
      title: "Smart Bus Tracking",
      description: "Real-time bus locations and arrival predictions based on weather, traffic, and time. Never miss your bus again in Mangalore.",
      highlights: ["Live GPS tracking", "Weather-adjusted ETAs", "Route optimization", "Crowd prediction"],
      cta: "Track Buses",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "College Navigator",
      description: "Comprehensive indoor navigation for every college in Mangalore. Find classrooms, washrooms, labs, and facilities instantly.",
      highlights: ["Indoor mapping", "Real-time navigation", "Facility finder", "Campus events"],
      cta: "Explore Colleges",
      gradient: "from-secondary to-primary"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Emergency Services",
      description: "One-tap emergency assistance with GPS location sharing. Instantly find nearby hospitals, clinics, and emergency services.",
      highlights: ["Instant GPS sharing", "Nearest hospitals", "Emergency contacts", "Medical history"],
      cta: "Emergency Help",
      gradient: "from-emergency to-destructive"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Hospital Appointments",
      description: "Smart appointment booking across all Mangalore hospitals. Check doctor availability and book appointments seamlessly.",
      highlights: ["Multi-hospital booking", "Doctor availability", "Appointment reminders", "Health records"],
      cta: "Book Appointment",
      gradient: "from-primary-glow to-secondary"
    }
  ];

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gradient">
            AI-Powered City Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience Mangalore like never before with our intelligent AI assistant 
            that understands your city needs and provides instant, accurate solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card border-0 p-6 group">
              <CardHeader className="pb-6">
                <div className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Feature Highlights */}
                <div className="grid grid-cols-2 gap-3">
                  {feature.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Button */}
                <Button 
                  className={`w-full bg-gradient-to-r ${feature.gradient} text-white hover:opacity-90 transition-opacity`}
                >
                  {feature.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Capabilities Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="space-y-2">
                <MapPin className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Location-Aware</h3>
                <p className="text-muted-foreground">Contextual responses based on your exact location in Mangalore</p>
              </div>
              
              <div className="space-y-2">
                <Clock className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Real-Time Data</h3>
                <p className="text-muted-foreground">Live updates from traffic, weather, and city infrastructure</p>
              </div>
              
              <div className="space-y-2">
                <Heart className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-semibold">Personalized</h3>
                <p className="text-muted-foreground">Learns your preferences and provides tailored recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;