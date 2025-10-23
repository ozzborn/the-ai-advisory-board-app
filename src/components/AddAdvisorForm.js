// src/components/AddAdvisorForm.js

import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const formStyle = {
    display: 'flex',
    gap: '10px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    backgroundColor: '#f9f9f9',
    marginBottom: '20px',
};

const inputStyle = {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    flexGrow: 1,
};

const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#28a745', // Green for 'Add'
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
};

function AddAdvisorForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email) {
            alert("Please enter both name and email.");
            return;
        }

        setLoading(true);
        try {
            await addDoc(collection(db, 'advisors'), {
                name: name,
                email: email,
                expertise: 'Not Specified', // Default field for future use
                isActive: false, // Default to inactive until selected for the board
                createdAt: serverTimestamp()
            });
            setName('');
            setEmail('');
            alert('Advisor added successfully!');
        } catch (error) {
            console.error("Error adding advisor: ", error);
            alert('Failed to add advisor.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <input
                type="text"
                placeholder="Advisor Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={inputStyle}
                required
                disabled={loading}
            />
            <input
                type="email"
                placeholder="Advisor Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle}
                required
                disabled={loading}
            />
            <button type="submit" style={buttonStyle} disabled={loading}>
                {loading ? 'Adding...' : 'Add Advisor'}
            </button>
        </form>
    );
}

export default AddAdvisorForm;
