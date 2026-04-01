import Link from "next/link";
import { Shield, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">
              Safe<span className="text-cyan-400">Website</span>
            </span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed">
            Premium epoxy flooring solutions for residential and commercial
            spaces. Beauty, durability, and protection — all in one finish.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs text-white/40">
            Navigation
          </h3>
          <ul className="space-y-2">
            {[
              { href: "/", label: "Home" },
              { href: "/gallery", label: "Gallery" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-white/60 hover:text-cyan-400 text-sm transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-4 uppercase tracking-wider text-xs text-white/40">
            Contact
          </h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-white/60 text-sm">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              (555) 012-3456
            </li>
            <li className="flex items-center gap-3 text-white/60 text-sm">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              info@safewebsite.com
            </li>
            <li className="flex items-start gap-3 text-white/60 text-sm">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              123 Industrial Blvd, Suite 400
              <br />
              Houston, TX 77001
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-white/30 text-xs">
        © {new Date().getFullYear()} SafeWebsite. All rights reserved.
      </div>
    </footer>
  );
}
