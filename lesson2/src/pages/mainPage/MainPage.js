import React, { useState } from 'react';
import Modal from '../../components/modal/Modal';
import Header from '../../components/header/Header';


const MainPage = () => {
    const navBar = [ 'Главная', 'Контакты', 'О нас', 'Инфо' ];
    const [ show, setShow ] = useState(false);
    const [ inputValue, setInputValue ] = useState('Написать код');
    console.log(show);
    const handleShow = () => {
        setShow(prevState => !prevState);
        console.log(show);
    };
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <Header navBar={navBar}/>
            <button onClick={handleShow}>Открыть</button>
                {
                    show && <Modal
                        handleShow={handleShow}
                        inputValue={inputValue}
                        handleChange={handleChange}
                    />
                }
        </div>
    );
};

export default MainPage;