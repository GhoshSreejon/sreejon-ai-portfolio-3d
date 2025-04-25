
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-border/30 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-theme-purple to-theme-blue">
              Sreejon<span className="text-theme-pink">.</span>
            </h2>
            <p className="text-muted-foreground mt-2">AI Developer & Creative Technologist</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-4"
          >
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors p-2">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-foreground transition-colors p-2">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center text-sm"
        >
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Sreejon. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
