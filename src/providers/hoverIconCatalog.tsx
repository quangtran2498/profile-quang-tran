import React, { useState, useMemo } from "react";

const ContextErrorNetwork = React.createContext<any>(null);
export const useCheckHoverIconCatalog = () => React.useContext(ContextErrorNetwork);
const ProvidersCheckHoverIconCatalog = ({ children }:any) => {
  const [hover, setHover] = useState(null);

  const value = useMemo(() => {
    return {
      hover,
      setHover,
    };
  }, [hover, setHover]);
  return (
    <ContextErrorNetwork.Provider value={value}>
      {children}
    </ContextErrorNetwork.Provider>
  );
};
export default ProvidersCheckHoverIconCatalog;