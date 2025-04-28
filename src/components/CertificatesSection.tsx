
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certificates = [
  {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL",
    date: "October 2024",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Complete ML & Data Science Program",
    issuer: "GFG",
    date: "June 2024",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Excel Skills for Business",
    issuer: "Macquarie University",
    date: "April 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Data Analysis with Tableau",
    issuer: "Tableau Learning Partner",
    date: "February 2024",
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const CertificatesSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="certificates" className="py-20 bg-secondary/5">
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
            Certifi<span className="bg-clip-text text-transparent bg-gradient-to-r from-theme-purple to-theme-blue">cations</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and educational achievements
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              className="bg-card/50 border border-border/30 rounded-lg overflow-hidden backdrop-blur-sm hover:shadow-lg transition-all group"
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center mb-3">
                  <Award className="mr-2 h-5 w-5 text-theme-purple" />
                  <h3 className="font-semibold text-lg">{cert.title}</h3>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>{cert.issuer}</p>
                  <p className="mt-1">{cert.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
