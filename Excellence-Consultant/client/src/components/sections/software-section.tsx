import { motion } from "framer-motion";
import quickbooksLogo from "@/assets/quickbooks.png";
import xeroLogo from "@/assets/xero.png";
import sageLogo from "@/assets/sage.png";
import sapLogo from "@/assets/sap.jpg";
import tallyLogo from "@/assets/tally.png";
import zohoLogo from "@/assets/zoho.png";
import accessDimensionLogo from "@/assets/access-dimension.png";
import r365Logo from "@/assets/r365.png";
import gustoLogo from "@/assets/gusto.png";
import adpLogo from "@/assets/adp.png";
import turbotaxLogo from "@/assets/turbotax.png";

export default function SoftwareSection() {
  const financeTools = [
    { name: "QuickBooks", logo: quickbooksLogo },
    { name: "Xero", logo: xeroLogo },
    { name: "Sage", logo: sageLogo },
    { name: "SAP", logo: sapLogo },
    { name: "Tally", logo: tallyLogo },
    { name: "Zoho", logo: zohoLogo },
    { name: "Access Dimension", logo: accessDimensionLogo },
    { name: "R365", logo: r365Logo },
    { name: "Gusto Payroll", logo: gustoLogo },
    { name: "ADP Payroll", logo: adpLogo },
    { name: "TurboTax", logo: turbotaxLogo },
    { name: "NetSuite", logo: "" }
  ];

  const techStack = [
    {
      category: "Frontend Development",
      icon: "🎨",
      technologies: ["React", "Vue.js", "Angular", "Next.js", "TypeScript", "JavaScript"]
    },
    {
      category: "Backend Development",
      icon: "⚙️",
      technologies: ["Python", "Node.js", "Java", "C#", ".NET", "Go", "PHP"]
    },
    {
      category: "AI & Machine Learning",
      icon: "🤖",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "OpenAI", "Hugging Face"]
    },
    {
      category: "Reinforcement Learning",
      icon: "🧠",
      technologies: ["OpenAI Gym", "Ray RLlib", "Stable Baselines", "Deep Q-Networks", "Policy Gradient"]
    },
    {
      category: "Database & Storage",
      icon: "💾",
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase"]
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      category: "Autonomous Systems",
      icon: "🚀",
      technologies: ["ROS", "AutoML", "MLOps", "Model Deployment", "Edge AI", "IoT Integration"]
    }
  ];

  return (
    <section id="software" className="py-24 bg-gray-50" data-testid="software-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">Our Technology Stack</p>
          <div className="section-underline mx-auto"></div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 mt-8" data-testid="software-title">
            Expert-Driven <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Highly accurate bookkeeping and taxation services powered by finance experts and full-stack IT capabilities
          </p>
        </motion.div>

        {/* Finance Software Tools */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Finance Software Expertise</h3>
          <div className="overflow-hidden">
            <div className="finance-marquee">
              <div className="finance-marquee-content">
                {financeTools.concat(financeTools).concat(financeTools).map((tool, index) => (
                  <div
                    key={`${tool.name}-${index}`}
                    className="finance-tool-item"
                    data-testid={`finance-tool-${index}`}
                  >
                    {tool.logo ? (
                      <img 
                        src={tool.logo} 
                        alt={tool.name} 
                        className="finance-tool-logo"
                      />
                    ) : (
                      <div className="finance-tool-placeholder">☁️</div>
                    )}
                    <h4 className="finance-tool-name">{tool.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Custom Software Development</h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Building intelligent, autonomous, ML/RL-powered solutions with full-stack development expertise
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStack.map((category, index) => (
              <motion.div
                key={category.category}
                className="clean-card p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`tech-category-${index}`}
              >
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{category.icon}</div>
                  <h4 className="text-xl font-bold text-gray-900">{category.category}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-700 mb-6">
            Ready to transform your business with expert financial services and intelligent automation?
          </p>
          <a
            href="#appointment"
            className="inline-block bg-gradient-to-r from-electric-blue to-neon-purple hover:opacity-90 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#appointment')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
