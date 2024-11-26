import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';
import Footer from './common/Footer';
import { contactContent } from '../data/textContent';

const Contact = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const iconMap = {
    Email: <FaEnvelope className="text-2xl" />,
    GitHub: <FaGithub className="text-2xl" />,
    Location: <FaMapMarkerAlt className="text-2xl" />,
  };

  return (
    <section className="min-h-screen py-20 section-padding relative" id="contact">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent" />
        <div className="absolute -left-40 top-1/4 w-80 h-80 bg-primary/20 rounded-full filter blur-[100px]" />
        <div className="absolute -right-40 bottom-1/4 w-80 h-80 bg-secondary/20 rounded-full filter blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            {contactContent.title}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {contactContent.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative overflow-hidden rounded-xl bg-dark/40 p-1 backdrop-blur-sm border border-white/5">
              <div className="relative bg-dark rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-gradient">Contact Information</h3>
                <div className="space-y-6">
                  {contactContent.contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 text-white/90">
                        {iconMap[info.title]}
                      </div>
                      <div>
                        <h4 className="text-white group-hover:text-gradient transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-white/70">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative overflow-hidden rounded-xl bg-dark/40 p-1 backdrop-blur-sm border border-white/5">
              <div className="relative bg-dark rounded-xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-white/90 text-sm font-medium mb-2">
                      {contactContent.formLabels.name}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white/90 placeholder-white/50
                               focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-white/90 text-sm font-medium mb-2">
                      {contactContent.formLabels.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white/90 placeholder-white/50
                               focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-white/90 text-sm font-medium mb-2">
                      {contactContent.formLabels.message}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white/90 placeholder-white/50
                               focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors duration-300"
                      placeholder="Your message..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-medium
                             hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98] transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {contactContent.buttonText}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        <Footer inView={inView} />
      </div>
    </section>
  );
};

export default Contact;
