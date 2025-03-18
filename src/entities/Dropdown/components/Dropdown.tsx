"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../styles/dropdown.module.scss";
import { AnimatedDiv, Button } from "@/shared";

type TProps = Readonly<{
  buttonContent: React.ReactNode;
  children: React.ReactNode;
  classChildren?: string;
  classButton?: string;
}>;

export const Dropdown = ({
  buttonContent,
  children,
  classButton,
  classChildren,
}: TProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleDismiss = (event: MouseEvent) => {
    if (
      !isOpen ||
      !dropdownRef.current ||
      !(event.target instanceof Node) ||
      dropdownRef.current.contains(event.target)
    ) {
      return;
    }

    setIsOpen(false);
  };

	const handleClickInside = (event: React.MouseEvent) => {
		if (event.target instanceof HTMLElement && event.target.closest("[data-close='true']")) {
			setIsOpen(false);
		}
	}

  useEffect(() => {
		document.addEventListener("click", handleDismiss);
		
    return () => {
			document.removeEventListener("click", handleDismiss);
    };
  });

  return (
    <div className={styles["dropdown"]}>
      <Button
        onClick={handleToggle}
        className={
          styles["dropdown__button"] +
          " " +
          classButton +
          " " +
          (isOpen && styles["dropdown__opened"])
        }
        type="button"
      >
        {buttonContent}
      </Button>
      <AnimatedDiv
        className={styles["dropdown__content"] + " " + classChildren}
        trigger={isOpen}
        options={{ duration: 150, transition: "ease-in-out" }}
        endStyles={{ opacity: 0 }}
        ref={dropdownRef}
				onClick={handleClickInside}
      >
        {children}
      </AnimatedDiv>
    </div>
  );
};
