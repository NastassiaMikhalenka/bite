import React from 'react';
import classes from '../../../Assets/Styles/ItemOfPage4.module.css'
import FrameFooter from '../../../Assets/Images/FrameFooter.png'


const ItemOfPage4 = () => {
    return (
        <div className={classes.container}>
            <img src={FrameFooter}/>
            <h3>One billion toothpaste tubes are thrown out each year</h3>
            <p>We want to end this plastic waste, give you a healthier smile, and build the world's most sustainable oral care company.</p>
            <p>Sustainability at Bite</p>
        </div>
    )
};

export default ItemOfPage4;