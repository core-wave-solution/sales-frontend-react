import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyP({
	children,
	className,
}: Readonly<{ children: ReactNode; className?: string }>) {
	return (
		<p className={cn("leading-7", className)}>
			{children}
		</p>
	);
}
