import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function SoftwareSection() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const joinWaitlistMutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest("POST", "/api/waitlist", { email });
    },
    onSuccess: () => {
      toast({
        title: "Success! 🎉",
        description: "You've been added to our waitlist. We'll notify you when Launch Finance Optimizer is ready!",
      });
      setEmail("");
      queryClient.invalidateQueries({ queryKey: ["/api/waitlist"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    joinWaitlistMutation.mutate(email);
  };

  const floatingIcons = [
    { emoji: "🤖", className: "top-10 right-10 text-4xl", delay: 0 },
    { emoji: "⚡", className: "bottom-20 left-10 text-3xl", delay: 1 },
    { emoji: "🔮", className: "top-1/2 right-1/4 text-5xl", delay: 2 },
  ];

  return (
    <section id="software" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden" data-testid="software-section">
      <div className="absolute inset-0">
        {floatingIcons.map((icon, index) => (
          <motion.div
            key={index}
            className={`floating absolute ${icon.className} opacity-30`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ duration: 1, delay: icon.delay }}
          >
            {icon.emoji}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center bg-gradient-to-r from-optifinance-orange to-quantum-pink text-white px-6 py-3 rounded-2xl font-bold mb-6 glow-effect"
            whileHover={{ scale: 1.05 }}
            data-testid="launching-soon-badge"
          >
            <span className="mr-2">⚡</span>
            OPTIFINANCE SYSTEM LOADING
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black mb-6" data-testid="software-title">
            <span className="gradient-text text-shadow-glow">Launch Finance Optimizer</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Next-generation autonomous financial intelligence system. OptiFinance networks and deep learning algorithms execute complex bookkeeping operations with precision in hours, not weeks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {[
                {
                  icon: "🤖",
                  title: "AI-Powered Automation",
                  description: "Advanced algorithms handle complex financial transactions and categorizations automatically.",
                  color: "bg-gradient-to-r from-tech-green to-cyber-cyan"
                },
                {
                  icon: "⚡",
                  title: "Lightning Fast Processing",
                  description: "Complete bookkeeping tasks in 1-2 days that traditionally take weeks.",
                  color: "bg-gradient-to-r from-neon-purple to-quantum-pink"
                },
                {
                  icon: "📊",
                  title: "Smart Insights",
                  description: "Predictive analytics for expenses, cash flow forecasting, and cost optimization recommendations.",
                  color: "bg-gradient-to-r from-optifinance-orange to-quantum-pink"
                },
                {
                  icon: "🔒",
                  title: "Bank-Grade Security",
                  description: "Enterprise-level security with encrypted data storage and compliance with financial regulations.",
                  color: "bg-gradient-to-r from-electric-blue to-neon-purple"
                }
              ].map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`feature-${index}`}
                >
                  <div className={`${feature.color} text-white w-12 h-12 rounded-full flex items-center justify-center text-xl`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
                    <p className="text-blue-100">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="glass-card rounded-3xl p-8 neo-shadow border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              data-testid="waitlist-form"
            >
              <h4 className="text-2xl font-bold mb-4 gradient-text">Join OptiFinance Network</h4>
              <p className="text-gray-300 mb-6 font-light">Gain exclusive early access to revolutionary AI-powered financial automation. Limited beta testing spots available.</p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  data-testid="waitlist-email-input"
                />
                <Button
                  type="submit"
                  disabled={joinWaitlistMutation.isPending}
                  className="bg-gradient-to-r from-optifinance-orange to-quantum-pink hover:from-quantum-pink hover:to-electric-blue text-white px-10 py-4 rounded-2xl font-bold transition-all hover-lift glow-effect"
                  data-testid="waitlist-submit-button"
                >
                  {joinWaitlistMutation.isPending ? "Initializing..." : "Access OptiFinance System"}
                </Button>
              </form>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="glass-card rounded-3xl p-8 neo-shadow transform rotate-2 hover:rotate-0 transition-transform duration-500 border border-white/10"
              whileHover={{ scale: 1.02 }}
              data-testid="software-mockup"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Financial analytics dashboard" 
                className="w-full h-64 object-cover rounded-2xl mb-4"
              />
              <h5 className="text-xl font-bold text-white mb-2 text-shadow-glow">OptiFinance Analytics Interface</h5>
              <p className="text-gray-300 font-light">Quantum-powered financial intelligence and predictive automation</p>
            </motion.div>
            
            <motion.div 
              className="absolute -top-4 -left-4 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💡
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -right-4 bg-yellow-500 text-black w-16 h-16 rounded-full flex items-center justify-center text-2xl"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⚡
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
