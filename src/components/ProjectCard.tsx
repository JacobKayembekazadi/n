import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  role: string;
  title: string;
  description: string;
  tags: string[];
  className?: string;
}

export default function ProjectCard({ role, title, description, tags, className }: ProjectCardProps) {
  return (
    <Card 
      className={cn(
        "h-full flex flex-col bg-card shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group project-card-border",
        className
      )}
    >
      <CardHeader className="pb-4">
        <CardDescription className="text-sm font-semibold uppercase tracking-wider text-accent mb-1 font-headline">{role}</CardDescription>
        <CardTitle className="text-xl lg:text-2xl font-bold text-primary group-hover:text-accent transition-colors font-headline">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-foreground/80 leading-relaxed text-sm">{description}</p>
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-gradient-to-r from-primary/80 to-accent/80 text-primary-foreground text-xs px-3 py-1">
              {tag}
            </Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
