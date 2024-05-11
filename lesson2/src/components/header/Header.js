import React from 'react';
import classes from './header.module.css';


const Header = ({ navBar }) => {
    console.log(navBar);
    return (
        <ul className={classes.list}>
            {
                navBar.map((item, index) =>
                    <li key={index}>
                        {item}
                    </li>)
            }
        </ul>
    );
};

export default Header;