import Sidebar from "./Sidebar";
import Styles from "../styles/Sidebar.module.css";

const SidebarLayout = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return (
    <div>
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
