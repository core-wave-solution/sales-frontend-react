"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const progressVariant = cva(null, {
	variants: {
		variant: {
			default: "bg-primary",
			info: "bg-blue-600",
			danger: "bg-red-600",
			success: "bg-success-600",
			cancel: "bg-gray-600",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export interface ProgressProps
	extends React.HtmlHTMLAttributes<HTMLDivElement>,
		VariantProps<typeof progressVariant> {
	value?: number;
}

const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
	({ className, value, variant, ...props }, ref) => (
		<ProgressPrimitive.Root
			ref={ref}
			className={cn(
				`relative h-2 w-full overflow-hidden rounded-full ${progressVariant({ variant })}/20`,
				className,
			)}
			{...props}
		>
			<ProgressPrimitive.Indicator
				className={`h-full w-full flex-1 ${progressVariant({ variant })} transition-all`}
				style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
			/>
		</ProgressPrimitive.Root>
	),
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
