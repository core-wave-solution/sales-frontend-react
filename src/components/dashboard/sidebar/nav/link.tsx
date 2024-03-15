import { cn } from "@/lib/utils";
import {
  SidebarGenericProps,
  SidebarNavLinkProps,
} from "@/types/components/sidebar";
import Link from "next/link";

export function SidebarNavLink({
  children,
  className,
  href,
}: Readonly<SidebarGenericProps<SidebarNavLinkProps>>) {
  return (
    <Link href={href} className={cn("font-bold", className)}>
      {children}
    </Link>
  );
}
