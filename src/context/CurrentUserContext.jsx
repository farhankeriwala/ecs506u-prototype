import { createContext, useContext, useState, useEffect } from "react";
import { authentication } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

import PropTypes from "prop-types";

const CurrentUserContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useCurrentUser = () => useContext(CurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      {children}
    </CurrentUserContext.Provider>
  );
};

CurrentUserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
