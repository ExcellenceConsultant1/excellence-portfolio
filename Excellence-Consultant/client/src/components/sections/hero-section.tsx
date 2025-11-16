import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/ui/animated-counter";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const floatingElements = [
    { element: <div className="w-8 h-8 rounded-full bg-gradient-to-r from-electric-blue to-cyber-cyan opacity-60"></div>, className: "top-20 left-10", delay: 0 },
    { element: <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-neon-purple to-quantum-pink opacity-40 rotate-45"></div>, className: "top-32 right-20", delay: 1 },
    { element: <div className="w-6 h-6 bg-tech-green rounded-full opacity-70"></div>, className: "bottom-40 left-20", delay: 2 },
    { element: <div className="w-10 h-10 rounded-full bg-gradient-to-r from-optifinance-orange to-quantum-pink opacity-50"></div>, className: "bottom-20 right-10", delay: 0.5 },
    { element: <div className="w-4 h-16 bg-gradient-to-b from-electric-blue to-transparent rounded-full opacity-60"></div>, className: "top-1/2 left-1/3", delay: 1.5 },
  ];

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center relative overflow-hidden" data-testid="hero-section">
      {/* Floating geometric elements */}
      <div className="absolute inset-0 z-0">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className={`floating absolute ${element.className}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: element.delay }}
          >
            {element.element}
          </motion.div>
        ))}
      </div>
      
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12 translate-y-1/4"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform skew-y-12 -translate-y-1/4"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            data-testid="hero-title"
          >
            <span className="text-shadow-glow">Financial Intelligence</span>
            <span className="gradient-text block text-6xl md:text-8xl animate-gradient">Reimagined</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-testid="hero-description"
          >
            Revolutionize your financial operations with cutting-edge AI automation, predictive analytics, and OptiFinance-powered optimization. Built for the future of business intelligence.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={() => scrollToSection("#services")}
              className="bg-gradient-to-r from-electric-blue to-neon-purple hover:from-neon-purple hover:to-quantum-pink text-white px-10 py-5 rounded-2xl font-bold text-lg hover-lift glow-effect animate-pulse-glow"
              data-testid="hero-services-button"
            >
              Explore Solutions
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-tech-green to-cyber-cyan hover:from-cyber-cyan hover:to-tech-green text-white px-10 py-5 rounded-2xl font-bold text-lg hover-lift glow-effect"
              data-testid="hero-whatsapp-button"
            >
              <a href="https://wa.me/919033316252" target="_blank" rel="noopener noreferrer">
                Connect Now
              </a>
            </Button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glass-card rounded-3xl p-8 hover-lift" data-testid="stat-experience">
              <div className="text-5xl font-black text-white mb-3">
                <AnimatedCounter end={12} suffix="+" />
              </div>
              <div className="text-white font-semibold tracking-wide">Years of Innovation</div>
            </div>
            <div className="glass-card rounded-3xl p-8 hover-lift" data-testid="stat-clients">
              <div className="text-5xl font-black text-white mb-3">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <div className="text-white font-semibold tracking-wide">Businesses Transformed</div>
            </div>
            <div className="glass-card rounded-3xl p-8 hover-lift" data-testid="stat-entities">
              <div className="text-5xl font-black text-white mb-3">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-white font-semibold tracking-wide">Entities Optimized</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
