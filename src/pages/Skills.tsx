import React from "react";
import { skillCategories } from "@/content/skills";

const Skills: React.FC = React.memo(() => {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-16 pt-32 md:pb-20 md:pt-44">
        <div
          className="pointer-events-none absolute inset-0 grid-field"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-130 glow-accent"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl rise text-center md:text-left">
          <h1 className="mt-6 max-w-[18ch] font-display text-4xl font-semibold leading-[1.02] tracking-tight text-gradient md:text-7xl">
            Tools for thoughtful shipping.
          </h1>

          <p className="mt-8 max-w-[62ch] text-pretty leading-relaxed text-muted-foreground md:text-lg">
            A practical toolkit for building polished interfaces, scalable
            systems, and dependable product experiences.
          </p>
        </div>
      </section>

      <section id="skills" className="px-6 pb-20 pt-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-12">
            {skillCategories.map((category, index) => (
              <article
                key={category.title || index}
                className={`group rounded-md bg-panel p-6 ring-1 ring-border panel-hover md:p-7 ${
                  index === 0 || index === 2
                    ? "lg:col-span-5"
                    : index === 1 || index === 3
                      ? "lg:col-span-7"
                      : "lg:col-span-12"
                }`}>
                <div className="flex items-start justify-between gap-4 border-b border-border pb-5">
                  <div className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-sm bg-secondary">
                      {category.icon}
                    </div>
                    <div>
                      <h2 className="mt-2 font-display text-xl font-medium text-card-foreground">
                        {category.title}
                      </h2>
                    </div>
                  </div>
                </div>

                <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>

                <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3">
                  {category.skills.map(skill => (
                    <li
                      key={skill.name}
                      tabIndex={0}
                      className="flex min-h-16 items-center gap-3 rounded-sm border border-border/70 bg-background/40 px-3 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-sm bg-panel">
                        {skill.icon}
                      </span>
                      <span className="min-w-0 font-mono text-xs font-medium leading-tight text-muted-foreground transition-colors group-hover:text-card-foreground">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});

export default Skills;
