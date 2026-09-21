import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  MessageCircle,
} from "lucide-react";

import { profile, stats } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden">
      <div
        aria-hidden
        className="grid-backdrop pointer-events-none absolute inset-0"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-18rem] size-[36rem] -translate-x-1/2 rounded-full bg-primary/12 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-36 lg:pb-32 lg:pt-44">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <div className="min-w-0">
            <Reveal>
              <p className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground sm:text-sm">
                <span
                  aria-hidden
                  className="size-2 shrink-0 rounded-full bg-primary shadow-[0_0_0_3px] shadow-primary/20"
                />
                <span className="truncate">
                  {profile.name} · {profile.title} · Available for
                  work
                </span>
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-6 text-[2.1rem] font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
                Software Engineer building modern,{" "}
                <span className="text-primary">high-performance</span> web
                applications.
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                I turn ideas into responsive, scalable, and user-focused digital
                experiences.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:px-6"
                >
                  View My Work
                  <ArrowRight
                    aria-hidden
                    className="size-4 transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface-raised sm:px-6"
                >
                  Let's Work Together
                </a>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-whatsapp/40 bg-whatsapp/10 px-5 py-3 text-sm font-semibold text-whatsapp transition-colors hover:bg-whatsapp/20 sm:px-6"
                >
                  <MessageCircle aria-hidden className="size-4" />
                  Hire Me on WhatsApp
                </a>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <a
                  href={profile.cv}
                  download
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Download aria-hidden className="size-4" />
                  Download CV
                </a>
                <a
                  href={profile.cvView}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <ExternalLink aria-hidden className="size-4" />
                  View CV
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-0 items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github aria-hidden className="size-4 shrink-0" />
                  <span className="truncate">{profile.githubLabel}</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.label} className="min-w-0">
                    <dt className="sr-only">{s.label}</dt>
                    <dd className="font-display text-2xl font-bold sm:text-3xl">
                      {s.value}
                    </dd>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {s.label}
                    </p>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <Reveal delay={160} className="min-w-0">
            <figure className="panel mx-auto w-full max-w-sm overflow-hidden p-3 lg:max-w-none">
              <img
                src={profile.portrait}
                alt={`Portrait of ${profile.name}, software engineer`}
                width={800}
                height={1000}
                fetchPriority="high"
                className="aspect-4/5 w-full rounded-lg object-cover"
              />
              <figcaption className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-1 pb-1 pt-4">
                <div className="min-w-0">
                  <p className="truncate font-display text-base font-semibold">
                    {profile.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {profile.title} · {profile.location}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-border bg-surface-raised px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  <span
                    aria-hidden
                    className="size-1.5 rounded-full bg-whatsapp"
                  />
                  Open to work
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
