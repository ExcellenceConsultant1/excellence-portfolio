import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function AppointmentSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    timeSlot: "",
    message: ""
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const timeSlots = ["9:00 AM", "11:00 AM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"];
  const services = [
    "Smart Bookkeeping",
    "Tax Planning",
    "Financial Reporting",
    "Business Advisory",
    "IPO & Compliance",
    "AI Financial Tools"
  ];

  const appointmentMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/appointments", data);
    },
    onSuccess: () => {
      toast({
        title: "Appointment Booked! 📅",
        description: "We'll contact you shortly to confirm your appointment. You can also reach us directly on WhatsApp.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        timeSlot: "",
        message: ""
      });
      queryClient.invalidateQueries({ queryKey: ["/api/appointments"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to book appointment. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.timeSlot) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    appointmentMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="appointment" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800" data-testid="appointment-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6" data-testid="appointment-title">
            <span className="gradient-text">Strategic</span> Consultation
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Initiate your transformation journey with our OptiFinance-powered financial intelligence experts. Schedule your strategic assessment or connect instantly via our communication channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            className="clean-card p-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="appointment-form"
          >
            <h3 className="text-3xl font-semibold text-white mb-8">Book Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-200 font-semibold mb-2">Full Name *</label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full"
                    data-testid="appointment-name-input"
                  />
                </div>
                <div>
                  <label className="block text-gray-200 font-semibold mb-2">Email *</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full"
                    data-testid="appointment-email-input"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-200 font-semibold mb-2">Phone *</label>
                  <Input
                    type="tel"
                    placeholder="+91 90333 16252"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="w-full"
                    data-testid="appointment-phone-input"
                  />
                </div>
                <div>
                  <label className="block text-gray-200 font-semibold mb-2">Company</label>
                  <Input
                    type="text"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    className="w-full"
                    data-testid="appointment-company-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-200 font-semibold mb-2">Service Interest *</label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                  <SelectTrigger className="w-full" data-testid="appointment-service-select">
                    <SelectValue placeholder="Select a service..." />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-gray-200 font-semibold mb-2">Preferred Time Slot *</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot}
                      type="button"
                      variant={formData.timeSlot === slot ? "default" : "outline"}
                      onClick={() => handleInputChange("timeSlot", slot)}
                      className="p-3 text-sm font-medium"
                      data-testid={`time-slot-${slot.replace(' ', '-').toLowerCase()}`}
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-gray-200 font-semibold mb-2">Message (Optional)</label>
                <Textarea
                  placeholder="Tell us about your business needs..."
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full h-32"
                  data-testid="appointment-message-textarea"
                />
              </div>

              <Button
                type="submit"
                disabled={appointmentMutation.isPending}
                className="w-full bg-gradient-to-r from-electric-blue to-neon-purple hover:opacity-90 text-white py-5 rounded-lg font-semibold text-lg simple-hover"
                data-testid="appointment-submit-button"
              >
                {appointmentMutation.isPending ? "Booking..." : "Book Appointment 📅"}
              </Button>
            </form>
          </motion.div>

          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="clean-card bg-gradient-to-br from-tech-green to-cyber-cyan text-white p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              data-testid="whatsapp-direct-card"
            >
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center text-3xl mb-6">💬</div>
              <h3 className="text-3xl font-black mb-4 text-white">Instant OptiFinance Connect</h3>
              <p className="mb-6 text-white font-light leading-relaxed">Direct access to our AI-powered advisory team. Real-time solutions and strategic guidance at your fingertips.</p>
              <Button
                asChild
                className="bg-green-600 text-white hover:bg-green-700 px-10 py-4 rounded-lg font-semibold text-lg transition-colors simple-shadow"
                data-testid="whatsapp-direct-button"
              >
                <a href="https://wa.me/919033316252" target="_blank" rel="noopener noreferrer">
                  💬 Start WhatsApp Chat
                </a>
              </Button>
            </motion.div>

            <motion.div 
              className="clean-card bg-gradient-to-br from-electric-blue to-neon-purple text-white p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              data-testid="call-direct-card"
            >
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center text-3xl mb-6">📞</div>
              <h3 className="text-3xl font-black mb-4 text-white">Voice Intelligence</h3>
              <p className="mb-6 text-white font-light leading-relaxed">Connect with our OptiFinance-powered financial architects. Immediate strategic consultation and intelligent advisory services.</p>
              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-blue-600 text-white hover:bg-blue-700 px-10 py-4 rounded-lg font-semibold text-lg transition-colors simple-shadow"
                  data-testid="call-direct-button"
                >
                  <a href="tel:+919033316252">
                    📞 +91 90333 16252
                  </a>
                </Button>
                <Button
                  asChild
                  className="w-full bg-cyan-600 text-white hover:bg-cyan-700 px-10 py-4 rounded-lg font-semibold text-lg transition-colors simple-shadow"
                  data-testid="call-direct-button-alt"
                >
                  <a href="tel:+918849998420">
                    📱 +91 88499 98420
                  </a>
                </Button>
              </div>
            </motion.div>

            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="Business consultation meeting" 
              className="rounded-3xl shadow-2xl w-full"
              data-testid="consultation-image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
