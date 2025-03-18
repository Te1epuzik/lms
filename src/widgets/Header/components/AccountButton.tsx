"use client";

import { Dropdown } from "@/entities";
import styles from "../styles/accountButton.module.scss";
import { AvatarSVG } from "@/SVG/AvatarSVG/AvatarSVG";
import { useAuthStore } from "@/store";
import { Button, CustomLink } from "@/shared";
import { useResize } from "@/hooks";
import { ColorShameSwitcher } from "@/features";
import { useMenuList } from "../hooks/useMenuList";
import { redirect } from "next/navigation";

type TProps = Readonly<{
  userName?: string;
}>;

export const AccountButton = ({ userName = "User" }: TProps) => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const role = useAuthStore((state) => state.role);
  const signOut = useAuthStore((state) => state.signOut);
  const menuList = useMenuList(isAuth, role);

  const handleSignOut = () => {
    signOut();
    redirect("/sign-in");
  };

  const { isTablet, isDesktop } = useResize();
  return (
    <Dropdown
      classButton={styles["account-button"]}
      classChildren={styles["account-menu"]}
      buttonContent={
        <>
          {(isTablet || isDesktop) && isAuth && (
            <span className={styles["account-button__title"]}>{userName}</span>
          )}
          <AvatarSVG className={styles["account-button__svg"]} />
        </>
      }
    >
      <>
        <ul className={styles["menu"]}>
          {menuList.map((item) => (
            <li data-close="true" className={styles["menu__item"]} key={item.name}>
              <CustomLink
                className={styles["menu__link"]}
                href={item.link}
              >
                {item.name}
              </CustomLink>
            </li>
          ))}
          {isAuth && (
            <li data-close="true" className={styles["menu__item"]}>
              <Button
                onClick={handleSignOut}
                className={styles["menu__link"]}
              >
                Log out
              </Button>
            </li>
          )}
        </ul>
        <div className={styles["theme"]}>
          <span className={styles["theme__title"]}>Theme</span>
          <ColorShameSwitcher />
        </div>
      </>
    </Dropdown>
  );
};
