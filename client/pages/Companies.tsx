import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  MapPin, 
  Star, 
  Users, 
  Award, 
  TrendingUp, 
  ChevronRight,
  Clock,
  Building2,
  Filter,
  SlidersHorizontal,
  ChevronDown
} from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Mock data for companies - organized like categories
const companies = [
  {
    id: 1,
    name: "Swedish Medical Center",
    category: "Healthcare",
    subcategory: "Hospital",
    rating: 4.8,
    reviewCount: 2847,
    location: "Stockholm, Sweden",
    trustLevel: "excellent",
    image: "/placeholder.svg",
    verified: true,
    description: "Leading healthcare provider with state-of-the-art facilities and experienced medical professionals.",
    services: ["Emergency Care", "Surgery", "Diagnostics", "Specialist Consultations"],
    isOpen: true,
    featured: true,
    distance: "1.2 km"
  },
  {
    id: 2,
    name: "Nordic Law Partners",
    category: "Legal Services",
    subcategory: "Law Firm",
    rating: 4.9,
    reviewCount: 1456,
    location: "Gothenburg, Sweden",
    trustLevel: "excellent",
    image: "/placeholder.svg",
    verified: true,
    description: "Expert legal services with 25+ years of experience in corporate and family law.",
    services: ["Corporate Law", "Family Law", "Real Estate", "Immigration"],
    isOpen: true,
    featured: true,
    distance: "0.8 km"
  },
  {
    id: 3,
    name: "Clean Home Solutions",
    category: "Home Services",
    subcategory: "Cleaning Service",
    rating: 4.7,
    reviewCount: 892,
    location: "Malmö, Sweden",
    trustLevel: "high",
    image: "/placeholder.svg",
    verified: true,
    description: "Professional cleaning services for homes and offices with eco-friendly products.",
    services: ["House Cleaning", "Office Cleaning", "Deep Cleaning", "Window Cleaning"],
    isOpen: false,
    featured: false,
    distance: "2.1 km"
  },
  {
    id: 4,
    name: "Gourmet Bistro Stockholm",
    category: "Restaurants",
    subcategory: "Fine Dining",
    rating: 4.6,
    reviewCount: 1234,
    location: "Stockholm, Sweden",
    trustLevel: "high",
    image: "/placeholder.svg",
    verified: true,
    description: "Award-winning restaurant featuring modern Swedish cuisine with locally sourced ingredients.",
    services: ["Fine Dining", "Private Events", "Catering", "Wine Tasting"],
    isOpen: true,
    featured: false,
    distance: "0.5 km"
  },
  {
    id: 5,
    name: "TechFix Pro",
    category: "Technology",
    subcategory: "Repair Service",
    rating: 4.5,
    reviewCount: 678,
    location: "Uppsala, Sweden",
    trustLevel: "high",
    image: "/placeholder.svg",
    verified: false,
    description: "Expert computer and smartphone repair services with same-day turnaround.",
    services: ["Computer Repair", "Phone Repair", "Data Recovery", "IT Support"],
    isOpen: true,
    featured: false,
    distance: "15.3 km"
  },
  {
    id: 6,
    name: "Bella Beauty Salon",
    category: "Beauty & Spa",
    subcategory: "Hair Salon",
    rating: 4.4,
    reviewCount: 456,
    location: "Stockholm, Sweden",
    trustLevel: "medium",
    image: "/placeholder.svg",
    verified: true,
    description: "Full-service beauty salon offering hair styling, coloring, and spa treatments.",
    services: ["Hair Styling", "Hair Coloring", "Manicure", "Facial Treatments"],
    isOpen: true,
    featured: false,
    distance: "1.8 km"
  },
  {
    id: 7,
    name: "Nordic Auto Repair",
    category: "Automotive",
    subcategory: "Auto Repair",
    rating: 4.6,
    reviewCount: 543,
    location: "Gothenburg, Sweden",
    trustLevel: "high",
    image: "/placeholder.svg",
    verified: true,
    description: "Trusted automotive repair shop specializing in European vehicles with certified mechanics.",
    services: ["Engine Repair", "Brake Service", "Oil Change", "Tire Service"],
    isOpen: true,
    featured: true,
    distance: "3.2 km"
  },
  {
    id: 8,
    name: "Fitness First Stockholm",
    category: "Fitness & Sports",
    subcategory: "Gym",
    rating: 4.3,
    reviewCount: 789,
    location: "Stockholm, Sweden",
    trustLevel: "high",
    image: "/placeholder.svg",
    verified: true,
    description: "Modern fitness center with state-of-the-art equipment and personal training services.",
    services: ["Gym Access", "Personal Training", "Group Classes", "Nutrition Coaching"],
    isOpen: true,
    featured: false,
    distance: "0.9 km"
  },
  {
    id: 9,
    name: "Stockholm Real Estate",
    category: "Real Estate",
    subcategory: "Real Estate Agency",
    rating: 4.5,
    reviewCount: 321,
    location: "Stockholm, Sweden",
    trustLevel: "excellent",
    image: "/placeholder.svg",
    verified: true,
    description: "Premier real estate agency helping clients buy, sell, and rent properties in Stockholm.",
    services: ["Property Sales", "Property Rentals", "Property Management", "Market Analysis"],
    isOpen: true,
    featured: true,
    distance: "1.5 km"
  }
];

const popularSearches = [
  "Restaurants near me",
  "Best doctors Stockholm",
  "Auto repair Gothenburg", 
  "Hair salon Malmö",
  "Legal services",
  "Home cleaning",
  "Personal trainer",
  "Real estate agent"
];

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  const sizeClasses = size === "lg" ? "w-5 h-5" : "w-4 h-4";
  
  return (
    <div className="flex items-center space-x-1">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClasses} ${
              star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <span className="text-sm font-medium ml-1">{rating}</span>
    </div>
  );
}

function TrustBadge({ level }: { level: string }) {
  return <Badge className={`trust-badge ${level}`}>{level.charAt(0).toUpperCase() + level.slice(1)}</Badge>;
}

export default function Companies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredCompanies = companies.filter(company =>
    company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    company.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCompanies = [...filteredCompanies].sort((a, b) => {
    switch (sortBy) {
      case "featured":
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return b.rating - a.rating;
      case "rating":
        return b.rating - a.rating;
      case "reviews":
        return b.reviewCount - a.reviewCount;
      case "distance":
        return parseFloat(a.distance) - parseFloat(b.distance);
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Discover Trusted Businesses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Browse through {companies.length} verified companies and find the perfect service provider for your needs
          </p>

          {/* Search Bar */}
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search companies, services, or categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="pl-10 h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Locations">All Locations</SelectItem>
                      <SelectItem value="Stockholm">Stockholm</SelectItem>
                      <SelectItem value="Gothenburg">Gothenburg</SelectItem>
                      <SelectItem value="Malmö">Malmö</SelectItem>
                      <SelectItem value="Uppsala">Uppsala</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="h-12 px-6"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                  <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? "rotate-180" : ""}`} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Searches */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Popular Searches</h3>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((search, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => setSearchQuery(search)}
              >
                {search}
              </Badge>
            ))}
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <p className="text-gray-600">
              Showing {sortedCompanies.length} companies
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured First</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
                <SelectItem value="distance">Nearest</SelectItem>
                <SelectItem value="name">A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Companies Grid - Similar to Categories Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCompanies.map((company) => (
            <Card key={company.id} className="hover:shadow-medium transition-shadow group cursor-pointer">
              <Link to={`/company/${company.id}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors">
                          {company.name}
                        </CardTitle>
                        {company.verified && (
                          <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                            ✓ Verified
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="mt-1">
                        {company.category} • {company.subcategory}
                      </CardDescription>
                      {company.featured && (
                        <Badge className="mt-2 bg-amber-100 text-amber-800 text-xs">
                          <Award className="w-3 h-3 mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm">{company.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <StarRating rating={company.rating} />
                      <span className="text-gray-600 text-sm">({company.reviewCount.toLocaleString()} reviews)</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <TrustBadge level={company.trustLevel} />
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-3 h-3 mr-1" />
                        {company.distance}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Services:</h4>
                      <div className="flex flex-wrap gap-1">
                        {company.services.slice(0, 3).map((service, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                        {company.services.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{company.services.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        {company.isOpen ? (
                          <span className="text-green-600 font-medium">Open now</span>
                        ) : (
                          <span className="text-red-600 font-medium">Closed</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-gray-600">View profile</span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-white rounded-lg shadow-soft p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose ReviewHub Companies</h2>
            <p className="text-gray-600">All our listed companies meet high standards of quality and trust</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {companies.length}
              </div>
              <div className="text-sm text-gray-600">Verified Companies</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {companies.reduce((sum, company) => sum + company.reviewCount, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Customer Reviews</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {(companies.reduce((sum, company) => sum + company.rating, 0) / companies.length).toFixed(1)}★
              </div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {Math.round((companies.filter(c => c.verified).length / companies.length) * 100)}%
              </div>
              <div className="text-sm text-gray-600">Verified Businesses</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Looking for something specific?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Browse by categories or contact us to add a new business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/categories">Browse Categories</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/for-business">Add Your Business</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
