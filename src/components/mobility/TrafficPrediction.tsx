import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const TrafficPrediction = () => {
  const predictions = [
    {
      time: '7:00 AM - 9:00 AM',
      period: 'Morning Rush',
      prediction: 'High congestion expected',
      trend: 'up',
      confidence: 94,
      recommendations: [
        'Activate extended green signals on arterial roads',
        'Deploy traffic police at major junctions',
        'Suggest alternate routes via mobile app',
      ],
    },
    {
      time: '12:00 PM - 2:00 PM',
      period: 'Lunch Hour',
      prediction: 'Moderate traffic flow',
      trend: 'stable',
      confidence: 87,
      recommendations: [
        'Standard signal timing',
        'Monitor commercial areas',
      ],
    },
    {
      time: '5:00 PM - 8:00 PM',
      period: 'Evening Rush',
      prediction: 'Very high congestion',
      trend: 'up',
      confidence: 96,
      recommendations: [
        'Implement dynamic signal prioritization',
        'Activate all emergency lanes',
        'Coordinate with public transport',
        'Send real-time alerts to commuters',
      ],
    },
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-5 w-5 text-red-500" />;
      case 'down':
        return <TrendingDown className="h-5 w-5 text-green-500" />;
      default:
        return <Minus className="h-5 w-5 text-orange-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>AI Traffic Predictions</CardTitle>
          <CardDescription>
            Machine learning models analyzing historical and real-time data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {predictions.map((pred, index) => (
            <div key={index} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">{pred.period}</span>
                    {getTrendIcon(pred.trend)}
                  </div>
                  <div className="text-sm text-muted-foreground">{pred.time}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">{pred.confidence}%</div>
                  <div className="text-xs text-muted-foreground">confidence</div>
                </div>
              </div>
              
              <div className="bg-secondary/50 rounded p-3">
                <div className="font-medium text-sm mb-2">{pred.prediction}</div>
                <div className="space-y-1">
                  {pred.recommendations.map((rec, i) => (
                    <div key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default TrafficPrediction;
