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
  category: 'academic' | 'private';
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
    category: "academic",
    problem: "Developed in collaboration with the <a href='https://www.uni-hamburg.de/' target='_blank' rel='noreferrer' class='project-link'>University of Hamburg</a> and the <a href='https://www.uke.de/' target='_blank' rel='noreferrer' class='project-link'>University Medical Center Hamburg-Eppendorf (UKE)</a>, MeDoKI is an application that implements human in the loop workflows and Explainable AI (XAI). It empowers physicians by automating non patient facing tasks such as extracting clinical findings, diagnosis support, and documentation, effectively saving between 76% and 82% of administrative time while maintaining or improving the quality of medical outputs.",
    motivation: "",
    technologies: ["Agents", "RAG", "Python", "PyTorch", "Django", "Tailwind CSS", "PostgreSQL", "Ollama", "Docker"],
    lessonsLearned: "",
    obstacles: "",
    images: ["projects/medoki.png"]
  },
  {
    id: "tech-debt",
    title: "Technical Debt Game",
    category: "academic",
    problem: "Developed at the <a href='https://www.uni-hamburg.de/' target='_blank' rel='noreferrer' class='project-link'>University of Hamburg</a>, this board game was designed to bridge the gap between management and developers by creating a shared understanding of technical debt. The project won <b>first place</b> in two student research competitions: the internal Software Engineering competition at the University of Hamburg and the nationwide competition hosted by the <a href='https://gi.de/' target='_blank' rel='noreferrer' class='project-link'>Gesellschaft für Informatik (GI)</a> at the University of Paderborn.",
    motivation: "",
    technologies: ["Inkscape", "Game Design", "Pen & Paper"],
    lessonsLearned: "",
    obstacles: "",
    githubLink: "https://github.com/LukaZdr/Tech-Schulden",
    images: ["projects/tech_debt.jpg"]
  },
  {
    id: "led-bag",
    title: "LED Bag",
    category: "private",
    problem: "A combination of fashion and technology — a self-sewn bag enhanced with electronics and custom 3D-printed components that display animated lighting effects.",
    motivation: "",
    technologies: ["Arduino", "C++", "3D Printing", "Blender", "Fusion 360", "Sewing"],
    lessonsLearned: "",
    obstacles: "",
    images: ["projects/led_bag.gif"]
  },
  {
    id: "pen-plotter",
    title: "Pen Plotter",
    category: "private",
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
    category: "private",
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
    category: "private",
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
    category: "private",
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
    category: "academic",
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
