import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { TThemeStore } from "./types";

export const useThemeStore = create<TThemeStore>()(
  persist(
    devtools((set) => ({
      theme: "auto",
      setTheme: (theme: "auto" | "light" | "dark") => set({ theme }),
    })),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
