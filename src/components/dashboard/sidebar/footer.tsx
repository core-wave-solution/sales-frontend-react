import { cn } from "@/lib/utils";
import { SidebarGenericProps } from "@/types/components/sidebar";

export function SidebarFooter({
  children,
  className,
}: Readonly<SidebarGenericProps>) {
  return (
    <footer className={cn("mt-auto flex flex-col items-start", className)}>
      {children}
    </footer>
  );
}
