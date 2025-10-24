'use client';

import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: "What are the ownership rights for foreign investors?",
    answer: "Foreign investors can purchase villas through a leasehold structure valid for 30 years with automatic renewal options. This is the standard and legally secure method for foreign property ownership in Bali. All legal documentation is handled by our experienced legal team."
  },
  {
    question: "How is the property managed and maintained?",
    answer: "Farsight Group provides comprehensive property management services including rental marketing, guest services, maintenance, cleaning, and financial reporting. They have over 15 years of experience managing luxury properties in Bali and maintain high occupancy rates through their established networks."
  },
  {
    question: "What is the construction timeline and completion date?",
    answer: "Construction is scheduled to begin in Q2 2025 with completion expected in Q4 2026. The project is fully permitted and construction-ready. We provide regular progress updates and site visits for investors throughout the construction period."
  },
  {
    question: "What are the resale options and restrictions?",
    answer: "Investors have full resale rights with no restrictions. We provide resale assistance through our network of real estate agents and can help facilitate sales. The leasehold structure can be transferred to new buyers, and we offer exit strategy planning as part of our investor services."
  },
  {
    question: "What currency should I use for the investment?",
    answer: "Payments can be made in USD, which is the preferred currency for international investors. We also accept payments in EUR, GBP, and AUD. All pricing is quoted in USD to provide clarity and consistency. Currency conversion rates are locked at the time of contract signing."
  }
];

export default function SectionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 px-4 gradient-warm">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1F1F1F]">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about investing in OCTA SUN Residence
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-[#1F1F1F] pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#D6B278]" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#D6B278]" />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-[#1F1F1F] mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our investment team is here to help with any additional questions you may have
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Schedule Consultation
              </button>
              <button className="btn-secondary">
                Download Full FAQ
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
