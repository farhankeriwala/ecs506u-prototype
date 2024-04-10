import { useState, useEffect } from "react";
import { getStudentECs } from "../library/getStudentECs";
import { useCurrentUser } from "../context/CurrentUserContext";
import { useUserName } from "../context/UserNameContext";
import { convertID } from "../library/convertDocID";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const CurrentClaims = () => {
  const [studentECs, setStudentECs] = useState([]);
  const username = useUserName();
  const uid = useCurrentUser().uid;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentECs = async () => {
      try {
        const ecs = await getStudentECs(uid);
        setStudentECs(ecs);
      } catch (error) {
        console.error("Error fetching ECs:", error);
      }
    };

    fetchStudentECs();
  }, [uid]);

  return (
    <div className="flex items-center justify-center h-max py-8 px-48">
      <main className="w-full">
        <h1 className="font-Montserrat text-matteBlack text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-8 text-center">
          Hi {username}, here are your ECs
        </h1>
        <div className="w-full rounded-xl py-4 px-6 grid grid-cols-3 place-items-start items-center my-10 bg-gray-700 text-coolWhite text-center">
          <p className="font-OpenSans text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            ID
          </p>
          <p className="font-OpenSans text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            Assessment(s)
          </p>
          <span className="px-4 py-2 w-max font-OpenSans text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            Status
          </span>
        </div>

        {studentECs.map((ec) => (
          <div
            key={ec.id}
            className="w-full border-2 rounded-xl py-4 px-6 grid grid-cols-3 place-items-start items-center my-10"
          >
            <p>{convertID(ec.id)}</p>
            <p>{ec.assessments}</p>
            {ec.status === true ? (
              <span className="px-4 py-2 border rounded-full w-full text-center bg-successGreen">
                Approved
              </span>
            ) : (
              <span className="px-4 py-2 border rounded-full w-full text-center bg-dangerRed">
                Under Review
              </span>
            )}
          </div>
        ))}
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

export default CurrentClaims;
