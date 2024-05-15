import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { FaEllipsisH, FaLandmark } from "react-icons/fa";

export function ShiftSingleStat() {
	return (
		<Card>
			<CardHeader className="flex-row justify-between">
				<Badge variant="outline">
					<FaLandmark />
				</Badge>
				<button>
					<FaEllipsisH />
				</button>
			</CardHeader>
		</Card>
	);
}
