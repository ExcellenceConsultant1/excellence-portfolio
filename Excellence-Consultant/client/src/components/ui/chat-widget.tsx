import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="chat-widget">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 glass-card rounded-2xl p-6 max-w-sm border border-white/20"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            data-testid="chat-bubble"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-neon-purple rounded-2xl flex items-center justify-center text-white text-lg mr-3 glow-effect">
                ⚡
              </div>
              <div className="font-black text-white">OptiFinance Assistant</div>
            </div>
            <p className="text-gray-200 text-sm mb-4 font-light leading-relaxed">
              Activate intelligent financial consultation. Our OptiFinance-powered advisory system is ready to optimize your business operations.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-tech-green to-cyber-cyan hover:from-cyber-cyan hover:to-tech-green text-white px-6 py-3 rounded-2xl text-sm font-bold transition-all hover-lift glow-effect w-full"
              data-testid="chat-bubble-button"
            >
              <a href="https://wa.me/919033316252" target="_blank" rel="noopener noreferrer">
                Initialize OptiFinance Link
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="bg-gradient-to-r from-electric-blue to-neon-purple text-white p-4 rounded-full glow-effect hover:from-neon-purple hover:to-quantum-pink transition-all cursor-pointer floating animate-pulse-glow"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        data-testid="chat-widget-button"
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          ⚡
        </motion.div>
      </motion.div>
    </div>
  );
}
