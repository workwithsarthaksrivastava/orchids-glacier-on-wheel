import type { Metadata } from "next";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  Users,
  Target,
  TrendingUp,
  Snowflake,
  Shield,
  Clock,
  CheckCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Glacier On Wheel | Cold-Chain Experts in Bihar",
  description:
    "Learn about Glacier On Wheel, Bihar's 1st pioneer in cold-chain logistics with IoT-enabled temperature monitoring and reliable refrigerated transportation.",
  keywords: [
    "cold chain experts india",
    "refrigerated transport company",
    "cold chain logistics bihar",
    "temperature controlled logistics",
  ],
};

export default function AboutPage() {
  const whyChooseUs = [
    {
      icon: Snowflake,
      title: "Specialized Refrigerated Fleet",
      description:
        "Modern temperature-controlled vehicles designed for optimal cold-chain performance",
    },
    {
      icon: Shield,
      title: "Real-time IoT Tracking",
      description:
        "Advanced temperature monitoring systems ensuring complete visibility and control",
    },
    {
      icon: Users,
      title: "Experienced Professionals",
      description:
        "Trained cold-chain specialists with expertise in handling sensitive cargo",
    },
    {
      icon: CheckCircle,
      title: "Enterprise Partnerships",
      description:
        "Proven track record with leading FMCG brands and QSR chains across India",
    },
    {
      icon: Clock,
      title: "High Reliability",
      description:
        "Consistent on-time delivery with zero compromise on temperature compliance",
    },
    {
      icon: TrendingUp,
      title: "Scalable Solutions",
      description:
        "Flexible rental options from short-term to long-term logistics partnerships",
    },
  ];

  const industries = [
    {
      title: "Ice-Cream Logistics",
      description:
        "Specialized ultra-cold transportation maintaining -18°C to -25°C temperatures",
      icon: "🍦",
    },
    {
      title: "QSR Supply Chains",
      description:
        "Reliable cold-chain solutions for quick-service restaurant operations",
      icon: "🍔",
    },
    {
      title: "FMCG & Dairy Products",
      description:
        "Temperature-controlled transport for dairy, frozen foods, and beverages",
      icon: "🥛",
    },
    {
      title: "Frozen & Chilled Foods",
      description:
        "Complete cold-chain logistics for perishable food products and ingredients",
      icon: "❄️",
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
                About Glacier On Wheel
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Bihar's 1st pioneer in cold-chain logistics, revolutionizing
                temperature-controlled transportation across North India
              </p>
            </div>

            <div className="mt-12">
              <Image
                src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=1200&q=80"
                alt="Glacier On Wheel cold chain logistics operations"
                width={1200}
                height={500}
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[var(--navy)] mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-lg text-gray-700">
                  <p>
                    Glacier On Wheel was founded with a clear mission: to bridge
                    the cold-chain logistics gap in Bihar and North India. As
                    the region's first dedicated cold-chain logistics provider,
                    we recognized the critical need for reliable
                    temperature-controlled transportation in the rapidly growing
                    FMCG and food service industries.
                  </p>
                  <p>
                    Our journey began with a simple yet powerful vision - to
                    ensure that perishable goods reach their destination in
                    perfect condition, every single time. Today, we've evolved
                    into a technology-driven logistics partner trusted by leading
                    national brands.
                  </p>
                  <p>
                    With IoT-enabled temperature monitoring and a modern fleet of
                    refrigerated vehicles, we deliver more than just
                    transportation - we deliver peace of mind.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[var(--navy)]">
                      500+
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      Deliveries Monthly
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[var(--navy)]">
                      7+
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      States Covered
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[var(--navy)]">
                      99.8%
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      On-Time Delivery
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <Card className="border-l-4 border-l-[var(--navy)]">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Target className="w-8 h-8 text-[var(--navy)] flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--navy)] mb-2">
                          Our Mission
                        </h3>
                        <p className="text-gray-700">
                          To provide reliable, safe, and temperature-controlled
                          transportation solutions that preserve product quality
                          and ensure customer satisfaction across every mile.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-blue-600">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Award className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--navy)] mb-2">
                          Our Vision
                        </h3>
                        <p className="text-gray-700">
                          To become North India's most trusted cold-chain
                          logistics partner, setting new standards in
                          temperature-controlled transportation and technology
                          integration.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-cyan-500">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <TrendingUp className="w-8 h-8 text-cyan-500 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--navy)] mb-2">
                          Our Commitment
                        </h3>
                        <p className="text-gray-700">
                          Technology-driven operations, transparent communication,
                          and unwavering focus on maintaining the integrity of
                          your temperature-sensitive cargo.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--light-ice)]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--navy)] mb-4">
                Why Choose Us
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Industry-leading cold-chain logistics solutions backed by
                technology and expertise
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((item, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-[var(--ice-blue)] transition-all hover:shadow-lg bg-white"
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-[var(--ice-blue)]/20 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="w-6 h-6 text-[var(--navy)]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--navy)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[var(--navy)] mb-4">
                Industry Expertise
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Deep experience serving diverse cold-chain requirements across
                multiple industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Card
                  key={index}
                  className="border-2 hover:border-[var(--navy)] transition-all hover:shadow-lg"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="text-5xl">{industry.icon}</div>
                      <div>
                        <h3 className="text-2xl font-semibold text-[var(--navy)] mb-2">
                          {industry.title}
                        </h3>
                        <p className="text-gray-700">{industry.description}</p>
                      </div>
                    </div>
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
                Operational Excellence
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
                alt="Cold chain logistics operations"
                width={800}
                height={600}
                className="rounded-xl shadow-lg w-full h-[400px] object-cover"
              />

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[var(--navy)] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--navy)] mb-2">
                      Strong North India Presence
                    </h3>
                    <p className="text-gray-700">
                      Extensive operational network across Bihar, UP, Jharkhand,
                      West Bengal, Delhi-NCR, Punjab, and Haryana
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[var(--navy)] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--navy)] mb-2">
                      24/7 Temperature Monitoring
                    </h3>
                    <p className="text-gray-700">
                      IoT-enabled real-time tracking ensures temperature
                      compliance throughout the journey
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[var(--navy)] rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--navy)] mb-2">
                      Proven Enterprise Experience
                    </h3>
                    <p className="text-gray-700">
                      Trusted logistics partner for leading brands including
                      Blinkit, McDonald's, Domino's, AMUL, and more
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
