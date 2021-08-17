import React from 'react';
import Product from './Product/Product';
import { connect } from 'react-redux'
import classes from '../../Assets/Styles/Products.module.css'


const Products = ({products}) => {
    return (
        <div className={classes.container}>
            {products.map((prod) => (
                <Product className={classes.containerProduct} key={prod.id} productData={prod}/>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.shop.products,
    }
}

export default connect(mapStateToProps)(Products);