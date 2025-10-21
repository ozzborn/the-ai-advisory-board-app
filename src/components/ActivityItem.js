import React from 'react';

const itemStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '10px 0',
  borderBottom: '1px solid #eee'
};

function ActivityItem({ action, advisor, time }) {
  return (
    <div style={itemStyle}>
      <span><strong>{advisor}</strong> {action}</span>
      <span style={{ color: '#888', fontSize: '0.9em' }}>{time}</span>
    </div>
  );
}

export default ActivityItem;