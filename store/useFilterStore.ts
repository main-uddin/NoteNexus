import create from "zustand";
import { FilterInitialState } from "../../types";

const useFilterStore = create<FilterInitialState>((set) => ({
  category: [],
  ratings: 1,
  sort_by: "Low to High",
  price: 0,
  selectCategory: (categoryName) =>
    set((state) => ({
      category: state.category.includes(categoryName)
        ? state.category.filter((x) => x !== categoryName)
        : [...state.category, categoryName],
    })),
  selectRatings: (ratings) => set({ ratings: ratings }),
  selectSortBy: (sortType) => set({ sort_by: sortType }),
  selectPrice: (price) => set({ price: price }),
  clearAllFilters: () =>
    set({ category: [], ratings: 1, sort_by: "Low to High" }),
}));

export default useFilterStore;
