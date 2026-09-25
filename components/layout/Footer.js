import Field from "@/components/ui/Field";
import SaveForLater from "@/components/ui/SaveForLater";

export default function Footer() {
  return (
    <Field
      as="footer"
      tone="plum"
      innerClassName="mx-auto max-w-6xl px-6"
    >
      <div className="rule-t flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:items-center">
        <p className="label text-ink-muted">&copy; 2026 Ruby Mbete</p>
        <p className="label hidden text-ink-muted md:block">
          #4F0C28 · #C5D2F8
        </p>
        <SaveForLater />
      </div>
    </Field>
  );
}
