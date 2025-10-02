import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Navigation, Clock, TrendingDown } from 'lucide-react';

const RouteOptimization = () => {
  const routes = [
    {
      id: 1,
      from: 'City Center',
      to: 'NITK Campus',
      standard: { time: 35, distance: 18 },
      optimized: { time: 22, distance: 16.5 },
      savings: { time: 37, distance: 8 },
      traffic: 'heavy',
    },
    {
      id: 2,
      from: 'Airport',
      to: 'Mangalore Central',
      standard: { time: 28, distance: 12 },
      optimized: { time: 20, distance: 11 },
      savings: { time: 29, distance: 8 },
      traffic: 'moderate',
    },
    {
      id: 3,
      from: 'Pumpwell',
      to: 'Kadri Park',
      standard: { time: 18, distance: 8 },
      optimized: { time: 12, distance: 7.2 },
      savings: { time: 33, distance: 10 },
      traffic: 'light',
    },
  ];

  const getTrafficColor = (traffic: string) => {
    switch (traffic) {
      case 'heavy':
        return 'bg-red-500';
      case 'moderate':
        return 'bg-orange-500';
      case 'light':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>AI Route Optimization</CardTitle>
          <CardDescription>
            Real-time route suggestions based on live traffic analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <Clock className="h-8 w-8 mx-auto text-primary" />
                  <div className="text-2xl font-bold">32%</div>
                  <p className="text-sm text-muted-foreground">Avg Time Saved</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <TrendingDown className="h-8 w-8 mx-auto text-green-500" />
                  <div className="text-2xl font-bold">24%</div>
                  <p className="text-sm text-muted-foreground">Congestion Reduced</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <Navigation className="h-8 w-8 mx-auto text-blue-500" />
                  <div className="text-2xl font-bold">15K+</div>
                  <p className="text-sm text-muted-foreground">Routes Optimized</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {routes.map((route) => (
            <Card key={route.id}>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Navigation className="h-4 w-4 text-primary" />
                        <span className="font-semibold">{route.from}</span>
                        <span className="text-muted-foreground">→</span>
                        <span className="font-semibold">{route.to}</span>
                      </div>
                      <Badge className={getTrafficColor(route.traffic)}>
                        {route.traffic} traffic
                      </Badge>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-muted-foreground">
                        Standard Route
                      </div>
                      <div className="text-sm">
                        <div>{route.standard.time} min</div>
                        <div className="text-muted-foreground">
                          {route.standard.distance} km
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-green-600 dark:text-green-400">
                        Optimized Route
                      </div>
                      <div className="text-sm">
                        <div className="font-semibold">{route.optimized.time} min</div>
                        <div className="text-muted-foreground">
                          {route.optimized.distance} km
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-green-700 dark:text-green-300">
                        Savings:
                      </span>
                      <div className="flex gap-4">
                        <span className="text-green-600 dark:text-green-400">
                          -{route.savings.time}% time
                        </span>
                        <span className="text-green-600 dark:text-green-400">
                          -{route.savings.distance}% distance
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    View Full Route Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default RouteOptimization;
