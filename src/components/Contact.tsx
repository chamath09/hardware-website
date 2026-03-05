import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-accent font-bold uppercase tracking-wider mb-2">Get In Touch</h3>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
              Visit Us Today
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-md text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Address</h4>
                  <p className="text-secondary">Rathnaweera Hardware</p>
                  <p className="text-secondary">Embilipitiya, Sri Lanka</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-md text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Phone</h4>
                  <p className="text-secondary">0472 230 032</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white p-3 rounded-full shadow-md text-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">Business Hours</h4>
                  <p className="text-secondary">Monday – Saturday</p>
                  <p className="text-secondary font-medium">8:00 AM – 6:30 PM</p>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold text-primary mb-6">Send us an inquiry</h4>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" />
                  <input type="text" placeholder="Phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" />
                </div>
                <input type="email" placeholder="Email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors" />
                <textarea placeholder="Message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-colors"></textarea>
                <button type="button" className="w-full bg-primary hover:bg-blue-900 text-white font-bold py-3 rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-full min-h-[400px] rounded-xl overflow-hidden shadow-xl border-4 border-white"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63428.6756627586!2d80.8166666!3d6.3333333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae407f0c5a00001%3A0x40c3d9a54321!2sEmbilipitiya!5e0!3m2!1sen!2slk!4v1625000000000!5m2!1sen!2slk" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
              title="Rathnaweera Hardware Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
