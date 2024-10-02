import React, { useState } from "react";
import MyContext from "./MyContext";

function MyProvider({ children }) {
  const [str, setStr] = useState("https://www.youtube.com/embed/LDU_Txk06tM");

  const changeStr = (value) => {
    setStr(value);
  };

  const contextValue = {
    str,
    changeStr,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
}

export default MyProvider;
