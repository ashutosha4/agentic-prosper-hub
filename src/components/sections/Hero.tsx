import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Mail, MapPin } from "lucide-react";
import profileImg from "@/assets/ashutosh-profile.jpg";

const Hero = () => {
  return (
    <section className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -z-10" />
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl -z-10" />

      <div className="container-narrow relative">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs font-mono text-muted-foreground mb-6">
              <span className="w-2 h-2 rounded-full bg-[hsl(var(--accent-cyan))] animate-pulse" />
              Open to Senior PM / AI Product roles
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-foreground">
              AI Product Manager <br className="hidden sm:block" />
              shipping <span className="text-gradient-accent">agentic & RAG</span> systems at enterprise scale.
            </h1>

            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              I’m <span className="text-foreground font-medium">Ashutosh A</span> — 7+ years turning fragmented enterprise workflows into intelligent, explainable, human-in-the-loop AI products. Currently building decision-support and multi-agent platforms in insurance and banking.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-primary text-primary-foreground font-medium text-sm shadow-md hover:shadow-glow transition-all"
              >
                View case studies
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="mailto:aashutosha4@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-border bg-background hover:bg-secondary text-foreground font-medium text-sm transition-colors"
              >
                <Mail size={16} /> aashutosha4@gmail.com
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
              <span className="flex items-center gap-1.5"><MapPin size={13} /> Bengaluru, India</span>
              <a href="https://linkedin.com/in/ashutosh-ashutosh-95053395" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-foreground transition-colors">
                <Linkedin size={13} /> linkedin.com/in/ashutosh-ashutosh-95053395
              </a>
              <span className="font-mono">MBA · IIM Sirmaur</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto lg:mx-0 lg:ml-auto"
          >
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              {/* Decorative frames */}
              <div className="absolute -inset-3 rounded-2xl gradient-hero opacity-90 rotate-3" />
              <div className="absolute -inset-3 rounded-2xl border border-accent/30 -rotate-3" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border shadow-xl bg-card">
                <img src={profileImg} alt="Portrait of Ashutosh A, AI Product Manager" className="w-full h-full object-cover" />
              </div>

              {/* Floating metric cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 top-8 bg-card border border-border rounded-lg shadow-elevated px-3 py-2 hidden md:block"
              >
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Decision accuracy</div>
                <div className="text-lg font-display font-bold text-foreground">+30%</div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 bottom-10 bg-card border border-border rounded-lg shadow-elevated px-3 py-2 hidden md:block"
              >
                <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">Processing time</div>
                <div className="text-lg font-display font-bold text-foreground">−40%</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trusted by / focus strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { v: "7+", l: "Years in product & engineering" },
            { v: "5", l: "AI / agentic platforms shipped" },
            { v: "94%", l: "Exception accuracy (multi-agent)" },
            { v: "0", l: "Cross-tenant data incidents" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-2xl md:text-3xl font-bold text-foreground">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1 leading-snug">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
