import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const SafetyAnalytics = () => {
  const incidents = [
    {
      id: 1,
      type: 'Accident',
      location: 'KS Rao Road - MG Road Junction',
      severity: 'high',
      time: '2 hours ago',
      status: 'Active',
      response: 'Emergency services dispatched',
    },
    {
      id: 2,
      type: 'Road Hazard',
      location: 'Kadri Main Road',
      severity: 'medium',
      time: '4 hours ago',
      status: 'Resolved',
      response: 'Maintenance crew deployed',
    },
    {
      id: 3,
      type: 'Heavy Congestion',
      location: 'Hampankatta Circle',
      severity: 'low',
      time: '1 hour ago',
      status: 'Monitoring',
      response: 'Alternate routes suggested',
    },
  ];

  const safetyMetrics = [
    { label: 'Accident-free Days', value: '12', trend: 'up', change: '+3 days' },
    { label: 'Response Time', value: '4.2 min', trend: 'down', change: '-1.3 min' },
    { label: 'Safety Score', value: '87%', trend: 'up', change: '+5%' },
    { label: 'Violations Detected', value: '234', trend: 'down', change: '-12%' },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-orange-500';
      case 'low':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'destructive';
      case 'Resolved':
        return 'default';
      case 'Monitoring':
        return 'secondary';
      default:
        return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {safetyMetrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  {metric.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4 text-green-500" />
                  ) : (
                    <TrendingUp className="h-4 w-4 text-green-500 rotate-180" />
                  )}
                </div>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground">{metric.change} from last month</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Safety Analytics & Incidents
          </CardTitle>
          <CardDescription>Real-time monitoring and incident management</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {incidents.map((incident) => (
            <Card key={incident.id}>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className={`h-5 w-5 mt-0.5 ${
                        incident.severity === 'high' ? 'text-red-500' :
                        incident.severity === 'medium' ? 'text-orange-500' :
                        'text-yellow-500'
                      }`} />
                      <div className="space-y-1">
                        <div className="font-semibold">{incident.type}</div>
                        <div className="text-sm text-muted-foreground">
                          {incident.location}
                        </div>
                        <div className="flex items-center gap-2 mt-2">
                          <Badge className={getSeverityColor(incident.severity)}>
                            {incident.severity} priority
                          </Badge>
                          <Badge variant={getStatusColor(incident.status)}>
                            {incident.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground text-right">
                      {incident.time}
                    </div>
                  </div>

                  <div className="bg-secondary/50 rounded p-3 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">Response: </span>
                        <span className="text-muted-foreground">{incident.response}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>AI Safety Recommendations</CardTitle>
          <CardDescription>Predictive insights to improve road safety</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              'Deploy speed enforcement cameras at KS Rao Road due to 15% increase in violations',
              'Install additional lighting at Kadri Junction - high accident risk during evening hours',
              'Optimize pedestrian crossing timing at Hampankatta during peak hours',
              'Recommend road maintenance for MG Road stretch showing increased incident patterns',
            ].map((recommendation, index) => (
              <div key={index} className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-sm">{recommendation}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SafetyAnalytics;
