import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";
import { profile } from "@/data/portfolio";

const title = "Kareem El-Bana | Software Engineer";
const description =
  "Software Engineer building modern, high-performance web applications with React, TypeScript and Tailwind CSS. Freelance experience delivering responsive websites, web apps and e-commerce interfaces for real clients.";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: profile.name },
      {
        name: "keywords",
        content:
          "Software Engineer, React Developer, Frontend Developer, Web Applications, Freelance, Tailwind CSS, TypeScript, Kareem Elbana",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Kareem Elbana",
          alternateName: "Kareem El-Bana",
          jobTitle: "Software Engineer",
          email: `mailto:${profile.email}`,
          telephone: profile.phone,
          address: { "@type": "PostalAddress", addressLocality: "Mansoura", addressCountry: "EG" },
          url: "/",
          sameAs: [profile.github, profile.linkedin, profile.khamsat],
          knowsAbout: [
            "React",
            "JavaScript",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Responsive Web Design",
          ],
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <SiteFooter />
    </div>
  );
}
