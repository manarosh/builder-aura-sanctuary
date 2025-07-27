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
          <h1 className="text-3xl font-bold text-card-foreground mb-4">Category Not Found</h1>
          <p className="text-muted-foreground mb-8">Sorry, we couldn't find this category.</p>
          <Button asChild>
            <Link to="/categories">Back to Categories</Link>
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
              <CardTitle className="text-2xl text-card-foreground">{cat.name}</CardTitle>
            </div>
            <CardDescription className="text-muted-foreground mb-4">{cat.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <h2 className="text-lg font-semibold text-card-foreground mb-2">Top Companies</h2>
            <div className="space-y-2 mb-6">
              {cat.topCompanies.map((company, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-muted-foreground">{company}</Badge>
                  <Star className="w-4 h-4 text-yellow-400" />
                </div>
              ))}
            </div>
            <Button asChild className="w-full">
              <Link to="/categories">Back to Categories</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}