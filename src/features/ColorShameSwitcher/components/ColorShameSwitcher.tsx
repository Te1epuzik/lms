"use client";

import { Button } from "@/shared";
import styles from "../styles/colorShameSwitcher.module.scss";
import { useThemeStore } from "@/store";
import { DarkSVG, LightSVG } from "@/SVG";

export const ColorShameSwitcher = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  const handleSwitch = (theme: "auto" | "light" | "dark") => {
		setTheme(theme);
  };

  return (
    <div className={styles["color-shame-switcher"]}>
      <Button
        type="button"
        name="auto"
        onClick={() => handleSwitch("auto")}
        className={
          styles["color-shame-switcher__button"] +
          (theme === "auto"
            ? " " + styles["color-shame-switcher__button--active"]
            : "")
        }
      >
        <span className={styles["auto-text"]}>A</span>
      </Button>
      <Button
        type="button"
        name="light"
        onClick={() => handleSwitch("light")}
        className={
          styles["color-shame-switcher__button"] +
          (theme === "light"
            ? " " + styles["color-shame-switcher__button--active"]
            : "")
        }
      >
        <LightSVG className={styles["svg"]} />
      </Button>
      <Button
        type="button"
        name="dark"
        onClick={() => handleSwitch("dark")}
        className={
          styles["color-shame-switcher__button"] +
          (theme === "dark"
            ? " " + styles["color-shame-switcher__button--active"]
            : "")
        }
      >
        <DarkSVG className={styles["svg"]} />
      </Button>
    </div>
  );
};
