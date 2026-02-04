import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProgressStatus.css';
import { progressCategories } from '../../data/mockData';
import CategoryColumn from './CategoryColumn';

const ProgressStatus = () => {
  const navigate = useNavigate();

  const handleSubcategoryClick = (categoryId, subcategoryId) => {
    navigate(`/details/${categoryId}`);
  };

  return (
    <div className="progress-status">
      <div className="progress-header">
        <h2 className="section-title">Progress Status</h2>
        <div className="status-legend">
          <div className="legend-item">
            <span className="legend-dot not-started"></span>
            <span>Not Started</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot in-progress"></span>
            <span>In Progress</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot completed"></span>
            <span>Completed</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot partially-uploaded"></span>
            <span>Partially Uploaded</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot fully-uploaded"></span>
            <span>Fully Uploaded</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot delayed"></span>
            <span>Delayed</span>
          </div>
        </div>
      </div>

      <div className="categories-grid">
        {progressCategories.map((category, index) => (
          <CategoryColumn 
            key={index} 
            category={category} 
            onSubcategoryClick={handleSubcategoryClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProgressStatus;
