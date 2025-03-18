export type TStore = TAuthStore & TThemeStore;

export type TAuthStore = Readonly<{
	token: string | null;
	isAuth: boolean;
	role: "student" | "teacher" | null;
	name: string | null;
	signIn: (token: string | null, role: "student" | "teacher") => void;
	signOut: () => void;
}>;

export type TThemeStore = {
	theme: "auto" | "light" | "dark";
	setTheme: (theme: "auto" | "light" | "dark") => void;
}