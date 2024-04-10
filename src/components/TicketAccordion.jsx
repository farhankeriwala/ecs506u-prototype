import { useState } from "react";
import PropTypes from "prop-types";
import { convertID } from "../library/convertDocID";
import { solveTicket, unsolveTicket } from "../library/handleTicket";
import { useUserRole } from "../context/UserRoleContext";

const TicketAccordion = ({
  ticketID,
  ticketType,
  issueLocation,
  ticketSubject,
  ticketStatus,
  ticketDate,
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const isReviewed = ticketStatus === false;
  const userRole = useUserRole();

  return (
    <div
      className={`bg-gray-100 rounded-b-lg p-2 border-b-2  hover:cursor-pointer`}
      onClick={() => setAccordionOpen(!accordionOpen)}
    >
      <div className="grid grid-cols-4 md:grid-cols-6 place-items-center gap-3 md:gap-6 my-3">
        <p className="font-Roboto">{convertID(ticketID)}</p>
        <p className="font-Roboto">{ticketType}</p>
        <p className="font-Roboto">{issueLocation}</p>
        <p className="hidden md:block font-Roboto">{ticketDate}</p>
        <p className="hidden md:block font-Roboto text-center">
          {ticketSubject}
        </p>

        {ticketStatus === true ? (
          <span className="px-4 py-2 border rounded-full w-full text-center bg-dangerRed text-coolWhite">
            Ongoing
          </span>
        ) : ticketStatus === false ? (
          <span className="px-4 py-2 border rounded-full w-full text-center bg-successGreen text-coolWhite">
            Closed
          </span>
        ) : (
          <span className="px-4 py-2 border rounded-full w-full text-center bg-warningYellow text-matteBlack ">
            Under Review
          </span>
        )}
      </div>
      {accordionOpen && (
        <span>
          <div className="flex flex-col items-center gap-2 my-4 md:hidden">
            <p className="md:hidden block font-Roboto">
              Reported on: {ticketDate}
            </p>
            <p className="md:hidden block font-Roboto">
              Issue: {ticketSubject}
            </p>
          </div>
          {/* The below should only be available to service_admin */}
          {userRole === "service_admin" && (
            <div className="flex flex-col items-center gap-3">
              {isReviewed ? (
                <p className="font-Roboto text-md sm:text-lg md:text-xl text-infoTeal">
                  Reviewed
                </p>
              ) : (
                <>
                  <button
                    className="w-full p-2 mx-2 rounded-full bg-sail hover:bg-successGreen transition-colors duration-300 text-matteBlack hover:text-coolWhite"
                    onClick={() => solveTicket(ticketID)}
                  >
                    Close Ticket
                  </button>
                  <button
                    className="w-full p-2 mx-2 rounded-full bg-sail hover:bg-dangerRed transition-colors duration-300 text-matteBlack hover:text-coolWhite"
                    onClick={() => unsolveTicket(ticketID)}
                  >
                    Issue Still Exists
                  </button>
                </>
              )}
            </div>
          )}
        </span>
      )}
    </div>
  );
};

TicketAccordion.propTypes = {
  ticketID: PropTypes.string.isRequired,
  ticketType: PropTypes.string.isRequired,
  issueLocation: PropTypes.string.isRequired,
  ticketSubject: PropTypes.string.isRequired,
  ticketStatus: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([undefined, null]),
  ]).isRequired,
  ticketDate: PropTypes.string.isRequired,
};

export default TicketAccordion;
