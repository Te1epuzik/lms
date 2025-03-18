"use client";

import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";

import type { TDivOptions } from "../types";

type TProps = Readonly<{
  trigger: boolean;
  endStyles: React.CSSProperties;
  options: TDivOptions;
  ref?: React.RefObject<HTMLDivElement | null>;
}>;

export const AnimatedDiv = (
  props: TProps & ComponentPropsWithoutRef<"div">,
) => {
  const [show, setShow] = useState<boolean>(false);
  const [animated, setAnimated] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const {
    children,
    trigger,
    className,
    style,
    endStyles,
    options,
    ref,
    onMouseEnter,
    onMouseLeave,
		...restProps
  } = props;

  useEffect(() => {
    if (trigger) {
      setShow(true);
      setAnimated(false);
      timeoutRef.current = null;
      return;
    }

    setAnimated(true);

    timeoutRef.current = setTimeout(() => {
      setShow(false);
      setAnimated(false);
    }, options.duration);

    return () => {
      if (!timeoutRef.current) {
        return;
      }

      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    };
  }, [trigger]);

  return (
    show && (
      <div
        {...restProps}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
        className={className}
        style={{
          ...style,
          transitionDuration: `${options.duration}ms`,
          transitionTimingFunction: `${options.transition ?? "linear"}`,
          ...(animated && endStyles),
        }}
      >
        {children}
      </div>
    )
  );
};
