import Link from "next/link";
import { MdDarkMode } from "react-icons/md";
const Navbar = (): React.ReactElement => {
  return (
    <nav className="fixed left-0 right-0 top-0 flex h-16 items-center justify-between border-b border-gray-300 bg-light-foreground px-10 shadow-sm">
      <span className="text-2xl font-bold">
        <Link href="/">Notation</Link>
      </span>
      <ul>
        <li>
          <MdDarkMode size={25} />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
