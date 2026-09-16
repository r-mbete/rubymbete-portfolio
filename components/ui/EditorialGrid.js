// The hairline column grid the page is composed against. Decorative only.
// Drops to 2 columns under sm so the lines never crowd a phone.
export default function EditorialGrid({ columns = 4, fixed = false }) {
  return (
    <div
      aria-hidden="true"
      className={`${fixed ? "fixed" : "absolute"} inset-0 z-0 mx-auto flex w-full max-w-6xl px-6 pointer-events-none`}
    >
      <div className="rule-l h-full w-0" />
      {Array.from({ length: columns }).map((_, i) => (
        <div
          key={i}
          className={`rule-r h-full flex-1 ${i % 2 === 0 ? "max-sm:border-r-0" : ""}`}
        />
      ))}
    </div>
  );
}
