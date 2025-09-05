import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Heart } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-romantic">
      <div className="text-center max-w-md mx-auto px-4">
        <Heart className="w-16 h-16 text-primary mx-auto mb-6 animate-heartbeat" />
        <h1 className="font-script text-6xl text-primary mb-4">Oops!</h1>
        <h2 className="font-serif text-2xl text-foreground mb-4">Page Not Found</h2>
        <p className="text-muted-foreground font-serif mb-8 leading-relaxed">
          It looks like this page got lost on the way to our wedding! 
          Let's get you back to the celebration.
        </p>
        <Button 
          asChild 
          variant="romantic" 
          size="lg"
          className="shadow-romantic hover:shadow-elegant"
        >
          <a href="/" className="flex items-center gap-2">
            <Home className="w-5 h-5" />
            Return to Wedding Invitation
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
