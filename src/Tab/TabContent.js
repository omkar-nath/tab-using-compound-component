import React from 'react';
import { useTab } from './TabContext';

function TabContent({ content, index }) {
  const { tabIndex } = useTab();

  return tabIndex === index && <div>{content}</div>;
}

export default TabContent;
