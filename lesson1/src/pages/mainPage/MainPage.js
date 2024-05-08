import React from 'react';
import Buttons from '../../components/buttons/Buttons';
import UserPage from '../userPage/UserPage';

const MainPage = () => {

    // const sum = (a,b) => {
    //     return a+b
    // }
    // console.log(sum(5,6));
    //
    return (
        <div>
            MainPage
            <Buttons/>
            <UserPage name={'Bakyt'} age={18}/>
        </div>
    );
};

export default MainPage;