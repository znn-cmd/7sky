'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, Calendar } from 'lucide-react';

export default function SectionHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Invest in Bali's Premier Villa Project
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-accent-gold">
            OCTA SUN Residence
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl mb-4">
            From USD 392,000 · ROI up to 17% per year
          </p>
          <p className="text-lg md:text-xl text-accent-gold">
            Capital growth +40% until completion
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <button className="btn-primary flex items-center justify-center gap-2 text-lg">
            <Download size={20} />
            Download Investor Pack
          </button>
          <Link to="contact" smooth={true} duration={1000}>
            <button className="btn-secondary flex items-center justify-center gap-2 text-lg">
              <Calendar size={20} />
              Reserve Now
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-sm text-gray-300"
        >
          <p>7 Years of Development · 14 Projects Completed · Managed by Farsight Group</p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Link to="why-invest" smooth={true} duration={1000}>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
