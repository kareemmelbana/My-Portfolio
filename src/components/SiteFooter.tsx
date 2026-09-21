import { Download, Github, Linkedin, MessageCircle } from "lucide-react";

import { profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto grid w-full max-w-6xl gap-6 px-5 sm:px-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
        <div className="min-w-0">
          <p className="font-display text-base font-bold">
            kareem<span className="text-primary">.</span>
          </p>
          <p className="mt-1.5 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {profile.name} ·
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <a
            href={profile.cv}
            download
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium transition-colors hover:bg-surface-raised"
          >
            <Download aria-hidden className="size-4" />
            Download CV
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:bg-surface-raised"
          >
            <Github aria-hidden className="size-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:bg-surface-raised"
          >
            <Linkedin aria-hidden className="size-4" />
          </a>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-surface transition-colors hover:bg-surface-raised"
          >
            <MessageCircle aria-hidden className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
