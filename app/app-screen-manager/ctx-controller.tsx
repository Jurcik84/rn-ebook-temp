import React, { createContext, useEffect, useState, useContext } from "react";

const NavScreenContext = createContext({});

export const NavScreenContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => ({
    name: "Juraj Hynek",
  }));

  const handleUserDataUpdate = ({ type = "", data = {} }) => {
    switch (type) {
      case "A":
        setUserData(data);
      case "B":
        setUserData(data);
      default:
        return null;
    }
  };

  useEffect(() => {}, []);

  const value = { userData, handleUserDataUpdate };

  return (
    <NavScreenContext.Provider value={value}>
      {children}
    </NavScreenContext.Provider>
  );
};

export default () => {
  try {
    const ctx = useContext(NavScreenContext);
    return ctx;
  } catch (err) {
    console.log("eror in useContext", err.message);
    return null;
  }
};
