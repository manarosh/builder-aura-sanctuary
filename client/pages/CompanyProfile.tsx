import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  MapPin,
  Clock,
  Phone,
  Globe,
  Mail,
  ThumbsUp,
  ThumbsDown,
  Filter,
  Share2,
  Heart,
  ChevronLeft,
  Camera,
  Calendar,
  Users,
  TrendingUp,
  MessageSquare,
  Award,
} from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

// Mock data - in real app this would come from API
const companyData = {
  id: 1,
  name: "Swedish Medical Center",
  category: "Healthcare",
  subcategory: "Hospital",
  rating: 4.8,
  reviewCount: 2847,
  location: "Klarabergsgatan 23, Stockholm, Sweden",
  phone: "+46 8 123 456 78",
  website: "https://swedishmedical.se",
  email: "info@swedishmedical.se",
  hours: {
    Monday: "08:00 - 20:00",
    Tuesday: "08:00 - 20:00",
    Wednesday: "08:00 - 20:00",
    Thursday: "08:00 - 20:00",
    Friday: "08:00 - 18:00",
    Saturday: "09:00 - 16:00",
    Sunday: "Closed",
  },
  description:
    "Leading healthcare provider in Stockholm offering comprehensive medical services with state-of-the-art facilities and experienced medical professionals.",
  images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  trustLevel: "excellent",
  verified: true,
  founded: 1995,
  employees: "200-500",
  services: [
    "Emergency Care",
    "Surgery",
    "Diagnostics",
    "Specialist Consultations",
    "Preventive Care",
  ],
};

const reviews = [
  {
    id: 1,
    author: "Anna Lindström",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "2024-01-15",
    text: "Excellent service! The staff was incredibly professional and caring. Dr. Anderson took the time to explain everything clearly and made me feel comfortable throughout the entire process. The facilities are modern and clean. Highly recommend!",
    helpful: 23,
    images: ["/placeholder.svg"],
    verified: true,
    experience: "Emergency Care",
  },
  {
    id: 2,
    author: "Marcus Johansson",
    avatar: "/placeholder.svg",
    rating: 4,
    date: "2024-01-10",
    text: "Good overall experience. The appointment was on time and the doctor was knowledgeable. Only minor complaint is that the waiting area could be more comfortable, but the medical care was top-notch.",
    helpful: 15,
    images: [],
    verified: true,
    experience: "Specialist Consultation",
  },
  {
    id: 3,
    author: "Sofia Eriksson",
    avatar: "/placeholder.svg",
    rating: 5,
    date: "2024-01-05",
    text: "Outstanding care during my surgery. The entire team was professional and supportive. Recovery went smoothly thanks to their excellent follow-up care. Couldn't ask for better treatment.",
    helpful: 31,
    images: [],
    verified: true,
    experience: "Surgery",
  },
];

const aiInsights = {
  summary:
    "Swedish Medical Center consistently receives praise for professional staff, modern facilities, and excellent patient care. Common highlights include caring doctors, clean environment, and efficient service.",
  positiveKeywords: [
    { word: "Professional", count: 89 },
    { word: "Caring", count: 76 },
    { word: "Clean", count: 65 },
    { word: "Modern", count: 54 },
    { word: "Efficient", count: 43 },
  ],
  negativeKeywords: [
    { word: "Waiting time", count: 23 },
    { word: "Expensive", count: 15 },
    { word: "Parking", count: 12 },
  ],
  sentiment: {
    positive: 78,
    neutral: 18,
    negative: 4,
  },
};

function StarRating({
  rating,
  size = "sm",
  showNumber = true,
}: {
  rating: number;
  size?: "sm" | "lg";
  showNumber?: boolean;
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
      {showNumber && <span className="text-sm font-medium ml-1">{rating}</span>}
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

export default function CompanyProfile() {
  const { id } = useParams();
  const [selectedFilter, setSelectedFilter] = useState("newest");
  const [showAllHours, setShowAllHours] = useState(false);
  const { t } = useLanguage();

  const ratingDistribution = [
    { stars: 5, count: 2150, percentage: 76 },
    { stars: 4, count: 512, percentage: 18 },
    { stars: 3, count: 142, percentage: 5 },
    { stars: 2, count: 28, percentage: 1 },
    { stars: 1, count: 15, percentage: 0 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-gray-900">
            {t("header.home")}
          </Link>
          <span>/</span>
          <Link to="/categories" className="hover:text-gray-900">
            {t("header.categories")}
          </Link>
          <span>/</span>
          <Link to="/categories/healthcare" className="hover:text-gray-900">
            {t("companyProfile.breadcrumbCategory")}
          </Link>
          <span>/</span>
          <span className="text-gray-900">{companyData.name}</span>
        </div>

        {/* Company Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <h1 className="text-3xl font-bold text-card-foreground">
                        {companyData.name}
                      </h1>
                      {companyData.verified && (
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800"
                        >
                          ✓ Verified
                        </Badge>
                      )}
                      <TrustBadge level={companyData.trustLevel} />
                    </div>
                    <p className="text-lg text-muted-foreground mb-4">
                      {companyData.category} • {companyData.subcategory}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4 mr-2" />
                      {t("common.save")}
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      {t("companyProfile.share")}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-2">
                    <StarRating rating={companyData.rating} size="lg" />
                    <span className="text-2xl font-bold">
                      {companyData.rating}
                    </span>
                    <span className="text-muted-foreground">
                      ({companyData.reviewCount.toLocaleString()}) {t("companyProfile.reviews")}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span>{companyData.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{companyData.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {companyData.services.map((service) => (
                    <Badge key={service} variant="secondary" className="text-muted-foreground">
                      {service}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Write a Review
                  </Button>
                  <Button variant="outline" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button variant="outline" size="lg">
                    <Globe className="w-4 h-4 mr-2" />
                    Visit Website
                  </Button>
                </div>
              </div>

              <div className="lg:w-96">
                <img
                  src={companyData.images[0]}
                  alt={companyData.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="grid grid-cols-3 gap-2">
                  {companyData.images.slice(1).map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt=""
                      className="w-full h-20 object-cover rounded"
                    />
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="reviews" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="reviews">
                  {t("companyProfile.reviews")} ({companyData.reviewCount})
                </TabsTrigger>
                <TabsTrigger value="insights">AI Insights</TabsTrigger>
                <TabsTrigger value="photos">Photos</TabsTrigger>
              </TabsList>

              <TabsContent value="reviews" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Customer Reviews</h3>
                  <Select
                    value={selectedFilter}
                    onValueChange={setSelectedFilter}
                  >
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="oldest">Oldest First</SelectItem>
                      <SelectItem value="highest">Highest Rated</SelectItem>
                      <SelectItem value="lowest">Lowest Rated</SelectItem>
                      <SelectItem value="helpful">Most Helpful</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Rating Summary */}
                <Card>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-gray-900 mb-2">
                          {companyData.rating}
                        </div>
                        <StarRating
                          rating={companyData.rating}
                          size="lg"
                          showNumber={false}
                        />
                        <p className="text-muted-foreground mt-2">
                          {companyData.reviewCount.toLocaleString()} {t("companyProfile.reviews")}
                        </p>
                      </div>

                      <div className="space-y-2">
                        {ratingDistribution.map((item) => (
                          <div
                            key={item.stars}
                            className="flex items-center space-x-3"
                          >
                            <span className="text-sm w-6">{item.stars}★</span>
                            <Progress
                              value={item.percentage}
                              className="flex-1"
                            />
                            <span className="text-sm text-muted-foreground w-12">
                              {item.count}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Reviews List */}
                <div className="space-y-6">
                  {reviews.map((review) => (
                    <Card key={review.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <Avatar>
                            <AvatarImage src={review.avatar} />
                            <AvatarFallback>
                              {review.author.charAt(0)}
                            </AvatarFallback>
                          </Avatar>

                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div>
                                <div className="flex items-center space-x-2">
                                  <h4 className="font-semibold">
                                    {review.author}
                                  </h4>
                                  {review.verified && (
                                    <Badge
                                      variant="secondary"
                                      className="text-xs"
                                    >
                                      Verified
                                    </Badge>
                                  )}
                                </div>
                                <div className="flex items-center space-x-2 mt-1">
                                  <StarRating rating={review.rating} />
                                  <span className="text-sm text-muted-foreground">
                                    • {review.experience}
                                  </span>
                                </div>
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {review.date}
                              </span>
                            </div>

                            <p className="text-muted-foreground mb-4">{review.text}</p>

                            {review.images.length > 0 && (
                              <div className="flex space-x-2 mb-4">
                                {review.images.map((image, index) => (
                                  <img
                                    key={index}
                                    src={image}
                                    alt=""
                                    className="w-16 h-16 object-cover rounded"
                                  />
                                ))}
                              </div>
                            )}

                            <div className="flex items-center space-x-4">
                              <Button variant="ghost" size="sm">
                                <ThumbsUp className="w-4 h-4 mr-1" />
                                Helpful ({review.helpful})
                              </Button>
                              <Button variant="ghost" size="sm">
                                <ThumbsDown className="w-4 h-4 mr-1" />
                                Not Helpful
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="text-center">
                  <Button variant="outline" size="lg">
                    {t("companyProfile.loadMore")}
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="insights" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-card-foreground">
                      <TrendingUp className="w-5 h-5 mr-2" />
                      {t("companyProfile.aiAnalysis")}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {t("companyProfile.aiInsightsDescription", { count: companyData.reviewCount })}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Summary</h4>
                      {/* Consider making this translatable if needed */}
                      <p className="text-muted-foreground">{aiInsights.summary}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 text-green-700">
                          {t("companyProfile.positives")}
                        </h4>
                        <div className="space-y-2">
                          {aiInsights.positiveKeywords.map((keyword) => (
                            <div
                              key={keyword.word}
                              className="flex items-center justify-between"
                            >
                              <span className="text-sm text-muted-foreground">{keyword.word}</span>
                              <Badge
                                variant="secondary"
                                className="bg-green-100 text-green-800"
                              >
                                {keyword.count}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-3 text-red-700">
                          {t("companyProfile.negatives")}
                        </h4>
                        <div className="space-y-2">
                          {aiInsights.negativeKeywords.map((keyword) => (
                            <div
                              key={keyword.word}
                              className="flex items-center justify-between"
                            >
                              <span className="text-sm text-muted-foreground">{keyword.word}</span>
                              <Badge
                                variant="secondary"
                                className="bg-red-100 text-red-800"
                              >
                                {keyword.count}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Sentiment Analysis</h4>
                      {/* Consider making this translatable if needed */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Positive</span>
                          <div className="flex items-center space-x-2">
                            <Progress
                              value={aiInsights.sentiment.positive}
                              className="w-32"
                            />
                            <span className="text-sm font-medium">
                              {aiInsights.sentiment.positive}%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Neutral</span>
                          <div className="flex items-center space-x-2">
                            <Progress
                              value={aiInsights.sentiment.neutral}
                              className="w-32"
                            />
                            <span className="text-sm font-medium">
                              {aiInsights.sentiment.neutral}%
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Negative</span>
                          <div className="flex items-center space-x-2">
                            <Progress
                              value={aiInsights.sentiment.negative}
                              className="w-32"
                            />
                            <span className="text-sm font-medium">
                              {aiInsights.sentiment.negative}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="photos">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Photos & Media</CardTitle>
                    {/* Consider making this translatable if needed */}
                    <CardDescription className="text-muted-foreground">
                      {t("companyProfile.photosDescription")}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Array.from({ length: 6 }, (_, i) => (
                        <div key={i} className="aspect-square">
                          <img
                            src="/placeholder.svg"
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Contact Information</CardTitle>
                {/* Consider making this translatable if needed */}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span>{companyData.phone}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-gray-500" />
                  <a
                    href={companyData.website}
                    className="text-primary hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span>{companyData.email}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{companyData.location}</span>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Business Hours</CardTitle>
                {/* Consider making this translatable if needed */}
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {Object.entries(companyData.hours)
                    .slice(0, showAllHours ? undefined : 3)
                    .map(([day, hours]) => (
                      <div key={day} className="flex justify-between">
                        <span className="font-medium">{day}</span>
                        <span className="text-gray-600">{hours}</span>
                      </div>
                    ))}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowAllHours(!showAllHours)}
                    className="w-full mt-2"
                  >
                    {showAllHours ? "Show Less" : "Show All Hours"}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Company Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-card-foreground">Company Details</CardTitle>
                {/* Consider making this translatable if needed */}
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Founded</span>
                  {/* Consider making this translatable if needed */}
                  <span className="font-medium">{companyData.founded}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Employees</span>
                  {/* Consider making this translatable if needed */}
                  <span className="font-medium">{companyData.employees}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Trust Level</span>
                  {/* Consider making this translatable if needed */}
                  <TrustBadge level={companyData.trustLevel} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
