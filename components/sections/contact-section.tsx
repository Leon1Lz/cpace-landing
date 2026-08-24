"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Building, 
  Users,
  Send,
  CheckCircle2
} from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "Professional Certification",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const contactInfo = [
    {
      title: "Main Office",
      address: "123 Business Center, Makati City, Metro Manila, Philippines",
      phone: "+63 2 8888 1234",
      email: "info@cpaceph.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM"
    },
    {
      title: "Training Center",
      address: "456 Learning Hub, Ortigas Center, Pasig City, Philippines",
      phone: "+63 2 8888 5678",
      email: "training@cpaceph.com",
      hours: "Monday - Saturday: 8:00 AM - 8:00 PM"
    }
  ]

  const departments = [
    {
      name: "Admissions",
      email: "admissions@cpaceph.com",
      phone: "+63 2 8888 1234 ext. 101",
      description: "For program inquiries and enrollment"
    },
    {
      name: "Corporate Services",
      email: "corporate@cpaceph.com",
      phone: "+63 2 8888 1234 ext. 102",
      description: "For business training and consultancy"
    },
    {
      name: "Student Support",
      email: "support@cpaceph.com",
      phone: "+63 2 8888 1234 ext. 103",
      description: "For student assistance and resources"
    }
  ]

  return (
    <section id="contact" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 border-emerald-200">
            Contact Us
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get in Touch with CPACE Philippines
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you advance your career and grow your organization. 
            Reach out to our team directly through the form below or our official communication channels.
          </p>
        </div>

        {/* Contact Form & Main Office Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send an Inquiry</h3>
            <p className="text-gray-500 text-sm mb-6">Fill out this quick form and our admissions team will respond within 24 hours.</p>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900">Message Received!</h4>
                <p className="text-gray-600 max-w-md mx-auto text-sm">
                  Thank you for reaching out to CPACE Philippines. Our representative will contact you shortly via email or phone.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold mt-4"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Juan Dela Cruz"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="juan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Contact Number</label>
                    <input
                      type="tel"
                      placeholder="+63 912 345 6789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Program of Interest</label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
                    >
                      <option value="Professional Certification">Professional Certification (CFMS, CMMS, COMS)</option>
                      <option value="Business Consultancy">Business Consultancy & ISO Certification</option>
                      <option value="Certificate & Short Courses">Certificate & Short Courses</option>
                      <option value="Management Training">Management Training</option>
                      <option value="Institutional Partnership">Institutional Partnership</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Your Message / Inquiry</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your training requirements or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  ></textarea>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.01]"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Submit Inquiry
                </Button>
              </form>
            )}
          </div>

          {/* Right: Office Cards */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            {contactInfo.map((location, index) => (
              <Card key={index} className="border border-gray-200/80 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-3 text-lg text-emerald-800">
                    <Building className="h-5 w-5 text-emerald-600" />
                    {location.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-gray-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-emerald-600 mt-1 flex-shrink-0" />
                    <span>{location.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>{location.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>{location.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span>{location.hours}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Departments */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Contact Our Specialized Departments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="border border-gray-200/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="h-6 w-6 text-emerald-600" />
                    <h4 className="text-lg font-semibold text-gray-900">{dept.name}</h4>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{dept.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-700">{dept.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <span className="text-gray-700">{dept.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
