import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {addToCart, loadCurrentItem} from '../../../Redux/Shopping/shoppingActions'
import classes from '../../../Assets/Styles/Product.module.css'


const Product = ({productData, addToCart, loadCurrentItem}) => {

    return (
        <div className={classes.container}>
            <img src={productData.image} alt={productData.title} width={'300px'}/>
            <div className={classes.containerWrapper}>
                <div>
                    <p className={classes.title}>{productData.title}</p>
                    <p className={classes.description}>{productData.description}</p>
                    <p className={classes.rated}>{productData.rated}</p>
                </div>
                <div>
                    <p className={classes.price}><span>$</span>{productData.price}</p>
                </div>
            </div>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <div>
                <div className={classes.btnContainer}>
                    <Link to={`/product/${productData.id}`}>
                        <button className={classes.btnView} onClick={() => loadCurrentItem(productData)
                        }>View item
                        </button>
                    </Link>
                    <button className={classes.btnAdd} onClick={() => addToCart(productData.id)}>Add to cart</button>
                </div>
            </div>
        </div>
    );
};
const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}


export default connect(null, mapDispatchToProps)(Product);