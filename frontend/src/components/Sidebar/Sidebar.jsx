import React from 'react';
import './Sidebar.css';
import Subtitle from '../Subtitle/Subtitle';
const Sidebar = ({ storageUsage, networkUsage }) => {
  const calculatePercentage = (value, total) => {
    return `${(value / total) * 100}%`;
  };

  return (
    <aside className="sidebar__main">
      <Subtitle subtitle="Cherish you memory lane"/>
      <div>
      <div className="storage">
        <h3>Storage Usage</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: calculatePercentage(storageUsage, 25) }}></div>
        </div>
        <p>{storageUsage}MB / 25MB</p>
      </div>
      <div className="network">
        <h3>Network Usage</h3>
        <div className="progress-bar">
          <div className="progress" style={{ width: calculatePercentage(networkUsage, 50) }}></div>
        </div>
        <p>{networkUsage}MB / 50MB</p>
      </div>
      </div>
    </aside>
  );
};

export default Sidebar;
