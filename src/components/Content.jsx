import React from 'react'
import TabPanel from './TabPanel'

const Content = ({ componentTabPanel, setComponentTabPanel, activeTab, setActiveTab }) => {
  return (
    <main>
      <TabPanel componentTabPanel={componentTabPanel} setComponentTabPanel={setComponentTabPanel} activeTab={activeTab} setActiveTab={setActiveTab} />
      {Object.entries(componentTabPanel).map(([key, component]) => (
        <div key={key} style={{ display: activeTab !== key && 'none'}}>
          {component}
        </div>
      ))}
    </main>
  )
}

export default Content