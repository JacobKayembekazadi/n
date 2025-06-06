import SectionWrapper from "@/components/SectionWrapper";
import ProjectCard from "@/components/ProjectCard";

const frameworks = [
  {
    role: "Blueprint for Service Scalability",
    title: "AI-Enhanced WordPress Support System",
    description: "A strategic blueprint for scaling support services using an AI-powered workflow. This system automates ticket triage, classifies urgency, and drafts initial client responses to handle high volume efficiently and improve service levels.",
    tags: ["Process Automation", "Service Level Agreements", "Make.com", "AI Triage"],
  },
  {
    role: "Toolkit for Project Efficiency",
    title: "The Discovery Accelerator",
    description: "A proprietary toolkit using custom GPTs to transform raw client conversations into structured strategic documents—like sitemaps, user personas, and project briefs—radically accelerating the transition from discovery to planning.",
    tags: ["Prompt Engineering", "UX Strategy", "Project Kickoff", "Notion"],
  },
  {
    role: "Proposal for New Revenue Streams",
    title: "Proactive AI Performance Retainer",
    description: "A forward-thinking service model that shifts from reactive fixes to proactive growth. This tiered retainer uses AI for SEO monitoring, accessibility checks, and CRO suggestions, turning a support desk into a high-value profit center.",
    tags: ["Business Model Innovation", "Retainer Strategy", "CRO", "Client Value"],
  },
];

export default function FrameworksSection() {
  return (
    <SectionWrapper id="frameworks" title="Strategic Frameworks for Growth">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {frameworks.map((framework, index) => (
          <ProjectCard key={index} {...framework} />
        ))}
      </div>
    </SectionWrapper>
  );
}
