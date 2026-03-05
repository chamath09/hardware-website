import { motion } from 'motion/react';

const products = [
  {
    id: 1,
    name: 'Cement',
    description: 'High-strength cement for durable foundations and structures.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?q=80&w=2076&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Tiles',
    description: 'Premium floor and wall tiles in various designs and finishes.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1932&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Paint',
    description: 'Interior and exterior paints in a wide spectrum of colors.',
    image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2131&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Steel & Iron',
    description: 'Structural steel, rods, and iron bars for reinforcement.',
    image: 'https://images.unsplash.com/photo-1535063406530-16b7035cfd5c?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Plumbing Materials',
    description: 'Pipes, fittings, and fixtures for all plumbing needs.',
    image: 'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Electrical Items',
    description: 'Wires, switches, and electrical components for safety.',
    image: 'https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Construction Tools',
    description: 'Professional-grade tools for every construction task.',
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 8,
    name: 'Building Materials',
    description: 'Bricks, sand, gravel, and other essential materials.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1968&auto=format&fit=crop',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-wider mb-2"
          >
            Our Inventory
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-primary"
          >
            Quality Products For Every Need
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2 font-display">{product.name}</h3>
                <p className="text-secondary text-sm mb-4 line-clamp-2">{product.description}</p>
                <button className="text-accent font-bold uppercase text-xs tracking-wider hover:text-orange-700 transition-colors flex items-center gap-1">
                  View Products <span className="text-lg">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
