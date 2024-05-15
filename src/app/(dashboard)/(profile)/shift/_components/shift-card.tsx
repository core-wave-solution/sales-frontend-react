import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ReactNode } from "react";

export function ShiftCard({
	className,
	header,
	headerClassName,
	children,
	contentClassName,
}: {
	className?: string;
	header?: ReactNode;
	headerClassName?: string;
	children?: ReactNode;
	contentClassName?: string;
}) {
	return (
		<Card className={className}>
			{header && (
				<CardHeader className={headerClassName}>{header}</CardHeader>
			)}
			<CardContent className={contentClassName}>{children}</CardContent>
		</Card>
	);
}
