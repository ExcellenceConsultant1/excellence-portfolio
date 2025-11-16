import { motion } from "framer-motion";
import founderImage from "@assets/WhatsApp Image 2025-08-08 at 1.52.24 AM_1754599054423.jpeg";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" data-testid="about-title">
            <span className="gradient-text">Visionary</span> Leadership
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Elite financial architects pioneering the next generation of AI-driven business intelligence and automated financial operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="glass-card rounded-3xl p-8 neo-shadow border border-white/10">
              <div className="flex items-center mb-6">
                <img 
                  src={founderImage} 
                  alt="Co-Founder" 
                  className="w-20 h-20 rounded-full mr-6 object-cover"
                  data-testid="founder-image"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white" data-testid="founder-name">Co-Founder</h3>
                  <p className="gradient-text font-bold">OptiFinance Architect & AI Strategist</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed font-light">
                12 years in finance leading smart tool development, RL optimization & predictive systems to reduce cost & time across manufacturing and diverse industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="glass-card rounded-2xl p-6 hover-lift border border-white/10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                data-testid="mission-card"
              >
                <div className="text-3xl mb-4 bg-gradient-to-r from-tech-green to-cyber-cyan p-3 rounded-xl w-fit glow-effect">
                  <span className="text-white">🎯</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">OptiFinance Mission</h4>
                <p className="text-gray-300 font-light">Architect autonomous financial ecosystems that eliminate operational friction and accelerate exponential growth.</p>
              </motion.div>
              <motion.div 
                className="glass-card rounded-2xl p-6 hover-lift border border-white/10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                data-testid="vision-card"
              >
                <div className="text-3xl mb-4 bg-gradient-to-r from-optifinance-orange to-quantum-pink p-3 rounded-xl w-fit glow-effect">
                  <span className="text-white">🚀</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">Quantum Vision</h4>
                <p className="text-gray-300 font-light">Pioneer the future of OptiFinance intelligence for next-generation global enterprises.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office workspace" 
              className="rounded-3xl shadow-2xl w-full"
              data-testid="office-image"
            />
            
            <motion.div 
              className="bg-gradient-to-r from-electric-blue via-neon-purple to-quantum-pink rounded-3xl p-8 text-white glow-effect"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              data-testid="highlights-card"
            >
              <h4 className="text-2xl font-bold mb-4 text-shadow-glow">OptiFinance Advantages</h4>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="mr-4 bg-white/20 p-2 rounded-lg">⚡</span>
                  <span className="font-medium">12+ Years OptiFinance Development</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-4 bg-white/20 p-2 rounded-lg">🧠</span>
                  <span className="font-medium">Deep Learning Architecture</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-4 bg-white/20 p-2 rounded-lg">🚀</span>
                  <span className="font-medium">Quantum-Speed Processing</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-4 bg-white/20 p-2 rounded-lg">🏭</span>
                  <span className="font-medium">Industrial AI Specialists</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
