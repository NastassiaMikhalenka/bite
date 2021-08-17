import React from 'react';
import classes from '../../../Assets/Styles/LogoPage.module.css'

import Logo1 from '../../../Assets/Images/Logo1.png'
import Logo2 from '../../../Assets/Images/Logo2.png'
import Logo3 from '../../../Assets/Images/Logo3.png'
import Logo4 from '../../../Assets/Images/Logo4.png'
import Logo5 from '../../../Assets/Images/Logo5.png'
import Logo6 from '../../../Assets/Images/Logo6.png'
import Logo7 from '../../../Assets/Images/Logo7.png'
import Logo8 from '../../../Assets/Images/Logo8.png'
import Logo9 from '../../../Assets/Images/Logo9.png'
import Logo10 from '../../../Assets/Images/Logo10.png'



const LogoPage = () => {
    return (
        <div className={classes.logoWrapper}>
            <img src={Logo1} alt="#"/>
            <img src={Logo2} alt="#"/>
            <img src={Logo3} alt="#"/>
            <img src={Logo4} alt="#"/>
            <img src={Logo5} alt="#"/>
            <img src={Logo6} alt="#"/>
            <img src={Logo7} alt="#"/>
            <img src={Logo8} alt="#"/>
            <img src={Logo9} alt="#"/>
            <img src={Logo10} alt="#"/>
        </div>
    )
};

export default LogoPage;