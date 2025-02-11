// VisibilityContext.tsx
import React, { createContext, useState, useContext } from "react";

interface VisibilityContextType {
  isNavbarVisible: boolean;
  isSearchVisible: boolean;
  setNavbarVisibility: (visible: boolean) => void;
  setSearchVisibility: (visible: boolean) => void;
}

const VisibilityContext = createContext<VisibilityContextType | undefined>(
  undefined
);

export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isNavbarVisible, setNavbarVisible] = useState(true);
  const [isSearchVisible, setSearchVisible] = useState(true);

  const setNavbarVisibility = (visible: boolean) => {
    setNavbarVisible(visible);
  };

  const setSearchVisibility = (visible: boolean) => {
    setSearchVisible(visible);
  };

  return (
    <VisibilityContext.Provider
      value={{
        isNavbarVisible,
        isSearchVisible,
        setSearchVisibility,
        setNavbarVisibility,
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};

export const useVisibility = () => {
  const context = useContext(VisibilityContext);
  if (!context) {
    throw new Error("useVisibility must be used within a VisibilityProvider");
  }
  return context;
};
