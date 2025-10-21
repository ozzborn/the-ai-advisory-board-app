import React from 'react';
import SubmissionRow from '../components/SubmissionRow'; // Assuming the SubmissionRow component is in src/components/
import Button from '../components/Button';

function Submissions() {
  // Dummy data for the list
  const submissionsData = [
    { id: 101, title: "Policy on Predictive AI Ethics", status: "Open", advisor: "Alice Smith" },
    { id: 102, title: "Technical Proposal: Real-Time Data Anonymization", status: "In Review", advisor: "Bob Johnson" },
    { id: 103, title: "Risk Assessment of Quantum Computing", status: "Closed", advisor: "Carol Davis" },
  ];
  
  // Header for the list/table
  // Note: We need to recreate the style of SubmissionRow.rowStyle for the header, 
  // but since we cannot assume access to its static properties, we'll define a similar style here
  const headerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr 1fr 1fr', // Must match SubmissionRow grid layout
    fontWeight: 'bold',
    padding: '12px 0',
    borderBottom: '2px solid #ccc',
    marginTop: '20px'
  };
    
  const handleNewSubmission = () => {
    alert('Ready to implement the New Submission form!');
  };

  return (
    <div style={{ padding: '20px' }}>
        
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
       <h2>Advisor Submissions & Proposals</h2>
       <Button onClick={handleNewSubmission}> 
          + Add New Submission
       </Button>
      </div>

      <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px', borderRadius: '8px' }}>
        {/* ... (Header and SubmissionRows remain the same) ... */}
      </div>
    </div>
  );
}

export default Submissions;