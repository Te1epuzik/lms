import { HomeSVG } from "@/SVG";
import Link from "next/link";
import styles from "../styles/homeButton.module.scss";

export const HomeButton = () => {
  return (
    <Link
      onPointerDown={(event) => {
        if (event.button !== 0) {
					return;
				}
				
				setTimeout(() => {
					if (!(event.target instanceof HTMLAnchorElement)) {
						return;
					}
					event.target.blur();
				}, 0);
      }}
      className={styles["home-button"]}
      href="/"
    >
      <HomeSVG className={styles["home-button__icon"]} />
    </Link>
  );
};
