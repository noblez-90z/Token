import { useSelector } from "react-redux";
import DashBoardLayout from "./DashBoardLayout";

const Profile = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  // Function to extract initials from the user's name and surname
  const getInitials = () => {
    if (!user || !user.name || !user.surname) return "";

    const nameInitial = user.name.charAt(0).toUpperCase();
    const surnameInitial = user.surname.charAt(0).toUpperCase();

    return `${nameInitial}${surnameInitial}`;
  };
  return (
    <DashBoardLayout>
      <div className="">
        <div className=" md:w-[60%] mx-auto px-3 py-3 rounded-xl shadow-lg bg-[#fcfbfb]">
          <div className="bg-[#025951] text-white rounded-full my-3 w-20 h-20 flex items-center justify-center cursor-pointer">
            <span className="text-xl"> {getInitials()}</span>
          </div>
          <div className="border py-4 capitalize mt-3 rounded-xl px-2">
            {isAuthenticated ? (
              <div className="">
                <p className="font-bold py-3 text-[#025951]">
                  name:
                  <span className="font-semibold pl-6">{user.name}</span>
                </p>
                <p className="font-bold py-3 text-[#025951]">
                  surname:
                  <span className="font-semibold pl-6">{user.surname}</span>
                </p>
                <p className="font-bold py-3 text-[#025951]">
                  email:
                  <span className="font-semibold pl-6">{user.email}</span>
                </p>
              </div>
            ) : (
              <p></p>
            )}
          </div>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default Profile;
