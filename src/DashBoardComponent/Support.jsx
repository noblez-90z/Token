import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashBoardLayout from "./DashBoardLayout";

const Support = () => {
  return (
    <DashBoardLayout>
      <div className="md:w-[60%] border mx-auto rounded-lg px-3">
        <h2 className="py-4 font-bold text-xl">contact info</h2>
        <div className="w-full">
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <div className="w-full flex gap-4 items-center py-4 my-4">
          <FontAwesomeIcon icon={faEnvelope} />
          <span>@generateToken.com</span>
        </div>
        <div className="w-full flex gap-4 py-4">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default Support;
