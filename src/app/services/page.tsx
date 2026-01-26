import type { Metadata } from "next";
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
  Package,
  Clock,
  Shield,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Refrigerated Van & Cold-Chain Services | Glacier On Wheel",
  description:
    "Comprehensive cold-chain logistics solutions including refrigerated van rentals, IoT temperature monitoring, and frozen food transportation across North India.",
  keywords: [
    "frozen food logistics",
    "IoT temperature monitoring logistics",
    "refrigerated van rental",
    "cold chain transport services",
    "ice cream logistics",
  ],
};

export default function ServicesPage() {
  const mainServices = [
      {
        icon: Truck,
        title: "Refrigerated Van Rentals",
        description:
          "Modern fleet of temperature-controlled vehicles available for short-term and long-term rentals",
        features: [
          "Temperature-controlled vans maintaining -25°C to +8°C",
          "Ideal for ice-cream, dairy, frozen foods, and pharmaceuticals",
          "Short-term and long-term rental options",
          "Well-maintained fleet with regular servicing",
          "Flexible capacity options from 1 ton to 5 tons",
        ],
        image:
          "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Animated-1769434885700.png?width=8000&height=8000&resize=contain",
      },
    {
      icon: Package,
      title: "Cold-Chain Logistics Solutions",
      description:
        "End-to-end temperature-controlled transportation for your perishable goods",
      features: [
        "Complete supply chain management for cold-chain products",
        "Safe handling of temperature-sensitive goods",
        "Consistent temperature compliance throughout transit",
        "Door-to-door delivery services",
        "Quality assurance and product integrity maintenance",
      ],
      image:
        "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/Cold-chain-logistics-1769435165799.png?width=8000&height=8000&resize=contain",
    },
    {
      icon: Wifi,
      title: "IoT-Enabled Temperature Monitoring",
      description:
        "Real-time tracking and monitoring for complete visibility and control",
      features: [
        "24/7 real-time temperature tracking and alerts",
        "Digital temperature logs for compliance documentation",
        "Instant notifications for temperature deviations",
        "Reduced spoilage risk through proactive monitoring",
        "Complete transparency and audit trail",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
  ];

  const industries = [
    {
      icon: "🍦",
      title: "Ice-Cream Companies",
      description:
        "Ultra-cold transportation maintaining -18°C to -25°C for ice cream distribution",
    },
    {
      icon: "🍔",
      title: "QSR Chains",
      description:
        "Reliable cold-chain for quick-service restaurants including McDonald's, Domino's",
    },
    {
      icon: "🥛",
      title: "FMCG Brands",
      description:
        "Temperature-controlled logistics for dairy, beverages, and packaged foods",
    },
    {
      icon: "🍕",
      title: "Food & Beverage Companies",
      description:
        "Complete cold-chain solutions for fresh, frozen, and chilled products",
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Product Safety",
      description:
        "Maintain product quality and safety with precise temperature control",
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "99.8% on-time delivery rate ensuring your supply chain reliability",
    },
    {
      icon: BarChart3,
      title: "Cost Efficiency",
      description:
        "Reduce spoilage and wastage with optimized cold-chain logistics",
    },
    {
      icon: Wifi,
      title: "Technology Integration",
      description:
        "Advanced IoT tracking seamlessly integrated with your systems",
    },
  ];

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--light-ice)] to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl font-bold text-[var(--navy)] mb-6">
                Refrigerated Van & Cold-Chain Services
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Comprehensive temperature-controlled logistics solutions designed
                to keep your products fresh and safe
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-[var(--navy)]">-25°C</div>
                <div className="text-sm text-gray-600 mt-1">
                  Ultra-Cold Range
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-[var(--navy)]">24/7</div>
                <div className="text-sm text-gray-600 mt-1">IoT Monitoring</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-[var(--navy)]">7+</div>
                <div className="text-sm text-gray-600 mt-1">States Covered</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="text-3xl font-bold text-[var(--navy)]">500+</div>
                <div className="text-sm text-gray-600 mt-1">
                  Monthly Deliveries
                </div>
              </div>
            </div>
          </div>
        </section>

        {mainServices.map((service, index) => (
          <section
            key={index}
            className={`py-20 px-4 sm:px-6 lg:px-8 ${
              index % 2 === 0 ? "bg-white" : "bg-[var(--light-ice)]"
            }`}
          >
            <div className="max-w-7xl mx-auto">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={index % 2 === 1 ? "lg:order-2" : "lg:order-1"}
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-12 h-12 bg-[var(--navy)] rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-4xl font-bold text-[var(--navy)]">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-lg text-gray-700 mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-[var(--ice-blue)]/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-[var(--navy)] rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="mt-8 bg-[var(--navy)] hover:bg-[var(--navy)]/90"
                    size="lg"
                  >
                    <Link href="/contact">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div
                  className={index % 2 === 1 ? "lg:order-1" : "lg:order-2"}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} - Glacier On Wheel`}
                    width={800}
                    height={600}
                    className="rounded-xl shadow-lg w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--navy)] mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Specialized cold-chain expertise across diverse industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-[var(--navy)] transition-all hover:shadow-lg"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4">{industry.icon}</div>
                    <h3 className="text-xl font-semibold text-[var(--navy)] mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--light-ice)] to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--navy)] mb-4">
                Key Benefits
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Why businesses across North India trust our cold-chain solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="bg-white border-2">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 mx-auto bg-[var(--ice-blue)]/20 rounded-full flex items-center justify-center mb-4">
                      <benefit.icon className="w-8 h-8 text-[var(--navy)]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--navy)] mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <Card className="bg-gradient-to-br from-[var(--navy)] to-blue-900 text-white border-0">
              <CardContent className="p-12 text-center">
                <h2 className="text-4xl font-bold mb-4">
                  Need a Custom Cold-Chain Solution?
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  Our team will work with you to design the perfect
                  temperature-controlled logistics solution for your business
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-[var(--navy)] hover:bg-gray-100"
                  >
                    <Link href="/contact">Request a Quote</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[var(--navy)]"
                  >
                    <a href="tel:+919155956967">Call +91 9155956967</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
