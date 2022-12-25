import React from "react";
import { MdAddCircleOutline } from "react-icons/md";
const LabelInput = ({
  labelChangeHandler,
  label,
  toggleHandler,
}: {
  labelChangeHandler: (label: string) => void;
  label: string;
  toggleHandler: () => void;
}): React.ReactElement => {
  const handleToggle = (
    e: React.BaseSyntheticEvent<MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return (
    <div
      className="absolute -top-12 -left-6 flex h-10 w-40 items-center rounded-md border border-gray-400 bg-light-foreground shadow-sm"
      onClick={handleToggle}
    >
      <div className="h-full w-3/4">
        <input
          className="h-full w-full border-none bg-transparent p-3 outline-none"
          type="text"
          placeholder="Add Label"
          onChange={(
            e: React.ChangeEvent<HTMLInputElement>
          ) => {
            labelChangeHandler(e.target.value);
          }}
          value={label}
        />
      </div>
      <div className="flex w-1/4 items-center justify-center">
        <button
          className="text-light-primary"
          onClick={toggleHandler}
        >
          <MdAddCircleOutline size={25} />
        </button>
      </div>
    </div>
  );
};

export default LabelInput;
