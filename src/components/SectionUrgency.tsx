'use client';

import { motion } from 'framer-motion';
import { Clock, AlertCircle, Calendar } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function SectionUrgency() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set countdown to 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="urgency" className="py-20 px-4 gradient-gold relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')`
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#D6B278]/90 to-[#C89E57]/90"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <AlertCircle className="w-8 h-8" />
            <span className="text-2xl font-bold">LIMITED TIME OFFER</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Only 6 Villas Left at Pre-Sale Price!
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Secure your villa today with just <span className="font-bold">$10,000 deposit</span>
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-2">
              <Clock className="w-6 h-6" />
              Pre-Sale Pricing Ends In:
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <motion.div
                  key={unit}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white/30 backdrop-blur-sm rounded-xl p-4"
                >
                  <div className="text-3xl md:text-4xl font-bold mb-2">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm uppercase tracking-wider">
                    {unit}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Urgency Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">-15%</div>
            <div className="text-lg">Pre-Sale Discount</div>
            <div className="text-sm opacity-80 mt-2">From final pricing</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">$10K</div>
            <div className="text-lg">Minimum Deposit</div>
            <div className="text-sm opacity-80 mt-2">Secure your unit today</div>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold mb-2">6</div>
            <div className="text-lg">Units Remaining</div>
            <div className="text-sm opacity-80 mt-2">Out of 24 total villas</div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Don't Miss This Opportunity</h3>
            <p className="text-lg opacity-90 mb-6">
              Pre-sale pricing offers immediate equity and maximum returns. 
              Once sold out, prices will increase to market rates.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#D6B278] hover:bg-gray-100 font-bold py-4 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                <Calendar size={20} />
                Reserve Now
              </button>
              <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#D6B278] font-bold py-4 px-8 rounded-2xl transition-all duration-300">
                Download Investment Pack
              </button>
            </div>
          </div>

          <div className="text-sm opacity-80">
            <p>✓ No obligation to proceed after deposit</p>
            <p>✓ Full refund if you change your mind within 14 days</p>
            <p>✓ Flexible payment terms available</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
