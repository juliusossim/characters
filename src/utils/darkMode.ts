export const darkMode = (): boolean => {
	const prefersDarkMode = window.matchMedia(
		'(prefers-color-scheme: dark)'
	).matches;

	const currentTime = new Date();
	const currentHour = currentTime.getHours();
	const nightTime = currentHour < 6 || currentHour > 19; // dark time between 7 PM and 7 AM

	return prefersDarkMode || nightTime;
};
