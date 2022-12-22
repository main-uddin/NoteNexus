import Sidebar from "./Sidebar";
import Styles from "../styles/SidebarLayout.module.css";

const SidebarLayout = ({
  children,
}: {
  children: React.ReactElement;
}) => {
  return (
    <div
      className={`${Styles.container} mt-16 grid grid-cols-12`}
    >
      <div className="sticky top-20 col-span-2 border">
        <Sidebar />
      </div>
      <div className="col-span-10">
        {children}
      </div>
    </div>
  );
};

export default SidebarLayout;
