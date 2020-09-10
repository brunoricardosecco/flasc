import React, { createContext, useState } from "react";

const RouteContext = createContext({
  currentRoute: null,
  setCurrentRoute: null,
});

export function RouteProvider({ children }) {
  const [currentRoute, setCurrentRoute] = useState(null);
  return (
    <RouteContext.Provider value={{ currentRoute, setCurrentRoute }}>
      {children}
    </RouteContext.Provider>
  );
}

export default RouteContext;
