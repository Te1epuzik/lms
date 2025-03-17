"use client";

import { Dropdown } from "@/entities";
import styles from "../styles/accountButton.module.scss";
import { AvatarSVG } from "@/SVG/AvatarSVG/AvatarSVG";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store";
import Link from "next/link";

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
              className={styles["menu__link"]}
              rel="stylesheet"
              href={item.link}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </Dropdown>
  );
};
