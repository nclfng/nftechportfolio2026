"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Calendar, Users, ImageOff, X, ChevronLeft, ChevronRight } from "lucide-react";

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
      "UCSD's biggest engineering club fair: brought together 60+ clubs and organizations, including company ambassadors, for 500+ students to connect with the campus engineering community.",
    photos: [
      "/events/eotg-fall-2026/eotg-1.jpg",
      "/events/eotg-fall-2026/eotg-2.jpg",
      "/events/eotg-fall-2026/eotg-3.jpg",
      "/events/eotg-fall-2026/eotg-4.jpg",
      "/events/eotg-fall-2026/eotg-5.jpg",
      "/events/eotg-fall-2026/eotg-6.jpg",
      "/events/eotg-fall-2026/eotg-7.jpg",
    ],
  },
  {
    title: "AI Fall Kickoff",
    org: "ACM",
    date: "Fall 2026",
    role: "AI Events Board Director",
    turnout: "70+ attendees",
    description:
      "Kicked off ACM's AI programming for the quarter, introducing students to the AI School Series workshop track and the team's project opportunities for the year.",
  },
  {
    title: "AI School Series",
    org: "ACM",
    date: "Fall 2026",
    role: "AI Events Board Director",
    turnout: "70+ attendees per session",
    description:
      "Directed a 4-part applied ML workshop track covering fundamentals with PyTorch, scikit-learn, and Hugging Face for UCSD's largest student organization.",
  },
];

const orgs = ["ACM", "TESC", "Google Student Ambassador"];

function Lightbox({ photos, index, onClose, onNavigate }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % photos.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + photos.length) % photos.length);
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [index, photos.length, onClose, onNavigate]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 lg:p-10"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 lg:top-6 lg:right-6 text-white/80 hover:text-white transition-colors"
      >
        <X size={28} strokeWidth={1.5} />
      </button>

      {photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + photos.length) % photos.length);
            }}
            aria-label="Previous photo"
            className="absolute left-2 lg:left-6 text-white/80 hover:text-white transition-colors"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % photos.length);
            }}
            aria-label="Next photo"
            className="absolute right-2 lg:right-6 text-white/80 hover:text-white transition-colors"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>
        </>
      )}

      <div
        className="relative w-full h-full max-w-5xl max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={photos[index]}
          alt={`Photo ${index + 1} of ${photos.length}`}
          fill
          sizes="100vw"
          className="object-contain"
        />
      </div>

      {photos.length > 1 && (
        <p className="absolute bottom-4 lg:bottom-6 font-mono text-xs text-white/60">
          {index + 1} / {photos.length}
        </p>
      )}
    </div>
  );
}

function EventCard({ event, onOpenPhoto }) {
  const photos = event.photos ?? [];
  const [cover] = photos;

  return (
    <div className="border border-rule rounded overflow-hidden bg-raised">
      {cover ? (
        <button
          type="button"
          onClick={() => onOpenPhoto(photos, 0)}
          className="relative block w-full aspect-[16/9] bg-bg border-b border-rule cursor-zoom-in"
        >
          <Image
            src={cover}
            alt={`${event.title} cover photo`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </button>
      ) : (
        <div className="aspect-[16/9] bg-bg border-b border-rule flex flex-col items-center justify-center gap-2 text-ink-3">
          <ImageOff size={20} strokeWidth={1.5} />
          <span className="font-mono text-[11px]">Photos coming soon</span>
        </div>
      )}
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
        {photos.length > 1 && (
          <div className="flex gap-1.5 mt-4 overflow-x-auto pb-1 -mx-1 px-1 snap-x">
            {photos.map((src, i) => (
              <button
                type="button"
                key={src}
                onClick={() => onOpenPhoto(photos, i)}
                className="relative shrink-0 w-16 h-16 rounded-sm overflow-hidden border border-rule snap-start cursor-zoom-in"
              >
                <Image
                  src={src}
                  alt={`${event.title} thumbnail ${i + 1}`}
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function CampusPage() {
  const [lightbox, setLightbox] = useState(null); // { photos, index }

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
            <EventCard
              key={event.title + event.date}
              event={event}
              onOpenPhoto={(photos, index) => setLightbox({ photos, index })}
            />
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

      {lightbox && (
        <Lightbox
          photos={lightbox.photos}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onNavigate={(index) => setLightbox((prev) => ({ ...prev, index }))}
        />
      )}
    </div>
  );
}
