import React from 'react';
import './Dashboard.css';
import ProjectTimeline from '../../components/ProjectTimeline';
import KeyMetrics from '../../components/KeyMetrics';
import ProgressStatus from '../../components/ProgressStatus';
import ComplianceScore from '../../components/ComplianceScore';
import TopLeaders from '../../components/TopLeaders';
import RecentActivities from '../../components/RecentActivities';
import PerformanceChart from '../../components/PerformanceChart';
import AuditReadiness from '../../components/AuditReadiness';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      {/* Project Timeline Row */}
      <section className="dashboard-row">
        <ProjectTimeline />
      </section>

      {/* Key Metrics Row */}
      <section className="dashboard-row">
        <KeyMetrics />
      </section>

      {/* Progress Status Row */}
      <section className="dashboard-row">
        <ProgressStatus />
      </section>

      {/* Middle Row: Compliance, Leaders, Activities */}
      <section className="dashboard-row three-col">
        <div className="col">
          <ComplianceScore />
        </div>
        <div className="col">
          <TopLeaders />
        </div>
        <div className="col">
          <RecentActivities />
        </div>
      </section>

      {/* Bottom Row: Performance Chart and Audit Readiness */}
      <section className="dashboard-row two-col">
        <div className="col-large">
          <PerformanceChart />
        </div>
        <div className="col-small">
          <AuditReadiness />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

