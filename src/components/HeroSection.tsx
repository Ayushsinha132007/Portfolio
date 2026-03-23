import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ChevronDown, MapPin, Download } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const socials = [
  { icon: Github, href: 'https://github.com/Ayushsinha132007', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/xayush', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:ayushkumar53467@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+917739333370', label: 'Phone' },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="section-container relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium mb-5"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to Opportunities
            </motion.div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-3 tracking-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="glow-text">Ayush Kumar</span>
            </h1>

            <motion.p
              className="text-xl sm:text-2xl font-medium text-muted-foreground mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Full Stack Developer
            </motion.p>

            <motion.div
              className="flex items-center gap-2 text-sm text-muted-foreground mb-6 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
            >
              <MapPin className="w-4 h-4" />
              <span>Ranchi, India</span>
            </motion.div>

            <motion.p
              className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              B.Tech CSE student passionate about building modern web applications with
              React, Node.js, and cloud technologies. Turning ideas into elegant digital experiences.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold text-sm shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
              <a
                href="/Ayush_Kumar_CV.pdf"
                download="Ayush_Kumar_CV.pdf"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-border/50 bg-background/50 backdrop-blur-md hover:bg-muted/50 hover:border-primary/50 font-semibold text-sm text-foreground hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </motion.div>

            <motion.div
              className="flex gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card-hover p-3 rounded-xl group"
                  aria-label={s.label}
                >
                  <s.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative group">
              {/* Animated outer ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary via-accent to-secondary opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
              
              <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 relative z-10 rounded-full p-1.5 bg-gradient-to-tr from-primary/50 to-accent/50 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <Avatar className="w-full h-full rounded-full">
                    {/* Placeholder until user uploads to /profile.jpg */}
                    <AvatarImage src="/profile.jpg" className="object-cover object-[center_top] w-full h-full" alt="Ayush Kumar" />
                    <AvatarFallback className="bg-muted text-muted-foreground text-4xl font-bold">AK</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        <motion.a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ delay: 1.2, y: { repeat: Infinity, duration: 1.5 } }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.a>
      </div>
    </section>
  );
}
