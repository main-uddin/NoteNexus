const TagInput = (): React.ReactElement => {
  return (
    <div className="absolute -top-12 -left-6 flex h-10 w-40 items-center rounded-md border border-gray-400 bg-light-foreground shadow-sm">
      <div className="h-full w-3/4">
        <input
          className="h-full w-full border-none bg-transparent p-3 outline-none"
          type="text"
          placeholder="Add Tag"
        />
      </div>
      <div className="w-1/4">
        <button className="text-light-primary">
          Add
        </button>
      </div>
    </div>
  );
};

export default TagInput;
