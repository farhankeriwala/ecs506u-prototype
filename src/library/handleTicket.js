import { updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const solveTicket = async (ticketID) => {
  const confirmation = confirm("Are you sure this issue has been resolved?");
  if (confirmation) {
    const newStatus = { issueStatus: false }; // Update to issueStatus
    const ticketDoc = doc(db, "tickets", ticketID);
    await updateDoc(ticketDoc, newStatus);
    window.location.reload();
  } else {
    console.log("Ticket could not be updated");
  }
};

const unsolveTicket = async (ticketID) => {
  const confirmation = confirm(
    "Are you sure this issue has not been resolved?"
  );
  if (confirmation) {
    const newStatus = { issueStatus: true }; // Update to issueStatus
    const ticketDoc = doc(db, "tickets", ticketID);
    await updateDoc(ticketDoc, newStatus);
    window.location.reload();
  } else {
    console.log("Ticket could not be updated");
  }
};

export { solveTicket, unsolveTicket };
