import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../../../Assets/Styles/GetStarted.module.css'
import Item1 from '../../../Assets/Images/item1.png'
import Item2 from '../../../Assets/Images/item2.png'
import Item3 from '../../../Assets/Images/item3.png'


const GetStarted = () => {
    return (
        <section className={classes.section}> 
            <div className={classes.sectionName}>
                <h3>We make your daily routine more sustainable with products that are plastic-free, cruelty-free and made with clean ingredients.</h3>
                <p>Plastic-free</p><p>Clean ingredients</p><p>Cruelty-free</p>
            </div>
            <div className={classes.sectionNameVoid}>
                    <h4>Meet the future of oral care.</h4>
                    <button>Get started</button>
                </div>
            <div className={classes.sectionWrapper}>
                <div className={classes.sectionItem}>
                    <img src={Item1} alt="#"/>
                    <h4>Toothpaste Bits</h4>
                    <p>From $7.50 / month</p>
                </div>
                <div className={classes.sectionItem}>
                    <img src={Item2} alt="#"/>
                    <h4>Mouthwash Bits</h4>
                    <p>From $5.00 / month</p>
                </div>
                <div className={classes.sectionItem}>
                    <img src={Item3} alt="#"/>
                    <h4>Whitening Gel</h4>
                    <p>From $5.00 / month</p>
                </div>
            </div>
            <div className={classes.btnWrapper}>
                <Link to="/shopping">
                    <button className={classes.btn}>Shop all products</button>
                </Link>
                </div>
        </section>
    )
};

export default GetStarted;