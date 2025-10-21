import React from 'react';
import MetricCard from '../components/MetricCard'; // Import the new component

function Dashboard() {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <h2>AI Advisory Board - Main Dashboard</h2>

      {/* Use MetricCard components for KPIs */}
      <section style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <MetricCard title="Total Advisors" value="42" />
        <MetricCard title="Open Submissions" value="15" />
        <MetricCard title="Avg. Response Time" value="3.4 Days" />
      </section>

      {/* Placeholder for Activity Feed/List */}
      <section style={{ border: '1px solid #ccc', padding: '20px' }}>
        <h3>Recent Advisor Activity</h3>
        <p>Future list of recent events or advice submissions will appear here.</p>
      </section>
    </div>
  );
}

export default Dashboard;