import { Link, useLocation } from "react-router-dom";
import { Star, Construction } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="max-w-2xl mx-auto text-center">
          <CardHeader>
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Construction className="w-8 h-8 text-gray-400" />
            </div>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription className="text-lg">
              {description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">
              This page is being developed and will be available soon. Continue exploring our platform to discover amazing local businesses and read authentic reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/">Return Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/company/1">View Sample Company</Link>
              </Button>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              Current path: {location.pathname}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
