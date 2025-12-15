"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.success("Message Sent Successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="pt-20 pb-20">
      <div className="bg-foodbuck-black-surface py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
            Get in <span className="text-foodbuck-orange">Touch</span>
          </h1>
          <p className="text-foodbuck-gray-muted text-xl">
            We&apos;d love to hear from you. Reach out with any questions or
            reservations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="bg-foodbuck-black-card rounded-2xl border border-foodbuck-black-surface p-8">
            <Mail className="w-8 h-8 text-foodbuck-orange mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
            <p className="text-foodbuck-gray-muted">hello@foodbuck.com</p>
          </div>

          <div className="bg-foodbuck-black-card rounded-2xl border border-foodbuck-black-surface p-8">
            <Phone className="w-8 h-8 text-foodbuck-orange mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">Phone</h3>
            <p className="text-foodbuck-gray-muted">+1 (555) 123-4567</p>
          </div>

          <div className="bg-foodbuck-black-card rounded-2xl border border-foodbuck-black-surface p-8">
            <MapPin className="w-8 h-8 text-foodbuck-orange mb-4" />
            <h3 className="text-white font-semibold text-lg mb-2">Location</h3>
            <p className="text-foodbuck-gray-muted">
              123 Culinary Lane, Food City, FC 12345
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-foodbuck-gray-muted text-sm mb-2 block">
                  Your Name
                </label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-foodbuck-black-surface border-foodbuck-black-card text-white"
                />
              </div>

              <div>
                <label className="text-foodbuck-gray-muted text-sm mb-2 block">
                  Email Address
                </label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-foodbuck-black-surface border-foodbuck-black-card text-white"
                />
              </div>

              <div>
                <label className="text-foodbuck-gray-muted text-sm mb-2 block">
                  Subject
                </label>
                <Input
                  type="text"
                  placeholder="Reservation Request"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="bg-foodbuck-black-surface border-foodbuck-black-card text-white"
                />
              </div>

              <div>
                <label className="text-foodbuck-gray-muted text-sm mb-2 block">
                  Message
                </label>

                <Textarea
                  placeholder="Tell us what's on your mind..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-foodbuck-black-surface border-foodbuck-black-card text-white min-h-32"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-foodbuck-orange hover:bg-foodbuck-orange/90 text-foodbuck-black font-semibold py-6"
              >
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-white mb-8">Hours & Info</h2>

            <div className="bg-foodbuck-black-card rounded-2xl border border-foodbuck-black-surface p-8">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-foodbuck-orange" />
                    <h3 className="text-white font-semibold">
                      Hours of Operation
                    </h3>
                  </div>
                  <div className="text-foodbuck-gray-muted space-y-1">
                    <p>Monday - Thursday: 5:00 PM - 11:00 PM</p>
                    <p>Friday - Saturday: 5:00 PM - 12:00 AM</p>
                    <p>Sunday: 5:00 PM - 10:00 PM</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Reservations
                  </h3>
                  <p className="text-foodbuck-gray-muted">
                    We recommend making reservations for parties of 4 or more.
                    Call us or book online.
                  </p>
                </div>

                <div>
                  <h3 className="text-white font-semibold mb-2">
                    Private Events
                  </h3>
                  <p className="text-foodbuck-gray-muted">
                    Hosting a special occasion? Contact our events team for
                    catering and private dining options.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden h-96 border border-foodbuck-black-surface">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.006!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMK0IDAzJzIxLjYiVw!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}
