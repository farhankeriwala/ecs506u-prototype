/*
Assigned to: Adekoyejo 
Tasks: Create the form as in the design Cristina made.
Guide: Have a look at the form I have made in LoginForm.jsx. I have used Formik for easy validation
*/

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoadingSpinner from "../components/LoadingSpinner";
import { reportIssue } from "../library/reportIssue";
import { useCurrentUser } from "../context/CurrentUserContext";

const validate = (values) => {
  const errors = {};
  if (!values.issueType) {
    errors.issueType = "Please select the type of issue.";
  }
  if (!values.issueLocation) {
    errors.issueLocation = "Please enter the location of the issue.";
  }
  if (!values.issueDescription) {
    errors.issueDescription = "Please describe the issue.";
  }
  return errors;
};
const ReportIssueForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const user = useCurrentUser();
  const formik = useFormik({
    initialValues: {
      issueType: "",
      issueLocation: "",
      issueMachine: "",
      issueDescription: "",
      resportedBy: user.uid,
    },
    validate,
    onSubmit: (values, { resetForm }) =>
      reportIssue(values, { resetForm, setError, setLoading, navigate }),
  });
  return (
    <div className="flex items-center justify-center h-screen p-4">
      <main className="w-full md:w-auto">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-8 w-full md:w-[750px] p-10 bg-white rounded-[32px]"
        >
          <h1 className="font-Roboto text-xl md:text-3xl text-matteBlack text-center">
            Report a Service Issue
          </h1>
          {error && (
            <span className="w-full m-1 flex items-center gap-1 font-OpenSans text-dangerRed text-md md:text-lg">
              <i className="bx bx-error-circle"></i>
              {error}
            </span>
          )}
          <span>
            <label
              htmlFor="guidance"
              className="w-full h-12 px-4 py-2 font-Poppins text-matteBlack text-md md:text-lg rounded-xl"
            >
              Issue Type:
            </label>
            <select
              id="issueType"
              name="issueType"
              value={formik.values.issueType} // Use value prop to indicate the selected option
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="font-Poppins text-matteBlack text-md md:text-lg rounded-xl"
            >
              <option
                value="" // Use value prop to set the value of the option
                disabled
                hidden
              >
                Select Issue Type
              </option>
              <option value="EE">EE</option>
              <option value="ITL">ITL</option>
              <option value="ITS">ITS</option>
            </select>
          </span>
          <input
            id="issueLocation"
            name="issueLocation"
            type="issueLocation"
            placeholder="Enter the location of the issue (e.g TB - G202)"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.issueLocation}
            className="w-full h-12 px-4 py-2 font-Poppins bg-lightBG text-matteBlack text-md md:text-lg rounded-xl"
          />
          {formik.touched.issueLocation && formik.errors.issueLocation && (
            <span className="w-full m-1 flex items-center gap-1 font-OpenSans text-dangerRed text-md md:text-lg">
              <i className="bx bx-error-circle"></i>
              {formik.errors.issueType}
            </span>
          )}
          <input
            id="issueMachine"
            name="issueMachine"
            type="issueMachine"
            placeholder="Enter ID of the issue machine (optional)"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.issueMachine}
            className="w-full h-12 px-4 py-2 font-Poppins bg-lightBG text-matteBlack text-md md:text-lg rounded-xl"
          />
          {formik.touched.issueMachine && formik.errors.issueMachine && (
            <span className="w-full m-1 flex items-center gap-1 font-OpenSans text-dangerRed text-md md:text-lg">
              <i className="bx bx-error-circle"></i>
              {formik.errors.issueMachine}
            </span>
          )}
          <input
            id="issueDescription"
            name="issueDescription"
            type="issueDescription"
            placeholder="Enter a brief description of the issue."
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.issueDescription}
            className="w-full h-12 px-4 py-2 font-Poppins bg-lightBG text-matteBlack text-md md:text-lg rounded-xl"
          />
          {formik.touched.issueDescription &&
            formik.errors.issueDescription && (
              <span className="w-full m-1 flex items-center gap-1 font-OpenSans text-dangerRed text-md md:text-lg">
                <i className="bx bx-error-circle"></i>
                {formik.errors.issueDescription}
              </span>
            )}
          <button
            type="submit"
            disabled={loading} // Disable button when loading
            className=" w-full h-12 border-2 border-royalPurple m-2 rounded-full font-Nunito text-lg md:text-xl text-matteBlack hover:text-white hover:bg-royalPurple transition-colors duration-300"
          >
            {loading ? ( // Show loading spinner if loading
              <LoadingSpinner />
            ) : (
              <span className="flex items-center gap-2 text-center justify-center">
                Report Issue
              </span>
            )}
          </button>
          <button
            onClick={() => navigate("/dashboard")}
            type="submit"
            disabled={loading}
            className=" w-full h-12 border-2 border-royalPurple m-2 rounded-full font-Nunito text-lg md:text-xl text-matteBlack hover:text-white hover:bg-royalPurple transition-colors duration-300"
          >
            {loading ? (
              <LoadingSpinner />
            ) : (
              <span className="flex items-center gap-2 text-center justify-center">
                Go to Dashboard
              </span>
            )}
          </button>
        </form>
      </main>
    </div>
  );
};

export default ReportIssueForm;
