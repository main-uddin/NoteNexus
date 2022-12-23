import React from "react";

const colors = [
  { id: "qdw", color: "bg-gray-600" },
  { id: "qdwy", color: "bg-gray-800" },
  { id: "qdwd", color: "bg-slate-600" },
  { id: "qdwx", color: "bg-purple-500" },
  { id: "qdwq", color: "bg-violet-600" },
  { id: "qdwry", color: "bg-rose-500" },
];

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
      {colors.map((x) => (
        <div
          key={x.id}
          className={`h-8 w-8 rounded-full border border-gray-600 ${x.color}`}
        ></div>
      ))}
    </div>
  );
};

export default ColorPallete;
