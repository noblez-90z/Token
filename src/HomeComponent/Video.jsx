import teacher from "../assets/reg girl with book.svg";
import woman_teach from "../assets/woman teaching smile.svg";
import { useState, useEffect } from "react";

const VideoLearning = () => {
  const videos = [
    {
      image: woman_teach,
      text: "Start a LESSON today",
      header: "FOR TRAINER",
      btn: "CREATE OPPORTUNITIES FOR LEARNING",
    },
    { image: teacher, header: "FOR TRAINEE", btn: "START A CLASS TODAY" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === videos.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change item set every 3 seconds

    return () => clearInterval(interval);
  }, [videos.length]);
  return (
    <div className="main-wrapper">
      <div className="video-wrap block md:flex justify-between gap-8 mt-5">
        {videos.map((video, index) => (
          <div
            key={index}
            className={`video relative  ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={video.image} alt="" className="mt-3" />
            <p className="absolute top-1 left-1 py-2 text-white">
              {video.text}{" "}
            </p>
            <h3 className="absolute top-24 md:top-40 left-24 md:left-44  font-semibold text-xl text-white">
              {video.header}{" "}
            </h3>
            <button
              className={` btn py-2 absolute px-3 w-[70%] top-32 md:top-48 left-10  rounded-lg bg-[#025951] text-white `}
            >
              {video.btn}{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoLearning;
