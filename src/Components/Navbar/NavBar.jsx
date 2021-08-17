import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import iconCart from '../../Assets/Images/iconCart.png'
import logo from '../../Assets/Images/Group.png'
import classes from '../../Assets/Styles/NavBar.module.css'


const NavBar = ({cart}) => {
   const [cartCount, setCartCount] = useState(0)

   useEffect(() => {
       let count = 0;
       cart.forEach(item => {
           count += item.qiy
       });
       setCartCount(count);
   }, [cart, cartCount])

    return (
        <div className={classes.container}>
                       <div className={classes.containerWrapper}>
           <Link>
           <img src={logo}/>
           </Link>
           </div>
            <div className={classes.containerWrapper}>
           <Link to='/'>
               <h2>Home</h2>
           </Link>
           <Link to='/shopping'>
               <h2>Shop</h2>
           </Link>
           <Link to='/cart'>
               <img src={iconCart} alt=""/>
           </Link>
           </div>
           
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    }
}

export default connect(mapStateToProps)(NavBar);

