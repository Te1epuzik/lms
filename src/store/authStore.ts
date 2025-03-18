import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { TAuthStore } from "./types";

export const useAuthStore = create<TAuthStore>()(
  persist(
    devtools((set) => ({
      token: null,
      isAuth: false,
      name: null,
      role: null,
      signIn: (token: string | null, role: "student" | "teacher") =>
        set({ token, isAuth: !!token, role }, undefined, "auth/signIn"),
      signOut: () =>
        set(
          { token: null, isAuth: false, role: null },
          undefined,
          "auth/signOut",
        ),
    })),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
