"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useDialog } from "@/hooks/useDialog";
import { ReactNode } from "react";

export function ProcessCardState({
	trigger,
	content,
}: {
	trigger: ReactNode;
	content: ReactNode;
}) {
	const { isOpen, onClose } = useDialog();
	return (
		<Dialog open={isOpen} onOpenChange={onClose} modal defaultOpen={isOpen}>
			{trigger}
			<DialogContent>{content}</DialogContent>
		</Dialog>
	);
}
