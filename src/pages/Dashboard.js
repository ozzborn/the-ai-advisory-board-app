import React from 'react';
import MetricCard from '../components/MetricCard';
import ActivityItem from '../components/ActivityItem'; // New Import

function Dashboard() {
  // Data to display in the feed
  const recentActivity = [
    { id: 1, advisor: "Alice Smith", action: "submitted a new policy brief.", time: "5 minutes ago" },
    { id: 2, advisor: "Bob Johnson", action: "reviewed a technical proposal.", time: "1 hour ago" },
    { id: 3, advisor: "Carol Davis", action: "updated status of 'Ethics AI' project.", time: "2 hours ago" },
  ];

  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '30px' }}>

      {/* Metric Cards Section (No change needed here) */}
      <section style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <MetricCard title="Total Advisors" value="42" />
        <MetricCard title="Open Submissions" value="15" />
        <MetricCard title="Avg. Response Time" value="3.4 Days" />
      </section>

      {/* New: Activity Feed Section */}
      <section style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <h3>Recent Advisor Activity</h3>
        {/* Map over the data to render a list of ActivityItems */}
        <div>
          {recentActivity.map(item => (
            <ActivityItem 
              key={item.id} 
              advisor={item.advisor} 
              action={item.action} 
              time={item.time} 
            />
          ))}
        </div>
      </section>

    </div>
  );
}

export default Dashboard;