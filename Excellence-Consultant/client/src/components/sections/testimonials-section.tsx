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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" data-testid="testimonials-title">
            What Our Clients Say ⭐
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-3xl p-8 cartoon-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 text-xl">
                  {"⭐".repeat(testimonial.rating)}
                </div>
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
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
                  <div className="font-semibold text-gray-900" data-testid={`testimonial-name-${index}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600" data-testid={`testimonial-position-${index}`}>
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
