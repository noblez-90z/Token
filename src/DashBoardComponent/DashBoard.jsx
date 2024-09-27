import DashBoardLayout from "./DashBoardLayout";
import DashHeader from "./DashHeader";
import GeneratedTokens from "./GeneratedToken";
import PaymentHistory from "./PaymentHistory";
import Sidebar from "./SideBar";

const DashBoard = () => {
  return (
    <div className="h-svh">
      <DashBoardLayout>
        <GeneratedTokens />

        {/* Payment History Section */}
        <PaymentHistory />
      </DashBoardLayout>
    </div>
  );
};

export default DashBoard;
