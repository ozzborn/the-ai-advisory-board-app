import React from 'react';

const cardStyle = {
  padding: '20px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
  flex: 1, 
  minWidth: '200px',
  textAlign: 'center'
};

function MetricCard({ title, value }) {
  return (
    <div style={cardStyle}>
      <h4>{title}</h4>
      <h2>{value}</h2>
    </div>
  );
}

export default MetricCard;