export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden py-28"
    >
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        <div
          className="rise mb-16 flex items-center gap-5 sm:mb-28"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="ordinal text-accent">01</span>
          <span className="h-px flex-1 bg-rule" />
          <span className="label hidden text-ink-muted sm:block">
            Nairobi, Kenya
          </span>
        </div>

        <div className="text-center">
          <p
            className="rise label mb-6 text-ink-muted"
            style={{ animationDelay: "0.2s" }}
          >
            Software Engineer
          </p>

          <h1
            className="rise display display-1"
            style={{ animationDelay: "0.3s" }}
          >
            Ruby Mbete
          </h1>

          <p
            className="rise label mt-6 text-accent"
            style={{ animationDelay: "0.4s" }}
          >
            UI &middot; UX Designer
          </p>
        </div>

        <div
          className="rise mt-16 flex flex-col items-center gap-10 sm:mt-24"
          style={{ animationDelay: "0.55s" }}
        >
          <p className="max-w-sm text-center text-[0.9375rem] leading-relaxed text-ink-muted">
            I care about the people behind every screen, crafting interfaces
            that feel intuitive and delightful to use.
          </p>

          <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center sm:gap-4">
            <a href="#work" className="btn-primary justify-center">
              View the work
            </a>
            <a href="#contact" className="btn-outline justify-center">
              Get in touch
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
