import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Star, Zap, Shield, Layers } from "lucide-react";
import { SmokeBackground } from "@/components/ui/spooky-smoke-animation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Garage Floors",
    desc: "Transform your garage with a seamless, high-gloss epoxy finish that resists oil, chemicals, and heavy traffic.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Commercial Coatings",
    desc: "Industrial-grade epoxy systems built for warehouses, factories, showrooms, and retail environments.",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Decorative Finishes",
    desc: "Metallic, flake, quartz, and custom artistic designs to elevate any residential or commercial space.",
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Countertops",
    desc: "Durable, food-safe epoxy countertops with stunning marbled, solid, or custom color options.",
  },
];

const stats = [
  { value: "500+", label: "Projects Completed" },
  { value: "12+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "50+", label: "Color Options" },
];

const testimonials = [
  {
    name: "Marcus T.",
    role: "Homeowner",
    text: "SafeWebsite transformed our dull concrete garage into a showroom-quality floor. The team was professional and the result exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Sandra L.",
    role: "Restaurant Owner",
    text: "We needed a commercial kitchen floor that was both beautiful and easy to clean. SafeWebsite delivered on every front.",
    rating: 5,
  },
  {
    name: "Derek P.",
    role: "Property Manager",
    text: "Used them for three properties so far. Consistent quality, on-time delivery, and competitive pricing every single time.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      {/* ── Hero ── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SmokeBackground smokeColor="#0ea5e9" />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20 text-sm px-4 py-1">
            Premium Epoxy Flooring
          </Badge>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6">
            Floors That
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Make a Statement
            </span>
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            SafeWebsite delivers world-class epoxy coating solutions for homes
            and businesses. Durable, stunning, and built to last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/gallery"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 flex items-center justify-center gap-2"
            >
              View Our Work <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
          <span className="text-white/30 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-16 border-y border-white/10 bg-black/80">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {value}
              </div>
              <div className="text-white/50 text-sm mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/20">
              What We Do
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">
              From simple garage coatings to elaborate commercial flooring
              systems — we handle it all with precision and care.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon, title, desc }) => (
              <Card
                key={title}
                className="bg-white/5 border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.08] transition-all group"
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                    {icon}
                  </div>
                  <h3 className="font-semibold text-white text-lg mb-2">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Preview ── */}
      <section className="py-20 px-6 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <Badge className="mb-3 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/20">
                Portfolio
              </Badge>
              <h2 className="text-4xl font-bold">Recent Projects</h2>
            </div>
            <Link
              href="/gallery"
              className="text-cyan-400 text-sm font-medium flex items-center gap-1 hover:text-cyan-300 transition-colors"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
                alt: "Metallic epoxy garage floor",
                label: "Metallic Garage",
              },
              {
                src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
                alt: "Modern kitchen countertop",
                label: "Kitchen Countertop",
              },
              {
                src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
                alt: "Commercial epoxy floor",
                label: "Commercial Space",
              },
            ].map(({ src, alt, label }) => (
              <div
                key={label}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 left-4 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border border-blue-500/30 hover:bg-blue-500/20">
              Testimonials
            </Badge>
            <h2 className="text-4xl font-bold">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ name, role, text, rating }) => (
              <Card
                key={name}
                className="bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors"
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-5">
                    &ldquo;{text}&rdquo;
                  </p>
                  <div>
                    <div className="font-semibold text-white">{name}</div>
                    <div className="text-white/40 text-xs">{role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative rounded-3xl overflow-hidden p-px bg-gradient-to-r from-cyan-500/50 via-blue-600/50 to-cyan-500/50">
            <div className="bg-black rounded-3xl px-10 py-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Transform
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Your Space?
                </span>
              </h2>
              <p className="text-white/50 mb-8 max-w-xl mx-auto">
                Get a free, no-obligation quote from our expert team today. We
                serve the greater Houston area and surrounding regions.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg hover:from-cyan-400 hover:to-blue-500 transition-all shadow-2xl shadow-cyan-500/30"
              >
                Get Your Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
