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
  ChevronDown,
  Sparkles,
  Zap,
  Heart,
  Eye,
} from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Enhanced mock data for companies
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
    description:
      "Leading healthcare provider with state-of-the-art facilities and experienced medical professionals.",
    services: [
      "Emergency Care",
      "Surgery",
      "Diagnostics",
      "Specialist Consultations",
    ],
    isOpen: true,
    featured: true,
    distance: "1.2 km",
    gradient: "from-blue-500 to-cyan-600",
    responseTime: "2 hours",
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
    description:
      "Expert legal services with 25+ years of experience in corporate and family law.",
    services: ["Corporate Law", "Family Law", "Real Estate", "Immigration"],
    isOpen: true,
    featured: true,
    distance: "0.8 km",
    gradient: "from-purple-500 to-pink-600",
    responseTime: "1 hour",
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
    description:
      "Professional cleaning services for homes and offices with eco-friendly products.",
    services: [
      "House Cleaning",
      "Office Cleaning",
      "Deep Cleaning",
      "Window Cleaning",
    ],
    isOpen: false,
    featured: false,
    distance: "2.1 km",
    gradient: "from-green-500 to-emerald-600",
    responseTime: "4 hours",
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
    description:
      "Award-winning restaurant featuring modern Swedish cuisine with locally sourced ingredients.",
    services: ["Fine Dining", "Private Events", "Catering", "Wine Tasting"],
    isOpen: true,
    featured: false,
    distance: "0.5 km",
    gradient: "from-orange-500 to-red-600",
    responseTime: "30 minutes",
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
    description:
      "Expert computer and smartphone repair services with same-day turnaround.",
    services: [
      "Computer Repair",
      "Phone Repair",
      "Data Recovery",
      "IT Support",
    ],
    isOpen: true,
    featured: false,
    distance: "15.3 km",
    gradient: "from-indigo-500 to-blue-600",
    responseTime: "3 hours",
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
    description:
      "Full-service beauty salon offering hair styling, coloring, and spa treatments.",
    services: [
      "Hair Styling",
      "Hair Coloring",
      "Manicure",
      "Facial Treatments",
    ],
    isOpen: true,
    featured: false,
    distance: "1.8 km",
    gradient: "from-pink-500 to-rose-600",
    responseTime: "1 hour",
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
    description:
      "Trusted automotive repair shop specializing in European vehicles with certified mechanics.",
    services: ["Engine Repair", "Brake Service", "Oil Change", "Tire Service"],
    isOpen: true,
    featured: true,
    distance: "3.2 km",
    gradient: "from-gray-600 to-gray-800",
    responseTime: "2 hours",
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
    description:
      "Modern fitness center with state-of-the-art equipment and personal training services.",
    services: [
      "Gym Access",
      "Personal Training",
      "Group Classes",
      "Nutrition Coaching",
    ],
    isOpen: true,
    featured: false,
    distance: "0.9 km",
    gradient: "from-emerald-500 to-teal-600",
    responseTime: "Immediate",
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
    description:
      "Premier real estate agency helping clients buy, sell, and rent properties in Stockholm.",
    services: [
      "Property Sales",
      "Property Rentals",
      "Property Management",
      "Market Analysis",
    ],
    isOpen: true,
    featured: true,
    distance: "1.5 km",
    gradient: "from-violet-500 to-purple-600",
    responseTime: "1 hour",
  },
];

const popularSearches = [
  "Restaurants near me",
  "Best doctors Stockholm",
  "Auto repair Gothenburg",
  "Hair salon Malmö",
  "Legal services",
  "Home cleaning",
  "Personal trainer",
  "Real estate agent",
];

function StarRating({
  rating,
  size = "sm",
}: {
  rating: number;
  size?: "sm" | "lg";
}) {
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
  return (
    <Badge className={`trust-badge ${level}`}>
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </Badge>
  );
}

export default function Companies() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.category.toLowerCase().includes(searchQuery.toLowerCase()),
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-900 dark:via-gray-800/30 dark:to-purple-900/30 transition-colors">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Creative Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl -z-10"></div>

          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-lg">
            <Building2 className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">
              {companies.length} verified companies
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Discover <span className="gradient-text">Trusted Businesses</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Browse through our curated collection of verified companies and find
            the perfect service provider for your needs
          </p>

          {/* Enhanced Search Bar */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="glass-morphism p-6 rounded-3xl backdrop-blur-xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative group">
                  <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <Input
                    placeholder="Search companies, services, or categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 h-14 text-lg border-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md focus:shadow-lg transition-all"
                  />
                </div>
                <div className="flex-1 relative group">
                  <MapPin className="absolute left-4 top-4 h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors" />
                  <Select
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                  >
                    <SelectTrigger className="pl-12 h-14 text-lg border-0 bg-white/80 backdrop-blur-sm rounded-2xl shadow-md focus:shadow-lg">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="All Locations">
                        All Locations
                      </SelectItem>
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
                  className="h-14 px-6 bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all"
                >
                  <SlidersHorizontal className="w-5 h-5 mr-2" />
                  Filters
                  <ChevronDown
                    className={`w-4 h-4 ml-2 transition-transform ${showFilters ? "rotate-180" : ""}`}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
            <Sparkles className="w-5 h-5 mr-2 text-primary" />
            Popular Searches
          </h3>
          <div className="flex flex-wrap gap-3">
            {popularSearches.map((search, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="cursor-pointer hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105 py-2 px-4 text-sm bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg"
                onClick={() => setSearchQuery(search)}
              >
                {search}
              </Badge>
            ))}
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md">
            <p className="text-gray-600 font-medium">
              Showing{" "}
              <span className="text-primary font-bold">
                {sortedCompanies.length}
              </span>{" "}
              companies
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48 bg-white/80 backdrop-blur-sm border-0 shadow-md hover:shadow-lg transition-all">
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

        {/* Enhanced Companies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sortedCompanies.map((company, index) => (
            <div
              key={company.id}
              className="creative-card group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={`/company/${company.id}`}>
                <CardHeader className="pb-4 relative overflow-hidden">
                  {/* Gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${company.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  {/* Featured badge */}
                  {company.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg animate-pulse">
                        <Award className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}

                  <div className="relative z-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="relative">
                        <img
                          src={company.image}
                          alt={company.name}
                          className="w-20 h-20 rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110"
                        />
                        {company.verified && (
                          <div className="absolute -top-2 -right-2">
                            <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                              <span className="text-white text-xs font-bold">
                                ✓
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors font-bold leading-tight">
                          {company.name}
                        </CardTitle>
                        <CardDescription className="text-gray-600 font-medium">
                          {company.category} • {company.subcategory}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-5">
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                      {company.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <StarRating rating={company.rating} />
                      <span className="text-gray-600 text-sm font-medium">
                        ({company.reviewCount.toLocaleString()} reviews)
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <TrustBadge level={company.trustLevel} />
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span className="font-medium">{company.distance}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Zap className="w-4 h-4 mr-2 text-primary" />
                        Services:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {company.services.slice(0, 3).map((service, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs bg-gray-50 hover:bg-primary hover:text-white transition-colors"
                          >
                            {service}
                          </Badge>
                        ))}
                        {company.services.length > 3 && (
                          <Badge
                            variant="outline"
                            className="text-xs bg-gray-50"
                          >
                            +{company.services.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between py-3 border-t border-gray-100">
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2" />
                        {company.isOpen ? (
                          <span className="text-green-600 font-semibold">
                            Open now
                          </span>
                        ) : (
                          <span className="text-red-600 font-semibold">
                            Closed
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        Responds in {company.responseTime}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-3">
                        <Button
                          size="sm"
                          variant="outline"
                          className="hover:bg-primary hover:text-white transition-colors"
                        >
                          <Heart className="w-4 h-4 mr-1" />
                          Save
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="hover:bg-primary hover:text-white transition-colors"
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </CardContent>
              </Link>
            </div>
          ))}
        </div>

        {/* Enhanced Statistics Section */}
        <div className="creative-card p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="gradient-text">ReviewHub Companies</span>
            </h2>
            <p className="text-xl text-gray-600">
              All our listed companies meet high standards of quality and trust
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: Building2,
                number: companies.length,
                label: "Verified Companies",
                color: "from-blue-500 to-cyan-600",
              },
              {
                icon: Users,
                number: companies.reduce(
                  (sum, company) => sum + company.reviewCount,
                  0,
                ),
                label: "Customer Reviews",
                color: "from-purple-500 to-pink-600",
                format: true,
              },
              {
                icon: Star,
                number: (
                  companies.reduce((sum, company) => sum + company.rating, 0) /
                  companies.length
                ).toFixed(1),
                label: "Average Rating",
                color: "from-yellow-500 to-orange-600",
                suffix: "★",
              },
              {
                icon: TrendingUp,
                number: Math.round(
                  (companies.filter((c) => c.verified).length /
                    companies.length) *
                    100,
                ),
                label: "Verified Rate",
                color: "from-green-500 to-emerald-600",
                suffix: "%",
              },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`creative-icon mx-auto mb-4 bg-gradient-to-r ${stat.color} floating-animation`}
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.format ? stat.number.toLocaleString() : stat.number}
                  {stat.suffix || ""}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center creative-card p-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Looking for{" "}
              <span className="gradient-text">something specific?</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Can't find what you're looking for? Browse by categories or
              contact us to add a new business
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="creative-button" asChild>
                <Link to="/categories">
                  <span>Browse Categories</span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
                asChild
              >
                <Link to="/for-business">Add Your Business</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
