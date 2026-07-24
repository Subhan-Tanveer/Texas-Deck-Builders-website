"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { PROJECTS, PROJECT_TYPES } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<string>("All");

  const filters = ["All", ...PROJECT_TYPES];
  const visible = useMemo(
    () =>
      filter === "All"
        ? PROJECTS
        : PROJECTS.filter((p) => p.type === filter),
    [filter]
  );

  return (
    <div>
      {/* Filter bar */}
      <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
        <span className="mr-1 flex items-center gap-1.5 text-sm font-semibold text-ash">
          <SlidersHorizontal size={15} /> Filter:
        </span>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border-2 px-4 py-1.5 text-sm font-medium transition-all ${
              filter === f
                ? "border-forest bg-forest text-cream"
                : "border-bark/15 bg-cream text-bark/70 hover:border-forest/50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid — key on filter so cards re-mount and re-animate on change */}
      <div
        key={filter}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((project, i) => (
          <Reveal key={project.slug} variant="rise" delay={(i % 3) * 0.08}>
            <ProjectCard project={project} priority={i < 3} />
          </Reveal>
        ))}
      </div>

      <p className="mt-10 text-center text-sm text-ash">
        Showing {visible.length} of {PROJECTS.length} projects
      </p>
    </div>
  );
}
