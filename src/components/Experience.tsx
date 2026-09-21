import { experience } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experience"
      index="05"
      label="Experience"
      title="Experience & education"
      intro="Real-world web projects delivered for clients through freelance work, alongside formal training and study."
    >
      <ol className="space-y-5">
        {experience.map((item, i) => (
          <Reveal key={item.role} delay={i * 80} as="li" className="panel p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[12rem_minmax(0,1fr)]">
              <div className="min-w-0">
                <span className="inline-flex rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {item.tag}
                </span>
                <p className="mt-3 font-mono text-xs text-muted-foreground">{item.period}</p>
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-lg font-semibold sm:text-xl">{item.role}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
                <ul className="mt-4 space-y-2.5">
                  {item.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span
                        aria-hidden
                        className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
