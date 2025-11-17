import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const clients = [
    "Kitchen Xpress Overseas Inc.",
    "Viha - A Life's Peace Junction",
    "TSEG Techlabs LLP",
    "Kitchen Xpress Overseas Ltd."
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 overflow-hidden" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Media</p>
          <div className="section-underline mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 mt-8" data-testid="testimonials-title">
            Client <span className="gradient-text">Success</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Trusted by leading businesses worldwide.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-scroll-right">
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={`${client}-${index}`}
                  className="clean-card p-8 mx-4 flex-shrink-0 w-80"
                  data-testid={`client-card-${index}`}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-yellow-500 text-2xl">
                      ⭐⭐⭐⭐⭐
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-white text-lg" data-testid={`client-name-${index}`}>
                      {client}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
