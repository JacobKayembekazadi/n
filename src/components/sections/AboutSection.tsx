import SectionWrapper from "@/components/SectionWrapper";
import StrengthCard from "@/components/StrengthCard";
import Image from "next/image";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-gradient-to-r from-accent/20 to-primary/20 px-2 py-1 rounded-md font-semibold text-primary">
    {children}
  </span>
);

export default function AboutSection() {
  return (
    <SectionWrapper id="about" title="Strategic Vision Meets Technical Excellence">
      <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center mb-16">
        <div className="flex justify-center">
          <div 
            className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-300"
            aria-label="Jacob Kazadi Kayembe portrait"
          >
            <Image 
              src="https://placehold.co/288x288.png" 
              alt="Jacob Kazadi Kayembe" 
              width={288} 
              height={288} 
              className="object-cover w-full h-full"
              data-ai-hint="portrait professional"
            />
          </div>
        </div>
        <div className="text-lg text-foreground/90 space-y-6">
          <p>
            I&apos;m a <Highlight>Strategic Project Manager</Highlight> specializing in AI-enabled digital transformation, bringing a unique blend of technical expertise and strategic thinking to every project.
          </p>
          <p>
            My approach is rooted in <Highlight>systems thinking</Highlight> — understanding that in today&apos;s interconnected digital landscape, every tool, process, and strategy must work harmoniously to create transformative impact.
          </p>
          <p>
            Because the future belongs to those who can <Highlight>translate vision into scalable solutions</Highlight>, leveraging the right tools for maximum impact.
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        <StrengthCard 
          title="Strategic AI Integration"
          description="Expert in mapping AI tools to solve specific business problems and build smart, lean systems for creators, marketers, and teams."
        />
        <StrengthCard 
          title="Brand & Storytelling Mastery"
          description="Deep understanding that in a world of accessible tools, brand and storytelling are the ultimate differentiators."
        />
        <StrengthCard 
          title="Full-Stack Marketing Operations"
          description="Blending strategic communications, design, automation, and AI agent building for holistic digital success."
        />
        <StrengthCard 
          title="Systems Thinking & Optimization"
          description="Approaching challenges with methodology to identify leverage points for sustainable, scalable improvements."
        />
      </div>
    </SectionWrapper>
  );
}
