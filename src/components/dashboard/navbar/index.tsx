import { NavbarGenericProps } from "@/types/components/navbar";
import { cn } from "@/lib/utils";

export function Navbar({ children, className }: Readonly<NavbarGenericProps>) {
  return (
    <nav
      className={cn(
        "flex w-full items-center justify-between rounded-bl-md bg-primary px-12 py-3",
        className,
      )}
    >
      {children}
    </nav>
  );
}
