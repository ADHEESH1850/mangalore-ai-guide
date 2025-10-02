import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import { RefreshCw, Settings } from 'lucide-react';

const SignalControl = () => {
  const [autoMode, setAutoMode] = useState(true);
  const [adaptiveSignals, setAdaptiveSignals] = useState(true);

  const signals = [
    { id: 1, location: 'MG Road Junction', status: 'active', timing: 120, vehicles: 142 },
    { id: 2, location: 'Hampankatta Circle', status: 'active', timing: 90, vehicles: 87 },
    { id: 3, location: 'Kadri Junction', status: 'active', timing: 60, vehicles: 54 },
    { id: 4, location: 'PVS Circle', status: 'maintenance', timing: 0, vehicles: 0 },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Dynamic Signal Control</CardTitle>
          <CardDescription>AI-powered adaptive traffic signal management</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
            <div className="space-y-1">
              <Label htmlFor="auto-mode" className="text-base font-medium">
                Automatic Mode
              </Label>
              <p className="text-sm text-muted-foreground">
                AI automatically adjusts signal timing based on real-time traffic
              </p>
            </div>
            <Switch
              id="auto-mode"
              checked={autoMode}
              onCheckedChange={setAutoMode}
            />
          </div>

          <div className="flex items-center justify-between p-4 bg-secondary/50 rounded-lg">
            <div className="space-y-1">
              <Label htmlFor="adaptive" className="text-base font-medium">
                Adaptive Signals
              </Label>
              <p className="text-sm text-muted-foreground">
                Enable coordination between adjacent signals
              </p>
            </div>
            <Switch
              id="adaptive"
              checked={adaptiveSignals}
              onCheckedChange={setAdaptiveSignals}
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Active Signals</h3>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Sync All
              </Button>
            </div>

            {signals.map((signal) => (
              <Card key={signal.id}>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium">{signal.location}</h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {signal.vehicles} vehicles waiting
                        </p>
                      </div>
                      <Badge
                        variant={signal.status === 'active' ? 'default' : 'secondary'}
                      >
                        {signal.status}
                      </Badge>
                    </div>

                    {signal.status === 'active' && (
                      <>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span>Cycle Duration</span>
                            <span className="font-medium">{signal.timing}s</span>
                          </div>
                          <Slider
                            value={[signal.timing]}
                            max={180}
                            step={10}
                            disabled={autoMode}
                            className="w-full"
                          />
                        </div>

                        <Button variant="outline" size="sm" className="w-full" disabled={autoMode}>
                          <Settings className="h-4 w-4 mr-2" />
                          Manual Override
                        </Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignalControl;
