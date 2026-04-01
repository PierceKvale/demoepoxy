"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
    alt: "Metallic epoxy floor with blue swirls",
    title: "Ocean Metallic Garage",
    category: "Residential",
    desc: "Custom ocean-blue metallic epoxy in a 3-car garage. High-gloss finish with anti-slip additive.",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=900&q=80",
    alt: "Modern kitchen with epoxy countertop",
    title: "Marble-Effect Countertop",
    category: "Kitchen",
    desc: "White and gold marble-effect epoxy countertop paired with under-mount lighting.",
  },
  {
    src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80",
    alt: "Open-plan living area with polished floor",
    title: "Open-Plan Living Floor",
    category: "Residential",
    desc: "Seamless warm gray epoxy unifying a large open-plan kitchen and living area.",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
    alt: "Luxury home interior with epoxy floor",
    title: "Luxury Penthouse Finish",
    category: "High-End Residential",
    desc: "Charcoal metallic epoxy with reflective micro-flake across 4,000 sq ft penthouse.",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=900&q=80",
    alt: "Restaurant kitchen with industrial epoxy floor",
    title: "Commercial Kitchen",
    category: "Commercial",
    desc: "Food-safe, chemical-resistant quartz-broadcast system for a high-volume restaurant kitchen.",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80",
    alt: "Warehouse epoxy floor coating",
    title: "Warehouse Safety Coating",
    category: "Industrial",
    desc: "Heavy-duty gray epoxy with high-visibility yellow safety lanes in a 20,000 sq ft warehouse.",
  },
  {
    src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=900&q=80",
    alt: "Retail showroom polished floor",
    title: "Retail Showroom",
    category: "Commercial",
    desc: "High-gloss white epoxy with decorative flake for a modern automotive dealership showroom.",
  },
  {
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80",
    alt: "Modern concrete-effect epoxy hallway",
    title: "Concrete-Effect Entry",
    category: "Residential",
    desc: "Polished concrete-look epoxy for a 1,200 sq ft open-plan home entry and hallway.",
  },
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    alt: "Outdoor epoxy pool deck",
    title: "Pool Deck Coating",
    category: "Outdoor",
    desc: "UV-stable, slip-resistant epoxy coating for a 3,000 sq ft residential pool deck.",
  },
];

const categories = ["All", "Residential", "Commercial", "Industrial", "Kitchen", "Outdoor", "High-End Residential"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="bg-black text-white min-h-screen">
      {/* ── Header ── */}
      <section className="pt-40 pb-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,182,212,0.12)_0%,_transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20">
            Our Portfolio
          </Badge>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
            Project Gallery
          </h1>
          <p className="text-white/50 text-lg leading-relaxed">
            Browse our portfolio of residential, commercial, and industrial epoxy
            flooring and coating projects across the greater Houston area.
          </p>
        </div>
      </section>

      {/* ── Category pills ── */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm border transition cursor-pointer select-none ${
                active === cat
                  ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-300"
                  : "border-white/10 text-white/50 hover:border-white/30 hover:text-white/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Masonry-style grid ── */}
      <section className="px-6 pb-28">
        <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {filtered.map(({ src, alt, title, category, desc }) => (
            <div
              key={title}
              className="break-inside-avoid rounded-2xl overflow-hidden border border-white/10 bg-white/5 group hover:border-cyan-500/40 transition-colors"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={src}
                  alt={alt}
                  width={900}
                  height={600}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-black/60 backdrop-blur-sm border border-white/10 text-white/80">
                    {category}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-white text-base mb-1">{title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 border-t border-white/10 text-center">
        <h2 className="text-3xl font-bold mb-3">Love What You See?</h2>
        <p className="text-white/50 mb-8 max-w-md mx-auto">
          Let&apos;s discuss your project and create something extraordinary for
          your space.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all shadow-xl shadow-cyan-500/25"
        >
          Get a Quote <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
    </main>
  );
}
