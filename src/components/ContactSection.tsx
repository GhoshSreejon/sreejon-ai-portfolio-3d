
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Github, Linkedin, Twitter, Code } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, label: "GitHub", href: "https://github.com/GhoshSreejon" },
    { icon: <Linkedin className="h-5 w-5" />, label: "LinkedIn", href: "https://www.linkedin.com/in/sreejonghosh/" },
    { icon: <Twitter className="h-5 w-5" />, label: "Twitter", href: "https://x.com/SreejonGhosh" },
    { icon: <Mail className="h-5 w-5" />, label: "Email", href: "mailto:sreejon.india@gmail.com" },
    { icon: <Code className="h-5 w-5" />, label: "LeetCode", href: "https://leetcode.com/u/nemes1s_gg/" }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="contact" className="py-20 relative bg-gradient-to-b from-background to-secondary/20">
      <div className="content max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-theme-purple to-theme-blue">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Interested in working together? Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            variants={fadeIn}
          >
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50">
              <div className="flex items-center mb-6">
                <MessageSquare className="h-6 w-6 mr-3 text-primary" />
                <h3 className="text-xl font-bold">Let's Talk</h3>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[120px] bg-background/50 border-border/50"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-theme-purple to-theme-blue hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            variants={fadeIn}
          >
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-xl border border-border/50 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center mb-6">
                  <Mail className="h-6 w-6 mr-3 text-primary" />
                  <h3 className="text-xl font-bold">Contact Info</h3>
                </div>
                
                <div className="mb-8">
                  <p className="text-foreground mb-2">Email:</p>
                  <a href="mailto:sreejon.india@gmail.com" className="text-primary hover:underline">
                    sreejon.india@gmail.com
                  </a>
                </div>
                
                <div className="mb-8">
                  <p className="text-foreground mb-2">Based in:</p>
                  <p className="text-muted-foreground">
                    San Francisco, California
                  </p>
                </div>
                
                <div>
                  <p className="text-foreground mb-4">Connect with me:</p>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex items-center gap-2 bg-secondary/70 hover:bg-secondary px-4 py-2 rounded-lg transition-colors"
                      >
                        {link.icon}
                        <span>{link.label}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                variants={fadeIn}
                className="mt-8 text-center border-t border-border/30 pt-8"
              >
                <p className="text-muted-foreground font-bold">
                  Open to freelance opportunities and collaborations on interesting projects.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
