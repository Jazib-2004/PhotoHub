import React from "react";
import "./Sidebar.css";
import Subtitle from "../Subtitle/Subtitle";
import { TiCloudStorage } from "react-icons/ti";
import { GiNetworkBars } from "react-icons/gi";
const Sidebar = ({ storageUsage, networkUsage }) => {
  const calculatePercentage = (value, total) => {
    return `${(value / total) * 100}%`;
  };

  return (
    <aside className="sidebar__main">
      <Subtitle subtitle="Cherish you memory lane" />
      <div className="storage__network">
        <div className="storage">
          <div className="logo">
            <h4>Storage Usage </h4>
            <TiCloudStorage className="logo__main" />
          </div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: calculatePercentage(storageUsage, 10) }}
            ></div>
          </div>
          <p>{storageUsage.toFixed(3)}MB / 10MB</p>
        </div>
        <div className="network">
          <div className="logo">
            <h4>Network Usage </h4>
            <GiNetworkBars className="logo__main" />
          </div>
          <div className="progress-bar">
            <div
              className="progress"
              style={{ width: calculatePercentage(networkUsage, 25) }}
            ></div>
          </div>
          <p>{networkUsage.toFixed(3)}MB / 25MB</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
