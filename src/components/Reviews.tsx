import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Kamal Perera',
    role: 'Contractor',
    rating: 5,
    text: 'Rathnaweera Hardware has been my go-to supplier for over 5 years. Their cement and steel quality is unmatched in Embilipitiya. Highly recommended for any construction project!',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    id: 2,
    name: 'Nimali Silva',
    role: 'Homeowner',
    rating: 5,
    text: 'Excellent customer service! The staff helped me choose the right tiles for my new home. Delivery was on time and the prices were very competitive.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    id: 3,
    name: 'Saman Kumara',
    role: 'Builder',
    rating: 4,
    text: 'Great variety of tools and machinery. I found everything I needed for my renovation work. The shop is well organized and easy to navigate.',
    image: 'https://randomuser.me/api/portraits/men/86.jpg',
  },
  {
    id: 4,
    name: 'Dilshan Jayasuriya',
    role: 'Architect',
    rating: 5,
    text: 'As an architect, I value quality and reliability. Rathnaweera Hardware consistently delivers high-standard materials that meet my project specifications.',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const timer = setInterval(nextReview, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-bold uppercase tracking-wider mb-2"
          >
            Testimonials
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-display font-bold text-primary"
          >
            What Our Customers Say
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-10 bg-white p-3 rounded-full shadow-lg text-primary hover:text-accent hover:scale-110 transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-10 bg-white p-3 rounded-full shadow-lg text-primary hover:text-accent hover:scale-110 transition-all"
            aria-label="Next review"
          >
            <ChevronRight size={24} />
          </button>

          {/* Review Card Slider */}
          <div className="overflow-hidden px-4 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center relative"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white p-4 rounded-full shadow-lg">
                  <Quote size={32} fill="currentColor" />
                </div>

                <div className="mt-6 mb-8">
                  <p className="text-lg md:text-xl text-gray-600 italic leading-relaxed">
                    "{reviews[currentIndex].text}"
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-accent p-1">
                    <img 
                      src={reviews[currentIndex].image} 
                      alt={reviews[currentIndex].name} 
                      className="w-full h-full object-cover rounded-full"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-primary font-display">{reviews[currentIndex].name}</h4>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-3">{reviews[currentIndex].role}</p>
                  <div className="flex gap-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={18} 
                        fill={i < reviews[currentIndex].rating ? "currentColor" : "none"} 
                        className={i < reviews[currentIndex].rating ? "text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-accent w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
