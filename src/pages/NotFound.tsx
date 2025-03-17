import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import GlassPanel from "@/components/GlassPanel";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-4">
      <GlassPanel className="text-center max-w-md w-full">
        <span className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground mb-4 inline-block">
          404
        </span>
        <h1 className="font-serif text-3xl md:text-4xl mb-4">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        >
          Return to Home
        </Link>
      </GlassPanel>
    </div>
  );
};

export default NotFound;
