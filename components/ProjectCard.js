export default function ProjectCard({ project, featured = false }) {
  return (
    <article className="group bg-raised border border-rule hover:border-accent rounded p-6 flex flex-col transition-colors duration-200">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="font-display font-semibold text-ink group-hover:text-accent text-xl leading-tight transition-colors duration-200">
          {project.title}
        </h3>
        <span className="font-mono text-xs text-ink-3 shrink-0">{project.year}</span>
      </div>

      <p className="text-sm text-ink-2 mt-1.5">{project.tagline}</p>

      <p className="text-sm text-ink-2 leading-relaxed mt-3">{project.description}</p>

      {featured && project.highlights && (
        <ul className="mt-3 space-y-1.5">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-sm text-ink-2 leading-relaxed">
              <span className="text-ink-3 shrink-0">–</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      <p className="font-mono text-xs text-ink-3 mt-4">
        {project.stack.join(" · ")}
      </p>

      {(project.live || project.github || project.github2) && (
        <div className="flex gap-5 mt-3 pt-3 border-t border-rule">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] text-accent hover:text-accent-strong transition-colors duration-150"
            >
              Live ↗
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] text-accent hover:text-accent-strong transition-colors duration-150"
            >
              GitHub ↗
            </a>
          )}
          {project.github2 && (
            <a
              href={project.github2}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[13px] text-accent hover:text-accent-strong transition-colors duration-150"
            >
              GitHub 2 ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}
