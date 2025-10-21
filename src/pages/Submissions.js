import React from 'react';
import SubmissionRow from '../components/SubmissionRow'; 
import Button from '../components/Button'; 

function Submissions() {
  
  // Dummy data for the list
  const submissionsData = [
    { id: 101, title: "Policy on Predictive AI Ethics", status: "Open", advisor: "Alice Smith" },
    { id: 102, title: "Technical Proposal: Real-Time Data Anonymization", status: "In Review", advisor: "Bob Johnson" },
    { id: 103, title: "Risk Assessment of Quantum Computing", status: "Closed", advisor: "Carol Davis" },
  ];
  
  // Header style (must match SubmissionRow grid layout)
  const headerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr 1fr', 
    fontWeight: 'bold',
    padding: '12px 0',
    borderBottom: '2px solid #ccc',
    marginTop: '20px'
  };

  // Function to resolve the no-undef error
  const handleNewSubmission = () => {
    alert('Ready to implement the New Submission form!');
  };

  return (
    <div style={{ padding: '20px' }}>
      
      {/* Header and Button Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2>Advisor Submissions & Proposals</h2>
        <Button onClick={handleNewSubmission}>
          + Add New Submission
        </Button>
      </div>

      {/* Submissions List Container */}
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        
        {/* List Header */}
        <div style={headerStyle}>
          <span>ID</span>
          <span>Title</span>
          <span>Status</span>
          <span>Advisor</span>
        </div>

        {/* List Rows */}
        <div>
          {submissionsData.map(sub => (
            <SubmissionRow
              key={sub.id}
              id={sub.id}
              title={sub.title}
              status={sub.status}
              advisor={sub.advisor}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default Submissions;