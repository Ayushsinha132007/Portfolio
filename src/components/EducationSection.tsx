import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, ExternalLink } from 'lucide-react';

const education = [
  {
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    degree: 'B.Tech — Computer Science & Engineering',
    period: 'Aug 2023 - Present',
  },
  {
    institution: 'Central Academy',
    location: 'Ranchi, Jharkhand',
    degree: 'Intermediate',
    period: 'Aug 2020 - March 2022',
  },
  {
    institution: "Mother's International School",
    location: 'Ranchi, Jharkhand',
    degree: 'Matriculation',
    period: 'Apr 2019 - March 2020',
  },
];

const extracurricular = {
  title: 'Ekjut (NGO)',
  role: 'Volunteer / Intern',
  description:
    'Completed a 30-hour internship gaining practical exposure to community development and NGO operations.',
  link: 'https://drive.google.com/file/d/1BMUHiPWsFZHx8vp16ZAibJ2y2hPOdQ0g/view',
  skills: ['Teamwork', 'Communication', 'Data Handling', 'Time Management', 'Problem-Solving'],
};

export default function EducationSection() {
  return (
    <section id="education" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <GraduationCap className="inline-block w-8 h-8 mr-3 align-middle" />
          Education
        </h2>

        <div className="relative max-w-3xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary to-accent opacity-40" />

          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                className="relative pl-12"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="absolute left-2 top-5 w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                <div className="glass-card p-5 hover:border-primary/30 transition-colors duration-300">
                  <h3 className="font-bold text-foreground">{edu.institution}</h3>
                  <p className="text-sm text-primary font-medium">{edu.degree}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{edu.period}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-primary" />
            Extracurricular
          </h3>
          <div className="glass-card p-6 max-w-3xl hover:border-primary/30 transition-colors duration-300">
            <h4 className="font-semibold text-foreground">
              {extracurricular.link ? (
                <a href={extracurricular.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-1.5">
                  {extracurricular.title}
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                extracurricular.title
              )}
            </h4>
            <p className="text-sm text-primary font-medium mb-2">{extracurricular.role}</p>
            <p className="text-sm text-foreground/80 mb-4">{extracurricular.description}</p>
            <div className="flex flex-wrap gap-2">
              {extracurricular.skills.map((s) => (
                <span key={s} className="skill-tag text-xs">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
