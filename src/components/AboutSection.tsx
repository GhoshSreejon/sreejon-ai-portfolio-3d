import { motion } from 'framer-motion';
import { Brain, Database, BarChart, Layers, PieChart, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const skills = [
  { name: "Java", category: "Programming Languages" },
  { name: "Python", category: "Programming Languages" },
  { name: "R", category: "Programming Languages" },
  { name: "SQL", category: "Programming Languages" },
  { name: "Pandas", category: "Frameworks / Libraries" },
  { name: "NumPy", category: "Frameworks / Libraries" },
  { name: "Scikit-Learn", category: "Frameworks / Libraries" },
  { name: "OpenCV", category: "Frameworks / Libraries" },
  { name: "MediaPipe", category: "Frameworks / Libraries" },
  { name: "TensorFlow", category: "Frameworks / Libraries" },
  { name: "Streamlit", category: "Frameworks / Libraries" },
  { name: "IntelliJ IDEA", category: "Tools & Platforms" },
  { name: "PyCharm", category: "Tools & Platforms" },
  { name: "Jupyter Notebook", category: "Tools & Platforms" },
  { name: "VS Code", category: "Tools & Platforms" },
  { name: "Tableau", category: "Tools & Platforms" },
  { name: "Microsoft Excel", category: "Tools & Platforms" },
];

const services = [
  {
    icon: <Brain className="h-8 w-8 text-theme-purple" />,
    title: "AI Development",
    description: "Designing and implementing advanced AI and machine learning models for complex problem-solving."
  },
  {
    icon: <Layers className="h-8 w-8 text-theme-blue" />,
    title: "ML Model Projects",
    description: "Creating sophisticated machine learning solutions tailored to specific business and research needs."
  },
  {
    icon: <BarChart className="h-8 w-8 text-theme-cyan" />,
    title: "Data Visualization",
    description: "Transforming complex data into insightful, interactive visual representations that drive decision-making."
  },
  {
    icon: <PieChart className="h-8 w-8 text-theme-pink" />,
    title: "Business Intelligence",
    description: "Leveraging data analytics to provide strategic insights and support critical business decisions."
  }
];

const AboutSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="content max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-theme-purple to-theme-blue">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A passionate AI developer with expertise in creating intelligent solutions that solve real-world problems
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I'm a B.Tech student in Computer Science and Engineering at LPU, specializing as a Data Analyst. With a keen interest in AI and ML, I'm passionate about using data-driven insights to solve real-world problems.
            </p>
            <p className="text-muted-foreground">
              I've worked on various projects ranging from AI-powered apps to sustainability tools, always focused on creating impactful solutions. I'm confident, adaptable, and thrive in collaborative environments, with a solution-oriented mindset. Eager to learn and grow, I continuously seek new opportunities to expand my skills and contribute to meaningful innovations.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeInUp}
            className="bg-secondary/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
            <div className="space-y-8">
              {["Programming Languages", "Frameworks / Libraries", "Tools & Platforms"].map((category) => (
                <div key={category} className="space-y-4">
                  <h4 className="text-xl font-semibold text-primary">{category}</h4>
                  <div className="flex flex-wrap gap-3">
                    {skills
                      .filter((skill) => skill.category === category)
                      .map((skill, index) => (
                        <div
                          key={index}
                          className="bg-background/50 px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {skill.name}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          variants={fadeInUp}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">What I Do</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border border-border/50 h-full">
                  <CardHeader>
                    <div className="mb-4">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
