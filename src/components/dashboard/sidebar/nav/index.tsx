import { cn } from "@/lib/utils";
import { SidebarGenericProps } from "@/types/components/sidebar";

export function SidebarNav({
  children,
  className,
}: Readonly<SidebarGenericProps>) {
  return <div className={cn("flex flex-col gap-6 w-full", className)}>{children}</div>;
}
