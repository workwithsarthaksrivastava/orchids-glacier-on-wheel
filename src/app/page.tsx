import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Truck,
  Thermometer,
  Wifi,
  MapPin,
  Phone,
  FileText,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Truck,
      title: "Refrigerated Van Rentals",
      description:
        "Temperature-controlled transportation solutions for your perishable goods",
    },
    {
      icon: Thermometer,
      title: "Cold-Chain Experts",
      description:
        "Specialized handling of frozen, chilled, and temperature-sensitive products",
    },
    {
      icon: Wifi,
      title: "IoT-Enabled Monitoring",
      description:
        "Real-time temperature tracking and alerts for complete peace of mind",
    },
    {
      icon: MapPin,
      title: "North India Coverage",
      description:
        "Extensive operational reach across Bihar, UP, Jharkhand, West Bengal & more",
    },
  ];

  const trustedLogos = [
    { name: "Blinkit", alt: "Blinkit logo" },
    { name: "McDonald's", alt: "McDonald's logo" },
    { name: "Domino's", alt: "Domino's logo" },
    { name: "AMUL", alt: "AMUL logo" },
    { name: "Mother Dairy", alt: "Mother Dairy logo" },
    { name: "Hobby Bells", alt: "Hobby Bells logo" },
  ];

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-[var(--light-ice)] to-white">
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--ice-blue)]/20 to-transparent"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[var(--navy)] leading-tight">
                  North India's Pioneer in
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    Cold-Chain Logistics
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-gray-700 max-w-3xl mx-auto">
                  IoT-Enabled Refrigerated Van Rentals Across North India
                </p>
              </div>

              <div className="flex flex-wrap gap-6 justify-center text-sm sm:text-base">
                <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-full shadow-sm">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Refrigerated Van Rentals</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-full shadow-sm">
                  <Thermometer className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Cold-Chain Experts</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-full shadow-sm">
                  <Wifi className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">IoT-Enabled Monitoring</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-3 rounded-full shadow-sm">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="font-medium">Serving North India</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[var(--navy)] hover:bg-[var(--navy)]/90 text-lg px-8 py-6"
                >
                  <Link href="/contact">
                    <FileText className="w-5 h-5 mr-2" />
                    Request a Quote
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white text-lg px-8 py-6"
                >
                  <a href="tel:+919155956967">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>

            <div className="mt-16 relative">
              <Image
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&q=80"
                alt="Refrigerated van for cold chain logistics in Bihar"
                width={1200}
                height={600}
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                priority
              />
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
                About Glacier On Wheel
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Glacier On Wheel is Bihar's first dedicated cold-chain
                logistics provider, delivering temperature-controlled
                transportation solutions across North India. We specialize in
                refrigerated van rentals for FMCG, QSR, ice-cream, and
                perishable goods industries.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[var(--light-ice)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
                Our Services
              </h2>
              <p className="text-lg text-gray-700">
                Comprehensive cold-chain solutions for your business
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-[var(--ice-blue)] transition-all hover:shadow-lg"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto bg-[var(--ice-blue)]/20 rounded-full flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-[var(--navy)]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--navy)]">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
                Operations Across North India
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Strong presence in Bihar, UP, Jharkhand, West Bengal, Delhi-NCR, Punjab, and Haryana
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                "Bihar",
                "Uttar Pradesh",
                "Jharkhand",
                "West Bengal",
                "Delhi-NCR",
                "Punjab",
                "Haryana",
                "North India",
              ].map((region, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg text-center font-semibold ${
                    region === "Bihar"
                      ? "bg-[var(--navy)] text-white"
                      : "bg-[var(--ice-blue)]/20 text-[var(--navy)]"
                  }`}
                >
                  {region}
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Image
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80"
                alt="North India coverage map"
                width={1200}
                height={400}
                className="rounded-xl w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--light-ice)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
                Trusted by Leading Brands
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {trustedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24"
                >
                  <span className="text-lg font-semibold text-gray-700 text-center">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-600 mt-8">
              Logos shown for representation of past logistics engagements.
            </p>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--navy)] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300">
              Contact us today for reliable cold-chain logistics solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[var(--navy)] hover:bg-gray-100 text-lg px-8 py-6"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[var(--navy)] text-lg px-8 py-6"
              >
                <a href="tel:+919155956967">Call +91 9155956967</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
