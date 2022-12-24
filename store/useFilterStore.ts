import create from "zustand";

type InitialState = {
  sort_by_time: string;
  filter_by_priority: string;
  labels: string;

  sortByTime: (time: string) => void;

  filterByPriority: (priority: string) => void;

  filterByLabel: (label: string) => void;
};

const useFilterStore = create<InitialState>(
  (set) => ({
    sort_by_time: "High To Low",
    filter_by_priority: "",
    labels: "",

    sortByTime: (time: string) =>
      set({
        sort_by_time: time,
      }),

    filterByPriority: (priority: string) =>
      set({
        filter_by_priority: priority,
      }),

    filterByLabel: (label: string) =>
      set({ labels: label }),
  })
);

export default useFilterStore;
