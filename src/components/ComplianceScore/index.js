import React from 'react';
import './ComplianceScore.css';

const ComplianceScore = () => {
  const score = 65;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference * 0.75;

  return (
    <div className="compliance-score">
      <h2 className="section-title">Overall Compliance Score</h2>
      <div className="gauge-wrapper">
        <svg className="gauge-svg" viewBox="0 0 200 130">
          <defs>
            <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f44336" />
              <stop offset="50%" stopColor="#ff9800" />
              <stop offset="100%" stopColor="#4caf50" />
            </linearGradient>
          </defs>
          <path
            className="gauge-bg"
            d="M 20 110 A 70 70 0 0 1 180 110"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <path
            className="gauge-fill"
            d="M 20 110 A 70 70 0 0 1 180 110"
            fill="none"
            stroke="#f44336"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={circumference * 0.75}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <div className="gauge-center">
          <div className="gauge-value">{score}%</div>
          <div className="gauge-label">Basic Standards 2025</div>
        </div>
      </div>
    </div>
  );
};

export default ComplianceScore;

