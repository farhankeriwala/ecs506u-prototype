// Firebase imports
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../config/firebase";

const getStudentECs = async (uid) => {
  try {
    // A query to filter out the ECs based on the student ID
    const q = query(collection(db, "ecClaims"), where("userID", "==", uid));

    // Executing the query
    const studentECCollection = await getDocs(q);

    // Mapping the returned documents and using the document ID as the unique ID
    return studentECCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id, // Using the document ID as the ID for each document
    }));
  } catch (e) {
    console.log("Error fetching ECs:", e.message);
    return [];
  }
};

export { getStudentECs };
