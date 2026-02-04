import React from 'react';
import './ProjectTimeline.css';
import { timelineMilestones } from '../../data/mockData';

const ProjectTimeline = () => {
  return (
    <div className="project-timeline">
      <h2 className="section-title">Project Timeline</h2>
      <div className="timeline-track">
        <div className="timeline-line"></div>
        <div className="timeline-progress"></div>
        <div className="milestones">
          {timelineMilestones.map((milestone, index) => (
            <div key={index} className="milestone">
              <div className={`milestone-dot ${milestone.status}`}></div>
              <div className="milestone-info">
                <span className="milestone-date">{milestone.date}</span>
                <span className="milestone-label">{milestone.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTimeline;
