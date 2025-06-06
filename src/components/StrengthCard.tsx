import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StrengthCardProps {
  title: string;
  description: string;
  className?: string;
}

export default function StrengthCard({ title, description, className }: StrengthCardProps) {
  return (
    <Card 
      className={cn(
        "bg-gradient-to-br from-background to-secondary/30 border-l-4 border-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative overflow-hidden group",
        className
      )}
    >
      <div className="absolute -top-1/4 -right-1/4 w-32 h-32 bg-gradient-to-bl from-primary/10 to-accent/10 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:opacity-50" />
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors font-headline">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
