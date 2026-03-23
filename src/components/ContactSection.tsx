import { motion } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';

const contacts = [
  { icon: Mail, label: 'ayushkumar53467@gmail.com', href: 'mailto:ayushkumar53467@gmail.com', color: 'bg-primary/10 text-primary' },
  { icon: Phone, label: '+91-7739333370', href: 'tel:+917739333370', color: 'bg-secondary/10 text-secondary' },
  { icon: Github, label: 'github.com/Ayushsinha132007', href: 'https://github.com/Ayushsinha132007', color: 'bg-accent/10 text-accent' },
  { icon: Linkedin, label: 'linkedin.com/in/xayush', href: 'https://www.linkedin.com/in/xayush', color: 'bg-secondary/10 text-secondary' },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center mb-12">
          <h2 className="section-title">
            <Send className="inline-block w-8 h-8 mr-3 align-middle" />
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-base max-w-md mx-auto">
            Have an idea or opportunity? Let's connect and build something amazing together.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-5 flex items-center gap-4 group hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`p-3 rounded-xl ${c.color} transition-colors`}>
                <c.icon className="w-5 h-5" />
              </div>
              <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors break-all flex-1">
                {c.label}
              </span>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-all opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0" />
            </motion.a>
          ))}
        </div>

        <motion.div
          className="text-center mt-20 pt-8 border-t border-border/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            Designed & Built with ❤️ by <span className="text-primary">Ayush Kumar</span> • {new Date().getFullYear()}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
