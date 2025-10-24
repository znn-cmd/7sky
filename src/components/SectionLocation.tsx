'use client';

import { motion } from 'framer-motion';
import { MapPin, Waves, Shield, Clock } from 'lucide-react';

const locationPoints = [
  {
    icon: Waves,
    title: "5–10 min to best beaches",
    description: "Easy access to world-famous beaches including Padang Padang and Uluwatu"
  },
  {
    icon: Shield,
    title: "Surrounded by 5-star resorts",
    description: "Located in the heart of luxury hospitality with premium amenities nearby"
  },
  {
    icon: Clock,
    title: "Safe elevation & year-round season",
    description: "Protected from flooding with perfect weather conditions throughout the year"
  }
];

export default function SectionLocation() {
  return (
    <section id="location" className="py-20 px-4 relative overflow-hidden">
      {/* Background Map */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#F7F4EF]/80 via-[#E9E2D2]/60 to-white/90"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1F1F1F]">
            Prime Bukit Peninsula Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Strategically positioned in Bali's most exclusive area, surrounded by luxury resorts and pristine beaches
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {locationPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card text-center group hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#D6B278] to-[#C89E57] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1F1F1F]">
                {point.title}
              </h3>
              <p className="text-gray-600">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Location Map Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Bukit Peninsula Location Map"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            
            {/* Location Pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-8 h-8 bg-[#D6B278] rounded-full border-4 border-white shadow-lg flex items-center justify-center"
              >
                <MapPin className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-2xl font-bold text-[#1F1F1F] mb-4">
              OCTA SUN Residence Location
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-[#D6B278] mb-2">Nearby Attractions</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Padang Padang Beach (8 min)</li>
                  <li>• Uluwatu Temple (12 min)</li>
                  <li>• Bingin Beach (6 min)</li>
                  <li>• Dreamland Beach (10 min)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-[#D6B278] mb-2">Luxury Resorts</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• The Ungasan (5 min)</li>
                  <li>• Bulgari Resort (8 min)</li>
                  <li>• Alila Villas Uluwatu (10 min)</li>
                  <li>• Six Senses Uluwatu (12 min)</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            Experience the perfect blend of privacy, luxury, and accessibility in Bali's most prestigious location
          </p>
          <button className="btn-primary text-lg">
            View Location Details
          </button>
        </motion.div>
      </div>
    </section>
  );
}
