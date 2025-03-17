"use client";

import { Dropdown } from "@/entities";
import styles from "../styles/accountButton.module.scss";
import { AvatarSVG } from "@/SVG/AvatarSVG/AvatarSVG";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store";
import { CustomLink } from "@/shared";

type TMenuItem = {
  name: string;
  link: string;
};

export const AccountButton = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const role = useAuthStore((state) => state.role);
  const [menuList, setMenuList] = useState<TMenuItem[]>([
    {
      name: "Log in",
      link: "log-in",
    },
  ]);

  useEffect(() => {
		if (!isAuth) {
			return;
		}

		if (role === "student") {
			setMenuList([
				{
					name: "Account",
					link: "/account",
				},
				{
					name: "Log out",
					link: "/log-out",
				}
			])
		}

		if (role === "teacher") {
			setMenuList([
				{
					name: "Account",
					link: "/account",
				},
				{
					name: "Admin panel",
					link: "/admin",
				},
				{
					name: "Log out",
					link: "/log-out",
				}
			])
		}	
  }, [isAuth, role]);

  return (
    <Dropdown
      classButton={styles["account-button"]}
			classChildren={styles["account-menu"]}
      buttonContent={
        <>
          <span className={styles["account-button__title"]}>Account</span>
          <AvatarSVG className={styles["account-button__svg"]} />
        </>
      }
    >
      <ul className={styles["menu"]}>
        {menuList.map((item) => (
          <li className={styles["menu__item"]} key={item.name}>
            <CustomLink
              className={styles["menu__link"]}
              href={item.link}
            >
              {item.name}
            </CustomLink>
          </li>
        ))}
      </ul>
    </Dropdown>
  );
};
