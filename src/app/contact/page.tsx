"use client";

import type React from "react";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[v0] Form submitted:", formData);
    // Handle form submission here
    alert("Thank you for contacting us! We will get back to you shortly.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "123 Investment Plaza, 5th Floor",
        "Victoria Island, Lagos 101241",
        "Nigeria",
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+234 (1) 234-5678",
        "+234 (1) 234-5679 (Hotline)",
        "Mon - Fri: 8:00 AM - 5:00 PM",
      ],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@primecapital.com.ng",
        "support@primecapital.com.ng",
        "careers@primecapital.com.ng",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  const departments = [
    {
      name: "New Clients",
      email: "newclients@primecapital.com.ng",
      phone: "+234 (1) 234-5680",
    },
    {
      name: "Existing Clients",
      email: "clientservices@primecapital.com.ng",
      phone: "+234 (1) 234-5681",
    },
    {
      name: "Investment Advisory",
      email: "advisory@primecapital.com.ng",
      phone: "+234 (1) 234-5682",
    },
    {
      name: "Compliance",
      email: "compliance@primecapital.com.ng",
      phone: "+234 (1) 234-5683",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Have questions about our services? Want to start investing? Our team
            is here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-balance">
            Send Us a Message
          </h2>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Fill out the form below and our team will get back to you within 24
            hours.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name <span className="text-destructive">*</span>
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 XXX XXX XXXX"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject <span className="text-destructive">*</span>
              </label>
              <Input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                placeholder="How can we help you?"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message <span className="text-destructive">*</span>
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry..."
                rows={5}
                required
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Send Message <Send className="ml-2 h-4 w-4" />
            </Button>
            <p className="text-xs text-muted-foreground">
              By submitting this form, you agree to our Privacy Policy and consent
              to be contacted by PrimeCapital regarding your inquiry.
            </p>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-3">{info.title}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      {info.details.map((detail, idx) => (
                        <p key={idx}>{detail}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Department Contacts & Map */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-balance">
                  Department Contacts
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Reach out directly to the relevant department for faster
                  assistance.
                </p>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <Card key={index}>
                      <CardContent className="pt-4">
                        <h4 className="font-semibold mb-2">{dept.name}</h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p className="flex items-center gap-2">
                            <Mail className="h-4 w-4 text-primary" />
                            {dept.email}
                          </p>
                          <p className="flex items-center gap-2">
                            <Phone className="h-4 w-4 text-primary" />
                            {dept.phone}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h3 className="text-xl font-bold mb-4">Find Us</h3>
                <Card className="overflow-hidden">
                  <div className="h-64 bg-gradient-to-br from-primary/20 to-muted flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Map showing our office location
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        123 Investment Plaza, Victoria Island
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Quick answers to common questions
            </p>
          </div>
          <div className="space-y-4">
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">
                  What are your minimum investment requirements?
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our minimum investment varies by service. For brokerage
                  accounts, there is typically no minimum. For managed
                  portfolios, the minimum is ₦5 million. Please contact us for
                  specific details.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">
                  How do I open an account?
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You can start by contacting our New Clients team via email or
                  phone. We'll guide you through the account opening process,
                  which includes completing required forms and providing
                  identification documents.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">
                  Are you regulated by the SEC?
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Yes, PrimeCapital is fully registered and regulated by the
                  Nigerian Securities and Exchange Commission (SEC). Our SEC
                  registration number is available on our About page.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h4 className="font-semibold mb-2">
                  What is your response time for inquiries?
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We aim to respond to all inquiries within 24 hours during
                  business days. For urgent matters, please call our hotline for
                  immediate assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
