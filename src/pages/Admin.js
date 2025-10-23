// src/pages/Admin.js

import React from 'react';
import AddAdvisorForm from '../components/AddAdvisorForm'; 

const containerStyle = {
    padding: '20px',
};

function Admin() {
    return (
        <div style={containerStyle}>
            <h1>Admin Panel & Board Configuration</h1>
            <p>Use this page to manage the list of active advisors and initiate new board discussions.</p>
            
            {/* Advisor Management Section will go here */}
            <h2 style={{marginTop: '30px'}}>Advisor Management</h2>
            <AddAdvisorForm /> {/* <-- USE THE NEW COMPONENT HERE */}

            <div style={{border: '1px dashed #ccc', padding: '20px', minHeight: '150px'}}>
                {/* Advisor list will be displayed here soon */}
                Advisor list coming soon...
            </div>
            
            {/* New Discussion Initiation Section will go here */}
            <h2 style={{marginTop: '30px'}}>Initiate New Discussion</h2>
            <button style={{padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>
                Start Initial Board Conversation
            </button>

        </div>
    );
}

export default Admin;
