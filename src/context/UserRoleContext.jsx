/*
Assigned to: Farhan 
Tasks: Create the UserRole Context.
*/
import { createContext, useContext, useState, useEffect } from "react";
// Importing the current user context
import { useCurrentUser } from "../context/CurrentUserContext";
// Importing prop types for prop validation
import PropTypes from "prop-types";
// Firebase imports
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";

// Initializing the UserRole Context
const UserRoleContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useUserRole = () => useContext(UserRoleContext);
// UserRole Context Provider
export const UserRoleProvider = ({ children }) => {
  // State to manage the user role
  const [userRole, setUserRole] = useState(null);
  // Getting the current user from the currentUser context
  const currentUser = useCurrentUser();

  // Fetching the user role
  useEffect(() => {
    const getUserDetails = async () => {
      // We only fetch the user role if a user is defined (i.e. signed in)
      if (currentUser && currentUser.uid) {
        const userDocRef = doc(db, "users", currentUser.uid);
        try {
          const response = await getDoc(userDocRef);
          if (response) {
            const userData = response.data();
            // Set the user role to the value fomr firestore collection
            setUserRole(userData.role);
          } else {
            console.log("User document does not exist");
          }
        } catch (error) {
          console.error("Error getting user document:", error);
        }
      }
    };
    // Calling the function
    getUserDetails();
  }, [currentUser]);

  return (
    <UserRoleContext.Provider value={userRole}>
      {children}
    </UserRoleContext.Provider>
  );
};

// Props Validation
UserRoleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
