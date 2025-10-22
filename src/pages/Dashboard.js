import React, { useState, useEffect } from 'react';
import MetricCard from '../components/MetricCard'; // Import the card component
import ActivityItem from '../components/ActivityItem'; // Assuming ActivityItem component exists
import { db } from '../firebase'; // Import the Firestore database
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const containerStyle = {
    padding: '20px',
};

const metricsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: '30px',
};

function Dashboard() {
    const [submissions, setSubmissions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch ALL submissions to calculate metrics
        const submissionsQuery = query(
            collection(db, 'submissions'),
            orderBy('date', 'desc')
        );

        const unsubscribe = onSnapshot(submissionsQuery, (snapshot) => {
            const submissionsList = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            setSubmissions(submissionsList);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching dashboard data:", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    // --- METRIC CALCULATION LOGIC ---
    const calculateMetrics = () => {
        const totalAdvisors = 42; // Static for now, until we add an 'advisors' collection
        const openSubmissions = submissions.filter(s => s.status === 'Open').length;
        
        // Mock calculation for Avg. Response Time (needs complex date math, so we'll simplify)
        const avgResponseTime = submissions.length > 0 ? '3.4 Days' : 'N/A';
        
        // Take the top 5 recent submissions for the activity list
        const recentActivity = submissions.slice(0, 5);

        return { totalAdvisors, openSubmissions, avgResponseTime, recentActivity };
    };

    const { totalAdvisors, openSubmissions, avgResponseTime, recentActivity } = calculateMetrics();


    if (loading) {
        return <div style={containerStyle}>Loading Dashboard Metrics...</div>;
    }

    return (
        <div style={containerStyle}>
            <h1>AI Advisory Board - Main Dashboard</h1>

            {/* Metrics Cards */}
            <div style={metricsContainerStyle}>
                <MetricCard title="Total Advisors" value={totalAdvisors} />
                <MetricCard title="Open Submissions" value={openSubmissions} />
                <MetricCard title="Avg. Response Time" value={avgResponseTime} />
            </div>

            {/* Recent Advisor Activity Section */}
            <h2>Recent Advisor Activity</h2>
            <div style={{ padding: '10px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                {recentActivity.length > 0 ? (
                    recentActivity.map(item => (
                        <ActivityItem 
                            key={item.id} 
                            submission={item} 
                            // Assuming ActivityItem takes a submission object and displays status change
                        /> 
                    ))
                ) : (
                    <p>No recent activity found.</p>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
