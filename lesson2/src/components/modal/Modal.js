import React from 'react';
import classes from './Modal.module.css';
import Input from '../input/Input';


const Modal = ({handleShow, inputValue, handleChange}) => {

    console.log(handleShow)
    return (
        <>
            <div className={classes.modalWrapper}/>
            <div className={classes.modalContent}>
                <button onClick={handleShow}>Закрыть</button>
                {inputValue}
                <Input type={'text'} handleChange={handleChange}/>
                Modal
            </div>
        </>
    );
};

export default Modal;