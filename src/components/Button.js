import React from 'react';

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#0050b3', // A nice primary blue
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

function Button({ onClick, children }) {
  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;