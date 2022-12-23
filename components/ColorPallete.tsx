import React from "react";

const ColorPallete = (): React.ReactElement => {
  const handleToggle = (
    e: React.BaseSyntheticEvent<MouseEvent>
  ) => {
    e.stopPropagation();
  };

  return (
    <div
      className="absolute -top-24 grid h-fit w-fit grid-cols-3 gap-2 rounded-md border border-gray-400 bg-light-foreground p-2 shadow-sm"
      onClick={handleToggle}
    >
      <div className="h-8 w-8 rounded-full border border-gray-600"></div>
      <div className="h-8 w-8 rounded-full border border-gray-600"></div>
      <div className="h-8 w-8 rounded-full border border-gray-600"></div>
      <div className="h-8 w-8 rounded-full border border-gray-600"></div>
      <div className="h-8 w-8 rounded-full border border-gray-600"></div>
      <div className="h-8 w-8 rounded-full border border-gray-600"></div>
    </div>
  );
};

export default ColorPallete;
