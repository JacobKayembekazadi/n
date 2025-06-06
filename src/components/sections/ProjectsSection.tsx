import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    role: "AI Strategist & System Designer",
    title: "AI-Powered Brand Toolkits & Automated Content Systems",
    description: "Enabling creators and marketers to rapidly generate on-brand content with AI, ensuring consistency and accelerating content velocity across LinkedIn & email platforms.",
    tags: ["OpenAI API", "Python", "Make.com", "Prompt Engineering"],
  },
  {
    role: "MVP Architect & AI Agent Orchestrator",
    title: "No-Code/Low-Code MVPs with Agent Workflows",
    description: "Rapidly prototyping and deploying minimum viable products using AI agent workflows, minimizing development overhead while maximizing functionality.",
    tags: ["Make.com", "Zapier", "Webflow", "OpenAI API"],
  },
  {
    role: "Automation Engineer & Process Optimizer",
    title: "AI Auto-Triage & First-Response System",
    description: "Streamlining support email management through intelligent auto-triaging, urgency classification, and automated first-response drafting.",
    tags: ["Make.com", "OpenAI API", "Gmail API", "JSON"],
  },
  {
    role: "Strategic Communication & AI Prompt Engineer",
    title: "Discovery GPT: Strategic Project Brief Generator",
    description: "Transforming raw stakeholder call transcripts into structured strategic outputs like sitemaps, personas, and comprehensive project briefs.",
    tags: ["OpenAI", "Custom Prompts", "Transcription APIs", "Notion"],
  },
  {
    role: "UX Strategist & Lead Generation",
    title: "Lightweight Heuristic Review Template (UX + AODA)",
    description: "Providing national associations with quick, actionable assessments of website navigation clarity and accessibility compliance.",
    tags: ["UX Heuristics", "AODA Compliance", "Lighthouse", "Google Sheets"],
  },
];

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects" title="AI-Powered Innovation Portfolio">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
