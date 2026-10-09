import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "Straightline",
    tagline: "ADA compliance analysis platform, DiamondHacks 2026 winner",
    description:
      "Built in 36 hours at ACM DiamondHacks 2026 (400+ participants). An ADA compliance platform that uses autonomous Browser Use agents to scrape accessibility data for real-world locations, Gaussian Splatting for 3D environment reconstruction, and Supabase for caching. Won Best Use of Browser Use.",
    stack: ["Browser Use", "Gaussian Splatting", "Supabase", "Google Maps API", "Python", "Next.js"],
    year: "2026",
    color: "pink",
    live: "https://devpost.com/software/straightline",
    highlights: [
      "Won Best Use of Browser Use at ACM DiamondHacks 2026 among 400+ participants.",
      "Built autonomous multi-agent pipeline to scrape and analyze ADA compliance data.",
      "Integrated Gaussian Splatting for 3D reconstruction of physical locations.",
      "Designed Supabase caching layer to persist scraped compliance metadata across sessions.",
    ],
  },
  {
    id: 2,
    title: "Fruit Recognition CNN",
    tagline: "Real-time 24-layer GoogLeNet CNN, ACM AI Projects",
    description:
      "Engineered a real-time fruit recognition system for the ACM @ UCSD AI Projects Team. Designed a 24-layer GoogLeNet-inspired CNN from scratch with custom IOU and loss functions, trained on the COCO 2017 dataset.",
    stack: ["Python", "PyTorch", "GoogLeNet", "COCO 2017", "OpenCV", "NumPy"],
    year: "2025",
    color: "mint",
    highlights: [
      "Designed 24-layer GoogLeNet-inspired architecture with inception modules.",
      "Implemented custom IOU metric and composite loss function from scratch.",
      "Trained and evaluated on the COCO 2017 object detection dataset.",
    ],
  },
  {
    id: 8,
    title: "Triton Robotics Autonomy",
    tagline: "6-DoF pose estimation with solvePnP, Triton Robotics",
    description:
      "Improved 3D object orientation accuracy on a robotics autonomy team by transitioning detection from bounding box methods to feature-based computer vision using sticker and sentry symbol recognition. Prototyped a Python/OpenCV node with contour detection and applied solvePnP with real-world object dimensions to achieve 6-DoF pose estimation.",
    stack: ["Python", "C++", "OpenCV", "ROS2", "Computer Vision", "Pose Estimation"],
    year: "2025–2026",
    color: "lemon",
    highlights: [
      "Replaced bounding box detection with feature-based contour recognition for higher accuracy.",
      "Applied solvePnP with real-world object dimensions for full 6-DoF pose estimation.",
      "Prototyped ROS2-compatible Python/OpenCV node for live robotics integration.",
    ],
  },
  {
    id: 7,
    title: "Movie Recommendation System",
    tagline: "Matrix factorization recommender, CSE 25, UCSD",
    description:
      "Built a collaborative filtering recommendation system on the MovieLens 20M dataset using regularized Matrix Factorization trained with SGD. Designed a hybrid scoring model combining personalized latent factor predictions with item popularity signals, achieving Precision@10 of 0.0901 and outperforming both pure MF and popularity-only baselines. Explored the tradeoff between rating prediction accuracy and ranking quality in high-sparsity settings (98.6% matrix sparsity).",
    stack: ["Python", "NumPy", "Collaborative Filtering", "Matrix Factorization", "SGD"],
    year: "2026",
    color: "mint",
    github: "https://github.com/tekkaonigiri/cse25-movie-recommender",
    highlights: [
      "Trained regularized Matrix Factorization with SGD on the 20M-entry MovieLens dataset.",
      "Hybrid scoring model beat pure MF and popularity baselines with Precision@10 of 0.0901.",
      "Implemented evaluation pipeline with Precision@k and RMSE across three baselines.",
      "Analyzed the RMSE vs. ranking quality tradeoff in a 98.6% sparse matrix setting.",
    ],
  },
  {
    id: 3,
    title: "Tigers Vote",
    tagline: "SwiftUI voter registration app for ~400 students",
    description:
      "Independently built and deployed a SwiftUI iOS app that simplifies the voter registration process for students. Shipped to ~400 students with a clean, native mobile interface.",
    stack: ["Swift", "SwiftUI", "Xcode"],
    year: "2024",
    color: "orange",
    highlights: [
      "Independently designed, built, and deployed to ~400 students.",
      "Native SwiftUI interface optimized for first-time voter registration flows.",
    ],
  },
  {
    id: 4,
    title: "RechargeTeach",
    tagline: "Swift app for teacher burnout and wellness",
    description:
      "A Swift app designed to help combat teacher burnout, featuring wellness check-ins, resource recommendations, and daily reflection prompts for educators.",
    stack: ["Swift", "SwiftUI", "Xcode"],
    year: "2024",
    color: "lemon",
    github: "https://github.com/tekkaonigiri/RechargeTeach",
    highlights: [
      "Built wellness and reflection tools tailored to educator needs.",
      "Native iOS app with SwiftUI and local persistence.",
    ],
  },
  {
    id: 5,
    title: "PetHub",
    tagline: "Next.js interactive anatomy learning app, WiC",
    description:
      "An educational Next.js web app built with the Women in Computing project team. Features interactive pet anatomy explorations and learning modules, deployed on Vercel.",
    stack: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    year: "2025",
    color: "lavender",
    live: "https://wic-project-pet-smart.vercel.app/",
    highlights: [
      "Built interactive anatomy feature with layered visual exploration.",
      "Deployed and live on Vercel as a Women in Computing team project.",
    ],
  },
  {
    id: 6,
    title: "Spotify Recommender",
    tagline: "Collaborative filtering recommender, ACM AI Mentor",
    description:
      "Co-mentored a team of 4 to build a Spotify recommender system using collaborative filtering and user similarity models. Evaluation methodology included Precision@K, Recall@K, and random/popularity baselines.",
    stack: ["Python", "Collaborative Filtering", "scikit-learn", "Pandas", "Jupyter"],
    year: "2026",
    color: "pink",
    highlights: [
      "Led team of 4 as ACM AI Projects Mentor to build and evaluate a recommender system.",
      "Designed evaluation pipeline: Precision@K, Recall@K, and baseline comparisons.",
      "Applied collaborative filtering and user–item similarity models.",
    ],
  },
];

const featured = projects.slice(0, 2);
const rest = projects.slice(2);

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projects by Nicole Fong",
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "CreativeWork",
      name: p.title,
      description: p.description,
      ...(p.live || p.github ? { url: p.live || p.github } : {}),
      author: { "@type": "Person", name: "Nicole Fong" },
    },
  })),
};

export default function ProjectsPage() {
  return (
    <div className="fade-in max-w-page mx-auto px-5 lg:px-12 pt-14 lg:pt-20 pb-14 lg:pb-[88px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />

      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-xs text-accent tracking-[0.12em] uppercase mb-2">
          Selected Work
        </p>
        <h1 className="font-display font-medium text-ink text-[32px] lg:text-[40px] leading-tight">
          Projects
        </h1>
        <div className="w-16 border-b-2 border-accent mt-4" />
        <p className="text-sm text-ink-3 mt-4">
          Hackathon wins, research models, and shipped apps.
        </p>
      </div>

      {/* Featured */}
      <p className="font-mono text-xs text-ink-3 tracking-[0.12em] uppercase mb-3">
        Featured
      </p>
      <div className="grid md:grid-cols-2 gap-5 mb-12">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} featured />
        ))}
      </div>

      {/* Standard grid */}
      <p className="font-mono text-xs text-ink-3 tracking-[0.12em] uppercase mb-3">
        More Work
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {rest.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
