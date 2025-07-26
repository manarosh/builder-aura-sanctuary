import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Star, MapPin, Clock, ChevronRight, Building2, Users, Award, TrendingUp, Sparkles, Zap } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";

const categories = [
  { name: "Doctors & Healthcare", icon: "🏥", count: 1240, path: "/categories/healthcare", gradient: "from-blue-400 to-cyan-500" },
  { name: "Lawyers & Legal", icon: "⚖️", count: 856, path: "/categories/legal", gradient: "from-purple-400 to-pink-500" },
  { name: "Home Services", icon: "🏠", count: 2103, path: "/categories/home-services", gradient: "from-green-400 to-blue-500" },
  { name: "Restaurants", icon: "🍽️", count: 3421, path: "/categories/restaurants", gradient: "from-orange-400 to-red-500" },
  { name: "Auto Services", icon: "🚗", count: 987, path: "/categories/auto", gradient: "from-gray-400 to-gray-600" },
  { name: "Beauty & Spa", icon: "💅", count: 654, path: "/categories/beauty", gradient: "from-pink-400 to-rose-500" },
  { name: "Education", icon: "📚", count: 432, path: "/categories/education", gradient: "from-indigo-400 to-purple-500" },
  { name: "Financial Services", icon: "💰", count: 321, path: "/categories/finance", gradient: "from-emerald-400 to-teal-500" },
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
    color: "from-blue-500 to-purple-600"
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
    color: "from-purple-500 to-pink-600"
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
    color: "from-green-500 to-blue-600"
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
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    company: "Bella Vista Restaurant",
    reviewer: "Marcus K.",
    rating: 4,
    text: "Great food and atmosphere. The pasta was delicious, though service was a bit slow.",
    date: "5 days ago",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    company: "City Dental Care",
    reviewer: "Sofia M.",
    rating: 5,
    text: "Dr. Anderson is amazing! Pain-free treatment and very caring staff.",
    date: "1 week ago",
    avatar: "/placeholder.svg"
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
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Creative Hero Section */}
      <section className="creative-hero py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">Trusted by 10,000+ businesses</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
              Find the Best
              <span className="gradient-text block">Service Providers</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Read authentic reviews from real customers and discover trusted businesses in your area.
              Make informed decisions with our AI-powered insights.
            </p>
          </div>

          {/* Enhanced Search Bar */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="glass-morphism p-8 rounded-3xl backdrop-blur-xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative group">
                  <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <Input
                    placeholder="Search for businesses, services, or professionals..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 text-lg border-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md focus:shadow-lg transition-all"
                  />
                </div>
                <div className="flex-1 relative group">
                  <MapPin className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <Input
                    placeholder="Location (city, address, zip code)"
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="pl-12 h-14 text-lg border-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md focus:shadow-lg transition-all"
                  />
                </div>
                <Button className="creative-button h-14 px-8 text-lg">
                  <Zap className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: "50K+", label: "Businesses Listed", icon: Building2 },
              { number: "2M+", label: "Customer Reviews", icon: Users },
              { number: "4.8★", label: "Average Rating", icon: Star },
              { number: "99%", label: "Verified Reviews", icon: Award }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="creative-icon mx-auto mb-3 floating-animation" style={{ animationDelay: `${index * 0.5}s` }}>
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 floating-animation"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-400 to-red-500 rounded-full opacity-20 floating-animation" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-20 floating-animation" style={{ animationDelay: "4s" }}></div>
      </section>

      {/* Creative Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular <span className="gradient-text">Categories</span>
            </h2>
            <p className="text-xl text-gray-600">Explore top-rated services in your area</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <Link key={category.name} to={category.path}>
                <div className="creative-card group hover:scale-105 transition-all duration-300">
                  <CardContent className="p-8 text-center relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative z-10">
                      <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                        {category.icon}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors text-lg">
                        {category.name}
                      </h3>
                      <Badge variant="secondary" className="mb-4 bg-gray-100 group-hover:bg-primary/10 transition-colors">
                        {category.count.toLocaleString()} businesses
                      </Badge>
                      <div className="flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-medium">Explore</span>
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-2 hover:bg-primary hover:text-white transition-all duration-300" asChild>
              <Link to="/categories">
                View All Categories
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Top Companies */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Top Rated <span className="gradient-text">Businesses</span>
              </h2>
              <p className="text-xl text-gray-600">Discover excellence in service quality</p>
            </div>
            <Button variant="outline" className="hover:scale-105 transition-transform" asChild>
              <Link to="/top-rated">View All</Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {topCompanies.map((company, index) => (
              <div key={company.id} className="creative-card group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="pb-4 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <img
                            src={company.image}
                            alt={company.name}
                            className="w-16 h-16 rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                          />
                          <div className="absolute -top-2 -right-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                              <Award className="w-3 h-3 text-white" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">{company.name}</CardTitle>
                          <CardDescription className="text-gray-600">{company.category}</CardDescription>
                        </div>
                      </div>
                      {company.verified && (
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-md">
                          ✓ Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative z-10">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <StarRating rating={company.rating} size="lg" />
                        <span className="font-bold text-xl">{company.rating}</span>
                      </div>
                      <span className="text-gray-600">({company.reviewCount} reviews)</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <TrustBadge level={company.trustLevel} />
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span className="text-sm">{company.location}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full creative-button" asChild>
                      <Link to={`/company/${company.id}`}>
                        <span>View Profile</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Recent Reviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Latest <span className="gradient-text">Reviews</span>
            </h2>
            <p className="text-xl text-gray-600">See what customers are saying</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentReviews.map((review, index) => (
              <div key={review.id} className="creative-card group" style={{ animationDelay: `${index * 0.15}s` }}>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <StarRating rating={review.rating} />
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{review.date}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-6 line-clamp-3 leading-relaxed">"{review.text}"</p>
                  
                  <div className="flex items-center justify-between border-t pt-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={review.avatar}
                        alt={review.reviewer}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{review.reviewer}</div>
                        <div className="text-sm text-gray-600">{review.company}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="glass-morphism p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Are you a business owner?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join thousands of businesses that trust ReviewHub to connect with customers and build their reputation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105" asChild>
                <Link to="/for-business">List Your Business</Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all transform hover:scale-105" asChild>
                <Link to="/login">Business Login</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold gradient-text">ReviewHub</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                The most trusted platform for finding and reviewing local businesses.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">For Customers</h3>
              <div className="space-y-3">
                <Link to="/categories" className="text-gray-400 hover:text-white block transition-colors">Browse Categories</Link>
                <Link to="/top-rated" className="text-gray-400 hover:text-white block transition-colors">Top Rated</Link>
                <Link to="/write-review" className="text-gray-400 hover:text-white block transition-colors">Write a Review</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">For Business</h3>
              <div className="space-y-3">
                <Link to="/for-business" className="text-gray-400 hover:text-white block transition-colors">List Your Business</Link>
                <Link to="/business-dashboard" className="text-gray-400 hover:text-white block transition-colors">Business Dashboard</Link>
                <Link to="/pricing" className="text-gray-400 hover:text-white block transition-colors">Pricing</Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Support</h3>
              <div className="space-y-3">
                <Link to="/help" className="text-gray-400 hover:text-white block transition-colors">Help Center</Link>
                <Link to="/contact" className="text-gray-400 hover:text-white block transition-colors">Contact Us</Link>
                <Link to="/privacy" className="text-gray-400 hover:text-white block transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="text-gray-400 hover:text-white block transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ReviewHub. All rights reserved. Made with ❤️ in Sweden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
