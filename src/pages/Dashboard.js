import React from 'react';

const dashboardStyle = {
  padding: '20px'
};

const cardContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  marginBottom: '40px'
};

const activityCardStyle = {
  padding: '20px',
  border: '1px solid #e0e0e0',
  borderRadius: '8px',
  backgroundColor: 'white'
};

function Dashboard() {
  // Placeholder data - replace with data fetched from Firebase/API


  return (
    <div style={dashboardStyle}>
      <h1>AI Advisory Board - Main Dashboard</h1>

      {/* KPI/Metric Cards Section */}
      <div style={cardContainerStyle}>
        {/* If MetricCard is available, use it */}
        {/* {metrics.map((metric, index) => (
          <MetricCard key={index} title={metric.title} value={metric.value} />
        ))} */}
        
        {/* Placeholder rendering if MetricCard is not ready, based on your previous images */}
        <div style={{...activityCardStyle, flex: 1, textAlign: 'center'}}>
            <h3>Total Advisors</h3>
            <h2>42</h2>
        </div>
        <div style={{...activityCardStyle, flex: 1, textAlign: 'center'}}>
            <h3>Open Submissions</h3>
            <h2>15</h2>
        </div>
        <div style={{...activityCardStyle, flex: 1, textAlign: 'center'}}>
            <h3>Avg. Response Time</h3>
            <h2>3.4 Days</h2>
        </div>
      </div>
      
      {/* Recent Activity Section */}
      <div style={activityCardStyle}>
        <h2>Recent Advisor Activity</h2>
        {/* Placeholder for future list */}
        <p>Future list of recent events or advice submissions will appear here.</p>
        {/* If ActivityItem is available, use it */}
        {/* {recentActivity.map((activity, index) => (
          <ActivityItem key={index} activity={activity} />
        ))} */}
      </div>
    </div>
  );
}

export default Dashboard;
