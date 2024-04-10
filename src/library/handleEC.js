import { updateDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

const rejectEC = async (ecid) => {
  const confirmation = confirm("Are you sure you want to reject this EC claim?");
  if (confirmation) {
    const newStatus = { status: false };
    const claimDoc = doc(db, "ecClaims", ecid);
    await updateDoc(claimDoc, newStatus);
    console.log("EC claim rejected successfully.");
    window.location.reload(); // Refresh the page after rejection
  } else {
    console.log("EC claim rejection canceled.");
  }
};

const approveEC = async (ecid) => {
  const confirmation = confirm("Are you sure you want to approve this EC claim?");
  if (confirmation) {
    const newStatus = { status: true };
    const claimDoc = doc(db, "ecClaims", ecid);
    await updateDoc(claimDoc, newStatus);
    console.log("EC claim approved successfully.");
    window.location.reload(); // Refresh the page after approval
  } else {
    console.log("EC claim approval canceled.");
  }
};

export { rejectEC, approveEC };
