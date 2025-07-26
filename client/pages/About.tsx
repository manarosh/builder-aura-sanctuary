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
  Handshake
} from "lucide-react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const values = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Trust & Transparency",
    description: "We believe in authentic reviews and transparent business practices that build genuine trust between customers and businesses."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Customer First",
    description: "Every feature we build puts customers first, ensuring they have the tools to make informed decisions and share honest feedback."
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Community Impact",
    description: "We're committed to supporting local businesses and communities by connecting them with customers who value quality service."
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Innovation",
    description: "We continuously innovate with AI-powered insights and modern technology to improve the review experience for everyone."
  }
];

const team = [
  {
    name: "Emma Andersson",
    role: "CEO & Founder",
    image: "/placeholder.svg",
    bio: "Former tech executive with 15+ years in building customer-focused platforms."
  },
  {
    name: "Lars Johansson",
    role: "CTO",
    image: "/placeholder.svg",
    bio: "AI and machine learning expert passionate about creating intelligent review systems."
  },
  {
    name: "Sofia Lindström",
    role: "Head of Customer Success",
    image: "/placeholder.svg",
    bio: "Dedicated to ensuring every business succeeds on our platform with exceptional support."
  },
  {
    name: "Marcus Nielsen",
    role: "Head of Product",
    image: "/placeholder.svg",
    bio: "User experience designer focused on making review management simple and effective."
  }
];

const stats = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "10,000+",
    label: "Businesses Trust Us",
    description: "Companies across Sweden use ReviewHub to manage their reputation"
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    number: "2.1M+",
    label: "Reviews Collected",
    description: "Authentic customer reviews helping others make informed decisions"
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    number: "127%",
    label: "Average Growth",
    description: "Increase in customer engagement for businesses using our platform"
  },
  {
    icon: <Star className="w-8 h-8" />,
    number: "4.8★",
    label: "Platform Rating",
    description: "Customer satisfaction score from businesses and consumers"
  }
];

const milestones = [
  {
    year: "2019",
    title: "Company Founded",
    description: "ReviewHub was born from a vision to create more trust in online business reviews."
  },
  {
    year: "2020",
    title: "First 1,000 Businesses",
    description: "Reached our first milestone with small businesses across Stockholm and Gothenburg."
  },
  {
    year: "2021",
    title: "AI Integration",
    description: "Launched AI-powered review analysis and sentiment tracking features."
  },
  {
    year: "2022",
    title: "National Expansion",
    description: "Expanded across Sweden with businesses in all major cities joining our platform."
  },
  {
    year: "2023",
    title: "10,000+ Businesses",
    description: "Reached 10,000 verified businesses and 2 million customer reviews."
  },
  {
    year: "2024",
    title: "Advanced Analytics",
    description: "Launched comprehensive business intelligence and customer insight tools."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-white to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/10 text-primary">
              About ReviewHub
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Building Trust Between
              <span className="text-primary block">Businesses & Customers</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're on a mission to create the most trusted platform for business reviews in Sweden, 
              helping customers make informed decisions while empowering businesses to build authentic reputations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/for-business">Join as Business</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/companies">Explore Companies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                To create a transparent, trustworthy ecosystem where authentic customer reviews 
                help businesses improve and customers make confident decisions. We believe that 
                honest feedback benefits everyone.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                By combining advanced AI technology with human insight, we're building the future 
                of business reviews - one that's fair, accurate, and beneficial for all stakeholders.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">100% authentic, verified reviews</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">AI-powered review analysis and insights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Support for businesses of all sizes</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-gray-900 mb-2">
                      {stat.label}
                    </div>
                    <div className="text-xs text-gray-600">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at ReviewHub
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-primary mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The passionate people behind ReviewHub who are dedicated to building trust online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From startup to Sweden's most trusted review platform
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary h-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8'}`}>
                    <Card>
                      <CardContent className="p-6">
                        <Badge className="mb-3">{milestone.year}</Badge>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="relative flex items-center justify-center w-8 h-8 bg-primary rounded-full z-10">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Want to Learn More?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team to learn more about ReviewHub and how we can help your business grow
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Contact Us
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/for-business">For Business</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
