import { Link, useLocation } from "react-router-dom";
import { Star, Menu, X, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t, isRTL } = useLanguage();

  const isActive = (path: string) => {
    return (
      location.pathname === path || location.pathname.startsWith(path + "/")
    );
  };

  const navLinks = [
    { href: "/", label: t("header.home") },
    { href: "/companies", label: t("header.companies") },
    { href: "/categories", label: t("header.categories") },
    { href: "/for-business", label: t("header.forBusiness") },
    { href: "/about", label: t("header.about") },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center h-16 ${isRTL ? "flex-row-reverse" : ""}`}
        >
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                ReviewHub
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10 dark:bg-primary/20"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-3">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-9 h-9 p-0 hover:bg-gray-100 dark:hover:bg-gray-800"
              title={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              ) : (
                <Sun className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              )}
            </Button>

            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="w-9 h-9 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 relative"
              title={
                language === "en" ? "Switch to Arabic" : "Switch to English"
              }
            >
              <Globe className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              <span className="absolute -bottom-1 -right-1 text-xs font-bold text-primary bg-white dark:bg-gray-900 rounded-full w-4 h-4 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                {language.toUpperCase()}
              </span>
            </Button>

            {/* Auth Buttons */}
            <Button
              variant="ghost"
              className="dark:text-gray-300 dark:hover:text-white"
              asChild
            >
              <Link to="/login">{t("header.signIn")}</Link>
            </Button>
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <Link to="/register">{t("header.signUp")}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="w-9 h-9 p-0"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              ) : (
                <Sun className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              )}
            </Button>

            {/* Mobile Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="w-9 h-9 p-0 relative"
            >
              <Globe className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              <span className="absolute -bottom-1 -right-1 text-xs font-bold text-primary bg-white dark:bg-gray-900 rounded-full w-4 h-4 flex items-center justify-center border border-gray-200 dark:border-gray-700">
                {language.toUpperCase()}
              </span>
            </Button>

            {/* Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(link.href)
                      ? "text-primary bg-primary/10 dark:bg-primary/20"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Button
                  variant="ghost"
                  asChild
                  className="justify-start dark:text-gray-300 dark:hover:text-white"
                >
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    {t("header.signIn")}
                  </Link>
                </Button>
                <Button
                  asChild
                  className="justify-start bg-primary hover:bg-primary/90"
                >
                  <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                    {t("header.signUp")}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
