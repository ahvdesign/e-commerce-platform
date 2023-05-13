import { createContext, useState } from "react";

// TODO LTT

// This is actual value I want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

// This is the component that is returned
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
