import { Calendar, Users, ImageOff } from "lucide-react";

// Add entries here as events happen. Shape:
// { title, org, date, role, turnout, description, photos: [] }
const events = [
  {
    title: "Engineers on the Green (EOTG)",
    org: "TESC",
    date: "Fall 2026",
    role: "Co-President",
    turnout: "500+ attendees · 60+ clubs & orgs",
    description:
      "UCSD's biggest engineering club fair — brought together 60+ clubs and organizations, including company ambassadors, for 500+ students to connect with the campus engineering community.",
  },
];

const orgs = ["ACM", "TESC", "Google Student Ambassador"];

function EventCard({ event }) {
  return (
    <div className="border border-rule rounded overflow-hidden bg-raised">
      <div className="aspect-[16/9] bg-bg border-b border-rule flex flex-col items-center justify-center gap-2 text-ink-3">
        <ImageOff size={20} strokeWidth={1.5} />
        <span className="font-mono text-[11px]">Photos coming soon</span>
      </div>
      <div className="p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display font-semibold text-ink text-lg leading-tight">
            {event.title}
          </h3>
          <span className="font-mono text-xs text-ink-3 shrink-0">{event.date}</span>
        </div>
        <p className="font-mono text-xs text-accent mt-1">{event.org} · {event.role}</p>
        <p className="text-sm text-ink-2 leading-relaxed mt-3">{event.description}</p>
        {event.turnout && (
          <p className="font-mono text-xs text-ink-3 mt-3 flex items-center gap-1.5">
            <Users size={13} /> {event.turnout}
          </p>
        )}
      </div>
    </div>
  );
}

export default function CampusPage() {
  return (
    <div className="fade-in max-w-page mx-auto px-5 lg:px-12 pt-14 lg:pt-20 pb-14 lg:pb-[88px]">
      {/* Header */}
      <div className="mb-10">
        <p className="font-mono text-xs text-accent tracking-[0.12em] uppercase mb-2">
          Events &amp; Outreach
        </p>
        <h1 className="font-display font-medium text-ink text-[32px] lg:text-[40px] leading-tight">
          Campus
        </h1>
        <div className="w-16 border-b-2 border-accent mt-4" />
        <p className="text-sm text-ink-3 mt-4">
          Building a community is what makes campus feel like home. Photos and turnout go up
          here as each event happens.
        </p>
      </div>

      {events.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-5">
          {events.map((event) => (
            <EventCard key={event.title + event.date} event={event} />
          ))}
        </div>
      ) : (
        <div className="border border-rule rounded p-10 flex flex-col items-center text-center gap-3">
          <Calendar size={22} strokeWidth={1.5} className="text-ink-3" />
          <p className="text-sm text-ink-2 max-w-sm">
            First events go up here this fall. Check back after the next one.
          </p>
          <p className="font-mono text-xs text-ink-3">
            {orgs.join(" · ")}
          </p>
        </div>
      )}
    </div>
  );
}
