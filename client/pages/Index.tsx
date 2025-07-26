import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Star, MapPin, Clock, ChevronRight, Building2, Users, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const categories = [
  { name: "Doctors & Healthcare", icon: "🏥", count: 1240, path: "/categories/healthcare" },
  { name: "Lawyers & Legal", icon: "⚖️", count: 856, path: "/categories/legal" },
  { name: "Home Services", icon: "🏠", count: 2103, path: "/categories/home-services" },
  { name: "Restaurants", icon: "🍽️", count: 3421, path: "/categories/restaurants" },
  { name: "Auto Services", icon: "🚗", count: 987, path: "/categories/auto" },
  { name: "Beauty & Spa", icon: "💅", count: 654, path: "/categories/beauty" },
  { name: "Education", icon: "📚", count: 432, path: "/categories/education" },
  { name: "Financial Services", icon: "💰", count: 321, path: "/categories/finance" },
];

const topCompanies = [
  {
    id: 1,
    name: "Swedish Medical Center",
    category: "Healthcare",
    rating: 4.8,
    reviewCount: 2847,
    location: "Stockholm, Sweden",
    trustLevel: "excellent",
    image: "/placeholder.svg",
    verified: true,
  },
  {
    id: 2,
    name: "Nordic Law Partners",
    category: "Legal Services",
    rating: 4.9,
    reviewCount: 1456,
    location: "Gothenburg, Sweden",
    trustLevel: "excellent",
    image: "/placeholder.svg",
    verified: true,
  },
  {
    id: 3,
    name: "Clean Home Solutions",
    category: "Home Services",
    rating: 4.7,
    reviewCount: 892,
    location: "Malmö, Sweden",
    trustLevel: "high",
    image: "/placeholder.svg",
    verified: true,
  },
];

const recentReviews = [
  {
    id: 1,
    company: "Tech Repair Pro",
    reviewer: "Anna L.",
    rating: 5,
    text: "Excellent service! Fixed my laptop in just 2 hours. Very professional and affordable.",
    date: "2 days ago",
  },
  {
    id: 2,
    company: "Bella Vista Restaurant",
    reviewer: "Marcus K.",
    rating: 4,
    text: "Great food and atmosphere. The pasta was delicious, though service was a bit slow.",
    date: "5 days ago",
  },
  {
    id: 3,
    company: "City Dental Care",
    reviewer: "Sofia M.",
    rating: 5,
    text: "Dr. Anderson is amazing! Pain-free treatment and very caring staff.",
    date: "1 week ago",
  },
];

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const sizeClasses = size === "lg" ? "w-5 h-5" : "w-4 h-4";
  
  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`${sizeClasses} ${
            star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function TrustBadge({ level }: { level: string }) {
  return <Badge className={`trust-badge ${level}`}>{level.charAt(0).toUpperCase() + level.slice(1)}</Badge>;
}

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLocation, setSearchLocation] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">ReviewHub</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/categories" className="text-gray-600 hover:text-gray-900 font-medium">
                Categories
              </Link>
              <Link to="/for-business" className="text-gray-600 hover:text-gray-900 font-medium">
                For Business
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 font-medium">
                About
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link to="/login">Sign In</Link>
              </Button>
              <Button asChild>
                <Link to="/register">Sign Up</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Find the Best
              <span className="text-primary block">Service Providers</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Read authentic reviews from real customers and discover trusted businesses in your area.
              Make informed decisions with our AI-powered insights.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <Card className="p-6 shadow-medium">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search for businesses, services, or professionals..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Location (city, address, zip code)"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <Button size="lg" className="h-12 px-8">
                  Search
                </Button>
              </div>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-600">Businesses Listed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">2M+</div>
              <div className="text-sm text-gray-600">Customer Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">4.8★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">99%</div>
              <div className="text-sm text-gray-600">Verified Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Categories</h2>
            <p className="text-lg text-gray-600">Explore top-rated services in your area</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} to={category.path}>
                <Card className="hover:shadow-medium transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600">{category.count.toLocaleString()} businesses</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg" asChild>
              <Link to="/categories">
                View All Categories
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Top Rated Companies */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Top Rated Businesses</h2>
              <p className="text-lg text-gray-600">Discover excellence in service quality</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/top-rated">View All</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {topCompanies.map((company) => (
              <Card key={company.id} className="hover:shadow-medium transition-shadow">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <img
                        src={company.image}
                        alt={company.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div>
                        <CardTitle className="text-lg">{company.name}</CardTitle>
                        <CardDescription>{company.category}</CardDescription>
                      </div>
                    </div>
                    {company.verified && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <StarRating rating={company.rating} />
                        <span className="font-semibold">{company.rating}</span>
                        <span className="text-gray-600">({company.reviewCount} reviews)</span>
                      </div>
                      <TrustBadge level={company.trustLevel} />
                    </div>
                    
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="text-sm">{company.location}</span>
                    </div>
                    
                    <Button className="w-full" asChild>
                      <Link to={`/company/${company.id}`}>View Profile</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Reviews</h2>
            <p className="text-lg text-gray-600">See what customers are saying</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentReviews.map((review) => (
              <Card key={review.id}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <StarRating rating={review.rating} />
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-3">{review.text}</p>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-gray-900">{review.company}</div>
                      <div className="text-sm text-gray-600">by {review.reviewer}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Are you a business owner?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust ReviewHub to connect with customers and build their reputation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/for-business">List Your Business</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/business-login">Business Login</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">ReviewHub</span>
              </div>
              <p className="text-gray-400">
                The most trusted platform for finding and reviewing local businesses.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Customers</h3>
              <div className="space-y-2">
                <Link to="/categories" className="text-gray-400 hover:text-white block">Browse Categories</Link>
                <Link to="/top-rated" className="text-gray-400 hover:text-white block">Top Rated</Link>
                <Link to="/write-review" className="text-gray-400 hover:text-white block">Write a Review</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">For Business</h3>
              <div className="space-y-2">
                <Link to="/for-business" className="text-gray-400 hover:text-white block">List Your Business</Link>
                <Link to="/business-dashboard" className="text-gray-400 hover:text-white block">Business Dashboard</Link>
                <Link to="/pricing" className="text-gray-400 hover:text-white block">Pricing</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <div className="space-y-2">
                <Link to="/help" className="text-gray-400 hover:text-white block">Help Center</Link>
                <Link to="/contact" className="text-gray-400 hover:text-white block">Contact Us</Link>
                <Link to="/privacy" className="text-gray-400 hover:text-white block">Privacy Policy</Link>
                <Link to="/terms" className="text-gray-400 hover:text-white block">Terms of Service</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ReviewHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
