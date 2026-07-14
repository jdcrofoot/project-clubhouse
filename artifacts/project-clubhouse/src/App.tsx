import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Home from '@/pages/Home';
import PerformanceFloor from '@/pages/spaces/PerformanceFloor';
import Clubhouse from '@/pages/spaces/Clubhouse';
import FuelStation from '@/pages/spaces/FuelStation';
import OutdoorPatio from '@/pages/spaces/OutdoorPatio';
import Roadmap from '@/pages/Roadmap';
import { Route, Switch, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/spaces/performance-floor" component={PerformanceFloor} />
      <Route path="/spaces/clubhouse" component={Clubhouse} />
      <Route path="/spaces/fuel-station" component={FuelStation} />
      <Route path="/spaces/outdoor-patio" component={OutdoorPatio} />
      <Route path="/roadmap" component={Roadmap} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
