
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "@/components/navigation/NavBar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="container max-w-3xl px-4">
          <div className="flex flex-col items-center text-center">
            <div className="relative mb-8">
              <h1 className="text-9xl font-bold text-primary/20">404</h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-4xl font-bold">Page Not Found</h2>
              </div>
            </div>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              We couldn't find the page you're looking for. The page might have been moved, 
              deleted, or perhaps the URL was mistyped.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/" className="flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Back to Home
                </Link>
              </Button>
              
              <Button variant="outline" asChild size="lg">
                <Link to="/features" className="flex items-center gap-2">
                  <Search className="h-5 w-5" />
                  Explore Features
                </Link>
              </Button>
            </div>
            
            <div className="mt-16">
              <h3 className="text-lg font-medium mb-4">Popular Pages</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button variant="ghost" asChild>
                  <Link to="/features">Features</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/solutions">Solutions</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/contact">Contact</Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link to="/login">Login</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
