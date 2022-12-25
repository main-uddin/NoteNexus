import create from "zustand";

type InitialState = {
  sidebar: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
};

const useSidebarStore = create<InitialState>(
  (set) => ({
    sidebar: false,
    openSidebar: () => set({ sidebar: true }),
    closeSidebar: () => set({ sidebar: false }),
  })
);

export default useSidebarStore;
