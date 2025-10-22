// src/components/MetricCard.js

import React from 'react';

const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    margin: '10px',
    flex: '1 1 30%', // Allows 3 cards to fit nicely on a row
    minWidth: '200px'
};

const titleStyle = {
    fontSize: '1.2em',
    color: '#6c757d',
    marginBottom: '10px',
};

const valueStyle = {
    fontSize: '2.5em',
    fontWeight: 'bold',
    color: '#007bff',
};

const MetricCard = ({ title, value }) => {
    return (
        <div style={cardStyle}>
            <div style={titleStyle}>{title}</div>
            <div style={valueStyle}>{value}</div>
        </div>
    );
};

export default MetricCard;
