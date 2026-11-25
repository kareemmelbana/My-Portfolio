export const WHATSAPP_MESSAGE =
  "Hello Kareem, I came across your portfolio and I'd like to discuss a project with you.";

export const profile = {
  name: "Kareem Elbana",
  title: "Software Engineer",
  location: "Mansoura, Egypt",
  email: "Kareemmelbana@gmail.com",
  phone: "+20 122 753 2476",
  phoneHref: "tel:+201227532476",
  whatsapp: `https://wa.me/201227532476?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
  github: "https://github.com/kareemmelbana",
  githubLabel: "github.com/kareemmelbana",
  linkedin: "https://linkedin.com/in/kareem-elbana-cs",
  khamsat: "https://khamsat.com/user/kareemmelbana",
  khamsatReviews: "https://khamsat.com/user/kareemmelbana/reviews",
  cv: "/files/Kareem-Elbana-CV.docx",
  cvView:
    "https://docs.google.com/document/d/1IPpAvd9SIhsmjf2gisiayIvJHB6D35CO/edit?usp=sharing&ouid=116468176290943777668&rtpof=true&sd=true",
  portrait: "/images/kareem.webp",
} as const;

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export const stats = [
  { value: "18+", label: "Projects shipped" },
  { value: "15+", label: "Freelance clients" },
  { value: "Mansoura", label: "Based in" },
] as const;

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS"],
  },
  { title: "Backend", items: ["Node.js", "REST APIs"] },
  {
    title: "State & Tools",
    items: ["Redux Toolkit", "Git", "GitHub", "Vercel"],
  },
  { title: "Additional knowledge", items: ["Python", "C++"] },
] as const;

export const services = [
  {
    title: "Landing Pages",
    description:
      "High-converting responsive landing pages designed around clear business goals.",
  },
  {
    title: "Business Websites",
    description:
      "Modern websites for businesses, brands, and personal businesses.",
  },
  {
    title: "React Web Applications",
    description:
      "Interactive and scalable web applications using React and modern web technologies.",
  },
  {
    title: "E-Commerce Interfaces",
    description:
      "Modern shopping experiences with product catalogs, carts, filters, and responsive UI.",
  },
  {
    title: "Arabic RTL Websites",
    description:
      "Professional Arabic and RTL-compatible websites with responsive layouts.",
  },
  {
    title: "Website Redesign",
    description:
      "Modernizing existing websites with better UI, responsiveness, performance, and user experience.",
  },
] as const;

export type Project = {
  slug: string;
  name: string;
  role: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
  tech: string[];
  demo: string;
  source: string;
};

export const featuredProjects: Project[] = [
  {
    slug: "estore",
    name: "E-Store — E-Commerce Storefront",
    role: "Software Engineer / Frontend Developer",
    description:
      "DEPI graduation project built with a team: product listing, shopping cart and user-facing pages, delivered in an Agile workflow.",
    image: "/images/projects/estore.jpg",
    alt: "E-commerce storefront interface showing a product grid on a dark background",
    features: [
      "Product listing pages",
      "Shopping cart",
      "Client-side routing",
      "State management",
      "Responsive design",
    ],
    tech: ["React.js", "React Router", "Tailwind CSS", "Vercel"],
    demo: "https://ecommerce-storefront-gilt.vercel.app/",
    source: "https://github.com/kareemmelbana",
  },
  {
    slug: "specialty-burger",
    name: "Specialty Burger",
    role: "Freelance Frontend Developer",
    description:
      "Commercial restaurant website built for a freelance client to showcase their burger menu with a responsive, appetising layout.",
    image: "/images/projects/specialty-burger.jpg",
    alt: "Specialty burger restaurant website preview",
    features: [
      "Interactive burger menu",
      "Category & meal filtering",
      "Component-based UI",
      "Mobile-first responsive layout",
      "Fast, optimized rendering",
    ],
    tech: ["React.js", "Tailwind CSS", "Vercel"],
    demo: "https://specialty-burger.vercel.app/",
    source: "https://github.com/kareemmelbana",
  },
  {
    slug: "nevermind-coffee",
    name: "Nevermind Coffee — Café Website",
    role: "Freelance Frontend Developer",
    description:
      "Arabic RTL landing page for Nevermind Coffee in Abha, featuring menu browsing, customer reviews, location details, and direct WhatsApp ordering.",
    image: "/images/projects/hero-nervand.jpg",
    alt: "Nevermind Coffee website landing page with Arabic RTL interface",
    features: [
      "Arabic RTL interface",
      "Interactive menu showcase",
      "Direct WhatsApp ordering",
      "Reviews & location sections",
      "Responsive, fluid layout",
    ],
    tech: ["React.js", "Tailwind CSS", "Vercel"],
    demo: "https://cafe-ashen-five.vercel.app/",
    source: "https://github.com/kareemmelbana",
  },
  {
    slug: "jabr-menswear",
    name: "JABR — Men's Wear Storefront",
    role: "Freelance Frontend Developer",
    description:
      "Modern e-commerce storefront for a men's clothing brand featuring product collections, winter piece customization, and a responsive shopping experience.",
    image: "/images/projects/Warm Beige.jpg",
    alt: "JABR men's wear e-commerce website preview",
    features: [
      "Product catalog & collections",
      "Category & arrival filtering",
      "Winter piece customization",
      "Dynamic free-shipping threshold",
      "Mobile-first responsive layout",
    ],
    tech: ["React.js", "Tailwind CSS", "Vercel"],
    demo: "https://jabr-menswear.vercel.app/",
    source: "https://github.com/kareemmelbana",
},
  {
    slug: "keyc",
    name: "Keyc — Securely Delivered",
    role: "Software Engineer / Frontend Developer",
    description:
      "Product site for a secure delivery service, structured to walk visitors from the value proposition through to contact.",
    image: "/images/projects/hero-keyc.jpg",
    alt: "Product website for a secure delivery service with a dark hero section",
    features: [
      "Component-based architecture",
      "Conversion-focused page structure",
      "Modern UI",
      "Responsive design",
    ],
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Vercel"],
    demo: "https://key-c-khamsat-1.vercel.app/Keyc-Securely-Delivered",
    source: "https://github.com/kareemmelbana",
  },
  {
    slug: "loqmet-maleh-w-hali",
    name: "Loqmet Maleh W Hali — Digital Menu",
    role: "Freelance Frontend Developer",
    description:
      "Interactive digital menu for Loqmet Maleh W Hali restaurant, showcasing sweet and savory dishes with images and prices for fast, phone-first browsing at the table.",
    image: "/images/projects/menu.jpg",
    alt: "Loqmet Maleh W Hali digital restaurant menu showing dish cards on a dark background",
    features: [
      "Categorised menu items",
      "Phone-first layout",
      "Reusable components",
      "Responsive design",
    ],
    tech: ["React.js", "JavaScript", "Tailwind CSS", "Vercel"],
    demo: "https://lequma-menu.vercel.app/",
    source: "https://github.com/kareemmelbana",
  },
];

export const moreProjects: Project[] = [
  {
    slug: "bessa",
    name: "Bessa Project",
    role: "Software Engineer / Frontend Developer",
    description:
      "Modern responsive website built to present a project clearly across desktop and mobile screens.",
    image: "/images/projects/hero-cat.jpg",
    alt: "Bessa project website preview",
    features: [],
    tech: ["React.js", "Tailwind CSS", "Vercel"],
    demo: "https://bessa-project.vercel.app/",
    source: "https://github.com/kareemmelbana",
  },
  {
    slug: "homeclean",
    name: "Home Clean — Cleaning Service",
    role: "Freelance Frontend Developer",
    description:
      "Responsive landing page for a home-cleaning service in Jazan: services, pricing, information and direct customer contact.",
    image: "/images/projects/maid.jpg",
    alt: "Home cleaning service landing page with service cards",
    features: [],
    tech: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://kareemmelbana.github.io/Web/",
    source: "https://github.com/kareemmelbana",
  },
  {
    slug: "restaurant",
    name: "Food Lover — Restaurant Website",
    role: "Software Engineer / Frontend Developer",
    description:
      "Restaurant landing page with a full menu, special offers and photo gallery — hand-built and fully responsive.",
    image: "/images/projects/home_bg.jpeg",
    alt: "Restaurant website landing page with hero food photography",
    features: [],
    tech: ["HTML5", "CSS3", "Responsive"],
    demo: "https://kareemmelbana.github.io/Resturant-Page",
    source: "https://github.com/kareemmelbana/Resturant-Page",
  },
  {
    slug: "coffee-shop",
    name: "Coffee Shop",
    role: "Software Engineer / Frontend Developer",
    description:
      "Coffee shop website with a warm, responsive presentation for the brand, menu and customer experience.",
    image: "/images/projects/coffee-home.jpg",
    alt: "Coffee shop website project preview",
    features: [],
    tech: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://kareemmelbana.github.io/coffe-shop/",
    source: "https://github.com/kareemmelbana",
  },
  {
    slug: "nahr-alsoyoula-logistics",
    name: "Nahr Alsoyoula Logistics",
    role: "Freelance Frontend Developer",
    description:
      "Professional logistics website focused on services, trust and straightforward customer contact.",
    image: "/images/projects/Nahr-Alsoyoula.png",
    alt: "Logistics website project preview",
    features: [],
    tech: ["React.js", "Tailwind CSS", "Vercel"],
    demo: "https://nahr-alsoyoula-logistics.vercel.app/",
    source: "https://github.com/kareemmelbana",
  },
];

export const experience = [
  {
    tag: "Freelance",
    period: "2025 — Present",
    role: "Freelance Software Engineer",
    org: "Self-employed · Independent",
    points: [
      "Build client websites and web apps with React, Tailwind CSS and vanilla HTML/CSS/JS.",
      "Deliver fully responsive layouts and right-to-left Arabic interfaces.",
      "Handle the full cycle: design hand-off, development, deployment and iteration.",
    ],
  },
  {
    tag: "Training",
    period: "June 2025 — December 2025",
    role: "React Development Track",
    org: "Digital Egypt Pioneers Initiative (DEPI) — Round 3",
    points: [
      "Developed responsive React applications with a component-based architecture.",
      "Applied hooks, client-side routing, REST API integration and state management (Context / Redux).",
      "Collaborated using Git & GitHub with branching strategies and pull requests.",
    ],
  },
  {
    tag: "Education",
    period: "2024 — Expected 2028",
    role: "BSc in Computer Science",
    org: "Faculty of Computer and Information Science — Mansoura University",
    points: [
      "Studying software engineering fundamentals, algorithms and data structures.",
    ],
  },
] as const;
