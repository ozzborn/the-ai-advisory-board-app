// src/components/AdvisorRow.js

import React, { useState } from 'react';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';

const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 15px',
    borderBottom: '1px solid #eee',
    backgroundColor: 'white',
};

const activeStyle = {
    ...rowStyle,
    backgroundColor: '#e6ffe6', // Light green for active
};

const textStyle = {
    flex: '1',
    marginRight: '10px',
};

const statusButtonStyle = (isActive) => ({
    padding: '8px 15px',
    borderRadius: '20px',
    border: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
    backgroundColor: isActive ? '#28a745' : '#dc3545', // Green if active, Red if inactive
    color: 'white',
    transition: 'background-color 0.2s',
});


function AdvisorRow({ advisor }) {
    const [isUpdating, setIsUpdating] = useState(false);

    const handleToggleActive = async () => {
        setIsUpdating(true);
        const newStatus = !advisor.isActive;
        
        try {
            // Reference the specific advisor document using its ID
            const advisorRef = doc(db, 'advisors', advisor.id);
            
            // Update the isActive field
            await updateDoc(advisorRef, {
                isActive: newStatus
            });
            console.log(`Advisor ${advisor.name} set to isActive: ${newStatus}`);
        } catch (error) {
            console.error("Error updating advisor status:", error);
            alert("Failed to update advisor status.");
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div style={advisor.isActive ? activeStyle : rowStyle}>
            {/* Advisor Name and Email */}
            <div style={textStyle}>
                <strong>{advisor.name}</strong> ({advisor.email})
                <div style={{fontSize: '0.9em', color: '#6c757d'}}>{advisor.expertise}</div>
            </div>
            
            {/* Status Toggle Button */}
            <button 
                onClick={handleToggleActive}
                style={statusButtonStyle(advisor.isActive)}
                disabled={isUpdating}
            >
                {isUpdating 
                    ? 'Updating...' 
                    : (advisor.isActive ? 'Active on Board' : 'Inactive')
                }
            </button>
        </div>
    );
}

export default AdvisorRow;
