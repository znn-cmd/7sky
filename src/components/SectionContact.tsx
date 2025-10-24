'use client';

import { motion } from 'framer-motion';
import { Send, CheckCircle, MessageCircle, Phone } from 'lucide-react';
import { useState } from 'react';

export default function SectionContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-12"
          >
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-[#1F1F1F] mb-4">
              Thank You!
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Our team will contact you within 24 hours with your personalized investor pack.
            </p>
            <div className="bg-white rounded-xl p-6 max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-4">What happens next?</h3>
              <div className="space-y-2 text-sm text-gray-600 text-left">
                <p>✓ Investment pack sent to your email</p>
                <p>✓ Personal consultation scheduled</p>
                <p>✓ Financial model presentation</p>
                <p>✓ Villa selection assistance</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1F1F1F]">
            Get Your Investor Pack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Download our comprehensive investment guide and schedule a personal consultation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="card"
          >
            <h3 className="text-2xl font-bold mb-6 text-[#1F1F1F]">
              Request Information
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D6B278] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D6B278] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D6B278] focus:border-transparent transition-all duration-300"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-gray-700 mb-2">
                  Country *
                </label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#D6B278] focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select your country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AU">Australia</option>
                  <option value="CA">Canada</option>
                  <option value="SG">Singapore</option>
                  <option value="HK">Hong Kong</option>
                  <option value="JP">Japan</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary text-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Get Investor Pack
                  </>
                )}
              </button>
            </form>

            <div className="mt-6 text-sm text-gray-500 text-center">
              <p>By submitting this form, you agree to receive communications from SEVEN SKY.</p>
              <p>We respect your privacy and will never share your information.</p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card">
              <h3 className="text-2xl font-bold mb-6 text-[#1F1F1F]">
                Direct Contact
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D6B278] to-[#C89E57] rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1F1F1F]">Phone</h4>
                    <p className="text-gray-600">+62 812 3456 7890</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#D6B278] to-[#C89E57] rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1F1F1F]">WhatsApp</h4>
                    <p className="text-gray-600">+62 812 3456 7890</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold mb-6 text-[#1F1F1F]">
                What You'll Receive
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D6B278] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#1F1F1F]">Complete Investment Pack</h4>
                    <p className="text-sm text-gray-600">Detailed financial projections and market analysis</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D6B278] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#1F1F1F]">Personal Consultation</h4>
                    <p className="text-sm text-gray-600">One-on-one meeting with our investment team</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D6B278] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#1F1F1F]">Villa Selection</h4>
                    <p className="text-sm text-gray-600">Assistance choosing the perfect unit for you</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D6B278] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-[#1F1F1F]">Legal Support</h4>
                    <p className="text-sm text-gray-600">Guidance through the purchase process</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating WhatsApp Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <MessageCircle size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
