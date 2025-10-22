// src/components/ActivityItem.js

import React from 'react';

const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #eee',
};

const titleStyle = {
    flex: 3,
    fontWeight: 'normal',
    color: '#343a40',
};

const statusStyle = (status) => {
    let color = '#6c757d'; // Default
    if (status === 'Completed') color = '#28a745'; // Green
    if (status === 'Open') color = '#dc3545'; // Red
    if (status === 'In Review') color = '#ffc107'; // Yellow
    
    return {
        flex: 1,
        fontWeight: 'bold',
        color: color,
        textAlign: 'right',
    };
};

const ActivityItem = ({ submission }) => {
    return (
        <div style={itemStyle}>
            <div style={titleStyle}>
                Status for **{submission.title}** changed to:
            </div>
            <div style={statusStyle(submission.status)}>
                {submission.status}
            </div>
        </div>
    );
};

export default ActivityItem;
