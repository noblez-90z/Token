import woman from "../assets/runing woman.svg";
import check from "../assets/CheckCircle.svg";
import regtangle from "../assets/heading box.svg";
import Manager from "./Mangers";

const HeroTwo = () => {
  return (
    <div className="mt-4 py-6">
      <div className="woman-wrapper block md:flex  justify-center gap-6 px-4 mt-10">
        <div className="woman-text">
          <h3 className="py-2 font-semibold">
            Find Trainees and earn as they complete your course
          </h3>
          <ul>
            <li className="flex gap-2 py-2 items-start">
              <img src={check} alt="" />
              Avoid finding relevant learning platforms and submitting an
              unlimited number of submissions to learn a skill or improve your
              vocation.
            </li>
            <li className="flex gap-2 py-2 items-start">
              <img src={check} alt="" />
              We match you with the appropriate opportunities based on your
              schedule and location
            </li>
            <li className="flex gap-2 py-2 items-start">
              <img src={check} alt="" />
              Land a great teacher in less than 24 hours
            </li>
          </ul>
          <button className="py-2 px-4 my-4 ml-2 rounded-full font-medium bg-[#025951] text-white">
            FIND TRAINERS
          </button>
          <button className="py-2 px-4 my-4 ml-2 rounded-full font-medium  text-[#025951 border">
            LEARN MORE
          </button>
        </div>
        <div className="woman-pic">
          <img src={woman} alt="" />
        </div>
      </div>
      <div className="about h-[400px] px-4">
        <h2 className="py-3 my-2 font-bold text-3xl capitalize text-center">
          about us{" "}
        </h2>
        <div className="about-head flex justify-center items-center py-2 mt-3">
          <h1 className="font-bold text-2xl z-10 ">WHAT IS MY-Tpage?</h1>
          <img src={regtangle} alt="" className="w-20 h-20" />
        </div>
        <p className="py-3 text-center">
          The My-Tpage is aimed to provide a booking service for sports and
          education trainers, and their customers. Once the user visits the
          website, they can find the activity type they want to train in and
          find the best suited trainer for that activity
        </p>
      </div>
      <div className="ideal-wrapper py-6 px-4 bg-[#e6efef]">
        <div className="ideal-text text-center">
          <h2 className="font-semibold py-2">
            Step into a your ideal course and be the best at what you do,
          </h2>
          <p className="py-3">
            Every day, we hire make it a priority to find people are the best at
            what they do, and we have your best interest to link them up with
            you.
          </p>
        </div>
        <button className="mx-auto block py-2 px-8 rounded-lg bg-[#025951] text-white">
          EXPLORE YOUR CHANCES
        </button>
      </div>
      <div className="h-[450px] ">
        <Manager />
      </div>
    </div>
  );
};

export default HeroTwo;
