import { Link } from "react-router-dom";
import {
  CheckCircle,
  Star,
  BarChart3,
  MessageSquare,
  Users,
  TrendingUp,
  Shield,
  Globe,
  Smartphone,
  Mail,
  Award,
  Target,
  Zap,
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";

const features = [
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Review Analytics",
    description:
      "Track your reputation with detailed analytics and insights about customer feedback.",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Respond to Reviews",
    description:
      "Engage with customers by responding to reviews and building stronger relationships.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Customer Insights",
    description:
      "Understand your customers better with AI-powered sentiment analysis and trends.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Trust Verification",
    description:
      "Get verified status and build trust with our comprehensive verification process.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Enhanced Visibility",
    description:
      "Increase your online presence and reach more potential customers.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Mobile-Friendly",
    description:
      "Manage your business profile and reviews on the go with our mobile app.",
  },
];

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Perfect for small businesses getting started",
    features: [
      "Basic business profile",
      "Receive customer reviews",
      "Basic analytics dashboard",
      "Email support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Professional",
    price: "299 SEK/month",
    description: "Advanced features for growing businesses",
    features: [
      "Enhanced business profile",
      "Respond to reviews",
      "Advanced analytics & insights",
      "Review invitation tools",
      "Priority support",
      "API access",
    ],
    cta: "Start Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for large organizations",
    features: [
      "Multi-location management",
      "White-label solutions",
      "Custom integrations",
      "Dedicated account manager",
      "24/7 phone support",
      "Custom reporting",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const testimonials = [
  {
    name: "Maria Lindqvist",
    company: "Nordic Dental Care",
    text: "ReviewHub has transformed how we manage our online reputation. We've seen a 40% increase in new patients since joining.",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    name: "Erik Johansson",
    company: "Stockholm Auto Repair",
    text: "The analytics help us understand what customers value most. Our service quality has improved significantly.",
    rating: 5,
    image: "/placeholder.svg",
  },
  {
    name: "Anna Petersson",
    company: "Bella Beauty Salon",
    text: "Being able to respond to reviews has helped us build stronger relationships with our clients.",
    rating: 5,
    image: "/placeholder.svg",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export default function ForBusiness() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary">
                {t("forBusiness.hero.badge")}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {t("forBusiness.hero.title")}<span className="text-primary block">{t("forBusiness.hero.titleHighlight")}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t("forBusiness.hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-12 px-8">
                  {t("forBusiness.hero.ctaPrimary")}
                </Button>
                <Button size="lg" variant="outline" className="h-12 px-8">
                  {t("forBusiness.hero.ctaSecondary")}
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                {t("forBusiness.hero.note")}
              </p>
            </div>

            <div className="mt-12 lg:mt-0">
              <Card className="shadow-2xl">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          +127%
                        </div>
                        <div className="text-sm text-gray-600">
                          Average customer growth
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <Star className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          4.8★
                        </div>
                        <div className="text-sm text-gray-600">
                          Average business rating
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          2.3M
                        </div>
                        <div className="text-sm text-gray-600">
                          Monthly platform visitors
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Powerful tools to help you manage your online reputation and grow
              your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Choose the plan that fits your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${plan.popular ? "ring-2 ring-primary shadow-lg" : ""}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">
                    {plan.price}
                  </div>
                  <CardDescription className="mt-2">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Real stories from businesses that grew with ReviewHub
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <StarRating rating={testimonial.rating} />
                  <p className="text-gray-700 mt-4 mb-6">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600">
              Contact us today and see how ReviewHub can help grow your business
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <Input placeholder="Your business name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact Name
                  </label>
                  <Input placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <Input placeholder="+46 XX XXX XX XX" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us about your business and how we can help..."
                    rows={4}
                  />
                </div>
                <div className="md:col-span-2">
                  <Button size="lg" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join 10,000+ Successful Businesses
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start building your online reputation today with ReviewHub's
            powerful platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
