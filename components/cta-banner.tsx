"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  formatPhoneNumberToE164,
  validatePhoneNumber,
} from "@/lib/phone-utils";

export function CtaBanner() {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Request Information Now
          </h2>
          {submitted ? (
            <div className="bg-primary/10 border-2 border-primary rounded-2xl p-8 text-center">
              <p className="text-xl font-bold text-primary mb-2">Thank You!</p>
              <p className="text-muted-foreground">
                We&apos;ll text you shortly to get started!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 text-center">
                  <p className="text-sm font-medium text-red-800">{error}</p>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 text-lg"
              >
                {isSubmitting ? "Submitting..." : "Request More Info"}
              </Button>
              <p className="text-xs text-muted-foreground text-center leading-relaxed">
                By submitting this form, you agree to receive SMS messages from
                Proehlific Park to provide the information you requested about
                programs and membership. Message and data rates may apply. Reply
                STOP to opt-out anytime.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
