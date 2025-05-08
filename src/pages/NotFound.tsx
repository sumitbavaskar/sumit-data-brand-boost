
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Page Not Found | Sumit's Portfolio</title>
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow flex items-center justify-center py-16">
          <div className="text-center max-w-md px-4">
            <h1 className="text-6xl font-bold font-display gradient-text mb-4">404</h1>
            <p className="text-xl text-muted-foreground mb-8">Oops! The page you're looking for cannot be found.</p>
            <Button asChild size="lg">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
