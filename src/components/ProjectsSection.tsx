import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Calendar } from 'lucide-react';

const projects = [
  {
    title: 'Speedy Rentals',
    subtitle: 'Car Rental Management System',
    date: 'May 2025',
    description:
      'Automated car rental system to streamline booking operations and manage vehicles and customer records efficiently.',
    tech: ['PHP', 'MySQL', 'HTML', 'Tailwind CSS', 'Bootstrap'],
    github: 'https://github.com/Ayushsinha132007',
  },
  {
    title: 'Smart Fertilizer Planner',
    subtitle: 'Agricultural AI Tool',
    date: 'Dec 2025',
    description:
      'Assists farmers in determining optimal fertilizer usage based on crop requirements, improving productivity and minimizing waste.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Redux', 'Tailwind CSS'],
    github: 'https://github.com/Ayushsinha132007',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <FolderGit2 className="inline-block w-8 h-8 mr-3 align-middle" />
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group cursor-pointer overflow-hidden hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              {/* Top gradient bar */}
              <div className="h-1 w-full bg-gradient-to-r from-primary via-secondary to-accent" />
              
              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-secondary font-medium">{project.subtitle}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0 mt-1" />
                </div>
                
                <p className="text-foreground/70 mb-5 leading-relaxed text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary/80 border border-primary/20 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.date}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
