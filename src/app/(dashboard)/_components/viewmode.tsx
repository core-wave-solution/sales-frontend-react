"use client";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ViewModeState } from "@/types/states/viewmode-state";
import { FaList, FaThLarge } from "react-icons/fa";
import { create } from "zustand";

export const useViewMode = create<ViewModeState>()((set) => ({
	viewMode: "card",
	setViewMode: (mode: "card" | "list") => set(() => ({ viewMode: mode })),
}));

export function DashboardViewMode() {
	const viewMode = useViewMode((state) => state.viewMode);
	const updateViewMode = useViewMode((state) => state.setViewMode);

	return (
		<ToggleGroup
			type="single"
			
			defaultValue={viewMode}
			onValueChange={(e: "card" | "list" | "") => {
				console.log(viewMode, e);
				if (e !== "") {
					updateViewMode(e);
				}
			}}
		>
			<ToggleGroupItem value="list">
				<FaList />
			</ToggleGroupItem>
			<ToggleGroupItem value="card">
				<FaThLarge />
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
