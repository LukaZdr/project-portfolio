export interface Project {
  id: string;
  title: string;
  problem: string;
  motivation: string;
  technologies: string[];
  lessonsLearned: string;
  obstacles: string;
  githubLink?: string;
  liveLink?: string;
  images: string[];
}

export interface WannaDo {
  id: string;
  title: string;
  description: string;
}

export const featuredProjects: Project[] = [
  {
    id: "medoki",
    title: "MeDoKI – Medical Documentation AI",
    problem: "An AI-agent-based medical treatment platform that assists physicians with therapy planning, diagnosis support, and clinical documentation.",
    motivation: "",
    technologies: ["Python", "PyTorch", "Django", "Tailwind CSS", "PostgreSQL", "Ollama", "Docker"],
    lessonsLearned: "",
    obstacles: "",
    images: ["/projects/medoki.png"]
  },
  {
    id: "led-bag",
    title: "LED Bag",
    problem: "A combination of fashion and technology — a self-sewn bag enhanced with electronics and custom 3D-printed components that display animated lighting effects.",
    motivation: "",
    technologies: ["Arduino", "C++", "3D Printing", "Blender", "Fusion 360", "Sewing"],
    lessonsLearned: "",
    obstacles: "",
    images: ["https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800"]
  },
  {
    id: "tech-debt",
    title: "Technical Debt Game",
    problem: "A board game designed to bridge the gap between management and developers by creating a shared understanding of how to handle technical debt.",
    motivation: "",
    technologies: ["Inkscape", "Game Design", "Pen & Paper"],
    lessonsLearned: "",
    obstacles: "",
    githubLink: "https://github.com/LukaZdr/Tech-Schulden",
    images: ["/projects/tech_debt.jpg"]
  },
  {
    id: "pen-plotter",
    title: "Pen Plotter",
    problem: "A fully self-designed pen plotter built from scratch as a learning project for 3D design, electronics, and basic robotics.",
    motivation: "",
    technologies: ["Fusion 360", "3D Printing", "Arduino", "Inkscape", "G-code"],
    lessonsLearned: "",
    obstacles: "",
    githubLink: "https://github.com/LukaZdr/GrblPlotter/blob/main/README.md",
    images: ["https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800"]
  },
  {
    id: "voice-clone",
    title: "Discord Voice Clone Bot",
    problem: "A Discord bot that imitates the voices of my friends and me, allowing us to prank and confuse each other during voice chats.",
    motivation: "",
    technologies: ["Python", "PyTorch", "Docker"],
    lessonsLearned: "",
    obstacles: "",
    images: ["/projects/discord_bot.png"]
  },
  {
    id: "color-by-numbers",
    title: "Color-by-Numbers Project",
    problem: "Originally created as a gift idea, this project evolved into an educational tool for children learning to code. The script converts images into printable color-by-numbers templates with generated color palettes.",
    motivation: "",
    technologies: ["Python", "Jupyter Notebook"],
    lessonsLearned: "",
    obstacles: "",
    githubLink: "https://github.com/LukaZdr/paint_by_numbers_image_generator",
    images: ["https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800"]
  },
  {
    id: "knitting-hack",
    title: "Arduino Knitting Machine Hack",
    problem: "A project focused on modifying an old Brother knitting machine using Arduino and AYAB to knit multicolor images and patterns with up to six colors.",
    motivation: "",
    technologies: ["AYAB", "Arduino"],
    lessonsLearned: "",
    obstacles: "",
    liveLink: "https://www.ayab-knitting.com/",
    images: ["https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&q=80&w=800"]
  },
  {
    id: "mipse",
    title: "MIPSE – Multimodal Image Processing Search Engine",
    problem: "A CLIP-based multimodal search engine focused on image-content understanding and semantic image retrieval.",
    motivation: "",
    technologies: ["Python", "CLIP", "Flask", "CSS"],
    lessonsLearned: "",
    obstacles: "",
    githubLink: "https://github.com/LukaZdr/multimodal_image_processing_search_engine",
    images: ["https://user-images.githubusercontent.com/24440000/149972485-d53ea8fc-417e-41e3-897d-a5a8c682a766.gif"]
  }
];

export const wannaDos: WannaDo[] = [
  {
    id: "wd-1",
    title: "Local-First Markdown Editor",
    description: "A beautifully crafted, distraction-free markdown editor that syncs via CRDTs instead of a centralized database."
  },
  {
    id: "wd-2",
    title: "Algorithmic Plant Care Bot",
    description: "Building a Raspberry Pi powered robot that navigates a track to water household plants based on soil moisture sensors."
  },
  {
    id: "wd-3",
    title: "WebGL Portfolio V2",
    description: "Experimenting with Three.js to create a fully immersive 3D experience for my next portfolio iteration."
  }
];
