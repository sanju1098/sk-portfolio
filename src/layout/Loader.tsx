import { Loader as LoadIcon } from "lucide-react";

const Loader = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6">
      <div
        className="pointer-events-none absolute inset-0 grid-field opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-72 glow-accent"
        aria-hidden
      />

      <div className="relative z-10 text-center">
        <div className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-sm border border-border bg-panel shadow-panel">
          <div className="absolute inset-2" aria-hidden />
          <LoadIcon
            className="animate-spin text-accent"
            size={28}
            aria-hidden
          />
        </div>

        <p className="label-mono">Loading</p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-gradient">
          Preparing the workspace
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Please wait a moment while the portfolio loads.
        </p>

        <div className="mx-auto mt-8 h-1.5 w-64 overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full w-2/3 animate-pulse rounded-full bg-accent"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
