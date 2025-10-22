import React from 'react';

const containerStyle = {
    padding: '20px',
    maxWidth: '800px',
};

const About = () => {
    return (
        <div style={containerStyle}>
            <h1>About the AI Advisory Board App</h1>
            <p>
                This application serves as the centralized platform for managing and tracking advisory requests submitted to the organization's AI Advisory Board.
            </p>
            <p>
                The primary function is to streamline the submission process, assign requests to qualified advisors, and monitor the progress of each request from initial submission to final expert recommendation.
            </p>
            
            <h2>Key Features</h2>
            <ul>
                <li>**Real-Time Dashboard:** View live metrics on advisor activity and open requests.</li>
                <li>**Submission Tracking:** Monitor the status and history of all advice submissions.</li>
                <li>**Secure Access:** Protected by Firebase Google Authentication for board members only.</li>
            </ul>
            
            <p style={{marginTop: '30px', borderTop: '1px solid #ddd', paddingTop: '15px'}}>
                Built with React, React Router, and Firebase.
            </p>
        </div>
    );
};

export default About;
