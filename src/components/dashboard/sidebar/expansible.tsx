import { cn } from "@/lib/utils";
import {
  SidebarExpansibleProps,
  SidebarGenericProps,
} from "@/types/components/sidebar";

export function SidebarExpansible({
  children,
  className,
  open,
}: Readonly<SidebarGenericProps<SidebarExpansibleProps>>) {
  return (
    <div
      className={cn(
        `h-full bg-gray-100 py-24 ${open ? "w-64" : "w-0"} gap-6 relative duration-300 flex flex-col overflow-hidden`,
        className,
      )}
    >
      {children}
    </div>
  );
}
