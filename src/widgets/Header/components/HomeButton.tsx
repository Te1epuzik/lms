import { HomeSVG } from "@/SVG";
import Link from "next/link";
import styles from "../styles/homeButton.module.scss";
import { handlePointerDown, handleDismiss } from "@/utils/activeEmulation";

export const HomeButton = () => {
  return (
    <Link
      onPointerDown={handlePointerDown}
			onPointerUp={handleDismiss}
			onMouseLeave={handleDismiss}
      className={styles["home-button"]}
      href="/"
    >
      <HomeSVG className={styles["home-button__icon"]} />
    </Link>
  );
};
