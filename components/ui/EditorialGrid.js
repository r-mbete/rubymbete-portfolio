// The hairline column grid the page is composed against. Decorative only.
export default function EditorialGrid({ columns = 4 }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 mx-auto flex max-w-6xl px-6"
    >
      <div className="rule-l h-full w-0" />
      {Array.from({ length: columns }).map((_, i) => (
        <div key={i} className="rule-r h-full flex-1" />
      ))}
    </div>
  );
}
