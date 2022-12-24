import create from "zustand";

type InitialState = {
  sort_by_time: string;
  filter_by_priority: string;
  filter_by_label: string[];

  sortByTime: (time: string) => void;

  filterByPriority: (priority: string) => void;

  filterByLabel: (label: string) => void;
};

const useFilterStore = create<InitialState>(
  (set) => ({
    sort_by_time: "High To Low",
    filter_by_priority: "",
    filter_by_label: [],

    sortByTime: (time: string) =>
      set({
        sort_by_time: time,
      }),

    filterByPriority: (priority: string) =>
      set({
        filter_by_priority: priority,
      }),

    filterByLabel: (label) =>
      set((state) => ({
        filter_by_label:
          state.filter_by_label.includes(label)
            ? state.filter_by_label.filter(
                (x) => x !== label
              )
            : [...state.filter_by_label, label],
      })),
  })
);

export default useFilterStore;
