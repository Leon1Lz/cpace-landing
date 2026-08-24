"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services & Certifications", href: "/services" },
    { name: "Industry Insights", href: "/insights" },
    { name: "Contact Us", href: "/#contact" }
  ]

  const programs = [
    { name: "Professional Certifications", href: "/services" },
    { name: "Business Consultancy", href: "/services" },
    { name: "Corporate Training", href: "/services" },
    { name: "Skills Development", href: "/services" }
  ]

  const resources = [
    { name: "About CPACE", href: "/about" },
    { name: "Insights & Articles", href: "/insights" },
    { name: "Institutional Partnerships", href: "/#partners" },
    { name: "Inquire Now", href: "/#contact" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-28 h-12">
                <Image
                  src="/logo.svg"
                  alt="CPACE Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md text-sm leading-relaxed">
              The Center for Professional Advancement and Continuing Education, Inc. (CPACE Philippines) 
              is dedicated to empowering professionals through quality education and certification programs.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="h-4 w-4 text-emerald-400" />
                <span>+63 2 8888 1234</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="h-4 w-4 text-emerald-400" />
                <span>info@cpaceph.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span>Makati City, Metro Manila, Philippines</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-emerald-400">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-emerald-400">Programs</h3>
            <ul className="space-y-2 text-sm">
              {programs.map((program) => (
                <li key={program.name}>
                  <Link 
                    href={program.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    {program.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-emerald-400">Resources</h3>
            <ul className="space-y-2 text-sm">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    href={resource.href}
                    className="text-gray-300 hover:text-emerald-400 transition-colors"
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} CPACE Philippines. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
