import React from 'react';
import classes from './button.module.css';


// const Button = ({ title = 'add' }) => {
export const Button = (props) => {
    const {title='Bakyt'} = props

    return (
       <button className={`${classes.btn} ${classes[title]}`}>{title}</button>
    );
};
export const Button1 = (props) => {
    const {title='Bakyt'} = props

    return (
       <button className={`${classes.btn} ${classes[title]}`}>{title}</button>
    );
};