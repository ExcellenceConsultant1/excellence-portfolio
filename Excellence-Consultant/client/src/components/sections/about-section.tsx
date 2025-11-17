import { motion } from "framer-motion";
import founderImage from "@/assets/founder-photo.jpeg";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Who We Are</p>
          <div className="section-underline mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-8" data-testid="about-title">
            Intelligence in <span className="gradient-text">Innovation</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Excellence Consultant is a catalyst for change. We are a financial technology company driven by a mission to reshape businesses and uplift entrepreneurial success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="clean-card p-8">
              <div className="flex items-center mb-6">
                <img 
                  src={founderImage} 
                  alt="Founder" 
                  className="w-20 h-20 rounded-full mr-6 object-cover"
                  data-testid="founder-image"
                />
                <div>
                  <h3 className="text-2xl font-bold text-white" data-testid="founder-name">Founder</h3>
                  <p className="gradient-text font-semibold">Certified Accounting Expert</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Certified global accounting expert specializing in US, AUS, and Indian bookkeeping, taxation, and financial advisory services.
              </p>
            </div>

            <div className="clean-card p-8">
              <div className="flex items-center mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white" data-testid="cofounder-name">Co-Founder</h3>
                  <p className="gradient-text font-semibold">Financial Architect & AI Strategist</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                12 years in finance leading smart tool development, optimization systems & predictive analytics to reduce cost & time across manufacturing and diverse industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div 
                className="clean-card p-6"
                data-testid="mission-card"
              >
                <div className="text-3xl mb-4">
                  <span>🎯</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Our Mission</h4>
                <p className="text-gray-400 text-sm">Build autonomous financial systems that eliminate friction and accelerate business growth.</p>
              </div>
              <div 
                className="clean-card p-6"
                data-testid="vision-card"
              >
                <div className="text-3xl mb-4">
                  <span>🚀</span>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">Our Vision</h4>
                <p className="text-gray-400 text-sm">Pioneer the future of financial intelligence for next-generation enterprises.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern office workspace" 
              className="rounded-2xl w-full simple-shadow"
              data-testid="office-image"
            />
            
            <div 
              className="clean-card p-8"
              data-testid="highlights-card"
            >
              <h4 className="text-2xl font-semibold text-white mb-6">Key Strengths</h4>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <span className="mr-4 text-2xl">⚡</span>
                  <span>12+ Years Development Excellence</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-4 text-2xl">🧠</span>
                  <span>AI & Machine Learning Architecture</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-4 text-2xl">🚀</span>
                  <span>Rapid Deployment Solutions</span>
                </li>
                <li className="flex items-center text-gray-300">
                  <span className="mr-4 text-2xl">🏭</span>
                  <span>Industry-Specific Expertise</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
