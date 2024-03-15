import { NavbarGenericProps } from "@/types/components/navbar";
import { cn } from "@/lib/utils";

export function NavbarColumn({
  children,
  className,
}: Readonly<NavbarGenericProps>) {
  return <div className={cn("flex gap-3", className)}>{children}</div>;
}
