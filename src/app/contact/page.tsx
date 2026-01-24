/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
"use client";

import { Clock, Mail, MapPin, Phone, Send, ShieldCheck } from "lucide-react";
import type React from "react";
import { useState } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
    alert(
      "Thank you for contacting Prime Capital. Our team will get back to you shortly.",
    );
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
      title: "Abuja Office",
      details: ["No. 3, Sankuru Close", "Maitama, Abuja", "Nigeria"],
    },
    {
      icon: Phone,
      title: "Telephone",
      details: [
        "+234 (0) 9 123 4567",
        "+234 (0) 800 PRIME CAP",
        "Mon - Fri: 9:00 AM - 5:00 PM",
      ],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@primecapital.ng",
        "advisory@primecapital.ng",
        "compliance@primecapital.ng",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Our office time is 9:00am-5:00pm",
        "Monday - Friday",
        "Saturday - Sunday: Closed",
        "Public Holidays: Closed",
      ],
    },
  ];

  const departments = [
    {
      name: "Investment Advisory",
      email: "advisory@primecapital.ng",
      phone: "+234 (0) 9 123 4568",
    },
    {
      name: "Portfolio Management",
      email: "portfolios@primecapital.ng",
      phone: "+234 (0) 9 123 4569",
    },
    {
      name: "Compliance & Legal",
      email: "compliance@primecapital.ng",
      phone: "+234 (0) 9 123 4570",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-28 pb-12 md:pt-36 md:pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-background via-background to-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance">
            Connect With <span className="text-primary">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Whether you are looking to preserve wealth or create a new legacy,
            our team of experts is ready to guide you through Nigeria's complex
            financial landscape.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-10 text-lg">
                Fill out the form below and a member of our investment team will
                contact you within one business day.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="bg-muted/30 border-border focus:border-primary"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="bg-muted/30 border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 ..."
                      className="bg-muted/30 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Inquiry Type <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Portfolio Management"
                      className="bg-muted/30 border-border focus:border-primary"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you achieve your financial goals?"
                    rows={6}
                    className="bg-muted/30 border-border focus:border-primary resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-bold shadow-lg shadow-primary/20"
                >
                  Submit Inquiry <Send className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 p-4 rounded-xl border border-border">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  Your information is handled with absolute confidentiality in
                  line with our fiduciary duty.
                </div>
              </form>
            </div>

            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <div key={index} className="group">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-lg mb-2">{info.title}</h3>
                        <div className="space-y-1 text-muted-foreground">
                          {info.details.map((detail, idx) => (
                            <p key={idx}>{detail}</p>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h3 className="text-2xl font-bold mb-6">Departmental Access</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <Card
                      key={index}
                      className="border-none bg-muted/30 hover:bg-muted/50 transition-colors"
                    >
                      <CardContent className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <h4 className="font-bold text-lg">{dept.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {dept.email}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <Phone className="h-4 w-4" />
                          {dept.phone}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden h-64 relative border border-border shadow-2xl">
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-2" />
                    <p className="font-bold">Maitama, Abuja</p>
                    <p className="text-sm text-muted-foreground">
                      No. 3, Sankuru Close
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEC Verification */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50 border-y border-border">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            The SEC advises the public to always verify the registration status
            of any entity or investment product with the Commission before
            dealing with them to avoid investment scams. For verification or
            further information, please contact the SEC through their official
            website:{" "}
            <a
              href="https://www.sec.gov.ng"
              className="text-primary hover:underline font-medium"
            >
              www.sec.gov.ng
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
