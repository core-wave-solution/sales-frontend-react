import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographySmall({
	children,
	className,
}: Readonly<{ children: ReactNode; className?: string }>) {
	return (
		<small className={cn("text-sm font-medium leading-none", className)}>
			{children}
		</small>
	);
}
