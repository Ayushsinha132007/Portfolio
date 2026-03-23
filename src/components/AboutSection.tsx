import { motion } from 'framer-motion';
import { User, Sparkles, Target, Rocket } from 'lucide-react';

const highlights = [
  { icon: Sparkles, label: 'Projects Built', value: '2+', color: 'text-primary' },
  { icon: Target, label: 'Certifications', value: '3+', color: 'text-secondary' },
  { icon: Rocket, label: 'Languages', value: '5+', color: 'text-accent' },
  { icon: User, label: 'NGO Hours', value: '30+', color: 'text-primary' },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <User className="inline-block w-8 h-8 mr-3 align-middle" />
          About Me
        </h2>

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl">
          <div className="lg:col-span-3 glass-card p-8 sm:p-10">
            <div className="space-y-5">
              <p className="text-foreground/85 text-lg leading-relaxed">
                I'm a <span className="text-primary font-semibold">Computer Science & Engineering</span> student 
                at Lovely Professional University with a deep passion for full-stack web development. I love 
                turning complex problems into clean, intuitive digital solutions.
              </p>
              <p className="text-foreground/75 text-base leading-relaxed">
                With hands-on experience in React, Node.js, and modern databases, I build applications that
                are not just functional but also delightful to use. I'm constantly learning and exploring
                new technologies to stay on the cutting edge.
              </p>
              <div className="pt-4 flex flex-wrap gap-3">
                {['React', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL'].map((tech) => (
                  <span key={tech} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                className="glass-card p-5 flex flex-col items-center justify-center text-center group hover:border-primary/30 transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <item.icon className={`w-5 h-5 ${item.color} mb-2 group-hover:scale-110 transition-transform`} />
                <div className="text-2xl font-bold glow-text">{item.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
