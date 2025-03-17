"use client";

import { SearchSVG } from "@/SVG";
import styles from "../styles/search.module.scss";

export const Search = () => {
  return (
    <div className={styles["search"]}>
			<SearchSVG className={styles["search__icon"]} />
      <input className={styles["search__input"]} placeholder={"Search"} type="text" />
    </div>
  );
};
