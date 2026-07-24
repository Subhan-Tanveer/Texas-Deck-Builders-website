import {
  Hammer,
  Wrench,
  Home,
  Columns3,
  Fence,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  Hammer,
  Wrench,
  Home,
  Columns3,
  Fence,
};

export default function ServiceIcon({
  name,
  size = 26,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) {
  const Icon = MAP[name] ?? Hammer;
  return <Icon size={size} className={className} />;
}
