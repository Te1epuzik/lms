"use client";

import { useState, useEffect } from "react";

export const ThemeProvider = () => {
	const [colorShame, setColorShame] = useState("light");

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		setColorShame(mediaQuery.matches ? "dark" : "light");

		const handleChange = (event: MediaQueryListEvent) => {
			setColorShame(event.matches ? "dark" : "light");
		};

		mediaQuery.addEventListener("change", handleChange);

		return () => {
			mediaQuery.removeEventListener("change", handleChange);
		};
	})

	useEffect(() => {
		document.documentElement.setAttribute("data-color-shame", colorShame);
	}, [colorShame]);

	return null;
}