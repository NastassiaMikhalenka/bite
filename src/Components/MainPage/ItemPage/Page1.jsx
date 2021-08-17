import React from 'react';
import classes from '../../../Assets/Styles/Page1.module.css'
import Girl from '../../../Assets/Images/girl.png'


const Page1 = () => {
    return (
        <div className={classes.container}>
            <span>How to</span>
        <div className={classes.containerWrapper}>
            <div className={classes.containerItem}>
                <h2> Easy asbite, brush, smile repeat</h2>
                <p>Bite down on your Bit </p>
                <p>Brush with a wet toothbrush</p>
                <p>Smile and watch it foam up like magic</p>
                <p>Repeat twice a day, every day</p>
                <p>Shop now</p>
            </div>
            <div className={classes.containerItem}>
                <img src={Girl} alt=""/>
            </div>
        </div>
        </div>
    )
};

export default Page1;