'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Calendar, Target } from 'lucide-react';

const investmentData = [
  { year: 'Year 1', yield: 12, cumulative: 12 },
  { year: 'Year 2', yield: 14, cumulative: 26 },
  { year: 'Year 3', yield: 15, cumulative: 41 },
  { year: 'Year 4', yield: 16, cumulative: 57 },
  { year: 'Year 5', yield: 17, cumulative: 74 },
];

export default function SectionInvestmentModel() {
  return (
    <section id="investment-model" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1F1F1F]">
            Investment Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proven financial returns with transparent projections and flexible exit strategies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D6B278] to-[#C89E57] rounded-xl flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F1F1F] mb-2">
                    Annual Yield 12–17%
                  </h3>
                  <p className="text-gray-600">
                    Consistent rental income from luxury villa rentals with professional management
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D6B278] to-[#C89E57] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F1F1F] mb-2">
                    Payback 5–7 Years
                  </h3>
                  <p className="text-gray-600">
                    Full return on investment through rental income and capital appreciation
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D6B278] to-[#C89E57] rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1F1F1F] mb-2">
                    Expected Resale Gain +30–40%
                  </h3>
                  <p className="text-gray-600">
                    Capital appreciation from pre-sale pricing to completion and beyond
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#F7F4EF] to-[#E9E2D2] p-6 rounded-2xl">
              <h4 className="text-xl font-bold text-[#1F1F1F] mb-4">
                Investment Highlights
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#D6B278]" />
                  Pre-sale pricing with immediate equity
                </li>
                <li className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#D6B278]" />
                  Guaranteed rental management
                </li>
                <li className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#D6B278]" />
                  Flexible payment terms
                </li>
                <li className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#D6B278]" />
                  Multiple exit strategies
                </li>
              </ul>
            </div>

            <button className="btn-primary text-lg w-full">
              Request Full Model
            </button>
          </motion.div>

          {/* Right Column - ROI Chart */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-[#F7F4EF] to-[#E9E2D2] p-8 rounded-2xl overflow-hidden"
          >
            {/* Background Pattern */}
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')`
              }}
            ></div>
            <div className="relative z-10">
            <h3 className="text-2xl font-bold text-[#1F1F1F] mb-8 text-center">
              5-Year ROI Projection
            </h3>
            
            <div className="space-y-4">
              {investmentData.map((data, index) => (
                <motion.div
                  key={data.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-[#1F1F1F]">{data.year}</span>
                    <span className="text-[#D6B278] font-bold">{data.yield}%</span>
                  </div>
                  <div className="w-full bg-white rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${data.yield * 3}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-[#D6B278] to-[#C89E57] rounded-full"
                    />
                  </div>
                  <div className="text-right text-sm text-gray-600">
                    Cumulative: {data.cumulative}%
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white rounded-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#D6B278] mb-2">
                  74%
                </div>
                <div className="text-sm text-gray-600">
                  Total ROI over 5 years
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
