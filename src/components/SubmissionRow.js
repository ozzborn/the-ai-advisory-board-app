import React from 'react';

const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 0',
    borderBottom: '1px solid #e0e0e0',
    cursor: 'pointer',
    transition: 'background-color 0.1s',
};

const cellStyle = {
    flex: 1,
    padding: '0 10px',
    textAlign: 'left',
};

const SubmissionRow = ({ submission }) => {
    // Determine status color
    const statusColor = submission.status === 'Open' ? '#dc3545' : '#28a745';
    
    // Style for the Status indicator
    const statusStyle = {
        ...cellStyle,
        flex: 0.5, // Make status column a bit narrower
        color: statusColor,
        fontWeight: 'bold',
    };

    return (
        // Add a hover effect for a better user experience
        <div 
            style={rowStyle}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#f4f4f4'}
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'white'}
            onClick={() => console.log(`Viewing submission: ${submission.title}`)}
        >
            <div style={{...cellStyle, fontWeight: 'bold'}}>{submission.title}</div>
            <div style={cellStyle}>{submission.advisor}</div>
            <div style={statusStyle}>{submission.status}</div>
            <div style={{...cellStyle, flex: 0.5, textAlign: 'right'}}>{submission.date}</div>
        </div>
    );
};

export default SubmissionRow;
