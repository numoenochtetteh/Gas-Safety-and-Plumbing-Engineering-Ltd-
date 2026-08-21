// import {
//   Flame,
//   Thermometer,
//   Waves,
//   Wrench,
//   Droplets,
//   Zap,
//   Home,
//   AlertTriangle,
//   type LucideIcon,
// } from "lucide-react";
// import type { Service } from "@/lib/data";

// export const serviceIconMap: Record<Service["icon"], LucideIcon> = {
//   Flame,
//   Thermometer,
//   Waves,
//   Wrench,
//   Droplets,
//   Zap,
//   Home,
//   AlertTriangle,
// };

// export function ServiceIcon({
//   icon,
//   className,
//   strokeWidth,
// }: {
//   icon: Service["icon"];
//   className?: string;
//   strokeWidth?: number;
// }) {
//   const Icon = serviceIconMap[icon];
//   return <Icon className={className} strokeWidth={strokeWidth} />;
// }
import {
  Flame,
  Thermometer,
  Waves,
  Wrench,
  Droplets,
  Zap,
  Home,
  AlertTriangle,
  type LucideIcon,
} from "lucide-react";

import type { Service } from "@/lib/data";

export const serviceIconMap: Record<Service["icon"], LucideIcon> = {
  Flame,
  Thermometer,
  Waves,
  Wrench,
  Droplets,
  Zap,
  Home,
  AlertTriangle,
};

export function ServiceIcon({
  icon,
  className,
  strokeWidth,
}: {
  icon: Service["icon"];
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = serviceIconMap[icon];

  return <Icon className={className} strokeWidth={strokeWidth} />;
}
