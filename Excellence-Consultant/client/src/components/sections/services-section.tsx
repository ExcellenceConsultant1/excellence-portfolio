import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: "⚡",
      title: "Smart Bookkeeping",
      description: "AI-powered automated bookkeeping with real-time reconciliation, expense categorization, and financial reporting. Get your books done in 1-2 days!",
      color: "glass-card hover-lift"
    },
    {
      icon: "🎯",
      title: "Tax Planning & Filing",
      description: "Strategic tax optimization, compliance management, and filing services. Minimize tax liability while staying 100% compliant with regulations.",
      color: "glass-card hover-lift"
    },
    {
      icon: "📊",
      title: "Financial Reporting",
      description: "Comprehensive financial statements, cash flow analysis, and custom dashboards. Make data-driven decisions with real-time insights.",
      color: "glass-card hover-lift"
    },
    {
      icon: "🧠",
      title: "Business Advisory",
      description: "Strategic financial guidance, growth planning, and cost optimization. Transform your business with expert consulting and actionable insights.",
      color: "glass-card hover-lift"
    },
    {
      icon: "🏛️",
      title: "IPO & ROC Compliance",
      description: "Complete IPO support, SEBI compliance, ROC filings, and regulatory management. Navigate complex compliance requirements effortlessly.",
      color: "glass-card hover-lift"
    },
    {
      icon: "🚀",
      title: "AI Financial Tools",
      description: "Custom AI-powered dashboards, expense prediction, cost optimization, and automated financial workflows tailored to your business needs.",
      color: "glass-card hover-lift"
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" data-testid="services-title">
            <span className="gradient-text">OptiFinance-Powered</span> Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Advanced financial intelligence systems engineered for exponential business growth and operational excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`${service.color} rounded-3xl p-8 neo-shadow group cursor-pointer border border-white/10`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              data-testid={`service-card-${index}`}
            >
              <motion.div 
                className="text-5xl mb-6 bg-gradient-to-r from-electric-blue to-neon-purple p-4 rounded-2xl w-fit glow-effect"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white">{service.icon}</span>
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-shadow-glow transition-all">{service.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed font-light">
                {service.description}
              </p>
              <div className="flex items-center text-transparent bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text font-bold group-hover:text-white transition-all">
                <span>Explore Technology</span>
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={() => scrollToSection("#appointment")}
            className="bg-gradient-to-r from-electric-blue to-neon-purple hover:from-neon-purple hover:to-quantum-pink text-white px-12 py-5 rounded-2xl font-bold text-lg hover-lift glow-effect animate-pulse-glow"
            data-testid="services-cta-button"
          >
            Get Started Today 🚀
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
