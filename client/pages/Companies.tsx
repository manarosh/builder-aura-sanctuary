import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  Grid3x3, 
  List, 
  SlidersHorizontal,
  ChevronDown,
  Users,
  Award,
  Clock
} from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

// Mock data for companies
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
    description: "Leading healthcare provider with state-of-the-art facilities.",
    distance: "1.2 km",
    isOpen: true,
    featured: true
  },
  {
    id: 2,
    name: "Nordic Law Partners",
    category: "Legal",
    subcategory: "Law Firm",
    rating: 4.9,
    reviewCount: 1456,
    location: "Gothenburg, Sweden",
    trustLevel: "excellent",
    image: "/placeholder.svg",
    verified: true,
    description: "Expert legal services with 25+ years of experience.",
    distance: "0.8 km",
    isOpen: true,
    featured: true
  },
  {
    id: 3,
    name: "Clean Home Solutions",
    category: "Home Services",
    subcategory: "Cleaning",
    rating: 4.7,
    reviewCount: 892,
    location: "Malmö, Sweden",
    trustLevel: "high",
    image: "/placeholder.svg",
    verified: true,
    description: "Professional cleaning services for homes and offices.",
    distance: "2.1 km",
    isOpen: false,
    featured: false
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
    description: "Award-winning restaurant with modern Swedish cuisine.",
    distance: "0.5 km",
    isOpen: true,
    featured: false
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
    description: "Expert computer and smartphone repair services.",
    distance: "15.3 km",
    isOpen: true,
    featured: false
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
    description: "Full-service beauty salon and spa treatments.",
    distance: "1.8 km",
    isOpen: true,
    featured: false
  }
];

const categories = [
  "All Categories",
  "Healthcare",
  "Legal",
  "Home Services", 
  "Restaurants",
  "Technology",
  "Beauty & Spa",
  "Automotive",
  "Education"
];

const trustLevels = [
  "All Levels",
  "Excellent",
  "High", 
  "Medium",
  "Low"
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
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedTrust, setSelectedTrust] = useState("All Levels");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("rating");
  const [ratingFilter, setRatingFilter] = useState([0]);
  const [onlyVerified, setOnlyVerified] = useState(false);
  const [onlyOpen, setOnlyOpen] = useState(false);

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = searchLocation === "" || 
                           company.location.toLowerCase().includes(searchLocation.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || 
                           company.category === selectedCategory;
    const matchesTrust = selectedTrust === "All Levels" || 
                        company.trustLevel === selectedTrust.toLowerCase();
    const matchesRating = company.rating >= ratingFilter[0];
    const matchesVerified = !onlyVerified || company.verified;
    const matchesOpen = !onlyOpen || company.isOpen;

    return matchesSearch && matchesLocation && matchesCategory && 
           matchesTrust && matchesRating && matchesVerified && matchesOpen;
  });

  const sortedCompanies = [...filteredCompanies].sort((a, b) => {
    switch (sortBy) {
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
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Companies Directory</h1>
          <p className="text-lg text-gray-600">
            Discover and compare {companies.length} verified businesses in your area
          </p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            {/* Main Search */}
            <div className="flex flex-col lg:flex-row gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search companies, services, or keywords..."
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

            {/* Advanced Filters */}
            {showFilters && (
              <div className="border-t pt-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Trust Level</label>
                    <Select value={selectedTrust} onValueChange={setSelectedTrust}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {trustLevels.map((level) => (
                          <SelectItem key={level} value={level}>{level}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Minimum Rating: {ratingFilter[0]}★
                    </label>
                    <Slider
                      value={ratingFilter}
                      onValueChange={setRatingFilter}
                      max={5}
                      min={0}
                      step={0.5}
                      className="mt-2"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-medium text-gray-700">Options</label>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="verified"
                        checked={onlyVerified}
                        onCheckedChange={setOnlyVerified}
                      />
                      <label htmlFor="verified" className="text-sm">Verified only</label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="open"
                        checked={onlyOpen}
                        onCheckedChange={setOnlyOpen}
                      />
                      <label htmlFor="open" className="text-sm">Open now</label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Results Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <div>
            <p className="text-gray-600">
              Showing {sortedCompanies.length} of {companies.length} companies
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
                <SelectItem value="distance">Nearest</SelectItem>
                <SelectItem value="name">A-Z</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid3x3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Companies Grid/List */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCompanies.map((company) => (
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
                        <CardDescription>
                          {company.category} • {company.subcategory}
                        </CardDescription>
                      </div>
                    </div>
                    {company.verified && (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>
                  {company.featured && (
                    <Badge className="w-fit bg-amber-100 text-amber-800">
                      <Award className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm">{company.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <StarRating rating={company.rating} />
                      <span className="text-gray-600 text-sm">({company.reviewCount} reviews)</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <TrustBadge level={company.trustLevel} />
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-3 h-3 mr-1" />
                        {company.distance}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600 text-sm">
                        <Clock className="w-3 h-3 mr-1" />
                        {company.isOpen ? (
                          <span className="text-green-600 font-medium">Open now</span>
                        ) : (
                          <span className="text-red-600 font-medium">Closed</span>
                        )}
                      </div>
                    </div>
                    
                    <Button className="w-full" asChild>
                      <Link to={`/company/${company.id}`}>View Profile</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {sortedCompanies.map((company) => (
              <Card key={company.id} className="hover:shadow-medium transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={company.image}
                      alt={company.name}
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-lg font-semibold text-gray-900">{company.name}</h3>
                            {company.verified && (
                              <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                                ✓ Verified
                              </Badge>
                            )}
                            {company.featured && (
                              <Badge className="bg-amber-100 text-amber-800 text-xs">
                                <Award className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">{company.category} • {company.subcategory}</p>
                          <p className="text-gray-600 text-sm mb-3">{company.description}</p>
                          
                          <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                              <StarRating rating={company.rating} />
                              <span className="text-gray-600 text-sm">({company.reviewCount})</span>
                            </div>
                            <TrustBadge level={company.trustLevel} />
                            <div className="flex items-center text-gray-600 text-sm">
                              <MapPin className="w-3 h-3 mr-1" />
                              {company.distance}
                            </div>
                            <div className="flex items-center text-sm">
                              <Clock className="w-3 h-3 mr-1" />
                              {company.isOpen ? (
                                <span className="text-green-600 font-medium">Open now</span>
                              ) : (
                                <span className="text-red-600 font-medium">Closed</span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <Button asChild>
                          <Link to={`/company/${company.id}`}>View Profile</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Load More / Pagination */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Companies
          </Button>
          <p className="text-gray-500 text-sm mt-2">
            Showing {sortedCompanies.length} of {companies.length} companies
          </p>
        </div>
      </div>
    </div>
  );
}
