// src/pages/Admin.js

import React, { useState, useEffect } from 'react'; 
import AddAdvisorForm from '../components/AddAdvisorForm';
import AdvisorRow from '../components/AdvisorRow'; 
import { db } from '../firebase';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore'; 

const containerStyle = {
    padding: '20px',
};


function Admin() {
    const [advisors, setAdvisors] = useState([]);
    const [loadingAdvisors, setLoadingAdvisors] = useState(true);
    const [isStartingDiscussion, setIsStartingDiscussion] = useState(false);
    const [userQuestion, setUserQuestion] = useState(''); 


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


    // Function to create the initial submission and trigger the AI flow
    const handleStartDiscussion = async () => {
        const activeAdvisors = advisors.filter(a => a.isActive);

        if (activeAdvisors.length === 0) {
            alert('Please activate at least one advisor before asking the board a question.');
            return;
        }

        if (!userQuestion.trim()) {
            alert('Please enter the question you want to ask the board.');
            return;
        }

        setIsStartingDiscussion(true);
        try {
            // Data to be stored for the submission
            const submissionData = {
                title: 'New Advisory Request: ' + userQuestion.substring(0, 50) + '...',
                description: userQuestion, // Store the full question here
                status: 'Processing', // Set status to Processing while AI is running
                advisorAssignment: activeAdvisors.map(a => a.name).join(', '),
                submittedAt: serverTimestamp(),
                // Array of active advisor IDs for the Cloud Function to use
                activeAdvisorIDs: activeAdvisors.map(a => a.id), 
                // Mock fields to match your existing submission data structure
                attachments: 0,
                priority: 'High',
                aiResponse: '' // Field to hold the final AI response later
            };

            // 1. Create the submission document in Firestore
            const newDocRef = await addDoc(collection(db, 'submissions'), submissionData);
            
            // 2. Trigger the Cloud Function (To be built in the next session)
            // The Cloud Function will be called here, passing newDocRef.id
            console.log("Submission created:", newDocRef.id);
            alert(`Discussion started (ID: ${newDocRef.id}). Status is set to 'Processing'. The AI is working...`);
            
            // Clear the form fields after success
            setUserQuestion(''); 

        } catch (error) {
            console.error("Error starting initial discussion:", error);
            alert('Failed to start discussion.');
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
            
            {/* New Discussion Initiation Section (UPDATED) */}
            <h2 style={{marginTop: '30px'}}>Ask Advisory Board</h2>

            {/* Input for the question */}
            <textarea
                placeholder="Type the strategic question you want to ask the AI Advisory Board here..."
                rows="6"
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
                style={{
                    width: '100%',
                    padding: '10px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    marginBottom: '15px',
                    resize: 'vertical'
                }}
                disabled={isStartingDiscussion}
            />

            <button 
                onClick={handleStartDiscussion}
                disabled={isStartingDiscussion || advisors.filter(a => a.isActive).length === 0}
                style={{
                    padding: '10px 20px', 
                    backgroundColor: isStartingDiscussion || advisors.filter(a => a.isActive).length === 0 ? '#99c9ff' : '#007bff', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '4px', 
                    cursor: isStartingDiscussion || advisors.filter(a => a.isActive).length === 0 ? 'not-allowed' : 'pointer'
                }}>
                {isStartingDiscussion ? 'Processing Request...' : 'Ask Advisory Board'}
            </button>

        </div>
    );
}

export default Admin;
