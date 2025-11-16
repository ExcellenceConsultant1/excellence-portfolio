import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      position: "CEO, TechManufacture Ltd",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      content: "Excellence Consultant transformed our financial operations completely. Their AI-powered bookkeeping saved us weeks of manual work and the insights helped us cut costs by 30%!",
      rating: 5
    },
    {
      name: "Priya Patel",
      position: "Founder, GreenEnergy Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      content: "The IPO compliance support was exceptional. They handled everything seamlessly and made the complex process feel effortless. Highly recommended for growing businesses!",
      rating: 5
    },
    {
      name: "Amit Kumar",
      position: "CFO, Manufacturing Plus",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
      content: "Outstanding service! Their financial advisory helped us optimize cash flow and the automated reporting gives us real-time insights. Game-changing partnership!",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800" data-testid="testimonials-section">
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
            Here's what our satisfied clients have to say about our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="clean-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-500 text-lg">
                  {"⭐".repeat(testimonial.rating)}
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={`${testimonial.name} testimonial`} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  data-testid={`testimonial-image-${index}`}
                />
                <div>
                  <div className="font-semibold text-white" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm" data-testid={`testimonial-position-${index}`}>
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
