'use client';

import { motion } from 'framer-motion';
import { Award, Users, Building, ArrowRight } from 'lucide-react';

const projects = [
  {
    name: "Sunset Heights",
    location: "Uluwatu, Bali",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Ocean View Villas",
    location: "Seminyak, Bali",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Mountain Retreat",
    location: "Ubud, Bali",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
  }
];

const achievements = [
  {
    icon: Building,
    number: "14",
    label: "Projects Completed"
  },
  {
    icon: Users,
    number: "7",
    label: "Years Experience"
  },
  {
    icon: Award,
    number: "100%",
    label: "Client Satisfaction"
  }
];

export default function SectionDeveloper() {
  return (
    <section id="developer" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#1F1F1F]">
            A Proven Developer You Can Trust
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SEVEN SKY has established a reputation for delivering exceptional luxury developments across Asia
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#D6B278] to-[#C89E57] rounded-2xl flex items-center justify-center">
                <achievement.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-[#D6B278] mb-2">
                {achievement.number}
              </div>
              <div className="text-lg text-gray-600">
                {achievement.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Past Projects Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-[#1F1F1F]">
            Our Previous Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card overflow-hidden group hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden rounded-xl mb-4">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <h4 className="text-xl font-bold text-[#1F1F1F] mb-2">
                  {project.name}
                </h4>
                <p className="text-gray-600">
                  {project.location}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Developer Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-6 text-[#1F1F1F]">
              SEVEN SKY Development Story
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Since 2017, SEVEN SKY has been at the forefront of luxury development in Asia, 
                creating exceptional residential and hospitality projects that combine modern 
                design with sustainable practices.
              </p>
              <p>
                Our portfolio spans across Bali, Thailand, and Vietnam, with each project 
                carefully designed to maximize both investor returns and resident satisfaction. 
                We focus on prime locations, premium finishes, and long-term value creation.
              </p>
              <p>
                <strong className="text-[#D6B278]">Farsight Group</strong> manages our properties 
                with over 15 years of experience in luxury hospitality and real estate management, 
                ensuring consistent returns and professional service.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#F7F4EF] to-[#E9E2D2] p-8 rounded-2xl"
          >
            <h4 className="text-2xl font-bold mb-6 text-[#1F1F1F]">
              Why Choose SEVEN SKY?
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#D6B278] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h5 className="font-semibold text-[#1F1F1F]">Proven Track Record</h5>
                  <p className="text-sm text-gray-600">14 successful projects across Asia</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#D6B278] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h5 className="font-semibold text-[#1F1F1F]">Premium Locations</h5>
                  <p className="text-sm text-gray-600">Strategic positioning in prime areas</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#D6B278] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h5 className="font-semibold text-[#1F1F1F]">Professional Management</h5>
                  <p className="text-sm text-gray-600">Farsight Group's 15+ years expertise</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#D6B278] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h5 className="font-semibold text-[#1F1F1F]">Transparent Process</h5>
                  <p className="text-sm text-gray-600">Clear communication and regular updates</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-primary text-lg flex items-center gap-2 mx-auto">
            Meet the Team
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
