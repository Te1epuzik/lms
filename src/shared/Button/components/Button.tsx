import { ComponentPropsWithoutRef } from "react";
import { handlePointerDown, handleDismiss } from "@/utils/activeEmulation";

export const Button = (props: ComponentPropsWithoutRef<"button">) => {
  const { children, onPointerDown, onPointerUp, onMouseLeave, style } = props;
  return (
    <button
      {...props}
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
      style={{
        color: "inherit",
        ...style,
      }}
    >
      {children}
    </button>
  );
};
