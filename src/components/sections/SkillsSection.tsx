import SectionWrapper from "@/components/SectionWrapper";
import SkillCategoryCard from "@/components/SkillCategoryCard";

const skillCategories = [
  {
    title: "AI & Emerging Technologies",
    skills: [
      "AI Agent Building & Orchestration",
      "Advanced Prompt Engineering",
      "AI-Powered Workflow Automation",
      "No-Code/Low-Code MVP Development",
      "AI for Design & Prototyping",
      "Automated Content Systems",
    ],
  },
  {
    title: "Project Management & Operations",
    skills: [
      "End-to-End Project Lifecycle Management",
      "Stakeholder Management & Communication",
      "Risk Management & Mitigation",
      "Process Improvement & Optimization",
      "Change Management",
      "Quality Assurance Oversight",
    ],
  },
  {
    title: "Digital Marketing & Brand",
    skills: [
      "Strategic Communications Management",
      "Brand Development & Strategy",
      "Storytelling for Brand & Social",
      "Marketing Automation",
      "Conversion Rate Optimization",
      "Social Media Strategy",
    ],
  },
  {
    title: "Web & UX Design",
    skills: [
      "User Experience (UX) Design",
      "Information Architecture",
      "Website Strategy & Planning",
      "WordPress Ecosystem",
      "Conversion Rate Optimization",
      "Web Analytics & SEO",
    ],
  },
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" title="Technical Expertise & Strategic Capabilities">
      <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
        {skillCategories.map((category, index) => (
          <SkillCategoryCard key={index} title={category.title} skills={category.skills} />
        ))}
      </div>
    </SectionWrapper>
  );
}
