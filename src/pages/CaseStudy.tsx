import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, ExternalLink, Linkedin, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";

const CaseStudy = () => {
  const { slug = "" } = useParams();
  const study = getCaseStudy(slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    if (study) {
      document.title = `${study.title} — Ashutosh A`;
      const meta = document.querySelector('meta[name="description"]');
      const desc = study.tldr.slice(0, 155);
      if (meta) meta.setAttribute("content", desc);
    }
  }, [study]);

  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container-narrow py-40 text-center">
          <h1 className="font-display text-3xl font-bold">Case study not found</h1>
          <Link to="/" className="text-accent mt-4 inline-block">← Back home</Link>
        </div>
        <Footer />
      </div>
    );
  }

  // next case study for navigation
  const idx = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
        <div className="container-narrow relative">
          <Link to="/#work" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft size={14} /> Back to all case studies
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-primary text-primary-foreground">
                {study.category}
              </span>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-secondary text-foreground/80 border border-border">
                {study.stage}
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-foreground max-w-4xl">
              {study.title}
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-3xl leading-relaxed">{study.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Role</div>
                <div className="font-medium text-foreground mt-0.5">{study.role}</div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Domain</div>
                <div className="font-medium text-foreground mt-0.5">{study.domain}</div>
              </div>
              {study.tech && (
                <div className="max-w-xl">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">Stack</div>
                  <div className="font-mono text-xs text-foreground mt-0.5">{study.tech.join(" · ")}</div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Hero metrics */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3"
          >
            {study.heroMetrics.map((m) => (
              <div key={m.label} className="p-4 rounded-xl bg-card border border-border">
                <div className="font-display text-2xl md:text-3xl font-bold text-foreground">{m.value}</div>
                <div className="text-[11px] text-muted-foreground mt-1 uppercase tracking-wide">{m.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TL;DR */}
      <section className="py-12 border-y border-border bg-secondary/40">
        <div className="container-prose">
          <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">TL;DR</div>
          <p className="text-lg text-foreground leading-relaxed font-medium">{study.tldr}</p>
        </div>
      </section>

      {/* Context */}
      <Section title="Context & Background" eyebrow="01">
        <div className="space-y-4">
          {study.context.map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed">{p}</p>
          ))}
        </div>
      </Section>

      {/* My Role */}
      <Section title="My Role" eyebrow="02" alt>
        <ul className="space-y-3">
          {study.myRole.map((r, i) => (
            <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed">
              <CheckCircle2 size={18} className="text-accent flex-shrink-0 mt-0.5" />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Problem */}
      <Section title="Problem Statement" eyebrow="03">
        <blockquote className="border-l-4 border-accent pl-6 py-2 text-lg md:text-xl text-foreground italic font-display leading-relaxed">
          {study.problemStatement}
        </blockquote>
      </Section>

      {/* Approach */}
      <Section title="Approach" eyebrow="04" alt>
        <div className="grid md:grid-cols-3 gap-4">
          {study.approach.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-5 rounded-xl bg-card border border-border"
            >
              <div className="font-mono text-xs text-accent mb-3">0{i + 1}</div>
              <h4 className="font-display font-semibold text-base text-foreground">{a.title}</h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{a.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Flow diagram */}
      {study.flow && (
        <Section title="How It Works" eyebrow="05">
          <div className="bg-card border border-border rounded-xl p-6 md:p-8">
            <ol className="space-y-3">
              {study.flow.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-7 h-7 rounded-md gradient-hero flex items-center justify-center text-primary-foreground font-mono text-xs font-bold">
                    {i + 1}
                  </div>
                  <div className="font-mono text-sm text-foreground leading-relaxed pt-0.5">{step}</div>
                </li>
              ))}
            </ol>
          </div>
        </Section>
      )}

      {/* Decisions */}
      <Section title="Key Product Decisions" eyebrow={study.flow ? "06" : "05"} alt>
        <div className="space-y-4">
          {study.decisions.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-5 md:p-6 rounded-xl bg-card border border-border"
            >
              <h4 className="font-display font-semibold text-base text-foreground">{d.title}</h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{d.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Metrics */}
      <Section title="Metrics & Outcomes" eyebrow={study.flow ? "07" : "06"}>
        <div className="overflow-x-auto rounded-xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-secondary/60">
              <tr className="text-left">
                <th className="py-3 px-4 font-display font-semibold text-foreground">Metric</th>
                <th className="py-3 px-4 font-display font-semibold text-foreground">Baseline</th>
                <th className="py-3 px-4 font-display font-semibold text-foreground">Result</th>
                <th className="py-3 px-4 font-display font-semibold text-foreground">Change</th>
              </tr>
            </thead>
            <tbody>
              {study.metrics.map((m, i) => (
                <tr key={i} className="border-t border-border">
                  <td className="py-3 px-4 text-foreground">{m.metric}</td>
                  <td className="py-3 px-4 text-muted-foreground font-mono text-xs">{m.baseline}</td>
                  <td className="py-3 px-4 text-muted-foreground font-mono text-xs">{m.result}</td>
                  <td className="py-3 px-4 font-mono text-xs font-semibold text-accent">{m.change}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* Challenges */}
      <Section title="Challenges & What I Learned" eyebrow={study.flow ? "08" : "07"} alt>
        <div className="grid md:grid-cols-3 gap-4">
          {study.challenges.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="p-5 rounded-xl bg-card border border-border"
            >
              <h4 className="font-display font-semibold text-base text-foreground">{c.title}</h4>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{c.body}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills Demonstrated" eyebrow={study.flow ? "09" : "08"}>
        <div className="flex flex-wrap gap-2">
          {study.skillsDemonstrated.map((s) => (
            <span key={s} className="px-3 py-1.5 rounded-md text-sm font-medium bg-secondary text-foreground border border-border">
              {s}
            </span>
          ))}
        </div>
      </Section>

      {/* Next case study + CTA */}
      <section className="py-20 border-t border-border">
        <div className="container-narrow grid md:grid-cols-2 gap-6">
          <Link
            to={`/case/${next.slug}`}
            className="group relative p-7 rounded-xl bg-card border border-border hover:border-primary/40 hover:shadow-elevated transition-all"
          >
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Next case study</div>
            <h3 className="font-display font-bold text-xl mt-2 text-foreground">{next.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{next.tagline}</p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground">
              Read it <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <div className="relative p-7 rounded-xl gradient-hero text-primary-foreground overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-10" />
            <div className="relative">
              <div className="text-xs font-mono uppercase tracking-wider text-primary-foreground/70">Like what you see?</div>
              <h3 className="font-display font-bold text-xl mt-2">Let’s talk AI products.</h3>
              <p className="text-sm text-primary-foreground/80 mt-2">Open to senior PM and AI Product roles.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a href="mailto:aashutosha4@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-background text-foreground text-sm font-medium hover:shadow-lg transition-shadow">
                  <Mail size={14} /> Email
                </a>
                <a href="https://linkedin.com/in/ashutosh-ashutosh-95053395" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-primary-foreground/20 hover:bg-primary-foreground/10 text-sm font-medium">
                  <Linkedin size={14} /> LinkedIn <ExternalLink size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const Section = ({
  title,
  eyebrow,
  children,
  alt,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
  alt?: boolean;
}) => (
  <section className={`py-14 md:py-20 ${alt ? "bg-secondary/40 border-y border-border" : ""}`}>
    <div className="container-prose">
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs text-accent">{eyebrow}</span>
        <span className="h-px w-8 bg-border" />
        <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-foreground">{title}</h2>
      </div>
      {children}
    </div>
  </section>
);

export default CaseStudy;
