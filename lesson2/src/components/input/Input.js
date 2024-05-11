import React from 'react';


const Input = ({ type='password', handleChange }) => {
    return (
        <input
            type={type}
            onChange={handleChange}
        />
    );
};

export default Input;