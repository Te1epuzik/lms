import { ComponentPropsWithoutRef } from "react";
import Link, { LinkProps } from "next/link";
import { handlePointerDown, handleDismiss } from "@/utils/activeEmulation";

export const CustomLink = (
  props: LinkProps & ComponentPropsWithoutRef<"a">,
) => {
  const { children, onPointerDown, onPointerUp, onMouseLeave } = props;
  return (
    <Link
      onPointerDown={(event) => {
        handlePointerDown(event);
        onPointerDown?.(event);
      }}
			onPointerUp={(event) => {
				handleDismiss(event);
				onPointerUp?.(event);
			}}
			onMouseLeave={(event) => {
				handleDismiss(event);
				onMouseLeave?.(event);
			}}
      {...props}
    >
			{children}
    </Link>
  );
};
