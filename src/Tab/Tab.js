import React from 'react';
import './style.css';
import { useTab } from './TabContext';

function Tab({ label, index }) {
  const { tabIndex, setTabIndex } = useTab();
  console.log('tabIndex', tabIndex, index);
  return (
    <div
      onClick={() => setTabIndex(index)}
      className={`tab ${tabIndex === index ? 'tab-active' : ''}`}
    >
      {label}
    </div>
  );
}

export default Tab;
