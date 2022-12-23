const Filter = (): React.ReactElement => {
  return (
    <div className="absolute top-16 right-0 z-10 h-fit w-56 rounded-md border border-gray-600 bg-light-foreground py-1 px-2 shadow-md">
      <div className="space-y-2 py-2">
        <span className="flex flex-col space-y-1">
          <label htmlFor="">Sort By Time</label>
          <select
            className="border border-gray-400 p-1"
            name=""
            id=""
          >
            <option>New To Old</option>
            <option>Old To New</option>
          </select>
        </span>
        <span className="flex flex-col space-y-1">
          <label htmlFor="">
            Filter By Priority
          </label>
          <select
            className="border border-gray-400 p-1"
            name=""
            id=""
          >
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </span>
      </div>
      <span className="">Filter By Labels</span>
      <ul className="">
        <li className="flex items-center gap-2">
          <input
            className="hover:cursor-pointer"
            type="checkbox"
            name=""
            id=""
          />{" "}
          Home
        </li>
        <li className="flex items-center gap-2">
          <input
            className="hover:cursor-pointer"
            type="checkbox"
            name=""
            id=""
          />
          Work
        </li>
        <li className="flex items-center gap-2">
          <input
            className="hover:cursor-pointer"
            type="checkbox"
            name=""
            id=""
          />
          Personal
        </li>
      </ul>
    </div>
  );
};

export default Filter;
