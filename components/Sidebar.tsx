const Sidebar = () => {
  return (
    <ul className="h-full w-full space-y-3">
      <li className="cursor-pointer p-3 transition-all hover:bg-light-primary hover:text-white">
        NOTES
      </li>
      <li className="cursor-pointer p-3 transition-all hover:bg-light-primary hover:text-white">
        ARCHIVES
      </li>
      <li className="cursor-pointer p-3 transition-all hover:bg-light-primary hover:text-white">
        TRASH
      </li>
    </ul>
  );
};

export default Sidebar;
