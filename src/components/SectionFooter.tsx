'use client';

import { motion } from 'framer-motion';
import { Instagram, Youtube, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function SectionFooter() {
  return (
    <footer className="bg-gradient-to-br from-[#E9E2D2] to-[#F7F4EF] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-[#1F1F1F] mb-4">
              SEVEN SKY BALI
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Creating exceptional luxury developments across Asia. 
              OCTA SUN Residence represents our commitment to delivering 
              premium investment opportunities with transparent returns.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#D6B278]" />
                <span className="text-gray-600">Bukit Peninsula, Bali, Indonesia</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D6B278]" />
                <span className="text-gray-600">+62 812 3456 7890</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D6B278]" />
                <span className="text-gray-600">invest@sevensky-bali.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-[#1F1F1F] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#why-invest" className="text-gray-600 hover:text-[#D6B278] transition-colors duration-300">Why Invest</a></li>
              <li><a href="#villas" className="text-gray-600 hover:text-[#D6B278] transition-colors duration-300">Villa Collection</a></li>
              <li><a href="#investment-model" className="text-gray-600 hover:text-[#D6B278] transition-colors duration-300">Investment Model</a></li>
              <li><a href="#location" className="text-gray-600 hover:text-[#D6B278] transition-colors duration-300">Location</a></li>
              <li><a href="#developer" className="text-gray-600 hover:text-[#D6B278] transition-colors duration-300">Developer</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-[#D6B278] transition-colors duration-300">FAQ</a></li>
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-[#1F1F1F] mb-4">
              Connect With Us
            </h4>
            <div className="space-y-4">
              <div className="flex gap-4">
                <a
                  href="https://instagram.com/sevenskybali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-[#D6B278] to-[#C89E57] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://youtube.com/@sevenskybali"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-[#D6B278] to-[#C89E57] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <Youtube size={18} />
                </a>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-[#D6B278] to-[#C89E57] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
              
              <div className="bg-white rounded-xl p-4">
                <h5 className="font-semibold text-[#1F1F1F] mb-2">Get Updates</h5>
                <p className="text-sm text-gray-600 mb-3">
                  Subscribe for project updates and investment opportunities
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#D6B278] focus:border-transparent"
                  />
                  <button className="px-4 py-2 bg-[#D6B278] text-white rounded-lg text-sm hover:bg-[#C89E57] transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-300 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">
              © 2025 Seven Sky Developments. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-[#D6B278] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-[#D6B278] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-600 hover:text-[#D6B278] transition-colors duration-300">
                Legal Disclaimer
              </a>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              This website is for informational purposes only. Investment opportunities are subject to availability and terms. 
              Past performance does not guarantee future results. Please consult with a financial advisor before making investment decisions.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
