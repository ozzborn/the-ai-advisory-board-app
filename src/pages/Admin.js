// src/pages/Admin.js

import React, { useState, useEffect } from 'react'; 
import AddAdvisorForm from '../components/AddAdvisorForm';
import AdvisorRow from '../components/AdvisorRow'; 
import { db } from '../firebase';
// UPDATE THIS LINE: Add addDoc and serverTimestamp
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore'; 

const containerStyle = {
    padding: '20px',
};

// ... (rest of the component styles/definitions remain the same)

function Admin() {
    const [advisors, setAdvisors] = useState([]);
    const [loadingAdvisors, setLoadingAdvisors] = useState(true);
    const [isStartingDiscussion, setIsStartingDiscussion] = useState(false); // NEW: State for button loading

    // ... (The useEffect hook for fetching advisors remains the same)
    useEffect(() => {
        const advisorsQuery = query(
            collection(db, 'advisors'),
            orderBy('createdAt', 'asc') 
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


    // NEW: Function to create the initial submission
    const handleStartDiscussion = async () => {
        setIsStartingDiscussion(true);
        try {
            // Find all active advisors to assign to the new submission (optional for now, but good practice)
            const activeAdvisors = advisors.filter(a => a.isActive).map(a => a.name);

            await addDoc(collection(db, 'submissions'), {
                title: 'Initial Board Configuration Review and Advice',
                description: 'The AI Advisory Board is now configured. This is the first official submission to review the setup, propose initial guidelines, and confirm advisor roles.',
                status: 'Open',
                advisorAssignment: activeAdvisors.join(', ') || 'Unassigned', // Assign to active advisors
                submittedAt: serverTimestamp(),
                // Mock fields to match your existing submission data structure
                attachments: 0,
                priority: 'High' 
            });

            alert('Initial Board Discussion started successfully! Check the Submissions page.');
        } catch (error) {
            console.error("Error starting initial discussion:", error);
            alert('Failed to start initial discussion.');
        } finally {
            setIsStartingDiscussion(false);
        }
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
                disabled={isStartingDiscussion} // Disable during processing
                style={{
                    padding: '10px 20px', 
                    backgroundColor: isStartingDiscussion ? '#99c9ff' : '#007bff', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: isStartingDiscussion ? 'not-allowed' : 'pointer'
                }}>
                {isStartingDiscussion ? 'Starting...' : 'Start Initial Board Conversation'}
            </button>

        </div>
    );
}

export default Admin;
