"use client";

import { Dropdown } from "@/entities";
import styles from "../styles/accountButton.module.scss";
import { AvatarSVG } from "@/SVG/AvatarSVG/AvatarSVG";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/store";
import { Button, CustomLink } from "@/shared";
import { useResize } from "@/hooks";
import { usePathname } from "next/navigation";
import { ColorShameSwitcher } from "@/features";

type TMenuItem = {
  name: string;
  link: string;
};

type TProps = Readonly<{
  userName?: string;
}>;

export const AccountButton = ({ userName = "User" }: TProps) => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const role = useAuthStore((state) => state.role);
  const [isOnLogInPage, setIsOnLogInPage] = useState<boolean>(false);
  const [menuList, setMenuList] = useState<TMenuItem[]>([
    {
      name: "Account",
      link: "/account",
    },
  ]);
  const { isTablet, isDesktop } = useResize();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/sign-in" || pathname === "/sign-up") {
      setIsOnLogInPage(true);
    } else {
      setIsOnLogInPage(false);
    }
  }, [pathname]);

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
      ]);
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
      ]);
    }
  }, [isAuth, role]);

  return (
    !isOnLogInPage &&
    (isAuth ? (
      <Dropdown
        classButton={styles["account-button"]}
        classChildren={styles["account-menu"]}
        buttonContent={
          <>
            {(isTablet || isDesktop) && (
              <span className={styles["account-button__title"]}>
                {userName}
              </span>
            )}
            <AvatarSVG className={styles["account-button__svg"]} />
          </>
        }
      >
        <>
          <ul className={styles["menu"]}>
            {menuList.map((item) => (
              <li className={styles["menu__item"]} key={item.name}>
                <CustomLink className={styles["menu__link"]} href={item.link}>
                  {item.name}
                </CustomLink>
              </li>
            ))}
            <li className={styles["menu__item"]}>
              <Button className={styles["menu__link"]}>Log out</Button>
            </li>
          </ul>
          <div className={styles["theme"]}>
            <span className={styles["theme__title"]}>Theme</span>
            <ColorShameSwitcher />
          </div>
        </>
      </Dropdown>
    ) : (
      <CustomLink className={styles["account-button"]} href="/sign-in">
        Sign in
      </CustomLink>
    ))
  );
};
