import React, { useState } from 'react';
import Modal from '../../components/modal/Modal';

const MainPage = () => {
    const [show, setShow] = useState(false)
    const [inputValue, setInputValue] =useState('')
    console.log(show);
    const handleShow = () => {
        setShow(prevState => !prevState)
        console.log(show);
    }
    const handleChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div>
            <button onClick={handleShow}>Открыть</button>
            {
                show && <Modal
                    handleShow={handleShow}
                    inputValue={inputValue}
                    handleChange={handleChange}
                />
            }

            {/*MainPage*/}
            {/*<Buttons/>*/}
            {/*<UserPage name={'Bakyt'} age={18}/>*/}
            {/*<Example>*/}
            {/*    <p style={{color: 'red', fontSize: '20px'}}>Name: <span style={{color: 'green'}}>Bakyt</span></p>*/}
            {/*</Example>*/}
        </div>
    );
};

export default MainPage;