"use client";

import { Search } from "./Search";
import { usePathname } from "next/navigation";
import { HomeButton } from "./HomeButton";

export const Control = () => {
	const pathname = usePathname();

	return (
		pathname === "/" ?
		<Search /> :
		<HomeButton />
	)
}