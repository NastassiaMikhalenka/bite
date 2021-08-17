import React, { useState, useEffect } from 'react';
import CartItem from './CartItem/CartItem';
import { connect } from 'react-redux';
import classes from '../../Assets/Styles/Cart.module.css';

const Cart = ({ cart }) => {
const [totalPrice, setTotalPrice] = useState(0)
const [totalItems, setTotalItems] = useState(0)

useEffect(() => {
    let items = 0;
    let price = 0;
    cart.forEach(item => {
        items += item.qiy;
        price += item.qiy * item.price;
    });
    setTotalPrice(price);
    setTotalItems(items);

}, [cart,totalPrice, totalItems, setTotalItems, setTotalPrice])

    return (
        
        <div className={classes.container}>
            <div className={classes.containerProducts}>
                {cart.map(item => (
                    <CartItem key={item.id} itemData={item}/>
                ))}
            </div>
            <div className={classes.total}>
                <span>Total Item: ({totalItems}) </span>
                <span>Total Price: $ {totalPrice} </span>
                <button className={classes.btnCnt}>Continue</button>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    }
};

export default connect(mapStateToProps)(Cart);