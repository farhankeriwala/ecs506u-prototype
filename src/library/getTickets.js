// Firebase imports
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../config/firebase";

// Function to get all the service tickets from the firestore database
const getTickets = async () => {
  try {
    const q = query(collection(db, "tickets"), orderBy("reportedOn", "desc"));
    
    // Get all the service tickets based on the query
    const response = await getDocs(q);
    
    // Return a formatted object containing the service ticket's fields
    return response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  } catch (e) {
    // Catch any errors and log to the console
    console.log("Error fetching tickets: " + e.message);
    return [];
  }
};

export { getTickets };
