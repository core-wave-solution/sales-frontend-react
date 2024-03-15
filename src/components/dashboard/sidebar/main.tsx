import { cn } from "@/lib/utils";
import { SidebarGenericProps } from "@/types/components/sidebar";

export function SidebarMain({
  children,
  className,
}: Readonly<SidebarGenericProps>) {
  return <main className={cn("", className)}>{children}</main>;
}
