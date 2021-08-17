import React from 'react';
import classes from '../../../Assets/Styles/ItemOfPage3.module.css'
import Icon1 from '../../../Assets/Images/icon1.png'
import Icon2 from '../../../Assets/Images/icon2.png'
import Icon3 from '../../../Assets/Images/icon3.png'


const ItemOfPage3 = () => {
    return (
        <div className={classes.container}>
            <div className={classes.containerWrapper}>
                <p><img src={Icon1}/></p>
                <h3>Choose your flavor</h3>
                <p>Choose from Fresh Mint or Activated Charcoal with Fresh Mint.</p>
            </div>
            <div className={classes.containerWrapper}>
            <p><img src={Icon2}/></p>
                <h3>Get a refill every 4 months</h3>
                <p>We send you fresh Bits every 4 months so you never run out of bits.</p>
            </div>
            <div className={classes.containerWrapper}>
            <p><img src={Icon3}/></p>
                <h3>Pause or cancel anytime</h3>
                <p>You can adjust, postpone, or cancel your subscription at any time, hassle-free.</p>
            </div>
        </div>
    )
};

export default ItemOfPage3;