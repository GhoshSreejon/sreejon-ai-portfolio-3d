
import { motion } from 'framer-motion';
import { Trophy, Star, Code, Shield } from 'lucide-react';

const achievements = [
  {
    title: "5-star rating in Python – HackerRank",
    date: "September 2024",
    description: "Achieved a 5-star rating in Python, demonstrating exceptional problem-solving and programming expertise.",
    icon: <Star className="h-8 w-8 text-theme-purple" />
  },
  {
    title: "Flipkart GRID 6.0 - Software Development Track",
    date: "August 2024",
    description: "Competitive test on e-commerce, technology, and problem-solving skills involving quizzes and coding challenges.",
    icon: <Code className="h-8 w-8 text-theme-blue" />
  },
  {
    title: "CTF Competition by Indian Cyber Security Solutions",
    date: "January 2023",
    description: "CTF competition where participants solved security challenges testing and enhancing their ethical hacking skills.",
    icon: <Shield className="h-8 w-8 text-theme-cyan" />
  },
  {
    title: "50 Days Coding Streak Badge – LeetCode",
    date: "March 2025",
    description: "Completed a 50-day coding streak on LeetCode, showcasing consistency and problem-solving skills.",
    icon: <Trophy className="h-8 w-8 text-theme-pink" />
  }
];

const AchievementsSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="achievements" className="py-20 relative">
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
            Achieve<span className="bg-clip-text text-transparent bg-gradient-to-r from-theme-purple to-theme-blue">ments</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Recognition, competitions, and technical accomplishments
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              variants={fadeInUp}
              className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 bg-background/50 rounded-lg">
                  {achievement.icon}
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold">{achievement.title}</h3>
                    <span className="text-sm text-muted-foreground mt-1 md:mt-0">{achievement.date}</span>
                  </div>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
