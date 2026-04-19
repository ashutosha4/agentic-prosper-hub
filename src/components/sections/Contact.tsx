import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl gradient-hero p-10 md:p-16 text-primary-foreground"
        >
          <div className="absolute inset-0 grid-pattern opacity-10" />
          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-primary-foreground/70 mb-4">// Let’s build something</div>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Have an AI product problem worth solving?
            </h2>
            <p className="mt-5 text-primary-foreground/80 text-base md:text-lg leading-relaxed">
              I’m open to senior product roles in AI — particularly agentic systems, RAG platforms, and AI for regulated industries. Happy to chat about ideas, opportunities, or interesting problems.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:aashutosha4@gmail.com"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-background text-foreground font-medium text-sm shadow-lg hover:shadow-xl transition-all"
              >
                <Mail size={16} /> aashutosha4@gmail.com
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://linkedin.com/in/ashutosh-ashutosh-95053395"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 font-medium text-sm transition-colors"
              >
                <Linkedin size={16} /> Connect on LinkedIn
              </a>
            </div>

            <div className="mt-10 pt-8 border-t border-primary-foreground/15 grid sm:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-primary-foreground/60">Based in</div>
                <div className="font-medium mt-1">Bengaluru, India</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-primary-foreground/60">Availability</div>
                <div className="font-medium mt-1">Open to opportunities</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-primary-foreground/60">Response time</div>
                <div className="font-medium mt-1">Within 24 hours</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
