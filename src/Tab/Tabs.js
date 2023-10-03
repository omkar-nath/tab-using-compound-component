import React from 'react';
import './style.css';

function Tabs({ children }) {
  return (
    <div className={'tabs'}>
      {children.map((val, index) => {
        return <div key={index}>{val}</div>;
      })}
    </div>
  );
}

export default Tabs;
