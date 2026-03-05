import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const categories = ['All', 'Interior', 'Construction', 'Tools'];

const images = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop',
    category: 'Interior',
    title: 'Store Interior',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?q=80&w=2078&auto=format&fit=crop',
    category: 'Tools',
    title: 'Professional Tools',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
    category: 'Construction',
    title: 'Electrical Supplies',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?q=80&w=2072&auto=format&fit=crop',
    category: 'Construction',
    title: 'Cement Storage',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop',
    category: 'Interior',
    title: 'Plumbing Section',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1968&auto=format&fit=crop',
    category: 'Construction',
    title: 'Building Materials',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-wider mb-2"
          >
            Our Gallery
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-primary mb-8"
          >
            Explore Our Collection
          </motion.h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-accent text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={img.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer shadow-md"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <div className="bg-accent p-3 rounded-full mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Plus className="text-white" size={24} />
                  </div>
                  <h4 className="text-white font-bold text-xl font-display transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {img.title}
                  </h4>
                  <p className="text-gray-200 text-sm mt-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {img.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
