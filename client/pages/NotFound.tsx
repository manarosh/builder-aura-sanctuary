import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, Search, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <Card className="creative-card text-center">
            <CardContent className="p-8 sm:p-12">
              <div className="text-6xl sm:text-8xl font-bold gradient-text mb-6">
                404
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Page Not Found
              </h1>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Oops! The page you're looking for doesn't exist. It might have
                been moved, deleted, or you entered the wrong URL.
              </p>

              <div className="space-y-4">
                <Button size="lg" className="creative-button w-full" asChild>
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    <span>Back to Home</span>
                  </Link>
                </Button>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" className="flex-1" asChild>
                    <Link to="/companies">
                      <Search className="w-4 h-4 mr-2" />
                      Browse Companies
                    </Link>
                  </Button>
                  <Button variant="outline" className="flex-1" asChild>
                    <Link to="/categories">
                      <Search className="w-4 h-4 mr-2" />
                      Browse Categories
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                Requested path:{" "}
                <code className="bg-gray-100 px-2 py-1 rounded">
                  {location.pathname}
                </code>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
