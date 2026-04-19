import { motion } from "framer-motion";
import { Bot, Brain, GitBranch, LineChart, Workflow } from "lucide-react";

const focuses = [
  {
    icon: Bot,
    title: "Agentic AI Systems",
    body: "Multi-agent orchestration with LangGraph & CrewAI — specialised agents owning discrete cognitive tasks across complex enterprise workflows.",
  },
  {
    icon: Brain,
    title: "RAG-Based Applications",
    body: "Context-aware, citation-grounded decision systems with explainability built in — chunking, retrieval evaluation, and confidence calibration as product work.",
  },
  {
    icon: Workflow,
    title: "Workflow Transformation",
    body: "Reducing manual effort in regulated, exception-heavy operations — from claims to onboarding to credit underwriting.",
  },
  {
    icon: LineChart,
    title: "AI Product Strategy",
    body: "Identifying high-impact GenAI use cases, framing build vs buy, defining MVP scope and outcome-driven success metrics.",
  },
  {
    icon: GitBranch,
    title: "Human-in-the-Loop",
    body: "Balancing automation with control — confidence-based routing, structured escalation, and audit-grade reasoning trails.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">// About</div>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            I build AI products that solve operational problems —
            <span className="text-muted-foreground"> not demos.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            With 7+ years across product, AI, and enterprise systems, I specialise in turning complex, exception-heavy workflows into scalable, explainable AI-driven solutions. My current focus is decision-support copilots, multi-tenant RAG platforms, and multi-agent systems — built for regulated environments where accuracy, auditability, and adoption matter as much as the model.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {focuses.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="group relative p-6 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-elevated transition-all"
            >
              <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center text-primary-foreground shadow-md mb-4 group-hover:shadow-glow transition-shadow">
                <f.icon size={18} />
              </div>
              <h3 className="font-display font-semibold text-base text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
