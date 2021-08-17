import React from 'react';
import classes from '../../../Assets/Styles/Page2.module.css'
import Frame2 from '../../../Assets/Images/Frame2.png'
import { Link } from 'react-router-dom';


const Page2 = () => {
    return (
        <div className={classes.container}>
            <img src={Frame2} style={{width: '100%'}}/>
            <div className={classes.containerWrapper}>
                <div className={classes.containerBlock}>
                <h2>Better for your wallet, better for our planet</h2>
                <p className={classes.description}> Our subscription is the most eco-friendly and affordable way to kick the tube.</p>
                <Link to="/">
                    <button className={classes.btn}>Get started</button>
                </Link>
                <p className={classes.sale}>Save 38% — starting from $7.50 per month</p>
                </div>
            </div>
        </div>
    )
};

export default Page2;