import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyMuted({
	children,
	className,
}: Readonly<{ children: ReactNode; className?: string }>) {
	return (
		<p className={cn("text-sm text-muted-foreground", className)}>
			{children}
		</p>
	);
}
