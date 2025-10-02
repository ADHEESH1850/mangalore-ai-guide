import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Camera, Car, Bus } from 'lucide-react';

const TrafficMonitor = () => {
  const liveFeeds = [
    { id: 1, location: 'MG Road Junction', vehicles: 142, speed: 25, status: 'congested' },
    { id: 2, location: 'Hampankatta Circle', vehicles: 87, speed: 38, status: 'moderate' },
    { id: 3, location: 'Kadri Main Road', vehicles: 54, speed: 52, status: 'clear' },
    { id: 4, location: 'PVS Circle', vehicles: 96, speed: 32, status: 'moderate' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'congested':
        return 'bg-red-500';
      case 'moderate':
        return 'bg-orange-500';
      case 'clear':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Camera className="h-5 w-5" />
          Live Traffic Monitoring
        </CardTitle>
        <CardDescription>Real-time data from 247 cameras and sensors</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {liveFeeds.map((feed) => (
          <div key={feed.id} className="border rounded-lg p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="font-semibold mb-1">{feed.location}</div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Car className="h-4 w-4" />
                    <span>{feed.vehicles} vehicles</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Activity className="h-4 w-4" />
                    <span>{feed.speed} km/h avg</span>
                  </div>
                </div>
              </div>
              <Badge className={getStatusColor(feed.status)}>
                {feed.status}
              </Badge>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className={`h-full ${getStatusColor(feed.status)}`}
                  style={{ width: `${(feed.vehicles / 150) * 100}%` }}
                />
              </div>
              <span className="text-xs text-muted-foreground">
                {Math.round((feed.vehicles / 150) * 100)}% capacity
              </span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default TrafficMonitor;
