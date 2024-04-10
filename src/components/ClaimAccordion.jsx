import { useState } from "react";
import PropTypes from "prop-types";
import { rejectEC, approveEC } from "../library/handleEC";
import { convertID } from "../library/convertDocID";

const ClaimAccordion = ({
  id,
  sid,
  assessments,
  status,
  reason,
  type,
  date,
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  const isUnderReview = status === undefined || status === null;

  return (
    <span className="w-full rounded-xl py-4 px-6 hover:cursor-pointer ">
      <div
        key={id}
        className="w-full border-2 rounded-xl py-4 px-6 grid grid-cols-4 place-items-start items-center mt-2"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <p className="text-md md:text-lg lg:text-xl">{convertID(id)}</p>
        <p className="text-md md:text-lg lg:text-xl">{sid}</p>
        <p className="text-md md:text-lg lg:text-xl">{assessments}</p>
        {status === true ? (
          <span className="px-4 py-2 border rounded-full w-full text-coolWhite text-center bg-successGreen text-md md:text-lg lg:text-xl">
            Approved
          </span>
        ) : status === false ? (
          <span className="px-4 py-2 border rounded-full w-full text-coolWhite text-center bg-dangerRed text-md md:text-lg lg:text-xl">
            Rejected
          </span>
        ) : (
          <span className="px-4 py-2 border rounded-full w-full text-matteBlack text-center bg-warningYellow text-md md:text-lg lg:text-xl">
            Under Review
          </span>
        )}
      </div>
      {accordionOpen && (
        <div className="w-full py-4 px-6 flex justify-between items-center place-items-start my-2">
          <p className="font-Poppins text-md sm:text-lg md:text-xl">
            Reason: {reason}
          </p>
          <p className="font-Poppins text-md sm:text-lg md:text-xl">
            Claim Type: {type}
          </p>
          <p className="font-Poppins text-md sm:text-lg md:text-xl">
            Date of Claim: {date}
          </p>
          {isUnderReview ? (
            <div className="flex flex-col items-center gap-3">
              <button
                className="w-full p-2 mx-2 rounded-full bg-sail hover:bg-dangerRed transition-colors duration-300 text-matteBlack hover:text-coolWhite"
                onClick={() => rejectEC(id)}
              >
                Reject EC
              </button>
              <button
                className="w-full p-2 mx-2 rounded-full bg-sail hover:bg-successGreen transition-colors duration-300 text-matteBlack hover:text-coolWhite"
                onClick={() => approveEC(id)}
              >
                Approve EC
              </button>
            </div>
          ) : (
            <p className="font-Poppins text-md sm:text-lg md:text-xl text-infoTeal">
              Reviewed
            </p>
          )}
        </div>
      )}
    </span>
  );
};

ClaimAccordion.propTypes = {
  id: PropTypes.string.isRequired,
  sid: PropTypes.string.isRequired,
  assessments: PropTypes.string.isRequired,
  status: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf([undefined, null]),
  ]).isRequired,
  reason: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
export default ClaimAccordion;
