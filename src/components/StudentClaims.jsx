import { useState, useEffect } from "react";
import { getAllECs } from "../library/getAllECs";
import { useCurrentUser } from "../context/CurrentUserContext";
import { useUserName } from "../context/UserNameContext";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import ClaimAccordion from "./ClaimAccordion";

const StudentClaims = () => {
  const [studentECs, setStudentECs] = useState([]);
  const currentUser = useCurrentUser();
  const username = useUserName();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStudentECs = async () => {
      try {
        const ecs = await getAllECs(currentUser.uid);
        setStudentECs(ecs);
      } catch (error) {
        console.error("Error fetching ECs:", error);
      }
    };

    fetchStudentECs();
  }, [currentUser.uid]);

  return (
    <div className="flex items-center justify-center h-max py-8 px-4">
      <main className="w-full">
        <h1 className="font-Montserrat text-matteBlack text-2xl sm:text-3xl md:text-4xl lg:text-5xl my-4 text-center">
          Hi {username}, here are all the current ECs
        </h1>
        <h1 className="font-Poppins text-matteBlack text-md sm:text-lg md:text-xl lg:text-2xl my-8 text-center">
          Select an EC to view more details or to either approve or reject the
          claim.
        </h1>
        <div className="w-full rounded-xl py-4 px-6 grid grid-cols-4 place-items-start items-center my-5 bg-gray-700 text-coolWhite text-center">
          <p className="font-OpenSans text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            ID
          </p>
          <p className="font-OpenSans text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            Student ID
          </p>
          <p className="font-OpenSans text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            Assessment(s)
          </p>
          <span className="px-4 py-2 w-max font-OpenSans text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center">
            Status
          </span>
        </div>

        {studentECs.map((ec, index) => (
          <ClaimAccordion
            key={index}
            id={ec.id}
            sid={ec.studentID}
            assessments={ec.assessments}
            status={ec.status}
            reason={ec.claimReason}
            type={ec.claimType}
            date={ec.date}
          />
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

export default StudentClaims;
