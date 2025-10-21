import React from 'react';

const rowStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr 1fr 1fr', // Defines columns for data
  padding: '12px 0',
  borderBottom: '1px solid #f0f0f0',
  alignItems: 'center'
};

function SubmissionRow({ id, title, status, advisor }) {
  // Simple status badge styling
  const statusStyle = {
    padding: '4px 8px',
    borderRadius: '4px',
    backgroundColor: status === 'Open' ? '#e6f7ff' : '#f0f0f0',
    color: status === 'Open' ? '#0050b3' : '#595959',
    fontWeight: 'bold'
  };

  return (
    <div style={rowStyle}>
      <span style={{fontWeight: 'bold'}}>{id}</span>
      <span>{title}</span>
      <span style={statusStyle}>{status}</span>
      <span>{advisor}</span>
    </div>
  );
}

export default SubmissionRow;