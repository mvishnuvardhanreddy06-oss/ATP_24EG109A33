import { createContext, useState } from "react";

export const counterContextObj = createContext();

function ContextProvider({ children }) {
  const [count, setCount] = useState(10);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <counterContextObj.Provider value={{ count, increment, decrement }}>
      {children}
    </counterContextObj.Provider>
  );
}

export default ContextProvider;