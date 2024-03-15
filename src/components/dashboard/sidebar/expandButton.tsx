import { cn } from "@/lib/utils";
import {
  SidebarExpandButtonProps,
  SidebarGenericProps,
} from "@/types/components/sidebar";

export function SidebarExpandButton({
  children,
  className,
  toggleSidebarWidth,
}: Readonly<SidebarGenericProps<SidebarExpandButtonProps>>) {
  return (
    <button
      className={cn("h-full hover:cursor-pointer", className)}
      onClick={toggleSidebarWidth}
    >
      {children}
    </button>
  );
}
