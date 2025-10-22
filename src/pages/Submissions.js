import React from 'react';
import SubmissionRow from '../components/SubmissionRow'; 

const containerStyle = {
    padding: '20px',
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 10px',
    fontWeight: 'bold',
    borderBottom: '2px solid #343a40', // Dark separator line
    marginBottom: '10px',
    backgroundColor: '#f8f9fa'
};

// Simulated data for submissions (will eventually come from Firebase/Firestore)
const submissionsData = [
    { id: 1, title: 'Optimizing Q3 Budget Forecast', advisor: 'Dr. Evelyn Reed', status: 'Open', date: '2025-10-18' },
    { id: 2, title: 'Impact of LLMs on HR Policy', advisor: 'Mr. Alex Chen', status: 'Open', date: '2025-10-17' },
    { id: 3, title: 'Scaling ML Models in Europe', advisor: 'Dr. Sofia Khan', status: 'In Review', date: '2025-10-15' },
    { id: 4, title: 'Ethical AI Guidelines v2.0', advisor: 'Ms. Jamie Lee', status: 'Completed', date: '2025-10-10' },
];

function Submissions() {
    return (
        <div style={containerStyle}>
            <h1>Advice Submissions</h1>
            <p>Review and manage all incoming requests from the AI Advisory Board.</p>

            {/* Header Row */}
            <div style={headerStyle}>
                <div style={{flex: 1, padding: '0 10px'}}>Title</div>
                <div style={{flex: 1, padding: '0 10px'}}>Assigned Advisor</div>
                <div style={{flex: 0.5, padding: '0 10px'}}>Status</div>
                <div style={{flex: 0.5, padding: '0 10px', textAlign: 'right'}}>Date</div>
            </div>

            {/* Submission List */}
            <div style={{backgroundColor: 'white', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>
                {submissionsData.map(submission => (
                    <SubmissionRow key={submission.id} submission={submission} />
                ))}
            </div>
        </div>
    );
}

export default Submissions;
