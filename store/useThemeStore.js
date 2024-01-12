import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: "card",
  toggleTheme: (param) => set({ theme: param }),
}));

export default useThemeStore;
