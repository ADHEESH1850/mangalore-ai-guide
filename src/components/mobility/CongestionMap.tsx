import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CongestionMap = () => {
  const zones = [
    { id: 1, name: 'MG Road', level: 'high', color: 'bg-red-500', incidents: 2 },
    { id: 2, name: 'Hampankatta', level: 'medium', color: 'bg-orange-500', incidents: 1 },
    { id: 3, name: 'Kadri', level: 'low', color: 'bg-green-500', incidents: 0 },
    { id: 4, name: 'Balmatta', level: 'medium', color: 'bg-orange-500', incidents: 0 },
    { id: 5, name: 'Bendoorwell', level: 'low', color: 'bg-green-500', incidents: 0 },
    { id: 6, name: 'KS Rao Road', level: 'high', color: 'bg-red-500', incidents: 0 },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Real-Time Congestion Map</CardTitle>
        <CardDescription>Live traffic density across city zones</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
          {/* Map visualization placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-3 gap-4 w-full max-w-md p-4">
              {zones.map((zone) => (
                <div
                  key={zone.id}
                  className={`${zone.color} p-4 rounded-lg text-white relative cursor-pointer hover:opacity-90 transition-opacity`}
                >
                  <div className="text-xs font-semibold mb-1">{zone.name}</div>
                  <div className="text-[10px] opacity-90">{zone.level}</div>
                  {zone.incidents > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-red-600">
                      {zone.incidents}
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span>Low</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span>Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span>High</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CongestionMap;
