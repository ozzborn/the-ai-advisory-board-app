import React from 'react';

function Dashboard() {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
      <h2>AI Advisory Board - Main Dashboard</h2>

      {/* Placeholder for Key Metrics */}
      <section style={{ border: '1px solid #ccc', padding: '20px' }}>
        <h3>Key Performance Indicators (KPIs)</h3>
        <p>Future data charts and metric cards will be displayed here.</p>
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