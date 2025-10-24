'use client';

import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Shield, MapPin, Clock, Target } from 'lucide-react';

const investmentPoints = [
  {
    icon: TrendingUp,
    title: "Capital Appreciation",
    subtitle: "+30–40%",
    description: "Expected value increase until project completion"
  },
  {
    icon: DollarSign,
    title: "Rental Yield",
    subtitle: "12–17% p.a.",
    description: "Annual rental income from luxury villa rentals"
  },
  {
    icon: Shield,
    title: "Guaranteed Management",
    subtitle: "& Maintenance",
    description: "Full-service property management by Farsight Group"
  },
  {
    icon: MapPin,
    title: "Prime Location",
    subtitle: "Bukit Peninsula",
    description: "Premium location surrounded by 5-star resorts"
  },
  {
    icon: Clock,
    title: "Limited Presale",
    subtitle: "Stage 3 Units",
    description: "Exclusive early-bird pricing for remaining units"
  },
  {
    icon: Target,
    title: "Exit Strategy",
    subtitle: "Resale or Hold",
    description: "Flexible options for long-term wealth building"
  }
];

export default function SectionWhyInvest() {
  return (
    <section id="why-invest" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Invest in OCTA SUN Residence?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the compelling investment opportunity that combines luxury living with exceptional returns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {investmentPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card text-center group hover:scale-105"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent-gold to-accent-gold-hover rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                {point.title}
              </h3>
              <p className="text-2xl font-bold text-accent-gold mb-3">
                {point.subtitle}
              </p>
              <p className="text-gray-600">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="btn-primary text-lg">
            See Financial Model
          </button>
        </motion.div>
      </div>
    </section>
  );
}
