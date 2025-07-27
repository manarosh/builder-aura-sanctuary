import { useState } from "react";
import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="max-w-xl mx-auto py-16 px-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl text-card-foreground mb-2">Contact Us</CardTitle>
            <p className="text-muted-foreground">We'd love to hear from you! Fill out the form below and we'll get back to you soon.</p>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="text-green-600 text-center py-8 text-lg font-semibold">Thank you for contacting us! We'll be in touch soon.</div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Name</label>
                  <Input name="name" value={form.name} onChange={handleChange} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Email</label>
                  <Input name="email" type="email" value={form.email} onChange={handleChange} required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-card-foreground mb-2">Message</label>
                  <Textarea name="message" rows={5} value={form.message} onChange={handleChange} required />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}