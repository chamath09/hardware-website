import { motion } from 'motion/react';
import { ShieldCheck, DollarSign, MapPin, Smile, Package } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck size={40} />,
    title: 'Quality Materials',
    description: 'We source only the best materials to ensure durability and safety for your construction projects.',
  },
  {
    icon: <DollarSign size={40} />,
    title: 'Competitive Prices',
    description: 'Get the best value for your money with our affordable and transparent pricing structure.',
  },
  {
    icon: <MapPin size={40} />,
    title: 'Trusted Local Supplier',
    description: 'Proudly serving the Embilipitiya community with reliability and integrity for years.',
  },
  {
    icon: <Smile size={40} />,
    title: 'Friendly Service',
    description: 'Our knowledgeable team is always ready to help you find exactly what you need.',
  },
  {
    icon: <Package size={40} />,
    title: 'Wide Range',
    description: 'From foundation to finishing, find everything you need under one roof.',
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Why Choose Us?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We are committed to providing the best service and products to our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/20 transition-colors"
            >
              <div className="text-accent mb-6 bg-white/10 w-16 h-16 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 font-display">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
