import { cn } from "@/lib/utils";
import { SidebarGenericProps } from "@/types/components/sidebar";

export function SidebarCollapse({
  children,
  className,
}: Readonly<SidebarGenericProps>) {
  return (
    <div
      className={cn(
        "flex h-full w-12 flex-col items-center gap-6 bg-secondary py-24",
        className,
      )}
    >
      {children}
    </div>
  );
}
