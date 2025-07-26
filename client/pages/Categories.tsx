import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, MapPin, Star, Building2, Users, TrendingUp, ChevronRight, Filter } from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const categories = [
  {
    name: "Healthcare",
    icon: "🏥",
    count: 1240,
    avgRating: 4.6,
    topCompanies: ["Swedish Medical Center", "Stockholm Health Clinic", "Nordic Care"],
    subcategories: ["Hospitals", "Clinics", "Dentists", "Specialists", "Pharmacies"],
    description: "Medical services, healthcare providers, and wellness centers"
  },
  {
    name: "Legal Services",
    icon: "⚖️",
    count: 856,
    avgRating: 4.7,
    topCompanies: ["Nordic Law Partners", "Stockholm Legal", "Malmö Advocates"],
    subcategories: ["Law Firms", "Corporate Law", "Family Law", "Criminal Defense", "Immigration"],
    description: "Legal advice, law firms, and legal representation services"
  },
  {
    name: "Home Services",
    icon: "🏠",
    count: 2103,
    avgRating: 4.4,
    topCompanies: ["Clean Home Solutions", "Fix-It Pro", "Garden Masters"],
    subcategories: ["Cleaning", "Plumbing", "Electrical", "Landscaping", "Moving"],
    description: "Home improvement, maintenance, and household services"
  },
  {
    name: "Restaurants",
    icon: "🍽️",
    count: 3421,
    avgRating: 4.3,
    topCompanies: ["Gourmet Bistro", "Nordic Kitchen", "Street Food Central"],
    subcategories: ["Fine Dining", "Casual Dining", "Fast Food", "Cafes", "Bars"],
    description: "Dining establishments, cafes, bars, and food services"
  },
  {
    name: "Auto Services",
    icon: "🚗",
    count: 987,
    avgRating: 4.5,
    topCompanies: ["Auto Expert Stockholm", "Quick Tire Service", "Nordic Motors"],
    subcategories: ["Repair Shops", "Dealerships", "Tire Services", "Car Wash", "Towing"],
    description: "Automotive repair, maintenance, and vehicle services"
  },
  {
    name: "Beauty & Spa",
    icon: "💅",
    count: 654,
    avgRating: 4.4,
    topCompanies: ["Bella Beauty Salon", "Zen Spa Stockholm", "Nordic Nails"],
    subcategories: ["Hair Salons", "Spas", "Nail Salons", "Massage", "Skincare"],
    description: "Beauty treatments, spa services, and personal care"
  },
  {
    name: "Education",
    icon: "📚",
    count: 432,
    avgRating: 4.6,
    topCompanies: ["Stockholm Language School", "Tech Academy", "Music Institute"],
    subcategories: ["Language Schools", "Tutoring", "Driving Schools", "Music Lessons", "Art Classes"],
    description: "Educational services, training, and skill development"
  },
  {
    name: "Financial Services",
    icon: "💰",
    count: 321,
    avgRating: 4.5,
    topCompanies: ["Nordic Finance", "Stockholm Bank", "Investment Partners"],
    subcategories: ["Banks", "Insurance", "Investment", "Accounting", "Tax Services"],
    description: "Banking, insurance, investments, and financial planning"
  },
  {
    name: "Technology",
    icon: "💻",
    count: 789,
    avgRating: 4.4,
    topCompanies: ["TechFix Pro", "IT Solutions", "Web Design Co"],
    subcategories: ["IT Support", "Web Development", "Software", "Hardware Repair", "Consulting"],
    description: "IT services, software development, and tech support"
  },
  {
    name: "Real Estate",
    icon: "🏢",
    count: 543,
    avgRating: 4.3,
    topCompanies: ["Stockholm Properties", "Nordic Realty", "Home Finder"],
    subcategories: ["Real Estate Agents", "Property Management", "Rentals", "Commercial", "Appraisals"],
    description: "Property sales, rentals, and real estate services"
  },
  {
    name: "Entertainment",
    icon: "🎭",
    count: 412,
    avgRating: 4.5,
    topCompanies: ["Event Masters", "Stockholm Cinema", "Music Venue"],
    subcategories: ["Event Planning", "Venues", "Entertainment", "Photography", "DJ Services"],
    description: "Entertainment, events, and recreational services"
  },
  {
    name: "Fitness & Sports",
    icon: "🏋️",
    count: 678,
    avgRating: 4.4,
    topCompanies: ["Nordic Fitness", "Yoga Studio", "Sports Center"],
    subcategories: ["Gyms", "Yoga Studios", "Personal Training", "Sports Clubs", "Equipment"],
    description: "Fitness centers, sports facilities, and wellness services"
  }
];

const popularSearches = [
  "Dentist near me",
  "Best restaurants Stockholm",
  "Car repair Gothenburg", 
  "Hair salon Malmö",
  "Legal advice",
  "Home cleaning service",
  "Personal trainer",
  "Tax advisor"
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

export default function Categories() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [sortBy, setSortBy] = useState("popularity");

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedCategories = [...filteredCategories].sort((a, b) => {
    switch (sortBy) {
      case "popularity":
        return b.count - a.count;
      case "rating":
        return b.avgRating - a.avgRating;
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Business Categories</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explore businesses by category and find exactly what you're looking for
          </p>

          {/* Search Bar */}
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder="Search categories or services..."
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
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link to="/companies">Search All</Link>
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
              Showing {sortedCategories.length} categories
            </p>
          </div>
          
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="name">A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedCategories.map((category) => (
            <Card key={category.name} className="hover:shadow-medium transition-shadow group cursor-pointer">
              <Link to={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div className="text-5xl">{category.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {category.name}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {category.count.toLocaleString()} businesses
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600 text-sm">{category.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <StarRating rating={category.avgRating} />
                      <span className="text-gray-600 text-sm">Average rating</span>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Top Companies:</h4>
                      <div className="space-y-1">
                        {category.topCompanies.slice(0, 3).map((company, index) => (
                          <div key={index} className="text-sm text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                            {company}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Subcategories:</h4>
                      <div className="flex flex-wrap gap-1">
                        {category.subcategories.slice(0, 4).map((sub, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {sub}
                          </Badge>
                        ))}
                        {category.subcategories.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{category.subcategories.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-gray-600">View all businesses</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Platform Statistics</h2>
            <p className="text-gray-600">Trusted by thousands of businesses and customers</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900">
                {categories.reduce((sum, cat) => sum + cat.count, 0).toLocaleString()}
              </div>
              <div className="text-sm text-gray-600">Total Businesses</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900">2.1M+</div>
              <div className="text-sm text-gray-600">Customer Reviews</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900">4.5★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Can't find what you're looking for?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Browse all businesses or suggest a new category for our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/companies">Browse All Businesses</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/suggest-category">Suggest a Category</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
