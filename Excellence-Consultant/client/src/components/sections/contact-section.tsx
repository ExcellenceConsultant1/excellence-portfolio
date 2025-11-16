import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent! 📧",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: "💬",
      title: "WhatsApp",
      description: "Instant responses, quick solutions",
      link: "https://wa.me/919033316252",
      linkText: "+91 90333 16252",
      color: "from-green-500 to-green-700",
      textColor: "text-green-600",
      hoverColor: "hover:text-green-200"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      description: "Instant responses, quick solutions",
      link: "https://wa.me/918849998420",
      linkText: "+91 88499 98420",
      color: "from-green-500 to-green-700",
      textColor: "text-green-600",
      hoverColor: "hover:text-green-200"
    },
    {
      icon: "📞",
      title: "Phone",
      description: "Direct line to our experts",
      link: "tel:+919033316252",
      linkText: "+91 90333 16252",
      color: "from-blue-500 to-blue-700",
      textColor: "text-blue-600",
      hoverColor: "hover:text-blue-200"
    },
    {
      icon: "📱",
      title: "Phone",
      description: "Direct line to our experts",
      link: "tel:+918849998420",
      linkText: "+91 88499 98420",
      color: "from-cyan-500 to-cyan-700",
      textColor: "text-cyan-600",
      hoverColor: "hover:text-cyan-200"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      description: "Professional networking",
      link: "https://www.linkedin.com/in/nishant-joshi-94561515b",
      linkText: "Connect with us",
      color: "from-purple-500 to-purple-700",
      textColor: "text-purple-600",
      hoverColor: "hover:text-purple-200"
    },
    {
      icon: "🚀",
      title: "Upwork Profile",
      description: "View our work history & reviews",
      link: "https://www.upwork.com/freelancers/~014b03570b8c198a1a?mp_source=share",
      linkText: "Visit Profile",
      color: "from-orange-500 to-orange-700",
      textColor: "text-orange-600",
      hoverColor: "hover:text-orange-200"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white" data-testid="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="contact-title">
            Get In Touch 📞
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to revolutionize your financial operations? Let's start the conversation today!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="clean-card p-8" data-testid="contact-form">
              <h3 className="text-2xl font-bold mb-6">Send us a Message 💌</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">Name</label>
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                      data-testid="contact-name-input"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 font-semibold mb-2">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                      data-testid="contact-email-input"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Subject</label>
                  <Input
                    type="text"
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
                    data-testid="contact-subject-input"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-semibold mb-2">Message</label>
                  <Textarea
                    placeholder="Tell us about your needs..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary h-32"
                    data-testid="contact-message-textarea"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold text-lg transition-all transform hover:scale-105"
                  data-testid="contact-submit-button"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message 🚀"}
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 gap-6">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className={`clean-card bg-gradient-to-br ${method.color} p-6`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-testid={`contact-method-${index}`}
                >
                  <div className="flex items-center">
                    <div className="bg-white text-gray-800 w-16 h-16 rounded-full flex items-center justify-center text-2xl mr-6">
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">{method.title}</h4>
                      <p className="text-white/80 mb-3">{method.description}</p>
                      <a 
                        href={method.link} 
                        className={`text-white font-semibold ${method.hoverColor} transition-colors`}
                        target={method.link.startsWith('http') ? '_blank' : undefined}
                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        data-testid={`contact-method-link-${index}`}
                      >
                        {method.linkText}
                      </a>
                    </div>
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
              data-testid="office-hours-card"
            >
              <h4 className="text-2xl font-bold mb-6 text-white">Office Hours 🕒</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-semibold">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">Emergency Support</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
