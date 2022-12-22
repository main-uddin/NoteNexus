import Sidebar from "./Sidebar";
import Styles from "../styles/Sidebar.module.css";

const SidebarLayout = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return (
    <div
      className={`mt-16 grid min-h-screen grid-cols-12 gap-5 border border-gray-600 bg-light-background`}
    >
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-10">
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
