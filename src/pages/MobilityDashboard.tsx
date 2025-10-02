import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TrafficMonitor from '@/components/mobility/TrafficMonitor';
import CongestionMap from '@/components/mobility/CongestionMap';
import TrafficPrediction from '@/components/mobility/TrafficPrediction';
import SignalControl from '@/components/mobility/SignalControl';
import RouteOptimization from '@/components/mobility/RouteOptimization';
import SafetyAnalytics from '@/components/mobility/SafetyAnalytics';

const MobilityDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Urban Mobility Management</h1>
          <p className="text-muted-foreground">
            AI-powered real-time traffic monitoring and optimization system
          </p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6 lg:w-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="traffic">Traffic</TabsTrigger>
            <TabsTrigger value="predictions">Predictions</TabsTrigger>
            <TabsTrigger value="signals">Signals</TabsTrigger>
            <TabsTrigger value="routes">Routes</TabsTrigger>
            <TabsTrigger value="safety">Safety</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Active Cameras</CardDescription>
                  <CardTitle className="text-3xl">247</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">98% operational</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Congestion Level</CardDescription>
                  <CardTitle className="text-3xl text-orange-500">Medium</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">-12% from yesterday</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Avg Speed</CardDescription>
                  <CardTitle className="text-3xl">42 km/h</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">+5% improvement</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardDescription>Active Incidents</CardDescription>
                  <CardTitle className="text-3xl text-red-500">3</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">2 resolved today</p>
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CongestionMap />
              <TrafficMonitor />
            </div>
          </TabsContent>

          <TabsContent value="traffic">
            <TrafficMonitor />
          </TabsContent>

          <TabsContent value="predictions">
            <TrafficPrediction />
          </TabsContent>

          <TabsContent value="signals">
            <SignalControl />
          </TabsContent>

          <TabsContent value="routes">
            <RouteOptimization />
          </TabsContent>

          <TabsContent value="safety">
            <SafetyAnalytics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MobilityDashboard;
