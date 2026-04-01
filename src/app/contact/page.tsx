"use client";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    lines: ["(555) 012-3456", "Mon–Fri, 8am–6pm"],
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    lines: ["info@safewebsite.com", "We reply within 24 hours"],
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Office",
    lines: ["123 Industrial Blvd, Suite 400", "Houston, TX 77001"],
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Business Hours",
    lines: ["Mon–Fri: 8:00am – 6:00pm", "Sat: 9:00am – 3:00pm"],
  },
];

const services = [
  "Garage Floor",
  "Commercial Coating",
  "Decorative Finish",
  "Countertop",
  "Industrial / Warehouse",
  "Outdoor / Pool Deck",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
  };

  return (
    <main className="bg-black text-white min-h-screen">
      {/* ── Header ── */}
      <section className="pt-40 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.10)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20">
            Get in Touch
          </Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Contact Us
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            Ready for a free consultation? Fill out the form below and our team
            will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Contact Cards ── */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {contactInfo.map(({ icon, title, lines }) => (
            <Card
              key={title}
              className="bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors"
            >
              <CardContent className="p-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-3">
                  {icon}
                </div>
                <div className="font-semibold text-white text-sm mb-1">{title}</div>
                {lines.map((line, i) => (
                  <div key={i} className="text-white/50 text-sm">
                    {line}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ── Form + Map ── */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Form */}
          <div className="lg:col-span-3">
            <Card className="bg-white/5 border border-white/10">
              <CardContent className="p-8">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-white/50">
                      Thank you for reaching out. One of our team members will
                      contact you within 24 business hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({ name: "", email: "", phone: "", service: "", message: "" });
                      }}
                      className="mt-8 text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-1">
                        Send a Message
                      </h2>
                      <p className="text-white/40 text-sm">
                        All fields marked * are required.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white/70">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          required
                          placeholder="John Smith"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white/70">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white/70">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(555) 000-0000"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-white/70">
                          Service Interested In
                        </Label>
                        <select
                          id="service"
                          value={form.service}
                          onChange={(e) => setForm({ ...form, service: e.target.value })}
                          className="w-full h-10 px-3 rounded-md bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 appearance-none"
                        >
                          <option value="" className="bg-zinc-900">
                            Select a service…
                          </option>
                          {services.map((s) => (
                            <option key={s} value={s} className="bg-zinc-900">
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white/70">
                        Tell Us About Your Project *
                      </Label>
                      <Textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Describe your space, approximate square footage, timeline, and any specific requirements…"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-cyan-500/50 focus:ring-cyan-500/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-base rounded-xl shadow-lg shadow-cyan-500/20 transition-all"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-white/10 flex-1 relative min-h-56">
              <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#0ea5e920,#1d4ed820,#0ea5e920)] animate-spin-slow" />
              <div className="absolute inset-0 bg-white/[0.03]" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <MapPin className="w-10 h-10 text-cyan-400 mb-3" />
                <div className="font-semibold text-white">SafeWebsite HQ</div>
                <div className="text-white/50 text-sm mt-1">
                  123 Industrial Blvd, Suite 400
                  <br />
                  Houston, TX 77001
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Why choose us */}
            <Card className="bg-white/5 border border-white/10">
              <CardContent className="p-6">
                <h3 className="font-bold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3">
                  {[
                    "Free on-site consultation & estimate",
                    "Licensed, bonded, and fully insured",
                    "2-year workmanship warranty",
                    "Fast turnaround — most jobs in 1–2 days",
                    "100% customer satisfaction guarantee",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/60 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
