import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const roles = [
  {
    company: "Virtusa",
    role: "Senior Consultant",
    period: "May 2022 — Present",
    location: "Bengaluru, India",
    bullets: [
      "Conceived and launched an AI-powered RAG-based decision-support platform — improving servicing accuracy by 30% and reducing manual effort for ops and customer support.",
      "Led AI product strategy and identified high-impact GenAI use cases across user-facing and operations workflows.",
      "Enhanced decision triage by integrating NLP and ML models, defining feature mappings and validating model inferences with business stakeholders.",
      "Collaborated with AI/engineering teams on entity extraction, embeddings, and predictive scoring — improving decision accuracy and early identification of complex cases.",
      "Reengineered end-to-end workflows by automating validations, approvals, and decision flows — reducing processing time by 40% and improving CSAT by 20%.",
      "Reduced operational friction by 25% via prioritised workflow transformation; improved defect resolution time by 25% through tighter sprint planning and cross-functional alignment.",
    ],
    tags: ["GenAI Strategy", "RAG", "Agentic AI", "Insurance Domain", "Roadmapping"],
  },
  {
    company: "CGI",
    role: "Software Engineer",
    period: "Oct 2016 — Jul 2020",
    location: "India",
    bullets: [
      "Improved forecasting efficiency by 25% by automating ETL pipelines for a finance estimation platform.",
      "Drove tool adoption across 40+ business units, standardising forecasting and boosting data accuracy by 30%.",
      "Delivered 50+ change requests with clear documentation, reducing delivery bottlenecks by 20%.",
      "Collaborated with project managers and controllers to align product features with financial goals, enhancing decision-making efficiency by 15%.",
    ],
    tags: ["ETL Automation", "SaaS", "Stakeholder Management"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="container-narrow">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">// Experience</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Where I’ve built and shipped
          </h2>
        </div>

        <div className="relative">
          {/* timeline line */}
          <div className="absolute left-4 md:left-6 top-2 bottom-2 w-px bg-border" aria-hidden />

          <div className="space-y-10">
            {roles.map((r, i) => (
              <motion.div
                key={r.company + r.period}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                <div className="absolute left-0 top-1 w-9 h-9 md:w-12 md:h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground shadow-md">
                  <Briefcase size={16} />
                </div>

                <div className="bg-card rounded-xl border border-border p-6 md:p-7 hover:shadow-elevated transition-shadow">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display font-bold text-lg text-foreground">{r.role}</h3>
                    <span className="text-foreground/70">·</span>
                    <span className="font-display font-semibold text-base text-foreground">{r.company}</span>
                  </div>
                  <div className="mt-1 text-xs font-mono text-muted-foreground">
                    {r.period} · {r.location}
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {r.bullets.map((b, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground leading-relaxed flex gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {r.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded text-[11px] font-medium bg-secondary text-foreground/80 border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
