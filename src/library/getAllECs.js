import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const getAllECs = async () => {
  try {
    // Executing the query
    const studentECCollection = await getDocs(collection(db, "ecClaims"));

    // Mapping the returned documents and givving each a unique ID
    return studentECCollection.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
  } catch (e) {
    console.log("Error fetching ECs:", e.message);
    return [];
  }
};

export { getAllECs };
