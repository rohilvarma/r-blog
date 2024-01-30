import {create} from 'zustand'
import { IMenuStore } from './interfaces'

export const useMenuToggle = create<IMenuStore>((set) => ({
  isOpen: false,
  toggle() {
    set((state) => ({isOpen: !state.isOpen}))
  }
}))