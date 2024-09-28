import me from "../assets/girl 2.jpg";
import irene from "../assets/image-irene.jpg";
import colton from "../assets/image-colton.jpg";
import stars from "../assets/Rating.svg";
import { useState, useEffect } from "react";

const Manager = () => {
  const Detials = [
    {
      image: stars,
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages",
      profile: me,
      name: "John Deo",
      position: "HR Manager, Sectraco",
    },
    {
      image: stars,
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages try",
      profile: irene,
      name: "irene mark",
      position: "HR Manager, Sectraco",
    },
    {
      image: stars,
      text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages check",
      profile: colton,
      name: "colton williams",
      position: "HR Manager, Sectraco",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Detials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change item set every 3 seconds

    return () => clearInterval(interval);
  }, [Detials.length]);

  return (
    <div className="rating-wrapper  my-4 px-5">
      <h2 className="font-semibold text-xl py-3 my-2 text-center">
        We’ve got a lot of people who trust us, so you are in excellent hands.
      </h2>

      <div className="rate-wrap-mobile flex justify-around ">
        {Detials.map((detial, index) => (
          <div
            key={index}
            className={`slide  md:block  py-3 px-6 ${
              index === currentIndex ? " block" : "hidden"
            }`}
          >
            <div className="rating-star py-2">
              <img src={detial.image} alt="" />
            </div>
            <div className="rating-text py-2 my-5">
              <p>{detial.text} </p>
            </div>
            <div className="manager-profile flex justify-center items-center gap-3 py-2">
              <img
                src={detial.profile}
                alt=""
                className="w-[50px] h-[50px] rounded-full"
              />
              <div className="manager-profile-info">
                <h5> {detial.name}</h5>
                <p>{detial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manager;
