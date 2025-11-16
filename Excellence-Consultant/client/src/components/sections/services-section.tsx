import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    {
      icon: "⚡",
      title: "Smart Bookkeeping",
      description: "AI-powered automated bookkeeping with real-time reconciliation, expense categorization, and financial reporting. Get your books done in 1-2 days!"
    },
    {
      icon: "🎯",
      title: "Tax Planning & Filing",
      description: "Strategic tax optimization, compliance management, and filing services. Minimize tax liability while staying 100% compliant with regulations."
    },
    {
      icon: "📊",
      title: "Financial Reporting",
      description: "Comprehensive financial statements, cash flow analysis, and custom dashboards. Make data-driven decisions with real-time insights."
    },
    {
      icon: "🧠",
      title: "Business Advisory",
      description: "Strategic financial guidance, growth planning, and cost optimization. Transform your business with expert consulting and actionable insights."
    },
    {
      icon: "🏛️",
      title: "IPO & ROC Compliance",
      description: "Complete IPO support, SEBI compliance, ROC filings, and regulatory management. Navigate complex compliance requirements effortlessly."
    },
    {
      icon: "🚀",
      title: "AI Financial Tools",
      description: "Custom AI-powered dashboards, expense prediction, cost optimization, and automated financial workflows tailored to your business needs."
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 relative overflow-hidden" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Why Us</p>
          <div className="section-underline mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-8" data-testid="services-title">
            Industry <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Advanced financial intelligence systems engineered for business growth and operational excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="clean-card p-8 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              data-testid={`service-card-${index}`}
            >
              <div className="text-4xl mb-6">
                <span>{service.icon}</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            onClick={() => scrollToSection("#appointment")}
            className="bg-gradient-to-r from-electric-blue to-neon-purple hover:opacity-90 text-white px-10 py-5 rounded-lg font-semibold simple-hover"
            data-testid="services-cta-button"
          >
            Get Started Today
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
