import { Briefcase, Github, Linkedin, Mail, MessageCircle, Phone, Star } from "lucide-react";

import { profile } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const channels = [
  {
    label: "WhatsApp",
    value: profile.phone,
    href: profile.whatsapp,
    icon: MessageCircle,
    external: true,
  },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  {
    label: "LinkedIn",
    value: "kareem-elbana-cs",
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "kareemmelbana",
    href: profile.github,
    icon: Github,
    external: true,
  },
  {
    label: "Khamsat",
    value: "kareemmelbana",
    href: profile.khamsat,
    icon: Briefcase,
    external: true,
  },
  {
    label: "Client reviews",
    value: "Khamsat reviews",
    href: profile.khamsatReviews,
    icon: Star,
    external: true,
  },
  { label: "Phone", value: profile.phone, href: profile.phoneHref, icon: Phone },
];

export function Contact() {
  return (
    <Section
      id="contact"
      index="06"
      label="Contact"
      title="Have a project in mind? Let's build it."
      intro="Tell me what you're building, and let's discuss how I can help."
    >
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <Reveal className="panel flex flex-col p-6 sm:p-8">
          <div>
            <h3 className="font-display text-xl font-semibold">Fastest way to reach me</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              WhatsApp is the quickest channel for freelance work — send a short brief and I'll
              reply with scope, timeline and next steps.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Clear scope and timeline before any work starts",
                "Fully responsive builds, including Arabic RTL",
                "Deployment and iteration handled end to end",
              ].map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span
                    aria-hidden
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">

            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle aria-hidden className="size-4" />
              Chat on WhatsApp
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-raised px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Mail aria-hidden className="size-4" />
              Send an email
            </a>
          </div>
        </Reveal>

        <Reveal delay={80} className="panel p-6 sm:p-8">
          <h3 className="section-label">Direct & elsewhere</h3>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {channels.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface-raised px-4 py-3 transition-colors hover:border-primary/40"
                >
                  <Icon aria-hidden className="size-4 shrink-0 text-primary" />
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">{label}</span>
                    <span className="block truncate text-xs text-muted-foreground">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
