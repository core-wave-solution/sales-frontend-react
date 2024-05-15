import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function TypographyTableHead({
	children,
	className,
}: Readonly<{ children: ReactNode; className?: string }>) {
	return (
		<th
			className={cn(
				"border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
		>
			{children}
		</th>
	);
}

export function TypographyTableData({
	children,
	className,
}: Readonly<{ children: ReactNode; className?: string }>) {
	return (
		<td
			className={cn(
				"border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
				className,
			)}
		>
			{children}
		</td>
	);
}
