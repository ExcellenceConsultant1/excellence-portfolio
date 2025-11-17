import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/ui/animated-counter";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero-bg min-h-screen flex items-center relative overflow-hidden" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-20">
        <div className="max-w-5xl mx-auto">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            data-testid="hero-title"
          >
            Explore <span className="gradient-text italic">Intelligence</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-16 max-w-3xl mx-auto font-normal leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            data-testid="hero-description"
          >
            We are a technology company driven by a mission to reshape industries and uplift lives.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              onClick={() => scrollToSection("#services")}
              className="bg-gradient-to-r from-electric-blue to-neon-purple hover:opacity-90 text-white px-8 py-6 rounded-lg font-semibold text-base simple-hover"
              data-testid="hero-services-button"
            >
              Explore Solutions
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-tech-green to-cyber-cyan hover:opacity-90 text-white px-8 py-6 rounded-lg font-semibold text-base simple-hover"
              data-testid="hero-whatsapp-button"
            >
              <a href="https://wa.me/919033316252" target="_blank" rel="noopener noreferrer">
                Connect Now
              </a>
            </Button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="clean-card p-8" data-testid="stat-experience">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <div className="text-gray-400 font-medium text-sm tracking-wide">Years of Experience</div>
            </div>
            <div className="clean-card p-8" data-testid="stat-clients">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <div className="text-gray-400 font-medium text-sm tracking-wide">Business Transformed</div>
            </div>
            <div className="clean-card p-8" data-testid="stat-entities">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                <AnimatedCounter end={6} suffix="+" />
              </div>
              <div className="text-gray-400 font-medium text-sm tracking-wide">Software & Application Created</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
