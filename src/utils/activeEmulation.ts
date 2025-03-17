export const handlePointerDown = (event: React.PointerEvent<HTMLAnchorElement | HTMLButtonElement>) => {
	event.preventDefault();
	event.currentTarget.classList.add("active");
}

export const handleDismiss = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
	if (!(event.currentTarget instanceof HTMLAnchorElement)) {
		return;
	}

	event.currentTarget.classList.remove("active");
}