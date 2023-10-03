import React, { useState } from 'react';
import './style.css';
import Tabs from './Tab/Tabs';
import Tab from './Tab/Tab';
import TabContent from './Tab/TabContent';
import TabProvider from './Tab/TabContext';

export default function App() {
  const [index, setIndex] = useState(0);

  function setTabIndex(index) {
    setIndex(index);
  }

  return (
    <TabProvider tabIndex={index} setTabIndex={setTabIndex}>
      <Tabs>
        <Tab label="ITEM 1" index="0" />
        <Tab label="ITEM 2" index="1" />
        <Tab label="ITEM 3" index="2" />
      </Tabs>
      <TabContent
        content={'Hi there, this is first element'}
        index="0"
      ></TabContent>
      <TabContent
        content="Hi there, this is second element"
        index="1"
      ></TabContent>
      <TabContent
        content="Hi there, this is third element"
        index="2"
      ></TabContent>
    </TabProvider>
  );
}
