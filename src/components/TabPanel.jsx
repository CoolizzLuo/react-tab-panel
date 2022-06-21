import React from 'react';

const TapPanel = ({ componentTabPanel, setComponentTabPanel, activeTab, setActiveTab }) => {
  const handleActive = (componentName) => {
    console.log('111');
    setActiveTab(componentName);
  };
  const handleClose = (event, componentName) => {
    const _temp = { ...componentTabPanel };
    delete _temp[componentName];
    setComponentTabPanel(_temp);
    event.stopPropagation();
  };
  return (
    <ul className='tabPanel'>
      {Object.entries(componentTabPanel).map(([key, component]) => (
        <li key={`tab-${key}`} className={activeTab === key ? 'active' : ''} onClick={() => handleActive(key)}>
          {key}
          <span onClick={(event) => handleClose(event, key)}>x</span>
        </li>
      ))}
    </ul>
  );
};

export default TapPanel;
