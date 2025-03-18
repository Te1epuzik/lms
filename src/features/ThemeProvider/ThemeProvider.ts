"use client";

import { useColorShame } from "@/hooks/useColorShame";
import { useEffect } from "react";

export const ThemeProvider = () => {
	const colorShame = useColorShame();

	useEffect(() => {
		document.documentElement.setAttribute("data-color-shame", colorShame);
	}, [colorShame]);

	return null;
}