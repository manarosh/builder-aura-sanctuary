import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  MapPin,
  Star,
  Building2,
  Users,
  TrendingUp,
  ChevronRight,
  Filter,
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
import { useLanguage } from "@/contexts/LanguageContext";
import { categories } from "@/data/categories";

const popularSearches = [
  "Dentist near me",
  "Best restaurants Stockholm",
  "Car repair Gothenburg",
  "Hair salon Malmö",
  "Legal advice",
  "Home cleaning service",
  "Personal trainer",
  "Tax advisor",
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

export default function Categories() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");
  const [sortBy, setSortBy] = useState("popularity");
  const { t, isRTL } = useLanguage();

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase()),
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
    <div className="min-h-screen bg-background transition-colors">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-card-foreground mb-4">
            {t("categories.title")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t("categories.description")}
          </p>

          {/* Search Bar */}
          <Card className="max-w-4xl mx-auto bg-card text-card-foreground border border-card">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    placeholder={t("categories.searchPlaceholder")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12"
                  />
                </div>
                <div className="flex-1 relative">
                  <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Select
                    value={selectedLocation}
                    onValueChange={setSelectedLocation}
                  >
                    <SelectTrigger className="pl-10 h-12">
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
                <Button size="lg" className="h-12 px-8" asChild>
                  <Link to="/companies">Search All</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Searches */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-card-foreground mb-4">
            {t("categories.popularSearches")}
          </h3>
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
            <p className="text-muted-foreground font-medium">
              {t("categories.showingResults", { count: sortedCategories.length })}
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
          {sortedCategories.map((category) => {
            const slug = category.name.toLowerCase().replace(/\s+/g, "-");
            return (
              <Link key={category.name} to={`/categories/${slug}`}>
                <Card className="hover:shadow-medium transition-shadow group cursor-pointer bg-card text-card-foreground border border-card">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4">
                      <div className="text-5xl">{category.icon}</div>
                      <div className="flex-1">
                        <CardTitle className="text-xl group-hover:text-primary transition-colors text-card-foreground">
                          {category.name}
                        </CardTitle>
                        <CardDescription className="mt-1 text-muted-foreground">
                          {category.count.toLocaleString()} businesses
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground text-sm">
                        {category.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <StarRating rating={category.avgRating} />
                        <span className="text-muted-foreground text-sm">
                          Average rating
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium text-card-foreground mb-2">
                          {t("categories.topCompanies")}
                        </h4>
                        <div className="space-y-1">
                          {category.topCompanies
                            .slice(0, 3)
                            .map((company, index) => (
                              <div
                                key={index}
                                className="text-sm text-muted-foreground flex items-center"
                              >
                                <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                {company}
                              </div>
                            ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-card-foreground mb-2">
                          {t("categories.subcategories")}
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {category.subcategories
                            .slice(0, 4)
                            .map((sub, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs text-muted-foreground"
                              >
                                {sub}
                              </Badge>
                            ))}
                          {category.subcategories.length > 4 && (
                            <Badge variant="outline" className="text-xs text-muted-foreground">
                              {t("categories.moreSubcategories", { count: category.subcategories.length - 4 })}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <span className="text-sm text-muted-foreground">
                          {t("categories.viewAllBusinesses")}
                        </span>
                        <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="mt-16 bg-card text-card-foreground border border-card rounded-lg shadow-soft p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-card-foreground mb-4">
              {t("categories.platformStats")}
            </h2>
            <p className="text-muted-foreground">
              {/* Consider making this translatable if needed */}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-card-foreground">
                {categories
                  .reduce((sum, cat) => sum + cat.count, 0)
                  .toLocaleString()}
              </div>
              <div className="text-sm text-muted-foreground">Total Businesses</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-card-foreground">2.1M+</div>
              <div className="text-sm text-muted-foreground">Customer Reviews</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-card-foreground">4.5★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-card-foreground">98%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-card-foreground mb-4">
            {t("categories.cantFind")}
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("categories.cantFindDescription")}
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
