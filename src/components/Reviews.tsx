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

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button 
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-10 bg-white p-2 rounded-full shadow-lg text-primary hover:text-accent hover:scale-110 transition-all"
            aria-label="Previous review"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-12 z-10 bg-white p-2 rounded-full shadow-lg text-primary hover:text-accent hover:scale-110 transition-all"
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
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {[0, 1].map((offset) => {
                  const review = reviews[(currentIndex + offset) % reviews.length];
                  return (
                    <div key={review.id} className="bg-white rounded-xl shadow-lg p-6 md:p-8 text-center relative">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white p-3 rounded-full shadow-md">
                        <Quote size={20} fill="currentColor" />
                      </div>

                      <div className="mt-4 mb-6">
                        <p className="text-base text-gray-600 italic leading-relaxed min-h-[80px] flex items-center justify-center">
                          "{review.text}"
                        </p>
                      </div>

                      <div className="flex flex-col items-center">
                        <div className="w-14 h-14 rounded-full overflow-hidden mb-3 border-2 border-accent p-1">
                          <img 
                            src={review.image} 
                            alt={review.name} 
                            className="w-full h-full object-cover rounded-full"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <h4 className="text-lg font-bold text-primary font-display">{review.name}</h4>
                        <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">{review.role}</p>
                        <div className="flex gap-1 text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={16} 
                              fill={i < review.rating ? "currentColor" : "none"} 
                              className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
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
