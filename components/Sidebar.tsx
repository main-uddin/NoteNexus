import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();

  return (
    <ul className="h-full w-full space-y-3"></ul>
  );
};

export default Sidebar;
