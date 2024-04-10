import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { getCurrentDate } from "./getCurrentDate";

// Function to add a service issue to the database
const reportIssue = async (
  values,
  { resetForm, setError, setLoading, navigate }
) => {
  try {
    const reportedBy = values.reportedBy || "Anonymous";
    const issue = {
      issueType: values.issueType,
      issueLocation: values.issueLocation,
      issueMachine: values.issueMachine,
      issueDescription: values.issueDescription,
      reportedBy: reportedBy,
      issueStatus: true,
      reportedOn: getCurrentDate(),
    };
    await addDoc(collection(db, "tickets"), issue);
    resetForm();
    setError(null);
    setLoading(false);
    window.alert("Issue Reported Successfully.");
    navigate("/dashboard");
  } catch (e) {
    window.alert(
      "There was an error while reporting the issue, please try again."
    );
    console.log("Error inserting into database: " + e.message);
    setLoading(false);
  }
};


export { reportIssue };
