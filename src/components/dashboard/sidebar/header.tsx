import { cn } from "@/lib/utils";
import { SidebarGenericProps } from "@/types/components/sidebar";

export function SidebarHeader({
  children,
  className,
}: Readonly<SidebarGenericProps>) {
  return <header className={cn("h-40 flex items-center", className)}>{children}</header>;
}
