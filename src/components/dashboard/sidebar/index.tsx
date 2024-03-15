import { SidebarGenericProps } from "@/types/components/sidebar";
import { cn } from "@/lib/utils";

export function Sidebar({
  children,
  className,
}: Readonly<SidebarGenericProps>) {
  return (
    <aside
      className={cn(
        "transition-rounded flex overflow-hidden rounded-r-md shadow-sm h-full",
        className,
      )}
    >
      {children}
    </aside>
  );
}
