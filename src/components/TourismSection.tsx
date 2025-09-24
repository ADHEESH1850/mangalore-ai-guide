import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Bed, 
  Star, 
  Wifi,
  Car,
  Coffee,
  Camera,
  Clock,
  Users,
  Phone
} from 'lucide-react';

const TourismSection = () => {
  const attractions = [
    {
      name: "Panambur Beach",
      type: "Beach",
      distance: "12 km from city center",
      rating: 4.5,
      highlights: ["Water sports", "Sunset views", "Beach activities"]
    },
    {
      name: "Mangaladevi Temple", 
      type: "Temple",
      distance: "5 km from city center",
      rating: 4.7,
      highlights: ["Historical significance", "Architecture", "Cultural importance"]
    },
    {
      name: "Sultan Battery",
      type: "Historical",
      distance: "15 km from city center", 
      rating: 4.2,
      highlights: ["Tipu Sultan fort", "Arabian Sea views", "Historical tours"]
    },
    {
      name: "Kadri Manjunath Temple",
      type: "Temple",
      distance: "8 km from city center",
      rating: 4.6,
      highlights: ["Ancient temple", "Bronze statues", "Spiritual experience"]
    }
  ];

  const accommodations = [
    {
      name: "Coastal Paradise Homestay",
      type: "Homestay",
      price: "₹2,500/night",
      rating: 4.8,
      amenities: ["Free WiFi", "Breakfast included", "AC rooms", "Parking"],
      location: "Near Panambur Beach",
      available: true
    },
    {
      name: "Heritage Lodge Mangalore",
      type: "Lodge", 
      price: "₹1,800/night",
      rating: 4.3,
      amenities: ["WiFi", "Room service", "24/7 reception", "Restaurant"],
      location: "City Center",
      available: true
    },
    {
      name: "Grand Seaside Hotel",
      type: "Hotel",
      price: "₹4,200/night", 
      rating: 4.7,
      amenities: ["Swimming pool", "Spa", "Multi-cuisine restaurant", "Concierge"],
      location: "Beachfront",
      available: false
    },
    {
      name: "Cozy Corner Homestay",
      type: "Homestay",
      price: "₹1,200/night",
      rating: 4.4,
      amenities: ["Home-cooked meals", "Family atmosphere", "Local guidance", "WiFi"],
      location: "Traditional area",
      available: true
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tourism Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gradient">
            Discover Mangalore
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Karnataka's coastal gem welcomes thousands of daily visitors. From pristine beaches to 
            ancient temples, find everything you need for an unforgettable stay.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "50+", label: "Tourist Attractions", icon: <Camera className="w-6 h-6" /> },
            { number: "200+", label: "Homestays & Hotels", icon: <Bed className="w-6 h-6" /> },
            { number: "24/7", label: "Tourist Support", icon: <Clock className="w-6 h-6" /> },
            { number: "1000+", label: "Daily Visitors", icon: <Users className="w-6 h-6" /> }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 feature-card">
              <div className="flex justify-center mb-3 text-primary">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Popular Attractions */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Popular Attractions</h3>
            <div className="space-y-4">
              {attractions.map((attraction, index) => (
                <Card key={index} className="feature-card p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">{attraction.name}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant="secondary">{attraction.type}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <MapPin className="w-3 h-3 mr-1" />
                          {attraction.distance}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{attraction.rating}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {attraction.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
            <Button className="w-full bg-gradient-to-r from-secondary to-primary text-white">
              Explore All Attractions
            </Button>
          </div>

          {/* Accommodation Options */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Find Your Stay</h3>
            <div className="space-y-4">
              {accommodations.map((place, index) => (
                <Card key={index} className="feature-card p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">{place.name}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Badge variant={place.type === 'Homestay' ? 'default' : place.type === 'Hotel' ? 'secondary' : 'outline'}>
                          {place.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{place.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-primary">{place.price}</div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">{place.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {place.amenities.slice(0, 3).map((amenity, idx) => (
                      <div key={idx} className="flex items-center text-xs text-muted-foreground">
                        {amenity === 'Free WiFi' || amenity === 'WiFi' ? <Wifi className="w-3 h-3 mr-1" /> :
                         amenity.includes('Parking') ? <Car className="w-3 h-3 mr-1" /> :
                         amenity.includes('Breakfast') || amenity.includes('meals') ? <Coffee className="w-3 h-3 mr-1" /> :
                         <Bed className="w-3 h-3 mr-1" />}
                        {amenity}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge variant={place.available ? "default" : "destructive"}>
                      {place.available ? "Available" : "Booked"}
                    </Badge>
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Phone className="w-3 h-3 mr-1" />
                        Call
                      </Button>
                      <Button size="sm" disabled={!place.available}>
                        {place.available ? "Book Now" : "Waitlist"}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white">
              View All Accommodations
            </Button>
          </div>
        </div>

        {/* Tourism AI Assistant */}
        <div className="mt-20">
          <Card className="feature-card p-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">AI Tourism Assistant</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ask our AI about the best places to visit, local food recommendations, cultural experiences, 
                and get personalized itineraries based on your interests and duration of stay.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mt-6">
                {[
                  "Best beaches nearby",
                  "Local Mangalorean cuisine",
                  "Cultural experiences",
                  "Weekend itinerary",
                  "Budget accommodations",
                  "Transportation guide"
                ].map((query) => (
                  <Button key={query} variant="outline" size="sm">
                    {query}
                  </Button>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TourismSection;