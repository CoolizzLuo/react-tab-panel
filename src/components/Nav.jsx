import React from 'react';
import Aa from './Aa';
import Bb from './Bb';
import Cc from './Cc';
import Dd from './Dd';
import Ee from './Ee';
import Ff from './Ff';

const Nav = ({ componentTabPanel, setComponentTabPanel, activeTab, setActiveTab }) => {
  const handleClick = (componentName, component) => {
    if (!componentTabPanel.hasOwnProperty(componentName)) {
      setComponentTabPanel({
        ...componentTabPanel,
        [componentName]: component,
      });
    }
    setActiveTab(componentName);
  };

  return (
    <nav>
      <ul>
        <li className={ activeTab === 'Aa' ? 'active' : ''} onClick={() => handleClick('Aa', <Aa />)}>Component A</li>
        <li className={ activeTab === 'Bb' ? 'active' : ''} onClick={() => handleClick('Bb', <Bb />)}>Component B</li>
        <li className={ activeTab === 'Cc' ? 'active' : ''} onClick={() => handleClick('Cc', <Cc />)}>Component C</li>
        <li className={ activeTab === 'Dd' ? 'active' : ''} onClick={() => handleClick('Dd', <Dd />)}>Component D</li>
        <li className={ activeTab === 'Ee' ? 'active' : ''} onClick={() => handleClick('Ee', <Ee />)}>Component E</li>
        <li className={ activeTab === 'Ff' ? 'active' : ''} onClick={() => handleClick('Ff', <Ff />)}>Component F</li>
      </ul>
    </nav>
  );
};

export default Nav;
