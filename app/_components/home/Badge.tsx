interface BadgeProps {
  label: string;
}

export default function Badge({ label }: BadgeProps) {
  return (
    <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-900 shadow-sm">
      {label}
    </span>
  );
}
