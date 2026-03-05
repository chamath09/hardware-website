import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&w=1964&auto=format&fit=crop"
                alt="Hardware Store Interior"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-lg shadow-xl hidden md:block">
              <p className="text-4xl font-display font-bold text-white">15+</p>
              <p className="text-gray-300 text-sm uppercase tracking-wider">Years of Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-accent font-bold uppercase tracking-wider mb-2">About Us</h3>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Your Trusted Partner in Construction
            </h2>
            <p className="text-secondary text-lg mb-6 leading-relaxed">
              Rathnaweera Hardware is a trusted building materials supplier in Embilipitiya providing quality hardware products for construction projects. We offer a wide range of building materials, tools, and supplies for contractors, builders, and homeowners.
            </p>
            <p className="text-secondary text-lg mb-8 leading-relaxed">
              Since our inception, we have been dedicated to supplying only the highest quality materials to ensure the longevity and safety of your structures. Our knowledgeable staff is always ready to assist you in finding the right tools for the job.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Quality Building Materials',
                'Expert Advice',
                'Competitive Pricing',
                'Timely Delivery'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-accent flex-shrink-0" size={20} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
