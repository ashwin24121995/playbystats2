import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Matches from "./pages/Matches";
import TeamBuilder from "./pages/TeamBuilder";
import Contests from "./pages/Contests";
import Leaderboard from "./pages/Leaderboard";
import Dashboard from "./pages/Dashboard";
import Scoring from "./pages/Scoring";
import HowToPlay from "./pages/HowToPlay";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import FairPlay from "./pages/FairPlay";
import ResponsibleGaming from "./pages/ResponsibleGaming";
import Refund from "./pages/Refund";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/matches" component={Matches} />
      <Route path="/team-builder/:matchId" component={TeamBuilder} />
      <Route path="/contests" component={Contests} />
      <Route path="/leaderboard" component={Leaderboard} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/scoring" component={Scoring} />
      <Route path="/how-to-play" component={HowToPlay} />
      <Route path="/contact" component={Contact} />
      <Route path="/faq" component={FAQ} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/fair-play" component={FairPlay} />
      <Route path="/responsible-gaming" component={ResponsibleGaming} />
      <Route path="/refund" component={Refund} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
