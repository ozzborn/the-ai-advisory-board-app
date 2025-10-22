import React from 'react';
import { db } from '../firebase'; // Import Firestore db
import { doc, updateDoc } from 'firebase/firestore'; // Import Firestore functions

const rowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 0',
    borderBottom: '1px solid #e0e0e0',
    backgroundColor: 'white',
};

const cellStyle = {
    flex: 1,
    padding: '0 10px',
    textAlign: 'left',
};

const statusSelectStyle = {
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    cursor: 'pointer',
    width: '100%',
};

const SubmissionRow = ({ submission }) => {
    
    // Function to handle the status change and update Firestore
    const handleStatusChange = async (e) => {
        const newStatus = e.target.value;
        
        try {
            // Reference the specific document by its ID
            const submissionRef = doc(db, "submissions", submission.id);
            
            // Update the 'status' field in Firestore
            await updateDoc(submissionRef, {
                status: newStatus,
            });

            console.log(`Submission ${submission.id} status updated to: ${newStatus}`);
        } catch (error) {
            console.error("Error updating submission status: ", error);
        }
    };
    
    // Determine status color for visual feedback
    const statusColor = {
        'Open': '#dc3545',
        'In Review': '#ffc107',
        'Completed': '#28a745',
    }[submission.status] || '#6c757d';


    return (
        <div style={rowStyle}>
            <div style={{...cellStyle, fontWeight: 'bold'}}>{submission.title}</div>
            <div style={cellStyle}>{submission.advisor}</div>
            
            {/* Status Dropdown */}
            <div style={{...cellStyle, flex: 0.5}}>
                <select 
                    value={submission.status}
                    onChange={handleStatusChange}
                    style={{...statusSelectStyle, borderColor: statusColor, color: statusColor}}
                >
                    <option value="Open">Open</option>
                    <option value="In Review">In Review</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            
            <div style={{...cellStyle, flex: 0.5, textAlign: 'right'}}>{submission.date}</div>
        </div>
    );
};

export default SubmissionRow;
