import React from 'react';
import './TopLeaders.css';
import { topLeaders } from '../../data/mockData';

const TopLeaders = () => {
  return (
    <div className="top-leaders">
      <h2 className="section-title">Top Performing Perspective Leaders</h2>
      <div className="leaders-list">
        {topLeaders.map((leader, index) => (
          <div key={index} className="leader-item">
            <div className="leader-avatar">
              <img src={leader.avatar} alt={leader.name} />
            </div>
            <div className="leader-info">
              <div className="leader-name">{leader.name}</div>
              <div className="leader-perspective">{leader.perspective}</div>
            </div>
            <div className="leader-score">{leader.score}%</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopLeaders;
