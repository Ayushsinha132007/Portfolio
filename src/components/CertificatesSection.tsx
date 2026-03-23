import { motion } from 'framer-motion';
import { Award, ExternalLink, BookOpen } from 'lucide-react';

const certificates = [
  {
    title: 'ChatGPT-4 Prompt Engineering: ChatGPT, Generative AI & LLM',
    date: 'Aug 2025',
    link: 'https://drive.google.com/file/d/1UGUKdLdPd_BbKSyOoJzkqFH5blHvC2wm/view',
  },
  {
    title: 'Cloud Computing Course (NPTEL)',
    date: 'Apr 2025',
    link: 'https://drive.google.com/file/d/1gXjXwpfg6AbgihTuvUqRHdpwKdyQ8KVm/view',
  },
  {
    title: 'Responsive Web Design — freeCodeCamp',
    date: 'Nov 2023',
    link: 'https://drive.google.com/file/d/1GZm4LRJ4aknwyt6reVSYh6GAcH5bz82o/view',
  },
];

const training = {
  title: 'Summer Training on Design Thinking & Figma',
  org: 'Lovely Professional University',
  date: 'June 2025 - July 2025',
  link: 'https://drive.google.com/file/d/1H6jKuGJv9A2TE2nBug7Gm9v37-9i2jrE/view?usp=sharing',
  points: [
    'Focused on user-centered problem solving and UI/UX fundamentals',
    'Applied Design Thinking process to a real-world campus problem',
    'Designed "Quick Eats" campus food service app prototype in Figma',
  ],
};

export default function CertificatesSection() {
  return (
    <section id="certificates" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          <Award className="inline-block w-8 h-8 mr-3 align-middle" />
          Certificates & Training
        </h2>

        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="glass-card p-6 group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-accent/10">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                {cert.link && cert.link !== '#' ? (
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${cert.title} certificate`}>
                    <ExternalLink className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors cursor-pointer" />
                  </a>
                ) : (
                  <ExternalLink className="w-4 h-4 text-muted-foreground/50" />
                )}
              </div>
              <h3 className="font-semibold text-foreground text-sm leading-snug mb-3">{cert.title}</h3>
              <p className="text-xs text-muted-foreground">{cert.date}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="glass-card p-6 sm:p-8 max-w-3xl hover:border-primary/30 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">
                {training.link ? (
                  <a href={training.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors inline-flex items-center gap-2">
                    {training.title}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  training.title
                )}
              </h3>
              <p className="text-sm text-muted-foreground">
                {training.org} • {training.date}
              </p>
            </div>
          </div>
          <ul className="space-y-3 ml-1">
            {training.points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-foreground/80">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                {p}
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
