import DashHeader from "./DashHeader";
import Sidebar from "./SideBar";

const DashBoardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Header */}
        <DashHeader />

        {/* Main Dashboard Content */}
        <div className="p-6 bg-gray-100">
          <div className="container mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default DashBoardLayout;
