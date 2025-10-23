// src/pages/Admin.js

import React, { useState, useEffect } from 'react'; // <-- UPDATE: Import useState and useEffect
import AddAdvisorForm from '../components/AddAdvisorForm';
import AdvisorRow from '../components/AdvisorRow'; // <-- NEW: Import the row component
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'; // <-- NEW: Import Firestore functions

const containerStyle = {
    padding: '20px',
};

// ... (metricsContainerStyle is not needed here, but can stay if it doesn't cause errors)

function Admin() {
    const [advisors, setAdvisors] = useState([]); // <-- NEW STATE for advisors
    const [loadingAdvisors, setLoadingAdvisors] = useState(true);

    // Fetch Advisors in real-time
    useEffect(() => {
        const advisorsQuery = query(
            collection(db, 'advisors'),
            orderBy('createdAt', 'asc') // Order by the time they were added
        );

        const unsubscribe = onSnapshot(advisorsQuery, (snapshot) => {
            const advisorsList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            setAdvisors(advisorsList);
            setLoadingAdvisors(false);
        }, (error) => {
            console.error("Error fetching advisors:", error);
            setLoadingAdvisors(false);
        });

        return () => unsubscribe();
    }, []);

    // Placeholder for Start Discussion logic (will be implemented next)
    const handleStartDiscussion = () => {
        alert("Discussion feature coming soon! You can now manage your advisors.");
    };


    if (loadingAdvisors) {
        return <div style={containerStyle}>Loading Admin Panel...</div>;
    }

    return (
        <div style={containerStyle}>
            <h1>Admin Panel & Board Configuration</h1>
            <p>Use this page to manage the list of active advisors and initiate new board discussions.</p>
            
            {/* Advisor Management Section */}
            <h2 style={{marginTop: '30px'}}>Advisor Management</h2>
            <AddAdvisorForm />
            
            <div style={{border: '1px solid #ddd', borderRadius: '4px', overflow: 'hidden'}}> 
                {advisors.length > 0 ? (
                    advisors.map(advisor => (
                        <AdvisorRow key={advisor.id} advisor={advisor} />
                    ))
                ) : (
                    <p style={{padding: '20px', textAlign: 'center'}}>
                        No advisors found. Use the form above to add the first advisor.
                    </p>
                )}
            </div>
            
            {/* New Discussion Initiation Section */}
            <h2 style={{marginTop: '30px'}}>Initiate New Discussion</h2>
            <button 
                onClick={handleStartDiscussion}
                style={{padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>
                Start Initial Board Conversation
            </button>

        </div>
    );
}

export default Admin;
