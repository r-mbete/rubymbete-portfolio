import EditorialGrid from "./EditorialGrid";
import CellTrail from "./CellTrail";

// A full-bleed block of one palette colour, with the grid and cursor trail behind its content.
export default function Field({
  as: Tag = "section",
  tone,
  className = "",
  innerClassName = "",
  children,
  ...props
}) {
  return (
    <Tag
      data-field={tone}
      className={`field tone-${tone} overflow-hidden ${className}`}
      {...props}
    >
      <EditorialGrid />
      <CellTrail />
      <div className={`relative z-10 ${innerClassName}`}>{children}</div>
    </Tag>
  );
}
