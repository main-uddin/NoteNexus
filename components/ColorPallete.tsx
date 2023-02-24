import React from "react";

const colors = [
  { id: "qdw", color: "bg-rose-100" },
  { id: "qdwy", color: "bg-pink-100" },
  { id: "qdwd", color: "bg-purple-100" },
  { id: "qdwx", color: "bg-teal-100" },
  { id: "qdwq", color: "bg-green-100" },
  { id: "qdwry", color: "bg-yellow-100" },
];

const ColorPallete = ({
  colorPalleteHandler,
}: {
  colorPalleteHandler: (colorCode: string) => void;
}): React.ReactElement => {
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
          onClick={() => {
            colorPalleteHandler(x.color);
          }}
        ></div>
      ))}
    </div>
  );
};

export default ColorPallete;
