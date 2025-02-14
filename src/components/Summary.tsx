import { Section } from "@/components/ui/section";
import { Resume } from "@/data/type";

interface AboutProps {
  summary: Resume["summary"];
  className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className }: AboutProps) {
  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="about-section">
        Resumo
      </h2>
      <div
        className="text-pretty font-mono text-sm text-foreground/80 print:text-[12px]"
        aria-labelledby="about-section"
      >
        {summary}
      </div>
    </Section>
  );
}
