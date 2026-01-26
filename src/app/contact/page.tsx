import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Glacier On Wheel | Cold-Chain Logistics Hajipur",
  description:
    "Get in touch with Glacier On Wheel for refrigerated van rentals and cold-chain logistics services. Located in Hajipur, Bihar. Call +91 9155956967",
  keywords: [
    "cold chain logistics Hajipur",
    "refrigerated transport Bihar",
    "contact cold chain logistics",
    "glacier on wheel contact",
  ],
};

export default function ContactPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[var(--light-ice)] to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl font-bold text-[var(--navy)] mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Get in touch for reliable cold-chain logistics solutions across
                North India
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mt-12">
              <Card className="border-2 hover:border-[var(--ice-blue)] transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-[var(--ice-blue)]/20 rounded-full flex items-center justify-center mb-4">
                    <MapPin className="w-8 h-8 text-[var(--navy)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--navy)] mb-2">
                    Office Address
                  </h3>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=102+Ground+Floor+Malti+Complex+Ramashish+Chowk+Hajipur+844101+Bihar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[var(--navy)] transition-colors cursor-pointer"
                  >
                    102, Ground Floor, Malti Complex
                    <br />
                    Ramashish Chowk
                    <br />
                    Hajipur – 844101, Bihar
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-[var(--ice-blue)] transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-[var(--ice-blue)]/20 rounded-full flex items-center justify-center mb-4">
                    <Phone className="w-8 h-8 text-[var(--navy)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--navy)] mb-2">
                    Phone Numbers
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <a
                      href="tel:+919155956967"
                      className="block hover:text-[var(--navy)] transition-colors"
                    >
                      📞 +91 9155956967
                    </a>
                    <a
                      href="tel:+917761925078"
                      className="block hover:text-[var(--navy)] transition-colors"
                    >
                      📞 +91 7761925078
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-[var(--ice-blue)] transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-[var(--ice-blue)]/20 rounded-full flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-[var(--navy)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--navy)] mb-2">
                    Business Hours
                  </h3>
                  <div className="text-gray-700">
                    <p>Monday - Saturday</p>
                    <p className="font-semibold">9:00 AM - 7:00 PM</p>
                    <p className="mt-2 text-sm">24/7 Support Available</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-[var(--ice-blue)] transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-[var(--ice-blue)]/20 rounded-full flex items-center justify-center mb-4">
                    <Instagram className="w-8 h-8 text-[var(--navy)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--navy)] mb-2">
                    Follow Us
                  </h3>
                  <a
                    href="https://www.instagram.com/glacieronwheel?igsh=MWVkamo4YnZyeTBzYg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-gray-700 hover:text-[var(--navy)] transition-colors mt-2"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>@glacieronwheel</span>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <ContactForm />
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-[var(--navy)] mb-6">
                    Visit Our Office
                  </h2>
                  <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.5!2d85.2!3d25.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDQwJzQ4LjAiTiA4NcKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Glacier On Wheel Office Location"
                    ></iframe>
                  </div>
                </div>

                <Card className="bg-[var(--light-ice)] border-2 border-[var(--ice-blue)]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-[var(--navy)] mb-4">
                      Quick Response Guarantee
                    </h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[var(--navy)] rounded-full mt-2"></div>
                        <p>Phone inquiries answered within 2 hours</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[var(--navy)] rounded-full mt-2"></div>
                        <p>Quote requests processed within 24 hours</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[var(--navy)] rounded-full mt-2"></div>
                        <p>Emergency cold-chain support available 24/7</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[var(--navy)] rounded-full mt-2"></div>
                        <p>Dedicated account manager for enterprise clients</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[var(--navy)] to-blue-900 text-white border-0">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Need Immediate Assistance?
                    </h3>
                    <p className="mb-4 text-gray-200">
                      Call us now for urgent cold-chain logistics requirements
                    </p>
                    <div className="flex flex-col space-y-3">
                      <a
                        href="tel:+919155956967"
                        className="flex items-center justify-center space-x-2 bg-white text-[var(--navy)] py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                      >
                        <Phone className="w-5 h-5" />
                        <span>+91 9155956967</span>
                      </a>
                      <a
                        href="tel:+917761925078"
                        className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white py-3 px-6 rounded-lg hover:bg-white/20 transition-colors font-semibold"
                      >
                        <Phone className="w-5 h-5" />
                        <span>+91 7761925078</span>
                      </a>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--navy)] mb-4">
                Serving North India
              </h2>
              <p className="text-lg text-gray-700">
                Our cold-chain logistics network covers major cities and regions
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                "Hajipur, Bihar",
                "Patna, Bihar",
                "Muzaffarpur, Bihar",
                "Ranchi, Jharkhand",
                "Kolkata, West Bengal",
                "Lucknow, UP",
                "Delhi-NCR",
                "Chandigarh, Punjab",
              ].map((city, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg text-center font-medium text-gray-700 hover:bg-[var(--ice-blue)]/20 transition-colors"
                >
                  {city}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
