import {
  Globe,
  LayoutTemplate,
  Languages,
  RefreshCw,
  ShoppingCart,
  Code2,
  type LucideIcon,
} from "lucide-react";

import { services } from "@/data/portfolio";
import { Reveal } from "./Reveal";
import { Section } from "./Section";

const icons: Record<string, LucideIcon> = {
  "Landing Pages": LayoutTemplate,
  "Business Websites": Globe,
  "React Web Applications": Code2,
  "E-Commerce Interfaces": ShoppingCart,
  "Arabic RTL Websites": Languages,
  "Website Redesign": RefreshCw,
};

export function Services() {
  return (
    <Section
      id="services"
      index="03"
      label="Services"
      title="What I can build"
      intro="Solutions designed around real business needs."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => {
          const Icon = icons[service.title] ?? Code2;
          return (
            <Reveal
              key={service.title}
              delay={(i % 3) * 70}
              className="panel p-6 transition-colors hover:border-primary/40 sm:p-7"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface-raised text-primary">
                <Icon aria-hidden className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{service.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
