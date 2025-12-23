"use client";

import type React from "react";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  formatPhoneNumberToE164,
  validatePhoneNumber,
} from "@/lib/phone-utils";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  offerText?: string;
}

export function BookingModal({
  open,
  onOpenChange,
  offerText = "Request More Info",
}: BookingModalProps) {
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
        setTimeout(() => {
          setSubmitted(false);
          onOpenChange(false);
        }, 3000);
      } else {
        setError(data.error || "Failed to submit form. Please try again.");
        setIsSubmitting(false);
      }
    } catch (err) {
      setError("Network error. Please check your connection and try again.");
      console.error("Form submission error:", err);
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{offerText}</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll text you immediately.
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="bg-primary/10 border-2 border-primary rounded-lg p-6 text-center">
            <p className="text-lg font-bold text-primary mb-2">Thank You!</p>
            <p className="text-sm text-muted-foreground">
              Check your phone - we'll text you shortly!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 text-center">
                <p className="text-xs font-medium text-red-800">{error}</p>
              </div>
            )}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <Label htmlFor="modal-firstName">First Name *</Label>
                <Input
                  id="modal-firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-lastName">Last Name *</Label>
                <Input
                  id="modal-lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className="h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-email">Email Address *</Label>
              <Input
                id="modal-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="h-11"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="modal-phone">Phone Number *</Label>
              <Input
                id="modal-phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="(336) 665-5233"
                className="h-11"
              />
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-xs text-blue-900">
                By submitting this form, you agree to receive SMS messages from
                Proehlific Park to provide the information you requested about
                programs and membership. Message and data rates may apply. Reply
                STOP to opt-out anytime.
              </p>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 font-semibold"
            >
              {isSubmitting ? "Submitting..." : offerText}
            </Button>

            <p className="text-xs text-muted-foreground text-center">
              No credit card required. All fitness levels welcome.
            </p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
