import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {


  return (
    <GlobalContext.Provider value={{teste: "oi"}}>
      {}
      {children}
    </GlobalContext.Provider>
  );
};
COPIAR
Produto.js