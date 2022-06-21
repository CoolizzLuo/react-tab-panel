import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Nav from './components/Nav';
import Content from './components/Content';
import Aa from './components/Aa';
import Bb from './components/Bb';

function App() {
  const [componentTabPanel, setComponentTabPanel] = useState({});
  const [activeTab, setActiveTab] = useState('Aa');
  useEffect(() => {
    setComponentTabPanel({
      ...componentTabPanel,
      Aa: <Aa />,
    });
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Nav
          componentTabPanel={componentTabPanel}
          setComponentTabPanel={setComponentTabPanel}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Content
          componentTabPanel={componentTabPanel}
          setComponentTabPanel={setComponentTabPanel}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </Container>
    </>
  );
}

export default App;
