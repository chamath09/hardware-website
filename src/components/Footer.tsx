import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-display font-bold mb-6">
              RATHNAWEERA <span className="text-accent">HARDWARE</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Your trusted partner for quality building materials and hardware supplies in Embilipitiya. Building the future together.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-accent transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About Us', href: '#about' },
                { name: 'Products', href: '#products' },
                { name: 'Gallery', href: '#gallery' },
                { name: 'Contact', href: '#contact' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                    <span className="text-accent text-xs">›</span> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Products</h3>
            <ul className="space-y-3">
              {['Cement', 'Steel & Iron', 'Paints', 'Plumbing', 'Electrical'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-gray-400 hover:text-accent transition-colors flex items-center gap-2">
                    <span className="text-accent text-xs">›</span> {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-white/10 pb-2 inline-block">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-accent font-bold">A:</span>
                <span>Rathnaweera Hardware,<br/>Embilipitiya, Sri Lanka</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent font-bold">P:</span>
                <span>0472 230 032</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent font-bold">E:</span>
                <span>info@rathnaweera.lk</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Rathnaweera Hardware. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
