import Field from "@/components/ui/Field";
import Seam from "@/components/ui/Seam";
import Methali from "@/components/ui/Methali";
import SaveForLater from "@/components/ui/SaveForLater";

// Composed like the palette card: plum over periwinkle, a name and two chips on each.
export default function Hero() {
  return (
    <section id="home">
      <Field
        as="div"
        tone="plum"
        innerClassName="mx-auto flex min-h-[80svh] w-full max-w-6xl flex-col px-6 pt-24 pb-10 sm:pt-32"
      >
        <div
          className="rise flex items-center justify-between gap-4"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="label text-ink-muted">Portfolio — 2026</span>
          <span className="label text-ink-muted">Nairobi, Kenya</span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-16 text-center">
          <h1
            className="rise display display-1"
            style={{ animationDelay: "0.25s" }}
          >
            Ruby Mbete
          </h1>
          {/* Roles pinned to the outer grid lines, on a hairline under the name. */}
          <div
            className="rise mt-10 flex w-full items-baseline justify-between gap-4 border-t border-rule-strong pt-4 sm:mt-14"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="display text-left text-lg sm:text-2xl">
              Software Engineer
            </span>
            <span className="display text-right text-lg sm:text-2xl">
              UI · UX Designer
            </span>
          </div>
          <p
            className="rise mt-10 max-w-sm text-[0.9375rem] leading-relaxed text-ink-muted"
            style={{ animationDelay: "0.55s" }}
          >
            I care about the people behind every screen, crafting interfaces
            that feel intuitive and delightful to use.
          </p>
        </div>
      </Field>

      <Seam from="plum" seed={7} />

      <Field
        as="div"
        tone="peri"
        innerClassName="mx-auto w-full max-w-6xl px-6 pt-10 pb-20 sm:pt-16 sm:pb-24"
      >
        <Methali />
        <div className="mt-20 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a href="#work" className="btn-primary justify-center">
              View the work
            </a>
            <a href="#contact" className="btn-outline justify-center">
              Get in touch
            </a>
          </div>
          <SaveForLater className="self-end sm:self-auto" />
        </div>
      </Field>
    </section>
  );
}
