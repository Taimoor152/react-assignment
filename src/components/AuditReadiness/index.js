import React from 'react';
import './AuditReadiness.css';

const AuditReadiness = () => {
  const readiness = 80;
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (readiness / 100) * circumference * 0.75;

  return (
    <div className="audit-readiness">
      <h2 className="section-title">Audit Readiness</h2>
      <div className="gauge-wrapper">
        <svg className="gauge-svg" viewBox="0 0 160 110">
          <path
            className="gauge-bg"
            d="M 15 95 A 60 60 0 0 1 145 95"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            className="gauge-fill"
            d="M 15 95 A 60 60 0 0 1 145 95"
            fill="none"
            stroke="#4caf50"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={circumference * 0.75}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <div className="gauge-center">
          <div className="gauge-value">{readiness}%</div>
          <div className="gauge-label">Readiness Level</div>
        </div>
      </div>
      <div className="stats-row">
        <div className="stat-item">
          <div className="stat-value red">12</div>
          <div className="stat-label">Overdue Stds</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">5</div>
          <div className="stat-label">Missing Evidence</div>
        </div>
      </div>
    </div>
  );
};

export default AuditReadiness;

