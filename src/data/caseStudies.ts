export type CaseStudy = {
  slug: string;
  title: string;
  tagline: string;
  domain: string;
  role: string;
  stage: string;
  tech?: string[];
  type?: string;
  category: "Professional" | "Strategic Recommendation";
  heroMetrics: { value: string; label: string }[];
  tldr: string;
  context: string[];
  myRole: string[];
  problemStatement: string;
  approach: { title: string; body: string }[];
  decisions: { title: string; body: string }[];
  metrics: { metric: string; baseline: string; result: string; change: string }[];
  challenges: { title: string; body: string }[];
  skillsDemonstrated: string[];
  flow?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "rag-insurance-copilot",
    title: "Insurance Claims Copilot",
    tagline: "RAG-based decision support for insurance operations teams",
    domain: "Insurance Operations · AI/ML",
    role: "Product Manager",
    stage: "0 → 1 Build",
    category: "Professional",
    heroMetrics: [
      { value: "39%", label: "Reduction in handling time" },
      { value: "+29 pp", label: "Decision accuracy uplift" },
      { value: "44%", label: "Fewer SME escalations" },
      { value: "78%", label: "Daily active usage" },
    ],
    tldr:
      "Insurance ops teams spent ~18 minutes per claim query navigating fragmented policy documents. I led the 0→1 build of an internal RAG-based AI copilot that cut average handling time by ~40% and improved decision consistency by ~30% against a senior-reviewer benchmark.",
    context: [
      "General insurance operations involve high-volume, knowledge-intensive decisions: claims adjudication, policy servicing, and coverage interpretation. Agents must cross-reference policy wordings, regulatory circulars, internal SOPs, and historical precedents — often under time pressure.",
      "The insurer ran ~200 ops agents across claims and servicing. New agents needed 6–8 weeks to reach proficiency, and even experienced adjusters escalated ~25% of non-standard queries to senior SMEs, slowing SLA adherence.",
      "The core problem was not lack of data — it was retrieval friction. The right information existed; finding, interpreting, and applying it consistently was the challenge.",
    ],
    myRole: [
      "Sole PM embedded with 2 ML engineers, 1 backend, 1 data engineer, and a claims SME",
      "Owned discovery, PRD, user stories, acceptance criteria, MVP prioritisation",
      "Defined success metrics and stakeholder alignment with Ops leadership and Compliance",
      "Led go-to-market and change management strategy",
    ],
    problemStatement:
      "Operations agents cannot quickly retrieve, interpret, and apply the right policy information in context — leading to slow, inconsistent, and effort-heavy decisions that scale poorly with team growth.",
    approach: [
      {
        title: "Knowledge currency",
        body: "Policy documents update frequently; fine-tuning would require costly re-training cycles. RAG let us update the knowledge base via re-ingestion.",
      },
      {
        title: "Explainability",
        body: "RAG outputs cite source chunks — critical for compliance review and agent trust. No 'the model said so'.",
      },
      {
        title: "Hallucination control",
        body: "Grounding generation in retrieved documents reduces fabrication risk. The copilot is decision-support, not an automation engine.",
      },
    ],
    decisions: [
      {
        title: "Assistive vs Automated",
        body: "Chose human-in-the-loop despite ops leadership preference for full automation. Insurance decisions carry regulatory liability — automated errors could trigger compliance incidents. Framed automation as Phase 2 once trust was established through accuracy data.",
      },
      {
        title: "Structured output vs chat",
        body: "User testing showed adjusters found open-ended chat harder to act on. Switched to a fixed template — action / reasoning / citations / confidence — that could be logged into the claims system as an audit trail.",
      },
      {
        title: "Confidence scoring",
        body: "Initial model-generated probabilities were poorly calibrated and eroded trust. Re-engineered confidence as a composite of retrieval relevance, output validation, and citation coverage — making scores explainable and predictable.",
      },
      {
        title: "Build vs integrate",
        body: "Surfaced the copilot as an embedded panel within the existing claims portal rather than a standalone tool. +3 sprints of integration work, but drove significantly higher daily active usage.",
      },
    ],
    flow: [
      "Agent query",
      "Embedding model — semantic vectorisation",
      "Vector store retrieval — top-K relevant chunks (clauses, SOPs, precedents)",
      "Context injection into LLM prompt",
      "Structured output: action · reasoning · citations · confidence (0–100)",
      "Guardrails layer — compliance rules, output validation",
      "Confidence-based routing: High → approve · Medium → review · Low → SME queue",
      "Feedback capture → logged for retrieval retraining",
    ],
    metrics: [
      { metric: "Average handling time (claims query)", baseline: "~18 min", result: "~11 min", change: "↓ 39%" },
      { metric: "Decision accuracy (vs SME benchmark)", baseline: "71%", result: "92%", change: "↑ 29 pp" },
      { metric: "SME escalation rate", baseline: "25%", result: "14%", change: "↓ 44%" },
      { metric: "New joiner time-to-proficiency", baseline: "6–8 weeks", result: "~4 weeks", change: "↓ ~40%" },
      { metric: "Agent confidence in decisions (survey)", baseline: "58%", result: "81%", change: "↑ 23 pp" },
      { metric: "Copilot daily active usage", baseline: "—", result: "78% of eligible agents", change: "—" },
    ],
    challenges: [
      {
        title: "Retrieval quality is the product",
        body: "First iteration ingested whole policy docs as single chunks — vague outputs. Re-chunking at clause level with metadata tags (product line, coverage type, effective date) dramatically improved precision. In RAG, data engineering is product work.",
      },
      {
        title: "Confidence calibration is ongoing",
        body: "Early scores were uncalibrated — agents quickly distrusted them after a 'high confidence' wrong answer. Two sprints of recalibration plus a comms effort with ops to rebuild trust. A broken confidence signal is worse than no signal.",
      },
      {
        title: "Change management was underestimated",
        body: "Agents initially feared 'AI making decisions'. Reframed it as 'your research assistant'. Adoption accelerated after high-profile cases where the copilot surfaced clauses experienced adjusters had missed.",
      },
    ],
    skillsDemonstrated: [
      "0→1 AI Product Discovery",
      "RAG Architecture Decisions",
      "Human-in-the-Loop Design",
      "Compliance & Risk Framing",
      "Change Management",
      "Outcome-Driven Metrics",
    ],
  },
  {
    slug: "multitenant-rag-knowledgehub",
    title: "Multi-Tenant RAG Knowledge Hub",
    tagline: "A secure, domain-specific AI assistant for five insurance functions — one platform, five tenants",
    domain: "Insurance · Enterprise AI",
    role: "Product Manager",
    stage: "0 → 1 Platform Build",
    category: "Professional",
    heroMetrics: [
      { value: "~60%", label: "Faster knowledge retrieval" },
      { value: "+15 pp", label: "First-contact resolution" },
      { value: "0", label: "Cross-tenant data incidents" },
      { value: "82%", label: "Eligible-user DAU" },
    ],
    tldr:
      "Insurance organisations run on knowledge — but it’s locked in silos. I led the design and delivery of a multi-tenant, RAG-based knowledge platform that gave each function (Underwriting, Claims, Sales, Brokers, Support) a secure, domain-specific AI assistant — without exposing cross-functional data or building five separate systems.",
    context: [
      "A mid-to-large general insurer had a sprawling knowledge problem across five core functions, working from inconsistent shared drives, stale SharePoint wikis, and manual PDF search.",
      "An earlier shared chatbot pilot failed: no data isolation (underwriting risk data leaking to sales) and irrelevance (a claims adjudicator getting marketing copy). Trust collapsed within weeks.",
      "The brief: design a system that feels like one product but behaves like five — strict tenant isolation, domain-relevant retrieval, consistent UX.",
    ],
    myRole: [
      "Product lead on a team of 2 ML/data engineers, 1 backend engineer, 1 solutions architect",
      "Discovery and persona research across all five tenant groups",
      "Architecture decision input on isolation strategy, retrieval, and access control",
      "PRD, phased roadmap, and adoption strategy per tenant",
      "Stakeholder alignment across Compliance, IT Security, and Ops leadership",
    ],
    problemStatement:
      "Insurance ops teams cannot quickly retrieve domain-specific, accurate information from their knowledge corpus — and a single shared AI assistant cannot satisfy both relevance and data isolation requirements across functions.",
    approach: [
      {
        title: "Logical multi-tenancy",
        body: "Per-tenant ChromaDB collections with metadata filtering — high isolation without infrastructure bloat. Separate DBs would have tripled cost and delayed launch by 6+ weeks; a shared index failed Compliance review.",
      },
      {
        title: "Shared LLM, isolated context",
        body: "A single shared LLM (GPT-4) with tenant-specific context injection. The LLM holds no tenant data — all domain specificity comes from retrieval. Knowledge updates require only document re-ingestion.",
      },
      {
        title: "Citation-mandatory outputs",
        body: "Every response includes a source citation — implemented as a product constraint via structured prompting and a UI component. Citation visibility was the single biggest driver of agent trust.",
      },
    ],
    decisions: [
      {
        title: "Metadata as a first-class requirement",
        body: "Pushed for an upfront schema: {tenant_id, function, document_type, effective_date, version, product_line}. Added 2 weeks to data engineering but reduced retrieval irrelevance ~40% in internal testing.",
      },
      {
        title: "MVP scope cut: no cross-tenant insights",
        body: "Deprioritised cross-functional analytics to Phase 3 — Compliance hadn’t defined the governance framework, and it would have introduced retrieval-layer complexity that risked the MVP.",
      },
      {
        title: "Document-type-specific chunking",
        body: "Policy wordings chunked well at clause level; underwriting decision trees did not. Built document-type-specific chunking logic mid-flight — a learning that audit corpus structure earlier next time.",
      },
    ],
    metrics: [
      { metric: "Knowledge retrieval time (manual)", baseline: "14–25 min", result: "~5–8 min", change: "↓ ~60%" },
      { metric: "First-contact resolution (Customer Support)", baseline: "64%", result: "79%", change: "↑ 15 pp" },
      { metric: "SME escalations for knowledge queries", baseline: "~30%", result: "~14%", change: "↓ 53%" },
      { metric: "Cross-tenant data incidents", baseline: "—", result: "0", change: "Zero breaches" },
      { metric: "Tenant onboarding time (new team)", baseline: "Manual", result: "~2 weeks", change: "New capability" },
      { metric: "Platform DAU at 90 days", baseline: "—", result: "82% of eligible users", change: "—" },
    ],
    challenges: [
      {
        title: "Access control complexity",
        body: "SSO role mapping was scoped at 3 days — took 3 weeks due to inconsistent role naming and hierarchical inheritance. IAM in enterprise is almost always more complex than it looks.",
      },
      {
        title: "Teaching agents to selectively distrust",
        body: "Some agents over-trusted AI outputs without checking citations. Introduced a 'verify before acting' UI prompt and reframed the tool as a research assistant. Escalations on borderline queries actually increased — the right behaviour.",
      },
      {
        title: "Metadata governance is product work",
        body: "Inconsistent tagging in initial ingestion eroded retrieval invisibly. Introduced a metadata validation checklist as a mandatory step, with rejected documents flagged for remediation.",
      },
    ],
    skillsDemonstrated: [
      "Multi-Tenant Platform Design",
      "Compliance & Data Governance",
      "Cross-Functional Discovery",
      "Trade-off Framing",
      "Phased Roadmapping",
      "Enterprise SSO/IAM",
    ],
  },
  {
    slug: "agentic-ai-onboarding",
    title: "Agentic AI for Group Insurance Onboarding",
    tagline: "Five specialised AI agents replace a fragile, manual onboarding workflow",
    domain: "Group Insurance · Enterprise Operations",
    role: "Product Manager",
    stage: "0 → 1 Platform Build",
    tech: ["LangGraph", "CrewAI", "GPT-4", "FastAPI", "Azure", "Python", "REST APIs"],
    category: "Professional",
    heroMetrics: [
      { value: "12d → 2.5d", label: "Onboarding time" },
      { value: "~70%", label: "Manual ops effort cut" },
      { value: "94%", label: "Exception accuracy" },
      { value: "5", label: "Specialised agents" },
    ],
    tldr:
      "Group insurance onboarding is one of the most operationally expensive back-office processes. I led the design and delivery of a multi-agent agentic AI platform — five specialised agents collaborating dynamically to handle real-world data variability, exceptions, and edge cases. Onboarding time dropped from ~12 days to ~2.5 days for batches of 200–500 employees.",
    context: [
      "Onboarding 500 employees onto a group policy means 500 records each requiring data ingestion from HR systems, validation, eligibility determination, exception handling, policy record creation, and confirmation dispatch.",
      "The insurer managed 40–60 batches/month (50–2,000 employees each) with a 12-person ops team. An earlier RPA solution processed only ~55% straight-through; the rest required manual intervention.",
      "Bottleneck analysis showed exception handling — not data processing — was the real choke point. ~68% of exceptions fell into 5 recurring, resolvable categories.",
    ],
    myRole: [
      "End-to-end product ownership: discovery, PRD, roadmap, acceptance criteria, delivery oversight",
      "Defined agent capability scope — what each agent could and could not do autonomously",
      "Designed human-in-the-loop: escalation thresholds, review UI, audit trail",
      "Stakeholder alignment with Group Ops, IT Security, Underwriting, Compliance",
      "Change management for ops team adoption",
    ],
    problemStatement:
      "Group insurance onboarding is throttled not by data volume but by exception handling — a reasoning-intensive task currently performed manually, causing multi-day delays, high ops cost, and inconsistent outcomes across batches.",
    approach: [
      {
        title: "Why multi-agent over single LLM",
        body: "Onboarding is five distinct cognitive tasks (ingest, validate, eligibility, exceptions, generate) — each needing different reference data, reasoning strategies, and escalation rules. Specialised agents are more reliable, auditable, and maintainable than one model trying to do everything.",
      },
      {
        title: "LangGraph orchestration",
        body: "A state-machine orchestrator (not an LLM itself) routes records, runs Validation and Eligibility in parallel, handles failures, and tracks every state transition for audit.",
      },
      {
        title: "Tiered exception resolution",
        body: "Tier 1: deterministic auto-resolve. Tier 2: reasoned resolve with reference data and RAG over policy docs. Tier 3: structured exception cards surfaced to humans with full context — replacing raw error logs.",
      },
    ],
    decisions: [
      {
        title: "Plan-configurable validation rules",
        body: "Validation rules are configured per plan, not hardcoded. New group policies onboard via an admin config layer — no engineering change required per client.",
      },
      {
        title: "RAG over policy docs in the Eligibility Agent",
        body: "Some eligibility questions ('does a 24-month contract employee qualify under Section 3.2?') require interpreting natural-language policy text — not just checking a table. RAG handles these.",
      },
      {
        title: "Confidence threshold for escalation",
        body: "Records with eligibility confidence <70% auto-route to human review with a structured context card. Regulatory edge cases (NRI, minor nominees) always escalate regardless of confidence.",
      },
    ],
    flow: [
      "HR System / File Upload",
      "Ingestion Agent — connects to Workday/SAP HR/SFTP, normalises records",
      "LangGraph Orchestrator — state machine, tracks every record",
      "Validation Agent (parallel) — field, format, logic checks",
      "Eligibility Agent (parallel) — RAG over policy doc + rule tables, tier assignment",
      "Exception Handling Agent — tiered auto / reasoned / human-escalation",
      "Policy Generation Agent — member certificates, system updates, confirmations",
      "Audit log writer — immutable trail of every agent action",
    ],
    metrics: [
      { metric: "End-to-end onboarding time", baseline: "~12 days", result: "~2.5 days", change: "↓ ~80%" },
      { metric: "Manual ops effort per batch", baseline: "Baseline", result: "Cut ~70%", change: "↓ 70%" },
      { metric: "Straight-through processing", baseline: "~55%", result: "~88%", change: "↑ 33 pp" },
      { metric: "Exception handling accuracy", baseline: "Human baseline", result: "94%", change: "On par" },
      { metric: "HR correction cycles", baseline: "3–5", result: "~1", change: "↓ 70%" },
    ],
    challenges: [
      {
        title: "Defining agent boundaries was harder than building them",
        body: "Early scoping had blurred responsibilities — Validation overlapped with Eligibility on edge cases. Tightened the contract: each agent owns one decision class, with explicit handoff schemas.",
      },
      {
        title: "Audit trail design needed Compliance early",
        body: "What counts as an 'auditable decision' isn’t obvious. Brought Compliance into design week 1 to define logging granularity — saved a costly Phase 2 retrofit.",
      },
      {
        title: "Trusting agent autonomy gradually",
        body: "Launched with conservative confidence thresholds (escalate <85%). Tightened to <70% after 60 days of clean accuracy data. Earning autonomy is a metrics conversation, not a launch decision.",
      },
    ],
    skillsDemonstrated: [
      "Agentic AI Architecture",
      "Multi-Agent Orchestration",
      "LangGraph / CrewAI",
      "Compliance-Driven Design",
      "Exception Taxonomy Analysis",
      "Phased Autonomy Rollout",
    ],
  },
  {
    slug: "agentic-ai-loan-processing",
    title: "Agentic AI for Loan Processing",
    tagline: "A strategic product recommendation for retail & commercial banking",
    domain: "Retail & Commercial Banking · Credit Operations",
    role: "Product Manager (Strategic Recommendation)",
    stage: "Forward-Looking Design Proposal",
    tech: ["LangGraph", "CrewAI", "GPT-4", "FastAPI", "Azure", "Python", "REST APIs"],
    type: "Strategic Product Recommendation",
    category: "Strategic Recommendation",
    heroMetrics: [
      { value: "60–75%", label: "Projected processing time cut" },
      { value: "~65%", label: "Manual ops effort reduction" },
      { value: "6", label: "Specialised agents" },
      { value: "0", label: "Autonomous credit decisions" },
    ],
    tldr:
      "A forward-looking product recommendation: how I would design an agentic AI platform for loan processing in a major bank. Six specialised agents handle discrete steps of the loan journey autonomously, collaborate to resolve exceptions, and surface structured, explainable recommendations to underwriters who retain final decision authority.",
    context: [
      "Loan processing remains one of the most operationally expensive workflows in banking. Personal loans take 5–15 days, home loans 20–45 days. Underwriters spend ~60% of their time on data gathering, not credit reasoning.",
      "RPA, BPM, and rule engines have all fallen short — loan processing requires dynamic, multi-source reasoning across a variable, exception-heavy workflow. That is what agentic AI is designed for.",
      "This case study is a structured analysis of how a major bank should approach building this platform — informed by my work designing similar systems in insurance operations.",
    ],
    myRole: [
      "Discovery: workflow archaeology across retail and commercial credit",
      "Architecture input: agent scope, escalation thresholds, human-in-the-loop design",
      "Stakeholder alignment: Credit Risk, Compliance, IT/Architecture, Operations, Retail leadership",
      "Regulatory navigation: RBI/FCA guidelines on AI in credit, model explainability, Fair Lending",
      "Pilot design and success-criteria definition before expansion",
    ],
    problemStatement:
      "Loan processing requires dynamic, multi-source reasoning across a variable, exception-heavy workflow. Current automation (RPA, BPM, rule engines) cannot interpret ambiguity or reason across data sources — leaving underwriters spending more time gathering data than making credit decisions.",
    approach: [
      {
        title: "Explainability is non-negotiable",
        body: "Every AI recommendation includes the reasoning and source data that produced it. Credit decisions affect customers’ lives — 'the model said so' is unacceptable, especially under Fair Lending.",
      },
      {
        title: "Humans own the credit decision",
        body: "The platform is decision-support and workflow automation. Underwriters approve or decline. AI accelerates and structures — never replaces judgment.",
      },
      {
        title: "Audit trail as a first-class feature",
        body: "Every agent action, tool call, data source, and decision is logged immutably. Regulators can inspect the full reasoning chain for any application.",
      },
    ],
    decisions: [
      {
        title: "Six specialised agents, not one monolith",
        body: "Intake & Completeness · Document Intelligence · Verification & Enrichment · Risk Assessment · Exception Handling · Decision Packaging. Each owns one cognitive task — easier to audit, govern, and improve independently.",
      },
      {
        title: "Verification Agent runs sources in parallel",
        body: "CIBIL, UIDAI, EPFO, PAN, CERSAI, sanctions — queried in parallel, not sequentially. Discrepancies flagged systematically rather than silently reconciled. This is where the largest time saving occurs.",
      },
      {
        title: "Conservative pilot scope",
        body: "Start with a single product (personal loans), one branch cohort, controlled blast radius. Define expansion criteria upfront — auto-decline accuracy ≥ baseline, zero adverse Fair Lending findings, ≥40% cycle-time reduction.",
      },
    ],
    flow: [
      "Application intake (branch / mobile / DSA / API)",
      "Intake & Completeness Agent — validates fields, requests missing docs from applicant",
      "Document Intelligence Agent — OCR + LLM extraction across salary slips, bank statements, ITR, KYC, property docs",
      "Verification & Enrichment Agent — parallel pulls: CIBIL, UIDAI, EPFO, PAN, CERSAI, sanctions",
      "Risk Assessment Agent — FOIR, LTV, bureau analysis, internal PD model, policy rule checks",
      "Exception Handling Agent — tiered auto / reasoned / human-escalation with structured context cards",
      "Decision Packaging — credit note + reasoning chain + audit trail, surfaced to underwriter",
      "Underwriter approves / declines / refers — feedback loop for continuous learning",
    ],
    metrics: [
      { metric: "End-to-end processing time", baseline: "5–45 days", result: "Projected ↓ 60–75%", change: "Target" },
      { metric: "Cost per loan processed (ops)", baseline: "₹2,500–₹8,000", result: "Projected ↓ ~65%", change: "Target" },
      { metric: "Manual document review time", baseline: "3–5 hours", result: "<30 minutes", change: "Target" },
      { metric: "Underwriter time on high-value decisions", baseline: "~40%", result: "Projected 75%+", change: "Target" },
      { metric: "Application volume scalability", baseline: "Headcount-bound", result: "Decoupled from headcount", change: "Capability" },
    ],
    challenges: [
      {
        title: "Regulatory framing must precede architecture",
        body: "RBI/FCA guidance on AI in credit decisions is evolving. Map regulatory constraints to the architecture before agent scoping — not after — to avoid expensive redesign.",
      },
      {
        title: "Exception taxonomy drives agent capability",
        body: "Hypothesis: 60–70% of exceptions fall into 5–8 recurring categories. Validate with 3 months of application data before designing the Exception Handling Agent — its tiering logic depends entirely on this taxonomy.",
      },
      {
        title: "Adverse-decision explainability is a product surface",
        body: "Under Fair Lending, every decline must be explainable in plain language. The Decision Packaging Agent must produce both an underwriter-facing reasoning chain and a customer-facing adverse action notice.",
      },
    ],
    skillsDemonstrated: [
      "Strategic Product Thinking",
      "Regulatory-Aware Design",
      "Multi-Agent Architecture",
      "Pilot & Scale Planning",
      "Cross-Industry Pattern Application",
      "Stakeholder Mapping (Banking)",
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
