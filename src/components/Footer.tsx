import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/GOW-Icon-1769425042165.jpg?width=8000&height=8000&resize=contain"
                  alt="Glacier on Wheels Logo"
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-2xl font-bold">Glacier on Wheels</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Bihar's pioneer in cold-chain logistics providing IoT-enabled
                refrigerated van rentals across North India.
              </p>
            </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-2">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    102, Ground Floor, Malti Complex, Ramashish Chowk, Hajipur –
                    844101, Bihar
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <a href="tel:+919155956967" className="hover:text-white">
                    +91 9155956967
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <a href="tel:+917761925078" className="hover:text-white">
                    +91 7761925078
                  </a>
                </li>
                <li className="flex items-center space-x-2">
                  <Instagram className="w-5 h-5 flex-shrink-0" />
                  <a
                    href="https://www.instagram.com/glacieronwheel?igsh=MWVkamo4YnZyeTBzYg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    @glacieronwheel
                  </a>
                </li>
              </ul>
            </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Glacier on Wheels. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
