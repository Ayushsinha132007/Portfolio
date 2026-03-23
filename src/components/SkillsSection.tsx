import { motion } from 'framer-motion';
import { Code2, Globe, Server, Database, Wrench, Users } from 'lucide-react';

const skillGroups = [
  {
    category: 'Languages',
    icon: Code2,
    skills: ['C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
  },
  {
    category: 'Frontend',
    icon: Globe,
    skills: ['ReactJS', 'Tailwind CSS', 'Redux Toolkit', 'HTML5', 'Bootstrap'],
  },
  {
    category: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'PHP'],
  },
  {
    category: 'Database',
    icon: Database,
    skills: ['MySQL', 'MongoDB', 'PostgreSQL'],
  },
  {
    category: 'Tools & Platforms',
    icon: Wrench,
    skills: ['VS Code', 'GitHub', 'XAMPP', 'Postman', 'Figma'],
  },
  {
    category: 'Soft Skills',
    icon: Users,
    skills: ['Creativity', 'Problem-Solving', 'Critical Thinking', 'Adaptability', 'Quick Learner'],
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const item = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { type: 'spring' as const, stiffness: 300, damping: 20 } },
};

export default function SkillsSection() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <Code2 className="inline-block w-8 h-8 mr-3 align-middle" />
          Skills & Expertise
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              className="glass-card p-6 hover:border-primary/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <group.icon className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-sm">{group.category}</h3>
              </div>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
              >
                {group.skills.map((skill) => (
                  <motion.span key={skill} variants={item} className="skill-tag text-xs">
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
