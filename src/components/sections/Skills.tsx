import { motion } from "framer-motion";

const groups = [
  {
    title: "AI & GenAI",
    items: ["Generative AI", "Agentic AI", "RAG Systems", "LangGraph", "CrewAI", "Prompt Engineering", "NLP", "Machine Learning", "Embeddings"],
  },
  {
    title: "Product Management",
    items: ["Product Strategy", "Roadmapping", "MVP Definition", "Backlog Prioritisation", "Stakeholder Management", "Agile / Scrum", "User Research", "PRDs & User Stories"],
  },
  {
    title: "Domain & Platform",
    items: ["Insurance Domain", "SaaS Platforms", "Digital Transformation", "Azure", "Data Analytics", "Compliance & Audit Design", "Business Case Development"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-28 bg-secondary/40 border-y border-border">
      <div className="container-narrow">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">// Skills</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            The toolkit
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card rounded-xl border border-border p-6"
            >
              <h3 className="font-display font-semibold text-base text-foreground mb-4">{g.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span key={s} className="px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-foreground/80 border border-border hover:border-primary/30 hover:bg-background transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education + certs */}
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-display font-semibold text-base text-foreground mb-4">Education</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="font-medium text-foreground">MBA</div>
                <div className="text-muted-foreground">Indian Institute of Management, Sirmaur · 2020 – 2022</div>
              </li>
              <li>
                <div className="font-medium text-foreground">B.E (ECE)</div>
                <div className="text-muted-foreground">Anna University · 2012 – 2016</div>
              </li>
            </ul>
          </div>
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="font-display font-semibold text-base text-foreground mb-4">Certifications & Recognition</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <div className="font-medium text-foreground">AI Product Management — Udacity Nanodegree (2025)</div>
                <div className="text-muted-foreground">Product plan for a Wearable AI Assistant leveraging LLMs.</div>
              </li>
              <li>
                <div className="font-medium text-foreground">Product Management — Udacity Nanodegree (2025)</div>
                <div className="text-muted-foreground">End-to-end product pitch for personalised LinkedIn learning.</div>
              </li>
              <li>
                <div className="font-medium text-foreground">National Finalist — Virtusa Business Cipher Challenge</div>
                <div className="text-muted-foreground">Top performer among 2,000+ applicants — built a scalable ML model in Dataiku exposed via API.</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
