import Link from "next/link";
import NutritionLabel from "@/components/NutritionLabel";
import ExperienceCard from "@/components/ExperienceCard";

// ── Page data ──────────────────────────────────────────────────────────────
const experience = [
  {
    role: "CSE PACE Lead Mentor",
    company: "UC San Diego, Computer Science & Engineering",
    period: "Sept. 2026–Present",
    bullets: [
      "Mentor 100+ first-year students in the CSE PACE program through weekly small-group sessions, building peer community and academic confidence in the major.",
      "Facilitate hands-on group exercises connecting first-years to CSE courses, resources, and campus opportunities.",
    ],
  },
  {
    role: "Google Student Ambassador",
    company: "Google",
    period: "Aug. 2026–Present",
    bullets: [
      "Represent Google as one of 100 students nationally chosen to lead campus outreach at 50 U.S. universities.",
      "Plan and help run on-campus events and outreach initiatives to build awareness of Google's tools, career resources, and student programs.",
    ],
  },
  {
    role: "AI & ML Intern",
    company: "ChakraTech — San Diego, CA",
    period: "Jun.–Aug. 2026",
    bullets: [
      "Led development of a property-prediction pipeline for biodegradable polymers, engineering structural features to prioritize which candidates move forward to physical testing.",
      "Identified and corrected a data leakage risk by grouping structurally related compounds during train/test splitting, preventing inflated accuracy estimates.",
    ],
  },
  {
    role: "Operations Assistant",
    company: "Rad Blue Inc — San Francisco, CA",
    period: "Jan.–Aug. 2026",
    bullets: [
      "Improved performance for sales verticals by 18% across 30+ tasks by building ground-truth evaluation baselines and rubric-based assessments for RLHF fine-tuning.",
    ],
  },
];

const awards = [
  {
    title: "Best Use of Browser Use",
    event: "ACM DiamondHacks 2026",
    date: "April 2026",
    href: "https://devpost.com/software/straightline",
  },
  {
    title: "\"I've Got 99 Problems, and Triton Mobile is All of Them\"",
    event: "Cognitive NeuroEconomics",
    date: "Dec 2025",
    href: "https://medium.com/cognitive-neuroeconomics/ive-got-99-problems-and-triton-mobile-is-all-of-them-2bb7586287de",
  },
];

const featuredOrgs = [
  {
    org: "Association for Computing Machinery",
    role: "AI Events Director · AI Projects Mentor ×2",
    period: "Oct. 2025–Present",
    note: "Directs AI event programming for UCSD's largest student org; mentors teams on applied ML fundamentals.",
  },
  {
    org: "Triton Engineering Student Council",
    role: "Co-President · Tech Committee",
    period: "Oct. 2025–Present",
    note: "Leading the umbrella organization for 50+ UCSD engineering clubs, setting fall priorities for club funding and corporate sponsorships, and hosting events for 500+ students.",
  },
];

const activities = [
  { org: "Engineering Innovation & Entrepreneurship Council", role: "VP Events" },
  { org: "Women in Computing", role: "Project Teams — Fall 2025" },
  { org: "Triton Robotics", role: "Autonomy Team · 2025–26" },
  { org: "Roblox x RBXDev", role: "Finance & Website Staff" },
];

const reads = [
  {
    tag: "Paper",
    title: "You Only Look Once: Unified, Real-Time Object Detection",
    note: "Reframes detection as a single regression problem — one pass, real-time results. A shift in how I think about efficiency in model design.",
    href: "https://arxiv.org/pdf/1506.02640",
  },
  {
    tag: "Paper",
    title: "Image-to-Image Translation with Conditional Adversarial Networks",
    note: "One framework, wildly different tasks — sketch to photo, day to night. Changed how I think about what a loss function is actually doing.",
    href: "https://arxiv.org/pdf/1611.07004",
  },
];

const currently = [
  { label: "Based in", value: "Bay Area, CA" },
  { label: "Currently", value: "UC San Diego" },
  { label: "Seeking", value: "SWE / PM — Summer 2027" },
];

function SectionHeading({ num, title }) {
  return (
    <div className="mb-8">
      <p className="font-mono text-xs text-ink-3 tracking-[0.12em] uppercase mb-2">
        {num} ——
      </p>
      <h2 className="font-display font-medium text-ink text-2xl lg:text-[27px] leading-tight">
        {title}
      </h2>
    </div>
  );
}

export default function Home() {
  return (
    <div className="fade-in max-w-page mx-auto px-5 lg:px-12">
      {/* ── HERO ── */}
      <section aria-label="Introduction" className="pt-14 lg:pt-20 pb-14 lg:pb-[88px]">
        <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1fr_340px] lg:items-start">
          <div className="flex flex-col gap-6">
            <p className="font-mono text-[13px] text-ink-3">
              AI / ML · Full Stack · Engineer
            </p>
            <h1 className="font-display font-medium text-ink text-[40px] lg:text-[60px] leading-[1.05] tracking-[-0.015em]">
              Nicole Fong
            </h1>
            <p className="text-[17px] leading-[1.65] text-ink-2 max-w-prose">
              Second-year AI student at UCSD building multimodal AI systems, computer vision
              tools, and production ML pipelines. ACM mentor. TESC Co-President.
              Break Through Tech fellow. Hackathon winner.
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-xs text-ink-2 border border-rule rounded-sm px-3 py-1">
                UC San Diego
              </span>
              <span className="font-mono text-xs text-ink-2 border border-rule rounded-sm px-3 py-1">
                Artificial Intelligence
              </span>
            </div>
            <div className="flex gap-3 flex-wrap pt-1">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-ink text-bg text-sm font-semibold hover:bg-accent transition-colors duration-150"
              >
                View my work →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 rounded-sm border border-rule text-ink-2 text-sm hover:border-accent hover:text-ink transition-colors duration-150"
              >
                Get in touch
              </Link>
            </div>
          </div>

          {/* Currently panel */}
          <aside
            aria-label="Currently"
            className="bg-raised border border-rule rounded p-6"
          >
            <p className="font-mono text-xs text-accent tracking-[0.12em] uppercase mb-4">
              Currently
            </p>
            <dl>
              {currently.map(({ label, value }) => (
                <div key={label} className="py-2.5 border-b border-rule last:border-b-0">
                  <dt className="font-mono text-xs text-ink-3 tracking-[0.12em] uppercase mb-0.5">
                    {label}
                  </dt>
                  <dd className="text-ink text-sm font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section aria-label="About" className="border-t border-rule py-14 lg:py-[88px]">
        <SectionHeading num="01" title="About" />
        <div className="grid gap-10 lg:grid-cols-[300px_1fr] lg:items-start">
          <div className="lg:sticky lg:top-6">
            <NutritionLabel />
          </div>
          <div className="flex flex-col gap-6 max-w-prose">
            <p className="text-[17px] leading-[1.65] text-ink-2">
              AI major, interested in <em className="font-display italic text-accent">Cognitive Behavioral Neuroscience</em>.
              Passionate about building tools that support others and translating technical explanations to help
              everyone learn about technology, regardless of background.
            </p>
            <p className="text-[17px] leading-[1.65] text-ink-2">
              Seeking <em className="font-display italic text-accent">Software Development</em> and{" "}
              <em className="font-display italic text-accent">Product Management</em> Intern roles for Summer 2027.
            </p>
            <p className="text-[17px] leading-[1.65] text-ink-2">
              Always an iced tea nearby. Always a problem worth solving. :)
            </p>
          </div>
        </div>
      </section>

      {/* ── FEATURED WORK ── */}
      <section aria-label="Featured work" className="border-t border-rule py-14 lg:py-[88px]">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="font-mono text-xs text-ink-3 tracking-[0.12em] uppercase mb-2">
              02 ——
            </p>
            <h2 className="font-display font-medium text-ink text-2xl lg:text-[27px] leading-tight">
              Featured Work
            </h2>
          </div>
          <Link
            href="/projects"
            className="font-mono text-[13px] text-accent hover:text-accent-strong transition-colors duration-150"
          >
            all projects →
          </Link>
        </div>

        <a
          href="https://devpost.com/software/straightline"
          target="_blank"
          rel="noopener noreferrer"
          className="group grid gap-5 sm:grid-cols-[140px_1fr] bg-raised border border-rule hover:border-accent rounded p-6 transition-colors duration-200"
        >
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-xs text-ink-3">2026</span>
            <span className="font-mono text-xs text-accent border border-accent rounded-sm px-2 py-1 w-fit">
              Best Use of Browser Use · DiamondHacks 2026
            </span>
            <span className="font-mono text-xs text-ink-3 leading-relaxed">
              Browser Use · Python · Next.js · Supabase
            </span>
          </div>
          <div>
            <h3 className="font-display font-semibold text-ink group-hover:text-accent text-xl leading-tight transition-colors duration-200">
              Straightline <span className="text-ink-3 text-base">↗</span>
            </h3>
            <p className="text-sm text-ink-2 leading-relaxed mt-2">
              ADA compliance platform built in 36 hours. Uses autonomous Browser Use agents to
              scrape accessibility data for real-world locations, Gaussian Splatting for 3D
              environment reconstruction, and Supabase for caching. Won Best Use of Browser Use
              among 400+ participants.
            </p>
          </div>
        </a>
      </section>

      {/* ── EXPERIENCE ── */}
      <section aria-label="Experience" className="border-t border-rule py-14 lg:py-[88px]">
        <SectionHeading num="03" title="Experience" />
        <div className="grid gap-5 md:grid-cols-2">
          {experience.map((exp) => (
            <ExperienceCard key={exp.role} {...exp} />
          ))}
        </div>
      </section>

      {/* ── AWARDS & PUBLICATIONS ── */}
      <section aria-label="Awards and publications" className="border-t border-rule py-14 lg:py-[88px]">
        <SectionHeading num="04" title="Awards & Publications" />
        <div className="border-y border-rule divide-y divide-rule">
          {awards.map((award) => (
            <a
              key={award.title}
              href={award.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[90px_1fr_auto] gap-4 items-baseline py-4"
            >
              <span className="font-mono text-xs text-ink-3">{award.date}</span>
              <span>
                <span className="block text-sm font-semibold text-ink group-hover:text-accent transition-colors duration-150">
                  {award.title}
                </span>
                <span className="block text-sm text-ink-3 mt-0.5">{award.event}</span>
              </span>
              <span className="font-mono text-xs text-ink-3">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── STUDENT ORGS ── */}
      <section aria-label="Student orgs" className="border-t border-rule py-14 lg:py-[88px]">
        <SectionHeading num="05" title="Student Orgs" />

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {featuredOrgs.map((org) => (
            <div
              key={org.org}
              className="bg-raised border border-rule rounded p-4"
            >
              <div className="flex items-baseline justify-between gap-3">
                <p className="text-sm font-semibold text-ink">{org.org}</p>
                <span className="font-mono text-[11px] text-ink-3 shrink-0">{org.period}</span>
              </div>
              <p className="font-mono text-xs text-accent mt-1">{org.role}</p>
              <p className="text-[13px] text-ink-2 mt-2 leading-relaxed">{org.note}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
          {activities.map((act) => (
            <div key={act.org} className="border-t border-rule pt-3">
              <p className="text-sm font-semibold text-ink">{act.org}</p>
              <p className="text-[13px] text-ink-3 mt-1 leading-relaxed">{act.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── READING LIST ── */}
      <section aria-label="Interesting finds" className="border-t border-rule py-14 lg:py-[88px]">
        <SectionHeading num="06" title="Interesting Finds" />
        <div className="border-y border-rule divide-y divide-rule">
          {reads.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid grid-cols-[60px_1fr_auto] gap-4 items-baseline py-4"
            >
              <span className="font-mono text-xs text-accent tracking-[0.12em] uppercase">
                {item.tag}
              </span>
              <span>
                <span className="block text-sm font-semibold text-ink group-hover:text-accent transition-colors duration-150">
                  {item.title}
                </span>
                {item.note && (
                  <span className="block text-sm text-ink-3 mt-0.5 leading-relaxed">
                    {item.note}
                  </span>
                )}
              </span>
              <span className="font-mono text-xs text-ink-3">↗</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
