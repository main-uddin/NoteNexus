import create from "zustand";

type FilterInitialState = {
  labels: string[];
  sort_by_time: "New To Old" | "Old To New";
  sort_by_priority: "High" | "Medium" | "Low";

  sortByTime: (
    time: "New To Old" | "Old To New"
  ) => void;

  sortByPriority: (
    priority: "High" | "Medium" | "Low"
  ) => void;

  filterByLabel: (label: string) => void;
};

const useFilterStore = create<FilterInitialState>(
  (set) => ({
    sort_by_time: "New To Old",
    sort_by_priority: "High",
    labels: ["Home", "Work", "Personal"],
    sortByTime: (time) =>
      set({
        sort_by_time: time,
      }),
    sortByPriority: (priority) =>
      set({
        sort_by_priority: priority,
      }),

    filterByLabel: (label) =>
      set((state) => ({
        labels: state.labels.includes(label)
          ? state.labels.filter(
              (x) => x === label
            )
          : [...state.labels, label],
      })),
  })
);

export default useFilterStore;
