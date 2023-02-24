import create from "zustand";

type InitialState = {
  sort_by_time: string;
  filter_by_priority: string;
  filter_by_label: string[];
  filter_by_search: string;

  sortByTime: (time: string) => void;

  filterByPriority: (priority: string) => void;

  filterByLabel: (label: string) => void;
  filterBySearch: (searchKey: string) => void;
};

const useFilterStore = create<InitialState>(
  (set) => ({
    sort_by_time: "New To Old",
    filter_by_priority: "",
    filter_by_label: [],
    filter_by_search: "",

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

    filterBySearch: (searchKey) =>
      set((state) => ({
        filter_by_search: searchKey,
      })),
  })
);

export default useFilterStore;
