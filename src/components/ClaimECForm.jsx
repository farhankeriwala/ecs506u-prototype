import { useFormik } from "formik";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { useNavigate } from "react-router-dom";
import { claimEC } from "../library/claimEC";
import {useCurrentUser} from '../context/CurrentUserContext'

const validate = (values) => {
  const errors = {};
  if (!values.guidance) {
    errors.guidance = "Please select whether you sought guidance";
  }
  if (!values.sid) {
    errors.sid = "Please enter your Student ID.";
  }
  if (!values.claimType) {
    errors.claimType = "Please select a claim type";
  }
  if (!values.claimReason) {
    errors.claimReason = "Please enter a reason for the claim";
  }
  if (!values.assessments) {
    errors.assessments = "Please enter the assessments.";
  }
  return errors;
};

const ClaimECForm = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
   const uid = useCurrentUser().uid;

  const formik = useFormik({
    initialValues: {
      guidance: "",
      sid: "",
      uid: uid,
      claimType: "",
      claimReason: "",
      assessments: "",
    },
    validate,
    onSubmit: (values, { resetForm }) =>
      claimEC(values, { resetForm, setError, setLoading, navigate }),
  });

  return (
    <main className="flex items-center justify-center h-max p-8">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-8 w-full md:w-[750px] p-10 bg-white rounded-[32px]"
      >
        <h1 className="font-Roboto text-xl md:text-3xl text-matteBlack text-center">
          Claim EC
        </h1>
        {loading && <LoadingSpinner />}
        {error && (
          <span className="w-full m-1 flex items-center gap-1 font-OpenSans text-dangerRed text-md md:text-lg">
            <i className="bx bx-error-circle"></i>
            {error}
          </span>
        )}
        <span className="flex flex-col items-start gap-2">
          <label
            htmlFor="guidance"
            className="w-full h-12 px-4 py-2 font-Poppins  text-matteBlack text-md md:text-lg rounded-xl"
          >
            Did you seek guidance before applying for an EC?
          </label>
          <div>
            <input
              id="guidance-yes"
              name="guidance"
              type="radio"
              onChange={formik.handleChange}
              value="yes"
              checked={formik.values.guidance === "yes"}
              className="mr-1"
            />
            <label
              htmlFor="guidance-yes"
              className="w-full h-12 px-4 py-2 font-Poppins  text-matteBlack text-md md:text-lg rounded-xl"
            >
              Yes
            </label>
          </div>
          <div>
            <input
              id="guidance-no"
              name="guidance"
              type="radio"
              onChange={formik.handleChange}
              value="no"
              checked={formik.values.guidance === "no"}
              className="mr-1"
            />
            <label
              htmlFor="guidance-no"
              className="w-full h-12 px-4 py-2 font-Poppins  text-matteBlack text-md md:text-lg rounded-xl"
            >
              No
            </label>
          </div>
          {formik.touched.guidance && formik.errors.guidance ? (
            <div className="w-full m-1 flex items-center gap-1 font-OpenSans text-dangerRed text-md md:text-lg">
              {formik.errors.guidance}
            </div>
          ) : null}
        </span>
        <label
          htmlFor="claimType"
          className="w-full h-12 px-4 py-2 font-Poppins  text-matteBlack text-md md:text-lg rounded-xl"
        >
          Enter your Student ID Number
        </label>
        <input
          id="sid"
          name="sid"
          type="text"
          placeholder="Separate each with a comma"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sid}
          className="w-full h-12 px-4 py-2 font-Poppins bg-lightBG text-matteBlack text-md md:text-lg rounded-xl"
        />
        {formik.touched.sid && formik.errors.sid && (
          <span className="w-full m-1 flex items-center gap-1 font-OpenSans text-dangerRed text-md md:text-lg">
            <i className="bx bx-error-circle"></i>
            {formik.errors.sid}
          </span>
        )}
        {/*  */}
        <span className="flex flex-col items-start gap-2">
          <label
            htmlFor="claimType"
            className="w-full h-12 px-4 py-2 font-Poppins  text-matteBlack text-md md:text-lg rounded-xl"
          >
            Select the type of EC
          </label>
          <div>
            <input
              id="claimType-standard"
              name="claimType"
              type="radio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value="standard"
              checked={formik.values.claimType === "standard"}
              className="mr-1"
            />
            <label
              htmlFor="claimType-standard"
              className="w-full h-12 px-4 py-2 font-Poppins  text-matteBlack text-md md:text-lg rounded-xl"
            >
              Standard
            </label>
          </div>
          <div>
            <input
              id="claimType-selfCertified"
              name="claimType"
              type="radio"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value="self-certified"
              checked={formik.values.claimType === "self-certified"}
              className="mr-1"
            />
            <label
              htmlFor="claimType-selfCertified"
              className="w-full h-12 px-4 py-2 font-Poppins  text-matteBlack text-md md:text-lg rounded-xl"
            >
              Self-Certified
            </label>
          </div>
          {formik.touched.claimType && formik.errors.claimType ? (
            <div className="w-full m-1 flex items-center gap-1 font-OpenSans text-dangerRed text-md md:text-lg">
              {formik.errors.claimType}
            </div>
          ) : null}
        </span>
        <label
          htmlFor="claimType"
          className="w-full h-12 px-4 py-2 font-Poppins  text-matteBlack text-md md:text-lg rounded-xl"
        >
          Which assessments are you claiming for?
        </label>
        <input
          id="assessments"
          name="assessments"
          type="text"
          placeholder="Separate each with a comma"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.assessments}
          className="w-full h-12 px-4 py-2 font-Poppins bg-lightBG text-matteBlack text-md md:text-lg rounded-xl"
        />
        {formik.touched.assessments && formik.errors.assessments && (
          <span className="w-full m-1 flex items-center gap-1 font-OpenSans text-dangerRed text-md md:text-lg">
            <i className="bx bx-error-circle"></i>
            {formik.errors.assessments}
          </span>
        )}
        <label
          htmlFor="claimType"
          className="w-full h-12 px-4 py-2 font-Poppins  text-matteBlack text-md md:text-lg rounded-xl"
        >
          Please explain the reason for claiming an EC
        </label>
        <input
          id="claimReason"
          name="claimReason"
          type="text"
          placeholder="Max 150 words"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.claimReason}
          className="w-full h-12 px-4 py-2 font-Poppins bg-lightBG text-matteBlack text-md md:text-lg rounded-xl"
        />
        {formik.touched.claimReason && formik.errors.claimReason && (
          <span className="w-full m-1 flex items-center gap-1 font-OpenSans text-dangerRed text-md md:text-lg">
            <i className="bx bx-error-circle"></i>
            {formik.errors.claimReason}
          </span>
        )}
        <p className="w-full h-12 px-4 py-2 font-Poppins  text-matteBlack text-md md:text-lg rounded-xl">
          By submitting this claim, you hereby declare that all the information
          provided is true to the best of my knowledge.
        </p>
        <button
          type="submit"
          className="w-full h-12 border-2 border-royalPurple m-2 rounded-full font-Nunito text-lg md:text-xl text-matteBlack hover:text-white hover:bg-royalPurple transition-colors duration-300"
        >
          Submit EC Claim
        </button>
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full h-12 border-2 border-royalPurple m-2 rounded-full font-Nunito text-lg md:text-xl text-matteBlack hover:text-white hover:bg-royalPurple transition-colors duration-300"
        >
          Go to Dashboard
        </button>
      </form>
    </main>
  );
};

export default ClaimECForm;
