'use client';

import { motion } from 'framer-motion';
import { Eye, Bed, Square, Waves } from 'lucide-react';

const villas = [
  {
    id: 1,
    bedrooms: 2,
    area: 120,
    poolSize: "9 × 3.5 m",
    price: 392000,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    bedrooms: 3,
    area: 180,
    poolSize: "12 × 4 m",
    price: 485000,
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    bedrooms: 4,
    area: 240,
    poolSize: "15 × 5 m",
    price: 625000,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
  }
];

export default function SectionVillas() {
  return (
    <section id="villas" className="py-20 px-4 gradient-warm">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1F1F1F]">
            Luxury Villa Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our exclusive range of modern villas designed for maximum comfort and investment returns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {villas.map((villa, index) => (
            <motion.div
              key={villa.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="card overflow-hidden group hover:scale-105"
            >
              {/* Villa Image */}
              <div className="relative h-64 overflow-hidden rounded-xl mb-6">
                <img
                  src={villa.image}
                  alt={`${villa.bedrooms} BR Villa`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-[#D6B278]">
                    {villa.bedrooms} BR Villa
                  </span>
                </div>
              </div>

              {/* Villa Details */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-[#1F1F1F]">
                  {villa.bedrooms} Bedroom Villa
                </h3>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Square className="w-4 h-4 text-[#D6B278]" />
                    <span className="text-gray-600">{villa.area} m²</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Waves className="w-4 h-4 text-[#D6B278]" />
                    <span className="text-gray-600">{villa.poolSize}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600">Starting from</span>
                    <span className="text-2xl font-bold text-[#D6B278]">
                      USD {villa.price.toLocaleString()}
                    </span>
                  </div>
                  
                  <button className="w-full btn-secondary flex items-center justify-center gap-2">
                    <Eye size={16} />
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 mb-6">
            All villas include premium finishes, private pools, and full management services
          </p>
          <button className="btn-primary text-lg">
            Download Villa Brochure
          </button>
        </motion.div>
      </div>
    </section>
  );
}
