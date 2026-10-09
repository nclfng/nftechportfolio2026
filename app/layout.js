import "./globals.css";
import { Newsreader, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  // This Next version has no fallback metrics for Newsreader; Georgia is the manual fallback
  adjustFontFallback: false,
  fallback: ["Georgia", "serif"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "600"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

const SITE_URL = "https://nicolefong.tech";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nicole Fong | AI/ML Engineer & Full Stack Developer",
    template: "%s | Nicole Fong",
  },
  description:
    "Nicole Fong is a second-year AI student at UC San Diego building multimodal AI systems, computer vision tools, and full-stack software. ACM AI Events Director, DiamondHacks 2026 winner.",
  keywords: [
    "Nicole Fong",
    "Nicole Fong UCSD",
    "Nicole Fong portfolio",
    "Nicole Fong AI engineer",
    "AI ML engineer portfolio",
    "UC San Diego AI student",
    "full stack developer",
    "machine learning",
    "computer vision",
  ],
  authors: [{ name: "Nicole Fong", url: SITE_URL }],
  creator: "Nicole Fong",
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Nicole Fong",
    title: "Nicole Fong | AI/ML Engineer & Full Stack Developer",
    description:
      "Nicole Fong is a second-year AI student at UC San Diego building multimodal AI systems, computer vision tools, and full-stack software. ACM AI Events Director, DiamondHacks 2026 winner.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nicole Fong | AI/ML Engineer & Full Stack Developer",
    description:
      "Second-year AI student at UC San Diego. DiamondHacks 2026 winner. Building multimodal AI and full-stack software.",
    creator: "@nicolefong",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F3EDE3" },
    { media: "(prefers-color-scheme: dark)", color: "#211D1A" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nicole Fong",
  url: SITE_URL,
  jobTitle: "AI/ML Engineer & Full Stack Developer",
  description:
    "Second-year Artificial Intelligence student at UC San Diego. ACM AI Events Director. DiamondHacks 2026 winner.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "UC San Diego",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Computer Vision",
    "Full Stack Development",
    "Reinforcement Learning from Human Feedback",
  ],
  sameAs: [
    "https://github.com/nclfng",
    "https://linkedin.com/in/coleng",
  ],
};

// Runs before paint so the chosen theme never flashes.
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${newsreader.variable} ${sourceSans.variable} ${plexMono.variable}`}
    >
      <body className="bg-bg text-ink-2 min-h-screen font-sans flex flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
