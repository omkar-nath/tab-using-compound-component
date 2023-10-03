import React, { createContext, useContext } from 'react';

const TabContext = createContext();

function useTab() {
  const context = useContext(TabContext);
  if (!context) {
    throw new Error('useTab must be used within TabContext Provider');
  }

  return context;
}

function TabProvider({ children, tabIndex, setTabIndex }) {
  return (
    <TabContext.Provider value={{ tabIndex, setTabIndex }}>
      {children}
    </TabContext.Provider>
  );
}

export { useTab };
export default TabProvider;
