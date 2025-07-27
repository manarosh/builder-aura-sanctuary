import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { categories } from "@/data/categories";

export default function Category() {
  const { category } = useParams();
  const { t } = useLanguage();
  const cat = categories.find((c) => c.slug === category);

  if (!cat) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-xl mx-auto py-16 px-4 text-center">
          <h1 className="text-3xl font-bold text-card-foreground mb-4">{t("category.notFound.title")}</h1>
          <p className="text-muted-foreground mb-8">{t("category.notFound.description")}</p>
          <Button asChild>
            <Link to="/categories">{t("category.notFound.backButton")}</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-2xl mx-auto py-16 px-4">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4 mb-2">
              <span className="text-4xl">{cat.icon}</span>
              <CardTitle className="text-2xl text-card-foreground">{t(cat.nameKey)}</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground mb-4">{t(cat.descriptionKey)}</CardDescription>
          </CardHeader>
          <CardContent>
            <h2 className="text-lg font-semibold text-card-foreground mb-2">{t("categories.topCompanies")}</h2>
            <div className="space-y-2 mb-6">
              {cat.topCompanyKeys.map((companyKey, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-muted-foreground">{t(companyKey)}</Badge>
                  <Star className="w-4 h-4 text-yellow-400" />
                </div>
              ))}
            </div>
            <h2 className="text-lg font-semibold text-card-foreground mb-2">{t("categories.subcategories")}</h2>
            <div className="flex flex-wrap gap-2 mb-6">
              {cat.subcategoryKeys.map((subKey, idx) => (
                <Badge key={idx} variant="secondary" className="text-muted-foreground">{t(subKey)}</Badge>
              ))}
            </div>
            <Button asChild className="w-full">
              <Link to="/categories">{t("category.backToCategories")}</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}