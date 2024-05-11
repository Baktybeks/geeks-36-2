import React from 'react';


const Input = ({ type='password',
    handleChange,
    placeholder,
    inputValue}) => {
    return (
        <input
            type={type}
            onChange={handleChange}
            placeholder={placeholder}
            value={inputValue}
        />
    );
};

export default Input;