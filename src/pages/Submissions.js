// src/pages/Submissions.js

import React, { useState, useEffect } from 'react';
import SubmissionRow from '../components/SubmissionRow'; 
import { db } from '../firebase'; // Import the initialized Firestore database
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const containerStyle = {
    padding: '20px',
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 10px',
    fontWeight: 'bold',
    borderBottom: '2px solid #343a40', 
    marginBottom: '10px',
    backgroundColor: '#f8f9fa'
};

function Submissions() {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 1. Define the query: target the 'submissions' collection, ordered by date
        const submissionsQuery = query(
            collection(db, 'submissions'),
            orderBy('date', 'desc')
        );

        // 2. Set up the real-time listener (onSnapshot)
        const unsubscribe = onSnapshot(submissionsQuery, (snapshot) => {
            const submissionsList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            setSubmissions(submissionsList);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching submissions:", error);
            setLoading(false);
        });

        // 3. Cleanup function: unsubscribe from the listener when the component unmounts
        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div style={containerStyle}>Loading Submissions...</div>;
    }

    if (submissions.length === 0) {
        return <div style={containerStyle}>No submissions found.</div>;
    }

    return (
        <div style={containerStyle}>
            <h1>Advice Submissions</h1>
            <p>Review and manage all incoming requests from the AI Advisory Board. (Data is now live from Firestore)</p>

            {/* Header Row */}
            <div style={headerStyle}>
                <div style={{flex: 1, padding: '0 10px'}}>Title</div>
                <div style={{flex: 1, padding: '0 10px'}}>Assigned Advisor</div>
                <div style={{flex: 0.5, padding: '0 10px'}}>Status</div>
                <div style={{flex: 0.5, padding: '0 10px', textAlign: 'right'}}>Date</div>
            </div>

            {/* Submission List */}
            <div style={{backgroundColor: 'white', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)'}}>
                {submissions.map(submission => (
                    <SubmissionRow key={submission.id} submission={submission} />
                ))}
            </div>
        </div>
    );
}

export default Submissions;
