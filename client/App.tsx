import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CompanyProfile from "./pages/CompanyProfile";
import Categories from "./pages/Categories";
import Companies from "./pages/Companies";
import ForBusiness from "./pages/ForBusiness";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PlaceholderPage from "./pages/PlaceholderPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/company/:id" element={<CompanyProfile />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<PlaceholderPage title="Category Listings" description="Browse all businesses in this category with advanced filtering options." />} />
          <Route path="/for-business" element={<ForBusiness />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/top-rated" element={<PlaceholderPage title="Top Rated Businesses" description="Discover the highest-rated businesses in your area." />} />
          <Route path="/write-review" element={<PlaceholderPage title="Write a Review" description="Share your experience and help others make informed decisions." />} />
          <Route path="/business-login" element={<PlaceholderPage title="Business Login" description="Access your business dashboard to manage your profile and reviews." />} />
          <Route path="/business-dashboard" element={<PlaceholderPage title="Business Dashboard" description="Manage your business profile, view analytics, and respond to reviews." />} />
          <Route path="/pricing" element={<PlaceholderPage title="Pricing Plans" description="Choose the perfect plan for your business growth." />} />
          <Route path="/help" element={<PlaceholderPage title="Help Center" description="Find answers to common questions and get support." />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" description="Get in touch with our support team for assistance." />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" description="Learn how we protect and use your personal information." />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" description="Review our terms and conditions for using ReviewHub." />} />
          <Route path="/forgot-password" element={<PlaceholderPage title="Forgot Password" description="Reset your password to regain access to your account." />} />
          <Route path="/suggest-category" element={<PlaceholderPage title="Suggest Category" description="Help us improve by suggesting a new business category." />} />
          {/* Category specific routes */}
          <Route path="/categories/healthcare" element={<PlaceholderPage title="Healthcare Businesses" description="Find trusted healthcare providers in your area." />} />
          <Route path="/categories/legal" element={<PlaceholderPage title="Legal Services" description="Connect with experienced legal professionals." />} />
          <Route path="/categories/home-services" element={<PlaceholderPage title="Home Services" description="Reliable home improvement and maintenance services." />} />
          <Route path="/categories/restaurants" element={<PlaceholderPage title="Restaurants" description="Discover amazing dining experiences near you." />} />
          <Route path="/categories/auto" element={<PlaceholderPage title="Auto Services" description="Trusted automotive repair and maintenance services." />} />
          <Route path="/categories/beauty" element={<PlaceholderPage title="Beauty & Spa" description="Pamper yourself with top-rated beauty and spa services." />} />
          <Route path="/categories/education" element={<PlaceholderPage title="Education" description="Quality educational services and institutions." />} />
          <Route path="/categories/finance" element={<PlaceholderPage title="Financial Services" description="Professional financial planning and services." />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
