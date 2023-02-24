import create from "zustand";

type InitialState = {
  openCreateNoteModal: boolean;
  openCreateNote: () => void;
  closeCreateNote: () => void;
};

const useToggleNoteStore = create<InitialState>(
  (set) => ({
    openCreateNoteModal: false,
    openCreateNote: () =>
      set({ openCreateNoteModal: true }),

    closeCreateNote: () =>
      set({ openCreateNoteModal: false }),
  })
);

export default useToggleNoteStore;
