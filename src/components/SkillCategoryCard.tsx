import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SkillCategoryCardProps {
  title: string;
  skills: string[];
  className?: string;
}

export default function SkillCategoryCard({ title, skills, className }: SkillCategoryCardProps) {
  return (
    <Card className={cn("bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20", className)}>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-primary border-b-2 border-primary/50 pb-2 font-headline">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-start text-sm text-foreground/80 group">
              <ChevronRight className="h-5 w-5 text-primary/70 mr-2 shrink-0 transform transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent" />
              <span className="flex-1">{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
