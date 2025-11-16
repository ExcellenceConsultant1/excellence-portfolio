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
            className="absolute bottom-16 right-0 clean-card p-6 max-w-sm"
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            data-testid="chat-bubble"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-electric-blue to-neon-purple rounded-lg flex items-center justify-center text-white text-lg mr-3">
                ⚡
              </div>
              <div className="font-semibold text-white">Chat with Us</div>
            </div>
            <p className="text-gray-300 text-sm mb-4 leading-relaxed">
              Get instant support via WhatsApp. Our team is ready to help with your financial needs.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-tech-green to-cyber-cyan hover:opacity-90 text-white px-6 py-3 rounded-lg text-sm font-semibold simple-hover w-full"
              data-testid="chat-bubble-button"
            >
              <a href="https://wa.me/919033316252" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="bg-gradient-to-r from-electric-blue to-neon-purple text-white p-4 rounded-full hover:opacity-90 transition-opacity cursor-pointer"
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
