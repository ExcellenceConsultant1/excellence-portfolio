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

  return (
    <section id="software" className="py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white relative overflow-hidden" data-testid="software-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">What We Do</p>
          <div className="section-underline mx-auto"></div>
          <div className="inline-flex items-center bg-gradient-to-r from-optifinance-orange to-quantum-pink text-white px-6 py-3 rounded-lg font-semibold mb-8 mt-8">
            <span className="mr-2">⚡</span>
            LAUNCHING SOON
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="software-title">
            <span className="gradient-text">Financial Optimizer</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Next-generation autonomous financial intelligence system powered by AI and deep learning algorithms.
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
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="clean-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              data-testid="waitlist-form"
            >
              <h4 className="text-2xl font-bold mb-4 gradient-text">Join the Waitlist</h4>
              <p className="text-gray-300 mb-6">Gain exclusive early access to AI-powered financial automation. Limited beta spots available.</p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  data-testid="waitlist-email-input"
                />
                <Button
                  type="submit"
                  disabled={joinWaitlistMutation.isPending}
                  className="bg-gradient-to-r from-optifinance-orange to-quantum-pink hover:opacity-90 text-white px-10 py-4 rounded-lg font-semibold simple-hover"
                  data-testid="waitlist-submit-button"
                >
                  {joinWaitlistMutation.isPending ? "Joining..." : "Join Waitlist"}
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
            <div 
              className="clean-card p-8"
              data-testid="software-mockup"
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Financial analytics dashboard" 
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h5 className="text-xl font-semibold text-white mb-2">Analytics Dashboard</h5>
              <p className="text-gray-400 text-sm">AI-powered financial intelligence and automation</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
