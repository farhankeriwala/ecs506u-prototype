import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import CurrentTickets from "./CurrentTickets";
import { useUserName } from "../context/UserNameContext";

const HandleServiceIssues = () => {
  const navigate = useNavigate();
  const username = useUserName();

  return (
    <div className="flex items-center justify-center h-max py-8 px-4">
      <main>
        <h1 className="font-Montserrat text-matteBlack text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-4 text-center">
          Hi {username}, here are all the current Service Issues
        </h1>
        <h1 className="font-Poppins text-matteBlack text-md sm:text-lg md:text-xl lg:text-2xl my-8 text-center">
          Select a ticket to either close or keep the ticket open.
        </h1>
        <CurrentTickets />
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full h-12 border-2 border-royalPurple my-8 rounded-full font-Nunito text-lg md:text-xl text-matteBlack hover:text-white hover:bg-royalPurple transition-colors duration-300"
        >
          Return to Dashboard
        </button>
        <Footer />
      </main>
    </div>
  );
};

export default HandleServiceIssues;
