import React, { createContext, useEffect, useState, useContext } from "react";

// TYPES
type ContextControllerType = {
  children: React.ReactNode;
};

type StateType = {
  name: string;
};

// context
const Context = createContext({});

const handledataUpdate = function ({
  type = "",
  state = {},
  setState = () => {},
}) {
  return () => {
    switch (type) {
      case "HIGHLIGHT_EN":
        setState(state);
      case "HIGHLIGHT_CZ":
        setState(state);
      case "RESET_SETTING":
      default:
        return null;
    }
  };
};

// context - controller
export const ContextController = ({ children }: ContextControllerType) => {
  const [state, setState] = useState<StateType>(() => ({
    name: "Juraj Hynek",
  }));


  useEffect(() => {}, []);

  // should me memoised ?
  // maybe
  // give it time
  const value = { state };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default () => {
  try {
    const ctx = useContext(Context);
    return ctx;
  } catch (err) {
    console.log("eror in useContext", err.message);
    return null;
  }
};
