import React from "react";
import { useFilterStore } from "../store";

const filterInitialState = {
  sort_by_time: [
    { id: "qwe", name: "New To Old" },
    { id: "etw", name: "Old To New" },
  ],
  priority: [
    { id: "uionm", name: "Choose Priority" },
    { id: "etweaw", name: "High" },
    { id: "etcr4w", name: "Medium" },
    { id: "etf3tyw", name: "Low" },
  ],
  labels: [
    { id: "jojw", name: "Home" },
    { id: "jmdw", name: "Work" },
    { id: "wmci", name: "Personal" },
  ],
};

const Filter = ({
  userData,
}: {
  userData: any;
}): React.ReactElement => {
  const {
    sortByTime,
    filterByPriority,
    filterByLabel,
    sort_by_time,
    filter_by_priority,
    filter_by_label,
  } = useFilterStore((store) => store);

  const labels = [
    ...userData.notes
      ?.filter((x: any) => !x.archive && !x.trash)
      ?.map((x: any) => x.label),
  ];

  const getUniqueLabels = [...new Set(labels)]?.filter(
    (x) => x !== ""
  );

  return (
    <div className="absolute top-16 right-0 z-10 h-fit w-56 rounded-md border border-gray-600 bg-light-foreground py-1 px-2 shadow-md">
      <div className="space-y-2 py-2">
        <span className="flex flex-col space-y-1">
          <label htmlFor="sort-by-time">Sort By Time</label>
          <select
            className="border border-gray-400 p-1"
            name="sort-by-time"
            id=""
            onChange={(e: any) => {
              sortByTime(e.target.value);
            }}
          >
            {filterInitialState.sort_by_time.map((x) => (
              <option key={x.id}>{x.name}</option>
            ))}
          </select>
        </span>
        <span className="flex flex-col space-y-1">
          <label htmlFor="">Filter By Priority</label>
          <select
            className="border border-gray-400 p-1"
            name="filter-by-priority"
            id=""
            onChange={(e: any) => {
              filterByPriority(e.target.value);
            }}
          >
            {filterInitialState.priority.map((x) => (
              <option key={x?.id}>{x?.name}</option>
            ))}
          </select>
        </span>
      </div>
      <span className="">Filter By Labels</span>
      <ul className="">
        {getUniqueLabels.map((x) => (
          <li key={x} className="flex items-center gap-2">
            <input
              className="hover:cursor-pointer"
              type="checkbox"
              name=""
              id=""
              checked={filter_by_label.includes(x)}
              onClick={() => {
                if (filter_by_label.includes(x)) {
                  filterByLabel(x);
                } else {
                  filterByLabel(x);
                }
              }}
            />{" "}
            {x}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
