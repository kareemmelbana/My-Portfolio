import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const whatIDo = [
  "Responsive websites",
  "Landing pages",
  "React web applications",
  "E-commerce interfaces",
  "Arabic RTL websites",
  "Website redesigns",
];

const approach = [
  "Clean code",
  "Responsive design",
  "Performance",
  "Usability",
  "Attention to detail",
];

export function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title="I turn ideas into software that feels effortless."
      intro="Graduate of the Digital Egypt Pioneers Initiative (DEPI) Round 3 React Track, delivering freelance web projects for clients through Khamsat."
    >
      <div className="grid gap-5 md:grid-cols-3">
        <Reveal className="panel p-6 sm:p-7">
          <h3 className="font-display text-lg font-semibold">Who I am</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Computer Science student and Software Engineer focused on building modern web
            applications and digital experiences.
          </p>
          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
            <a
              href={profile.khamsat}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              View my Khamsat profile
            </a>
            <a
              href={profile.khamsatReviews}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              Read client reviews
            </a>
          </div>
        </Reveal>

        <Reveal delay={80} className="panel p-6 sm:p-7">
          <h3 className="font-display text-lg font-semibold">What I do</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            I build responsive websites, interactive web applications, landing pages, and modern
            digital experiences.
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {whatIDo.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border bg-surface-raised px-3 py-1.5 text-xs text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={160} className="panel p-6 sm:p-7">
          <h3 className="font-display text-lg font-semibold">My approach</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Work shipped for real clients — scoped, built and handed over directly.
          </p>
          <ul className="mt-5 space-y-2.5">
            {approach.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
