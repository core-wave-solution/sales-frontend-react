export type ViewModeState = {
	viewMode: "card" | "list";
	setViewMode: (mode: "card" | "list") => void;
};
