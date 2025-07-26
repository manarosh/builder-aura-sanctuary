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
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:category" element={<PlaceholderPage title="Category Listings" description="Browse all businesses in this category with advanced filtering options." />} />
          <Route path="/for-business" element={<PlaceholderPage title="For Business Owners" description="Join ReviewHub and start collecting reviews to grow your business." />} />
          <Route path="/about" element={<PlaceholderPage title="About ReviewHub" description="Learn more about our mission to connect customers with trusted businesses." />} />
          <Route path="/login" element={<PlaceholderPage title="Sign In" description="Access your ReviewHub account to manage reviews and preferences." />} />
          <Route path="/register" element={<PlaceholderPage title="Sign Up" description="Create a new ReviewHub account to start reviewing local businesses." />} />
          <Route path="/top-rated" element={<PlaceholderPage title="Top Rated Businesses" description="Discover the highest-rated businesses in your area." />} />
          <Route path="/write-review" element={<PlaceholderPage title="Write a Review" description="Share your experience and help others make informed decisions." />} />
          <Route path="/business-login" element={<PlaceholderPage title="Business Login" description="Access your business dashboard to manage your profile and reviews." />} />
          <Route path="/business-dashboard" element={<PlaceholderPage title="Business Dashboard" description="Manage your business profile, view analytics, and respond to reviews." />} />
          <Route path="/pricing" element={<PlaceholderPage title="Pricing Plans" description="Choose the perfect plan for your business growth." />} />
          <Route path="/help" element={<PlaceholderPage title="Help Center" description="Find answers to common questions and get support." />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" description="Get in touch with our support team for assistance." />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" description="Learn how we protect and use your personal information." />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" description="Review our terms and conditions for using ReviewHub." />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
