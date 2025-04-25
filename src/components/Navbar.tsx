
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center"
        >
          <a href="#home" className="text-2xl font-bold text-glow bg-clip-text text-transparent bg-gradient-to-r from-theme-purple to-theme-blue">
            Sreejon<span className="text-theme-pink">.</span>
          </a>
        </motion.div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="relative text-foreground/80 hover:text-foreground transition-colors group"
            >
              {item.name}
              <motion.span 
                className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-theme-purple to-theme-blue group-hover:w-full transition-all duration-300"
                whileHover={{ width: "100%" }}
              />
            </motion.a>
          ))}
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground p-2 rounded-full hover:bg-accent transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md px-6 pt-4 pb-6"
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors py-2"
              >
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Navbar;
