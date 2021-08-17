import React from "react";
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import { addToCart } from '../../Redux/Shopping/shoppingActions';
import classes from '../../Assets/Styles/PreviewProduct.module.css'

const PreviewProduct = ({ currentItem, addToCart }) => {
    return (
        <div>
        <Link to='/shopping'><button className={classes.btnShop}>Back to shop</button></Link>
        <div className={classes.container}>
            <div>
                <img className={classes.img} src={currentItem.image} alt={currentItem.title}/>
            </div>
            <div className={classes.block}>
                <p className={classes.title}>{currentItem.title}</p>
                <p className={classes.description}>{currentItem.description}</p>
                <p className={classes.price}><span>$</span>{currentItem.price}</p>
                <button className={classes.btnAdd} onClick={() => addToCart(currentItem.id)}>Add to Cart</button>
            </div>
        </div> 
        </div>
    )
};

const mapStateToProps = state => {
    return {
        currentItem: state.shop.currentItem,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(PreviewProduct);