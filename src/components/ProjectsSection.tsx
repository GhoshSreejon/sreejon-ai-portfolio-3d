import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 1,
    title: "Emotion & Body Language Analysis App",
    description: "Real-time analyzer using Python, OpenCV, and DesigNAR to track emotions and body language. Integrated Google Gemini API for AI-driven behavioral insights.",
    tags: ["Python", "AI", "OpenCV", "Machine Learning", "Google Gemini API"],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
    link: "https://github.com/GhoshSreejon/AI-Emotion-Analysis",
    featured: true
  },
  {
    id: 2,
    title: "E-mail Spam Classifier",
    description: "Built a Native Bayes (Multinomial) model with near 100% precision for spam detection using Python, Scikit-Learn, and real-time spam detection techniques.",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "NLP"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    link: "https://www.linkedin.com/posts/sreejonghosh_datascience-machinelearning-nlp-activity-7284763190247256064-ynRI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3eCCoBDZ_b7oiRI5JJTUqQtxEfLsOlxeY",
    featured: true
  },
  {
    id: 3,
    title: "World Beverage Sales Dashboard",
    description: "Data interpretation dashboard analyzing global beverage sales, top-selling products, seasonal trends, and regional preferences using Tableau and data visualization.",
    tags: ["Tableau", "Data Analysis", "Data Visualization"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
    link: "https://www.linkedin.com/posts/sreejonghosh_datavisualization-tableau-businessanalytics-activity-7284279947639017472-TR0g?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD3eCCoBDZ_b7oiRI5JJTUqQtxEfLsOlxeY",
    featured: false
  },
  {
    id: 4,
    title: "Bike Sales Dashboard",
    description: "Analyzed bike purchase trends, identifying factors influencing bike purchases. Created pivot tables, bar charts, and trend lines to highlight insights.",
    tags: ["Excel", "Data Analysis", "Pivot Charts"],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
    link: "https://www.linkedin.com/posts/sreejonghosh_insightful-analysis-of-bike-purchasing-activity-7185882089706192896-RNRd/?utm_source=share&utm_medium=member_desktop",
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
            Exploring data-driven solutions and innovative machine learning applications
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
                <CardFooter className="flex justify-center pt-2">
                  <Button variant="outline" size="sm" className="gap-2" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      View Project
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
