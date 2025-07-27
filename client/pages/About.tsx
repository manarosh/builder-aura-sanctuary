import { Link } from "react-router-dom";
import {
  Target,
  Users,
  Award,
  Shield,
  Heart,
  Globe,
  Star,
  CheckCircle,
  TrendingUp,
  MessageCircle,
  Lightbulb,
  Handshake,
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
import { useLanguage } from "@/contexts/LanguageContext";

const values = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Trust & Transparency",
    description:
      "We believe in authentic reviews and transparent business practices that build genuine trust between customers and businesses.",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Customer First",
    description:
      "Every feature we build puts customers first, ensuring they have the tools to make informed decisions and share honest feedback.",
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Community Impact",
    description:
      "We're committed to supporting local businesses and communities by connecting them with customers who value quality service.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description:
      "We continuously innovate with AI-powered insights and modern technology to improve the review experience for everyone.",
  },
];

const team = [
  {
    name: "Emma Andersson",
    role: "CEO & Founder",
    image: "/placeholder.svg",
    bio: "Former tech executive with 15+ years in building customer-focused platforms.",
  },
  {
    name: "Lars Johansson",
    role: "CTO",
    image: "/placeholder.svg",
    bio: "AI and machine learning expert passionate about creating intelligent review systems.",
  },
  {
    name: "Sofia Lindström",
    role: "Head of Customer Success",
    image: "/placeholder.svg",
    bio: "Dedicated to ensuring every business succeeds on our platform with exceptional support.",
  },
  {
    name: "Marcus Nielsen",
    role: "Head of Product",
    image: "/placeholder.svg",
    bio: "User experience designer focused on making review management simple and effective.",
  },
];

const stats = [
  {
    icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
    number: "10,000+",
    label: "Businesses Trust Us",
    description:
      "Companies across Sweden use ReviewHub to manage their reputation",
  },
  {
    icon: <MessageCircle className="w-6 h-6 md:w-8 md:h-8" />,
    number: "2.1M+",
    label: "Reviews Collected",
    description:
      "Authentic customer reviews helping others make informed decisions",
  },
  {
    icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8" />,
    number: "127%",
    label: "Average Growth",
    description:
      "Increase in customer engagement for businesses using our platform",
  },
  {
    icon: <Star className="w-6 h-6 md:w-8 md:h-8" />,
    number: "4.8★",
    label: "Platform Rating",
    description: "Customer satisfaction score from businesses and consumers",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description:
      "ReviewHub was born from a vision to create more trust in online business reviews.",
  },
  {
    year: "2020",
    title: "First 1,000 Businesses",
    description:
      "Reached our first milestone with small businesses across Stockholm and Gothenburg.",
  },
  {
    year: "2021",
    title: "AI Integration",
    description:
      "Launched AI-powered review analysis and sentiment tracking features.",
  },
  {
    year: "2022",
    title: "National Expansion",
    description:
      "Expanded across Sweden with businesses in all major cities joining our platform.",
  },
  {
    year: "2023",
    title: "10,000+ Businesses",
    description:
      "Reached 10,000 verified businesses and 2 million customer reviews.",
  },
  {
    year: "2024",
    title: "Advanced Analytics",
    description:
      "Launched comprehensive business intelligence and customer insight tools.",
  },
];

export default function About() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="creative-hero py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary animate-fade-in">
              {t("about.hero.badge")}
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-card-foreground mb-6 leading-tight">
              {t("about.hero.title")}<span className="gradient-text block">{t("about.hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed px-4 sm:px-0">
              {t("about.hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
              <Button
                size="lg"
                className="creative-button w-full sm:w-auto"
                asChild
              >
                <Link to="/for-business">
                  <span>{t("about.hero.ctaPrimary")}</span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 hover:bg-primary hover:text-white transition-all w-full sm:w-auto"
                asChild
              >
                <Link to="/companies">{t("about.hero.ctaSecondary")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-6">
                {t("about.mission.title")}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                {t("about.mission.description1")}
              </p>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                {t("about.mission.description2")}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm sm:text-base">
                    {t("about.mission.feature1")}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm sm:text-base">
                    {t("about.mission.feature2")}
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm sm:text-base">
                    {t("about.mission.feature3")}
                  </span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="creative-card text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-primary mb-3 sm:mb-4 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-card-foreground mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-card-foreground mb-2 leading-tight">
                      {stat.label}
                    </div>
                    <div className="text-xs text-muted-foreground leading-tight">
                      {stat.description}
                    </div>
                  </CardContent>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-4">
              {t("about.values.title")} <span className="gradient-text">{t("about.values.titleHighlight")}</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              {t("about.values.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="creative-card group text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="creative-icon mx-auto mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-4">
              {t("about.team.title")} <span className="gradient-text">{t("about.team.titleHighlight")}</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              {t("about.team.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="creative-card text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 sm:p-8">
                  <div className="relative mb-4 sm:mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3 text-sm sm:text-base">
                    {member.role}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Responsive Fix */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-card-foreground mb-4">
              {t("about.journey.title")} <span className="gradient-text">{t("about.journey.titleHighlight")}</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
              {t("about.journey.description")}
            </p>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="creative-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <Badge className="mb-4">{milestone.year}</Badge>
                  <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </CardContent>
              </div>
            ))}
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary to-purple-600 h-full rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}
                  >
                    <div
                      className="creative-card"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-8">
                        <Badge className="mb-4">{milestone.year}</Badge>
                        <h3 className="text-xl font-semibold text-card-foreground mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-purple-600 rounded-full z-10 shadow-lg">
                    <div className="w-6 h-6 bg-white rounded-full shadow-inner"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20"></div>
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="glass-morphism p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
              {t("about.cta.title")}
            </h2>
            <p className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              {t("about.cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
              <Button
                size="lg"
                variant="secondary"
                className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 w-full sm:w-auto"
                asChild
              >
                <Link to="/contact">{t("about.cta.contactButton")}</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg font-semibold bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all transform hover:scale-105 w-full sm:w-auto"
                asChild
              >
                <Link to="/for-business">{t("about.cta.forBusinessButton")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
