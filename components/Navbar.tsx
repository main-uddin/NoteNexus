const Navbar = (): React.ReactElement => {
  return (
    <nav className="fixed left-0 right-0 top-0 flex h-16 items-center justify-between border-b border-gray-300 bg-light-foreground px-10 shadow-sm">
      <div className="">
        <span className="text-2xl font-semibold">
          NOTES
        </span>
      </div>
      <div className=""></div>
      <ul className="flex items-center gap-5">
        <li className="rounded-md bg-light-primary p-2 px-4 text-white shadow-sm hover:cursor-pointer">
          Login
        </li>
        <li className="rounded-md border border-light-primary p-2 px-4 text-light-primary shadow-sm hover:cursor-pointer">
          Signup
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
