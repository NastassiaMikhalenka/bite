import React from 'react'
import { Link } from 'react-router-dom';
import Frame from '../../../Assets/Images/background.png'
import classes from '../../../Assets/Styles/MainPage.module.css'



const MainPage = () => {
    return (
        <section className={classes.home}>
        <div className={classes.content}>
            <h3>Toothpaste, reinvented</h3>
            <p>The only plastic-free and clean way to replace <br/>
                the paste you've used your whole life.</p>
                <Link to="/shopping">
                    <button className={classes.btn}>shop now</button>
                </Link>
        </div>
        <div className={classes.imgContainer}>
            <img src={Frame} alt=""></img>
        </div>
    </section>
    )
};

export default MainPage;

