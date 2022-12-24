import create from "zustand";

type InitialState = {
  darkMode: boolean;
  toggleTheme: () => void;
};

const useDarkTheme = create<InitialState>(
  (set) => ({
    darkMode: false,
    toggleTheme: () =>
      set((state) => ({
        darkMode: !state.darkMode,
      })),
  })
);

export default useDarkTheme;
