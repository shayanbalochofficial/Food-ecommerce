import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foodbuck-black-surface border-t border-foodbuck-black-card mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-white">Food</span>
              <span className="text-foodbuck-orange">Buck</span>
            </h3>
            <p className="text-foodbuck-gray-muted text-sm leading-relaxed">
              Premium dining experience featuring modern cuisine crafted with
              passion and precision.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/menu", label: "Menu" },
                { href: "/blog", label: "Blog" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foodbuck-gray-muted hover:text-foodbuck-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-foodbuck-gray-muted text-sm">
                <MapPin className="w-4 h-4 text-foodbuck-orange" />
                123 Culinary Lane, Food City, FC 12345
              </li>
              <li className="flex items-center gap-2 text-foodbuck-gray-muted text-sm">
                <Phone className="w-4 h-4 text-foodbuck-orange" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-foodbuck-gray-muted text-sm">
                <Mail className="w-4 h-4 text-foodbuck-orange" />
                hello@foodbuck.com
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-foodbuck-gray-muted hover:text-foodbuck-orange transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-foodbuck-gray-muted hover:text-foodbuck-orange transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-foodbuck-gray-muted hover:text-foodbuck-orange transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-foodbuck-black-card pt-8">
          <p className="text-center text-foodbuck-gray-muted text-sm">
            &copy; 2025 FoodBuck. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
