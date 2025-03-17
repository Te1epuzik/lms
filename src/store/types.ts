export type TStore = TAuthStore & TNewStore;

export type TAuthStore = Readonly<{
	token: string | null;
	isAuth: boolean;
	role: "student" | "teacher" | null;
	name: string | null;
	signIn: (token: string | null, role: "student" | "teacher") => void;
	signOut: () => void;
}>;

export type TNewStore = {
	value: string;
}