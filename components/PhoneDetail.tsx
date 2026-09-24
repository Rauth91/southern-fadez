import { site } from "@/lib/site";

export function PhoneDetail({
  className = "",
  onIvory = false,
}: {
  className?: string;
  onIvory?: boolean;
}) {
  return (
    <p
      className={`phone-detail ${onIvory ? "phone-detail-paper" : ""} ${className}`.trim()}
    >
      <span>Phone</span>
      <strong>{site.phoneDisplay}</strong>
    </p>
  );
}
