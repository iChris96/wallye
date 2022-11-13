import { useState, createContext, useRef } from 'react';

export const SelectionContext = createContext();

const SelectionProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const updateSelected = useRef();

  const value = {
    items,
    setItems,
    updateSelected,
  };

  return (
    <SelectionContext.Provider value={value}>
      {children}
    </SelectionContext.Provider>
  );
};

export default SelectionProvider;
