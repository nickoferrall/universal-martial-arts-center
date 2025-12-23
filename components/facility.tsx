"use client";

import type React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";
import {
  formatPhoneNumberToE164,
  validatePhoneNumber,
} from "@/lib/phone-utils";

export function Facility() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!validatePhoneNumber(formData.phone)) {
      setError("Please enter a valid 10-digit phone number");
      setIsSubmitting(false);
      return;
    }

    const formattedPhone = formatPhoneNumberToE164(formData.phone);

    try {
      const response = await fetch("/api/contact-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          phone: formattedPhone,
          email: formData.email,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({ firstName: "", lastName: "", email: "", phone: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.error || "Failed to submit form. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      console.error("Form submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="facility" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About Universal Martial Arts Center
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The best martial arts center in Chino Hills and the Inland Empire
            </p>
          </div>

          <Card className="border border-border/50">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Universal Martial Arts Center is dedicated to{" "}
                  <span className="font-bold text-foreground">respect</span>,{" "}
                  <span className="font-bold text-foreground">discipline</span>, and{" "}
                  <span className="font-bold text-foreground">excellence</span>. Our mission is to provide the highest quality martial arts training in Chino Hills and the Inland Empire.
                </p>
                <p>
                  We offer comprehensive martial arts programs including Krav Maga, Brazilian Jiu Jitsu, Fitness Classes, Kids Krav Maga, and Kids Karate. Our expert instructors are committed to helping students of all ages develop self-defense skills, physical fitness, mental discipline, and confidence.
                </p>
                <p>
                  Our family-oriented community creates a supportive environment where everyone can thrive. Whether you&apos;re looking for practical self-defense training, fitness classes, or programs for your children, we have classes designed to meet your needs.
                </p>
                <p className="font-semibold text-foreground text-xl pt-4">
                  Respect All. Fear None. Visit us and take a tour! We would love to meet you and show you how martial arts can transform your life.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visit Our Gym Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Visit Our Gym
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Come see our facility and meet our team
            </p>
          </div>

          <div className="space-y-8">
            <Card className="border border-border/50">
              <CardContent className="p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">
                        Address
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        14610 Pipeline Ave
                        <br />
                        Chino, CA 91710
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Phone</h4>
                      <a
                        href="tel:9095971710"
                        className="text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        (909) 597-1710
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Email</h4>
                      <a
                        href="mailto:info@umacchinohills.com"
                        className="text-sm text-primary hover:text-primary/80 transition-colors"
                      >
                        info@umacchinohills.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/50 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-[16/9] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.5!2d-117.71547!3d34.01794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x145657538f78d87!2sUniversal+Martial+Arts+Centers!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Universal Martial Arts Center Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Request Information Form - Now separate */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Request Information
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start your fitness journey today. Fill out the form and we&apos;ll
              be in touch within 24 hours.
            </p>
          </div>

          <Card
            id="lead-form"
            className="border border-border/50 shadow-xl max-w-3xl mx-auto"
          >
            <CardContent className="p-8 md:p-10">
              {submitted ? (
                <div className="bg-primary/10 border-2 border-primary rounded-2xl p-8 text-center">
                  <p className="text-xl font-bold text-primary mb-2">
                    Thank You!
                  </p>
                  <p className="text-muted-foreground">
                    We&apos;ll text you shortly to get started!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center">
                      <p className="text-sm font-medium text-red-800">
                        {error}
                      </p>
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="border-2 h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="border-2 h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(909) 597-1710"
                        className="border-2 h-12"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="border-2 h-12"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-base font-semibold h-12"
                  >
                    {isSubmitting ? "Submitting..." : "Request Information"}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting this form, you agree to receive SMS messages
                    from Universal Martial Arts Center to provide the information you requested
                    about classes and programs. Message and data rates may
                    apply. Reply STOP to opt-out anytime.
                  </p>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
