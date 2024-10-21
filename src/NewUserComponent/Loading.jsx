import OverLay from "./OverLay";

const Loading = () => {
  return (
    <OverLay>
      <div className="w-[50%] mx-auto mt-[250px] flex items-center justify-center  z-50">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin-slow  border-blue-500"></div>
      </div>
    </OverLay>
  );
};

export default Loading;
