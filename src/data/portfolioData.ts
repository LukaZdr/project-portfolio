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
  notebookLink?: string;
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
    images: ["projects/medoki.png"]
  },
  {
    id: "led-bag",
    title: "LED Bag",
    problem: "A combination of fashion and technology — a self-sewn bag enhanced with electronics and custom 3D-printed components that display animated lighting effects.",
    motivation: "",
    technologies: ["Arduino", "C++", "3D Printing", "Blender", "Fusion 360", "Sewing"],
    lessonsLearned: "",
    obstacles: "",
    images: ["projects/led_bag.gif"]
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
    images: ["projects/tech_debt.jpg"]
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
    images: ["projects/pen_plotter.gif"]
  },
  {
    id: "voice-clone",
    title: "Discord Voice Clone Bot",
    problem: "A Discord bot that imitates the voices of my friends and me, allowing us to prank and confuse each other during voice chats.",
    motivation: "",
    technologies: ["Python", "PyTorch", "Docker"],
    lessonsLearned: "",
    obstacles: "",
    images: ["projects/discord_bot.png"]
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
    notebookLink: "https://colab.research.google.com/drive/1Qt_ZULUgOXAgHaQq0x-lRRjNuc6yrse7?usp=sharing",
    images: ["projects/paint_by_numbers.png"]
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
    images: ["projects/knitting_machine.png"]
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
    title: "Thermomix Knock-Off Cooking Agent",
    description: "Cheap ALDI Thermomix clones can apparently be hacked, which led me to the idea of building an AI-assisted cooking interface around one. The plan is to create a small web app where I can talk to an agent about what’s currently in my fridge and what I feel like eating. The system would then generate a recipe and send the cooking instructions directly to the machine"
  },
  {
    id: "wd-2",
    title: "Building My Own Embroidery Machine",
    description: "Turning an old sewing machine into an Arduino-based embroidery machine capable of generating custom stitched patterns and graphics. Part restoration project, part hardware experiment, part attempt at giving clothing a little more personality."
  },
  {
    id: "wd-3",
    title: "A Digital Lava Lamp",
    description: "A retro-inspired lava lamp reimagined as a digital object. Instead of wax and liquid, the movement would be generated through LEDs or a small display system, something that feels simultaneously nostalgic and slightly futuristic."
  }
];
