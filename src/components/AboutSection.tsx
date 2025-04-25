
import { motion } from 'framer-motion';
import { Brain, Code, Rocket, Bot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const skills = [
  { name: "Python", level: 95 },
  { name: "TensorFlow/PyTorch", level: 90 },
  { name: "React/TypeScript", level: 85 },
  { name: "Computer Vision", level: 80 },
  { name: "NLP", level: 88 },
  { name: "3D/WebGL", level: 75 },
];

const services = [
  {
    icon: <Brain className="h-8 w-8 text-theme-purple" />,
    title: "AI Development",
    description: "Building custom AI models and solutions for specific business needs and challenges."
  },
  {
    icon: <Code className="h-8 w-8 text-theme-blue" />,
    title: "Full-Stack Development",
    description: "Creating responsive, interactive web applications with modern frameworks and tools."
  },
  {
    icon: <Bot className="h-8 w-8 text-theme-cyan" />,
    title: "Intelligent Agents",
    description: "Designing autonomous agents and bots that can perform complex tasks and workflows."
  },
  {
    icon: <Rocket className="h-8 w-8 text-theme-pink" />,
    title: "AI Consulting",
    description: "Strategic guidance on implementing AI technologies to enhance business operations."
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
              I'm Sreejon, an AI engineer and creative technologist specializing in developing cutting-edge AI systems and applications. With over 6 years of experience in the field, I combine technical expertise with creative problem-solving to build solutions that make a difference.
            </p>
            <p className="text-muted-foreground">
              My work spans across various domains including computer vision, natural language processing, generative AI, and interactive 3D experiences. I'm particularly interested in the intersection of AI and creative technologies, exploring how machine learning can enhance human creativity and capabilities.
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
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.1 * index }}
                      className={cn(
                        "h-full rounded-full bg-gradient-to-r",
                        index % 3 === 0 ? "from-theme-purple to-theme-blue" :
                        index % 3 === 1 ? "from-theme-blue to-theme-cyan" :
                        "from-theme-cyan to-theme-pink"
                      )}
                    />
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
