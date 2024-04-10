// Firebase imports
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
// Import function to get current formatted date
import { getCurrentDate } from "./getCurrentDate";
// Function to insert an EC claim to the firestore database
const claimEC = async (
  values,
  { resetForm, setError, setLoading, navigate }
) => {
  try {
    // Setting the loading callback state to true while the insert command is running
    setLoading(true);
    await addDoc(collection(db, "ecClaims"), {
      studentID: values.sid,
      userID: values.uid,
      guidance: values.guidance,
      claimType: values.claimType,
      claimReason: values.claimReason,
      assessments: values.assessments,
      status: false,
      date: getCurrentDate(),
    });
    // Resetting the form and setting the loading callback state to false and error state to null
    resetForm();
    setError(null);
    setLoading(false);
    // Redirect to dashboard after successful submission of EC claim
    navigate("/dashboard");
  } catch (e) {
    // Catch and errors and log to the console
    console.error(e);
    setError("An error occurred. Please try again.");
    setLoading(false);
  }
};

export { claimEC };
