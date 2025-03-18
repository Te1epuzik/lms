import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

type TMenuItem = {
  name: string;
  link: string;
};

export const useMenuList = (
  isAuth: boolean,
  role: "student" | "teacher" | null,
) => {
  const [menuList, setMenuList] = useState<TMenuItem[]>([
    {
      name: "Sign in",
      link: "/sign-in",
    },
    {
      name: "Sign up",
      link: "/sign-up",
    },
  ]);
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuth) {
      if (pathname === "/sign-in") {
        setMenuList([
          {
            name: "Sign up",
            link: "/sign-up",
          },
        ]);
      } else if (pathname === "/sign-up") {
        setMenuList([
          {
            name: "Sign in",
            link: "/sign-in",
          },
        ]);
      } else {
        setMenuList([
          {
            name: "Sign in",
            link: "/sign-in",
          },
          {
            name: "Sign up",
            link: "/sign-up",
          },
        ]);
      }

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
  }, [isAuth, role, pathname]);

  return menuList;
};
