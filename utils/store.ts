import { create } from "zustand";
import { IMenuStore } from "./interfaces";

export const useMenuToggle = create<IMenuStore>((set) => ({
  isOpen: false,
  toggle() {
    window.onscroll = function () {
      window.scrollTo(0, 0);
    };
    set((state) => ({ isOpen: !state.isOpen }));
  },
}));
