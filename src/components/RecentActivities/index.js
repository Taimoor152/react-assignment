import React from 'react';
import './RecentActivities.css';
import { recentActivities } from '../../data/mockData';

const RecentActivities = () => {
  return (
    <div className="recent-activities">
      <h2 className="section-title">Recent Activities</h2>
      <div className="activities-list">
        {recentActivities.map((activity, index) => (
          <div key={index} className="activity-item">
            <div className="activity-dot"></div>
            <div className="activity-content">
              <div className="activity-text">{activity.text}</div>
              <div className="activity-time">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivities;
