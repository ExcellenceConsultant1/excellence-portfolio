import { motion } from "framer-motion";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white py-16 relative overflow-hidden" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="text-2xl font-bold gradient-text mb-4" data-testid="footer-logo">
              <span className="bg-gradient-to-r from-electric-blue to-neon-purple w-10 h-10 rounded-lg inline-flex items-center justify-center mr-3">
                <span className="text-white text-lg">⚡</span>
              </span>
              Excellence Consultant
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Engineering the future of financial intelligence. AI-powered systems delivering business optimization and strategic value.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/919033316252"
                className="w-12 h-12 bg-gradient-to-r from-tech-green to-cyber-cyan rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                data-testid="footer-whatsapp-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬
              </a>
              <a
                href="https://www.linkedin.com/in/nishant-joshi-94561515b"
                className="w-12 h-12 bg-gradient-to-r from-electric-blue to-neon-purple rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                data-testid="footer-linkedin-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼
              </a>
              <a
                href="https://www.upwork.com/freelancers/~014b03570b8c198a1a?mp_source=share"
                className="w-12 h-12 bg-gradient-to-r from-optifinance-orange to-quantum-pink rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                data-testid="footer-upwork-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                🚀
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h5 className="font-semibold text-lg gradient-text mb-6">Services</h5>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection("#services")} className="hover:text-white transition-colors">Smart Bookkeeping</button></li>
              <li><button onClick={() => scrollToSection("#services")} className="hover:text-white transition-colors">Tax Planning</button></li>
              <li><button onClick={() => scrollToSection("#services")} className="hover:text-white transition-colors">Financial Reporting</button></li>
              <li><button onClick={() => scrollToSection("#services")} className="hover:text-white transition-colors">Business Advisory</button></li>
              <li><button onClick={() => scrollToSection("#services")} className="hover:text-white transition-colors">IPO & Compliance</button></li>
              <li><button onClick={() => scrollToSection("#services")} className="hover:text-white transition-colors">AI Financial Tools</button></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5 className="font-semibold text-lg gradient-text mb-6">Company</h5>
            <ul className="space-y-2 text-gray-300">
              <li><button onClick={() => scrollToSection("#about")} className="hover:text-white transition-colors">About Us</button></li>
              <li><button onClick={() => scrollToSection("#software")} className="hover:text-white transition-colors">Our Software</button></li>
              <li><button onClick={() => scrollToSection("#appointment")} className="hover:text-white transition-colors">Book Consultation</button></li>
              <li><button onClick={() => scrollToSection("#contact")} className="hover:text-white transition-colors">Contact</button></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h5 className="font-semibold text-lg gradient-text mb-6">Contact</h5>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+919033316252" className="hover:text-white transition-colors" data-testid="footer-phone-link">+91 90333 16252</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">📞</span>
                <a href="tel:+918849998420" className="hover:text-white transition-colors" data-testid="footer-phone-link-2">+91 88499 98420</a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">💬</span>
                <a href="https://wa.me/919033316252" className="hover:text-white transition-colors" data-testid="footer-whatsapp-text">WhatsApp Chat</a>
              </li>
              <li className="text-sm">
                <span className="text-gray-400">Business Hours:</span><br />
                Mon-Fri: 9 AM - 8 PM<br />
                Sat: 10 AM - 6 PM
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Excellence Consultant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
