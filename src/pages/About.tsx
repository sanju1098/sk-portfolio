import React from "react";
import { ExternalLink, Mail, MapPin } from "lucide-react";
import { certificates, workAchievements } from "@/content/about";

const About: React.FC = React.memo(() => {
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
          <h1 className="mt-6 max-w-[18ch] text-balance font-display text-4xl font-semibold leading-[1.02] tracking-tight text-gradient md:text-7xl">
            About me
          </h1>

          <p className="mt-8 max-w-[62ch] text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Frontend Engineer with 4.5+ years of experience specializing in
            high-performance React, Next.js, and TypeScript applications across
            enterprise, airline, and AI platforms. I also build backend
            applications and REST APIs with Node.js and Express.
          </p>
        </div>
      </section>

      <section id="about" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="label-mono">Summary</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-gradient md:text-5xl">
              What I bring
            </h2>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground md:text-lg">
              Proven impact delivering an 18% booking conversion lift, 90+
              Lighthouse scores, 35% API call reductions, and production-grade
              accessibility at scale.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:col-span-8">
            <div className="bg-panel p-6 ring-1 ring-border md:col-span-2">
              <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                What I do
              </h3>
              <p className="mt-5 text-pretty leading-relaxed text-foreground">
                Currently a Senior Experience Engineer driving frontend
                architecture, micro-frontends, and design systems. I specialize
                in building reusable component libraries (75+ WCAG-compliant
                components published), optimizing Core Web Vitals, and shipping
                production AI applications with Next.js, Vercel AI SDK, and
                Gemini. I am also expanding my backend experience by building
                Node.js and Express applications and REST APIs.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "React / Next.js",
                  "TypeScript",
                  "Design Systems",
                  "TanStack Query",
                  "Vercel AI SDK",
                  "WCAG Accessibility",
                  "Node.js / Express",
                  "Docker / CI/CD",
                ].map(item => (
                  <span
                    key={item}
                    className="chip bg-accent/10 text-secondary-foreground">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-2 text-sm text-muted-foreground">
                <p className="inline-flex items-center gap-2">
                  <MapPin className="size-4" aria-hidden /> Bengaluru, India
                </p>
                <br />
                <p className="inline-flex items-center gap-2">
                  <Mail className="size-4" aria-hidden />{" "}
                  sanjaykumar.sr1011@gmail.com
                </p>
              </div>
            </div>

            {/* Achievements Section */}
            <div className="bg-panel p-6 ring-1 ring-border rounded-xl">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                Achievements
              </h3>
              <div className="mt-6 space-y-4">
                {workAchievements.map(item => {
                  const targetUrl = item.redirectLink || item.image;

                  return (
                    <div
                      key={item.name}
                      className="group relative flex flex-col gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background">
                      <div className="flex items-start gap-3.5">
                        <img
                          src={item.badgeImage}
                          alt={item.name}
                          loading="lazy"
                          className="size-10 shrink-0 rounded-sm border border-border bg-panel object-contain p-1"
                        />
                        <div className="flex flex-col min-w-0 flex-1">
                          <span className="text-sm font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-accent transition-colors">
                            {item.name}
                          </span>
                          <span className="text-xs text-muted-foreground mt-1">
                            Issued {item.issueDate}
                          </span>
                        </div>
                      </div>

                      {targetUrl && (
                        <a
                          href={targetUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-3 py-1.5 text-xs font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-all w-full">
                          {item.buttonName || "View"}
                          <ExternalLink className="size-3.5" aria-hidden />
                        </a>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Certificates Section */}
            <div className="bg-panel p-6 ring-1 ring-border rounded-xl">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                Certificates
              </h3>
              <div className="mt-6 space-y-4">
                {certificates.map(item => (
                  <div
                    key={item.name}
                    className="group relative flex flex-col gap-3 rounded-xl border border-border/40 bg-background/50 p-4 transition-all hover:border-border hover:bg-background">
                    <div className="flex items-start gap-3.5">
                      <img
                        src={item.badgeImage}
                        alt={item.name}
                        loading="lazy"
                        className="size-10 shrink-0 rounded-sm border border-border bg-panel object-contain p-1"
                      />
                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="text-sm font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-accent transition-colors">
                          {item.name}
                        </span>
                        <span className="text-xs text-muted-foreground mt-1">
                          Issued {item.issueDate}
                        </span>
                      </div>
                    </div>

                    {item.redirectLink && (
                      <a
                        href={item.redirectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-lg bg-muted/60 px-3 py-1.5 text-xs font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-all w-full">
                        {item.buttonName || "View"}
                        <ExternalLink className="size-3.5" aria-hidden />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default About;
