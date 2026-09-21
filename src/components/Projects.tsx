import { ArrowUpRight, ChevronDown, ChevronUp, Github } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { featuredProjects, moreProjects, type Project } from "@/data/portfolio";

import { Reveal } from "./Reveal";
import { Section } from "./Section";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <a
        href={project.demo}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        Live Demo
        <ArrowUpRight aria-hidden className="size-4" />
      </a>
      <a
        href={project.source}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface-raised px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
      >
        <Github aria-hidden className="size-4" />
        Source Code
      </a>
    </div>
  );
}

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-md border border-border bg-surface-raised px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;

  return (
    <Reveal className="panel overflow-hidden">
      <div className="grid lg:grid-cols-2">
        <div
          className={cn(
            "relative min-h-56 sm:min-h-72 lg:min-h-full",
            flip && "lg:order-2",
          )}
        >
          <img
            src={project.image}
            alt={project.alt}
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover"
          />
        </div>

        <div className="min-w-0 p-6 sm:p-8 lg:p-10">
          <p className="section-label">Featured · 0{index + 1}</p>
          <h3 className="mt-3 font-display text-xl font-bold sm:text-2xl">
            {project.name}
          </h3>
          <p className="mt-2 text-sm font-medium text-primary">
            {project.role}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {project.features.length > 0 ? (
            <div className="mt-6">
              <h4 className="section-label">Key features</h4>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {project.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <TechList tech={project.tech} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </Reveal>
  );
}

function CompactCard({ project, delay }: { project: Project; delay: number }) {
  return (
    <Reveal delay={delay} className="panel flex flex-col overflow-hidden">
      <img
        src={project.image}
        alt={project.alt}
        width={1200}
        height={800}
        loading="lazy"
        decoding="async"
        className="aspect-3/2 w-full object-cover"
      />
      <div className="flex min-w-0 flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold">{project.name}</h3>
        <p className="mt-1.5 text-xs font-medium text-primary">
          {project.role}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <TechList tech={project.tech} />
        <ProjectLinks project={project} />
      </div>
    </Reveal>
  );
}

export function Projects() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <Section
      id="projects"
      index="04"
      label="Projects"
      title="Featured projects"
      intro="Real websites and applications built for clients and coursework."
    >
      <div className="space-y-6">
        {featuredProjects.map((project, i) => (
          <FeaturedCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      <Reveal className="mt-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="font-display text-2xl font-bold">More projects</h3>
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              aria-controls="more-projects"
              aria-expanded={showAllProjects}
              onClick={() => setShowAllProjects(true)}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
            >
              Show all projects
              <ChevronDown aria-hidden className="size-4" />
            </button>
            {showAllProjects ? (
              <button
                type="button"
                aria-controls="more-projects"
                onClick={() => setShowAllProjects(false)}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Hide projects
                <ChevronUp aria-hidden className="size-4" />
              </button>
            ) : null}
          </div>
        </div>
      </Reveal>

      {showAllProjects ? (
        <div id="more-projects" className="mt-8 grid gap-5 sm:grid-cols-2">
          {moreProjects.map((project, i) => (
            <CompactCard
              key={project.slug}
              project={project}
              delay={(i % 2) * 70}
            />
          ))}
        </div>
      ) : null}
    </Section>
  );
}
