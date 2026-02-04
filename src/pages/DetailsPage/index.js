import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DetailsPage.css';
import { criterionDetails } from '../../data/mockData';
import EvidenceTable from './EvidenceTable';
import CommentsSection from './CommentsSection';

const DetailsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const data = criterionDetails;

  return (
    <div className="details-page">
      {/* Page Header */}
      <div className="page-header">
        <button className="back-button" onClick={() => navigate('/')}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="page-title">{data.title}</h1>
      </div>

      {/* Info Card */}
      <div className="info-card">
        <div className="info-card-content">
          <span className="category-badge">{data.category}</span>
          <h2 className="info-title">{data.title}</h2>
          <p className="info-description">{data.description}</p>
        </div>
        <div className="progress-circle">
          <svg viewBox="0 0 100 100">
            <circle
              className="progress-bg"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#e0e0e0"
              strokeWidth="8"
            />
            <circle
              className="progress-fill"
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#4caf50"
              strokeWidth="8"
              strokeDasharray={2 * Math.PI * 45}
              strokeDashoffset={2 * Math.PI * 45 * (1 - data.progress / 100)}
              transform="rotate(-90 50 50)"
            />
          </svg>
          <span className="progress-text">{data.progress}%</span>
        </div>
      </div>

      {/* Evidence Summary Cards */}
      <div className="evidence-summary">
        <div className="summary-card">
          <div className="summary-icon orange">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-value">{data.evidenceSummary.total}</span>
            <span className="summary-label">Total Evidence</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon blue">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-value">{data.evidenceSummary.underReview}</span>
            <span className="summary-label">Under Review Evidence</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon yellow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-value">{data.evidenceSummary.inProgress}</span>
            <span className="summary-label">In Progress Evidence</span>
          </div>
        </div>
        <div className="summary-card">
          <div className="summary-icon green">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
              <path d="M22 4L12 14.01l-3-3" />
            </svg>
          </div>
          <div className="summary-content">
            <span className="summary-value">{data.evidenceSummary.completed}</span>
            <span className="summary-label">Completed Evidence</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`tab-btn ${activeTab === 'evidence' ? 'active' : ''}`}
          onClick={() => setActiveTab('evidence')}
        >
          Evidence
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' ? (
        <div className="tab-content">
          <div className="content-card">
            <div className="content-row">
              <div className="content-label">Objective</div>
              <div className="content-value">{data.overview.objective}</div>
            </div>
            <div className="content-row">
              <div className="content-label">Implementation Requirements</div>
              <div className="content-value">
                {data.overview.implementationRequirements.map((req, index) => (
                  <p key={index} className="requirement-item">{req}</p>
                ))}
              </div>
            </div>
            <div className="content-row">
              <div className="content-label">Evidence Documents</div>
              <div className="content-value highlight">{data.overview.evidenceDocuments}</div>
            </div>
            <div className="content-row">
              <div className="content-label">Related Regulations</div>
              <div className="content-value">{data.overview.relatedRegulations}</div>
            </div>
            <div className="content-row">
              <div className="content-label">Scope</div>
              <div className="content-value">{data.overview.scope}</div>
            </div>
          </div>

          {/* Leaders Section */}
          <div className="leaders-section">
            <h3 className="section-title">Leaders</h3>
            <div className="leaders-list">
              {data.leaders.map((leader, index) => (
                <div key={index} className="leader-item">
                  <img src={leader.avatar} alt={leader.name} className="leader-avatar" />
                  <div className="leader-info">
                    <span className="leader-name">{leader.name}</span>
                    <span className="leader-role">{leader.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="tab-content evidence-tab">
          <div className="evidence-main">
            <EvidenceTable documents={data.evidenceDocuments} />
            <CommentsSection comments={data.comments} />
          </div>
          <div className="evidence-sidebar">
            <div className="sidebar-card">
              <h3 className="sidebar-title">Recent Activities</h3>
              <div className="activities-list">
                {data.recentActivities.map((activity, index) => (
                  <div key={index} className="activity-item">
                    <span className="activity-dot"></span>
                    <div className="activity-content">
                      <p className="activity-text">{activity.text}</p>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;

