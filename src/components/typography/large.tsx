import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyLarge({
	children,
	className,
}: Readonly<{ children: ReactNode; className?: string }>) {
	return (
		<div className={cn("text-lg font-semibold", className)}>{children}</div>
	);
}
