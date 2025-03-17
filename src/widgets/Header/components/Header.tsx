"use client"

import styles from "../styles/header.module.scss";
import { AccountButton } from "./AccountButton";
import { Control } from "./Control"

export const Header = () => {
	return (
		<header className={styles['header']}>
			<Control />
			<AccountButton />
		</header>
	)
}
