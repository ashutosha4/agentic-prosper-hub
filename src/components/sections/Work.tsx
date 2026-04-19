import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";

const Work = () => {
  const professional = caseStudies.filter((c) => c.category === "Professional");
  const strategic = caseStudies.filter((c) => c.category === "Strategic Recommendation");

  return (
    <section id="work" className="py-20 md:py-28 bg-secondary/40 border-y border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">// Selected Work</div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Case studies in <span className="text-gradient-accent">AI &amp; Agentic AI</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Each study covers discovery, architecture trade-offs, product decisions, measured outcomes, and what I’d do differently.
            </p>
          </div>
        </div>

        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">Professional</div>
        <div className="grid md:grid-cols-2 gap-5 mb-14">
          {professional.map((c, i) => (
            <CaseCard key={c.slug} study={c} index={i} />
          ))}
        </div>

        <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">Strategic Recommendation</div>
        <div className="grid md:grid-cols-2 gap-5">
          {strategic.map((c, i) => (
            <CaseCard key={c.slug} study={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CaseCard = ({ study, index }: { study: typeof caseStudies[number]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/case/${study.slug}`}
        className="group relative block h-full p-6 md:p-7 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-xl transition-all overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />

        <div className="relative">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              {study.domain}
            </div>
            <ArrowUpRight
              size={20}
              className="text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all flex-shrink-0"
            />
          </div>

          <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight text-foreground leading-snug">
            {study.title}
          </h3>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{study.tagline}</p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {study.heroMetrics.slice(0, 4).map((m) => (
              <div key={m.label} className="p-3 rounded-lg bg-secondary/60 border border-border/60">
                <div className="font-display font-bold text-base text-foreground">{m.value}</div>
                <div className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wide leading-snug">
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {study.tech && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {study.tech.slice(0, 5).map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 rounded text-[10px] font-mono bg-primary/5 text-primary border border-primary/10"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default Work;
