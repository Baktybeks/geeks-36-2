import React from 'react';
import classes from './userPage.module.css';


const UserPage = ({name, age}) => {
    return (
        <div>
            <h1>name: {name}</h1>
            <h2 className='bl'>age: {age}</h2>
            <button className={classes.btn}>Добавить</button>
        </div>
    );
};

export default UserPage;