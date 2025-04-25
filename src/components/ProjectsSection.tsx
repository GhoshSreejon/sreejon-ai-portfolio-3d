
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: "AI Vision Assistant",
    description: "A computer vision system that helps users identify objects and scenes in real-time, built with PyTorch and React.",
    tags: ["Computer Vision", "PyTorch", "React"],
    image: "https://images.unsplash.com/photo-1573164713619-24c711fe7878?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 2,
    title: "NLP Document Analyzer",
    description: "An intelligent system that extracts key information from complex documents using advanced NLP techniques.",
    tags: ["NLP", "TensorFlow", "Python"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#",
    featured: true
  },
  {
    id: 3,
    title: "3D Neural Network Visualizer",
    description: "Interactive WebGL visualization of neural networks, allowing users to explore AI models in three dimensions.",
    tags: ["Three.js", "WebGL", "React"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#",
    featured: false
  },
  {
    id: 4,
    title: "Generative Art Creator",
    description: "A creative AI tool that generates unique digital artwork based on text prompts and style controls.",
    tags: ["Generative AI", "GANs", "TypeScript"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=800&auto=format&fit=crop",
    link: "#",
    github: "#",
    featured: false
  }
];

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedProjects = showAll ? projects : projects.filter(project => project.featured);
  
  return (
    <section id="projects" className="py-20 relative">
      <div className="content max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-theme-purple to-theme-blue">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Exploring the intersection of AI and technology through innovative solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 2) }}
            >
              <Card className="overflow-hidden h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group">
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className={cn(
                          "px-3 py-1 text-xs font-medium rounded-full",
                          i % 3 === 0 ? "bg-theme-purple/10 text-theme-purple" :
                          i % 3 === 1 ? "bg-theme-blue/10 text-theme-blue" :
                          "bg-theme-cyan/10 text-theme-cyan"
                        )}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between pt-2">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {projects.length > 2 && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button 
              onClick={() => setShowAll(!showAll)}
              variant="outline" 
              className="border-primary/30 hover:bg-primary/10"
            >
              {showAll ? "Show Less" : "View All Projects"}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
