import { MapPin, Ruler, Layers } from "lucide-react";
import type { Project } from "@/lib/projects";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

/**
 * Portfolio card (brief 3e): before/after slider on top, project details
 * below, lifts on hover with an inviting ease-out-back curve.
 */
export default function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-linen shadow-[var(--shadow-card)] transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
      <BeforeAfterSlider
        before={project.before}
        after={project.after}
        beforeAlt={`${project.title} — before, ${project.neighborhood}`}
        afterAlt={`${project.title} — after, ${project.neighborhood}`}
        priority={priority}
        className="rounded-none shadow-none"
      />

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-forest/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-forest">
            {project.type}
          </span>
          <span className="text-xs font-medium text-ash">
            {project.material}
          </span>
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold text-forest">
          {project.title}
        </h3>

        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-ash">
          <li className="inline-flex items-center gap-1.5">
            <MapPin size={13} className="text-cedar" /> {project.neighborhood}
          </li>
          <li className="inline-flex items-center gap-1.5">
            <Ruler size={13} className="text-cedar" /> {project.size}
          </li>
          <li className="inline-flex items-center gap-1.5">
            <Layers size={13} className="text-cedar" /> {project.type}
          </li>
        </ul>

        <p className="mt-4 border-l-2 border-cedar/50 pl-3 text-sm italic leading-relaxed text-bark/80">
          &ldquo;{project.quote}&rdquo;
        </p>
        <p className="mt-2 pl-3 text-xs font-semibold text-forest">
          — {project.customer}
        </p>
      </div>
    </article>
  );
}
