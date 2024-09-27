import DashBoardLayout from "./DashBoardLayout";

const Security = () => {
  return (
    <DashBoardLayout>
      <div className=" md:w-[60%] py-4 px-3 capitalize rounded-xl shadow-lg bg-[#fcfbfb] mx-auto">
        <h2 className="font-bold text-xl py-3">change password</h2>
        <div className="">
          <div className="py-3">
            <label htmlFor="" className="font-semibold">
              old password
            </label>
            <input
              type="password"
              placeholder="enter old password..."
              className="w-full border py-3 px-2 mt-2 rounded-lg"
            />
          </div>
          <div className="py-3">
            <label htmlFor="" className="font-semibold">
              new password
            </label>
            <input
              type="password"
              placeholder="enter new password..."
              className="w-full border py-3 px-2 mt-2 rounded-lg"
            />
          </div>
          <div className="py-3">
            <label htmlFor="" className="font-semibold ">
              confirm password
            </label>
            <input
              type="password"
              placeholder="confirm old password..."
              className="w-full border py-3 px-2 mt-2 rounded-lg"
            />
          </div>
          <button className="block mx-auto my-4 px-6 py-2 bg-[#025951] text-white w-[60%] rounded-full font-semibold">
            change
          </button>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default Security;
