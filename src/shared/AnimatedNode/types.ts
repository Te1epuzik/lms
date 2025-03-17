export type TOptions = Readonly<{
	duration: number;
  transition?: "ease" | "ease-in" | "ease-out" | "ease-in-out" | "linear";
}>

export type TButtonOptions = Readonly<{
  ref?: React.RefObject<HTMLButtonElement | null>;
  handler?: () => void;
} & TOptions>;

export type TDivOptions = Readonly<TOptions>;