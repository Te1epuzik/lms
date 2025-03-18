import { useThemeStore } from "@/store";
import { useState, useEffect } from "react";

export const useColorShame = (): "light" | "dark" => {
	const [colorShame, setColorShame] = useState<"light" | "dark">("light");
	const theme = useThemeStore(state => state.theme);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		setColorShame(mediaQuery.matches ? "dark" : "light");

		const handleChange = (event: MediaQueryListEvent) => {
			setColorShame(event.matches ? "dark" : "light");
		};

		if (theme === "light") {
			mediaQuery.removeEventListener("change", handleChange);
			setColorShame("light");
			return;
		} else if (theme === "dark") {
			mediaQuery.removeEventListener("change", handleChange);
			setColorShame("dark");
			return;
		}

		mediaQuery.addEventListener("change", handleChange);

		return () => {
			mediaQuery.removeEventListener("change", handleChange);
		};
	})

	return colorShame;
}