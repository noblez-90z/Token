import { useState } from "react";
import Layout from "./Layout";

const Prize = () => {
  const [cards, setCards] = useState({
    card1: { weekly: false, monthly: false, annual: false },
    card2: { weekly: false, monthly: false, annual: false },
    card3: { weekly: false, monthly: false, annual: false },
    card4: { weekly: false, monthly: false, annual: false },
  });
  const handleCheckboxChange = (cardId, plan, checked) => {
    setCards((prevCards) => ({
      ...prevCards,
      [cardId]: {
        ...prevCards[cardId],
        [plan]: checked,
      },
    }));
  };
  const handleSubmit = (cardId) => {
    const selectedPlans = Object.keys(cards[cardId]).filter(
      (plan) => cards[cardId][plan]
    );
    if (selectedPlans === "") {
      alert(
        `Selected Payment Plans for ${cardId}: ${selectedPlans.join(", ")}`
      );
    } else {
      alert("success");
    }
  };
  return (
    <Layout>
      <div className="capitalize">
        <div className="bg-[#e5eeee]">
          <h3 className="font-semibold text-center py-4">
            pick a plan that is right for you
          </h3>
        </div>
        <div className="flex  justify-center gap-10 py-3 mt-4">
          <div className="h-[300px] border-2 border-[#9ae4e4] shadow-md px-3 rounded-lg">
            <h2 className="font-bold py-2 text-xl">for personal use </h2>
            <p className="font-semibold">
              get a one time token for your personal use{" "}
            </p>
            <div className="flex gap-2 py-2">
              <input
                type="checkbox"
                name="weekly"
                checked={cards.card1.weekly}
                onChange={(e) =>
                  handleCheckboxChange("card1", e.target.name, e.target.checked)
                }
                className="w-[20px]"
              />
              <p>weekly - $5000</p>
            </div>
            <div className="flex gap-2 py-2">
              <input
                type="checkbox"
                name="monthly"
                checked={cards.card1.monthly}
                onChange={(e) =>
                  handleCheckboxChange("card1", e.target.name, e.target.checked)
                }
                className=" w-[20px]"
              />
              <p>monthly - $6000</p>
            </div>
            <div className="flex gap-2 py-2">
              <input
                type="checkbox"
                name="annual"
                checked={cards.card1.annual}
                onChange={(e) =>
                  handleCheckboxChange("card1", e.target.name, e.target.checked)
                }
                className=" w-[20px]"
              />
              <p>quarterly - $8000</p>
            </div>
            <button
              onClick={() => handleSubmit("card1")}
              className="bg-[#9ae4e4] w-full py-2 mt-3 rounded-md capitalize font-semibold"
            >
              {" "}
              buy now
            </button>
          </div>
          <div className="h-[300px] border-2 border-[#025951] shadow-md rounded-lg px-3">
            <h2 className="font-bold py-2 text-xl">for personal use </h2>
            <p className="font-semibold">
              get a permanent token for your personal use{" "}
            </p>
            <div className="flex gap-2 py-2">
              <input
                type="checkbox"
                name="weekly"
                checked={cards.card2.weekly}
                onChange={(e) =>
                  handleCheckboxChange("card2", e.target.name, e.target.checked)
                }
                className=" w-[20px]"
              />
              <p>weekly - $10000</p>
            </div>
            <div className="flex gap-2 py-2">
              <input
                type="checkbox"
                name="monthly"
                checked={cards.card2.monthly}
                onChange={(e) =>
                  handleCheckboxChange("card2", e.target.name, e.target.checked)
                }
                className=" w-[20px]"
              />
              <p>monthly - $30000</p>
            </div>
            <div className="flex gap-2 py-2">
              <input
                type="checkbox"
                name="annual"
                checked={cards.card2.annual}
                onChange={(e) =>
                  handleCheckboxChange("card2", e.target.name, e.target.checked)
                }
                className=" w-[20px]"
              />
              <p>quarterly - $60000</p>
            </div>
            <button
              onClick={() => handleSubmit("card2")}
              className="bg-[#025951] text-white w-full py-2 mt-3 rounded-md capitalize font-semibold"
            >
              {" "}
              buy now
            </button>
          </div>
        </div>
        <div className="flex  justify-center gap-10 py-3">
          <div className="h-[300px] border-2 border-[#9ae4e4] shadow-md rounded-lg px-2">
            <h2 className="font-bold py-2 text-xl">for organization use </h2>
            <p className="font-semibold">
              get a one time token for your organization use{" "}
            </p>
            <div className="flex gap-2 py-2">
              <input
                type="checkbox"
                name="weekly"
                checked={cards.card3.weekly}
                onChange={(e) =>
                  handleCheckboxChange("card3", e.target.name, e.target.checked)
                }
                className=" w-[20px]"
              />
              <p>weekly - $5000</p>
            </div>
            <div className="flex gap-2 py-2">
              <input
                type="checkbox"
                name="monthly"
                checked={cards.card3.monthly}
                onChange={(e) =>
                  handleCheckboxChange("card3", e.target.name, e.target.checked)
                }
                className=" w-[20px]"
              />
              <p>monthly - $6000</p>
            </div>
            <div className="flex gap-2 py-2">
              <input
                type="checkbox"
                name="annual"
                checked={cards.card3.annual}
                onChange={(e) =>
                  handleCheckboxChange("card3", e.target.name, e.target.checked)
                }
                className=" w-[20px]"
              />
              <p>quarterly - $8000</p>
            </div>

            <button
              onClick={() => handleSubmit("card3")}
              className="bg-[#9ae4e4] w-full py-2 rounded-md mt-3 capitalize font-semibold"
            >
              {" "}
              buy now
            </button>
          </div>
          <div className="h-[300px]  border-2 border-[#025951] shadow-lg rounded-lg px-3">
            <h2 className="font-bold py-2 text-xl">for organization use </h2>
            <p className="font-semibold">
              get a permanent token for your organization use{" "}
            </p>
            <div className="flex gap-2 py-2">
              <input
                type="checkbox"
                name="weekly"
                checked={cards.card4.weekly}
                onChange={(e) =>
                  handleCheckboxChange("card4", e.target.name, e.target.checked)
                }
                className=" w-[20px]"
              />
              <p>weekly - $10000</p>
            </div>
            <div className="flex gap-2 py-2">
              <input
                type="checkbox"
                name="monthly"
                checked={cards.card4.monthly}
                onChange={(e) =>
                  handleCheckboxChange("card4", e.target.name, e.target.checked)
                }
                className=" w-[20px]"
              />
              <p>monthly - $30000</p>
            </div>
            <div className="flex gap-2 py-2">
              <input
                type="checkbox"
                name="annual"
                checked={cards.card4.annual}
                onChange={(e) =>
                  handleCheckboxChange("card4", e.target.name, e.target.checked)
                }
                className=" w-[20px]"
              />
              <p>quarterly - $30000</p>
            </div>
            <button
              onClick={() => handleSubmit("card4")}
              className="bg-[#025951] w-full py-2 rounded-md text-white mt-3 capitalize font-semibold"
            >
              {" "}
              buy now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Prize;
