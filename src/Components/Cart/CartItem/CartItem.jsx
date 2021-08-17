import React, {useState} from 'react'
import {connect } from 'react-redux'
import { removeFromCart, addQiy} from '../../../Redux/Shopping/shoppingActions'
import classes from '../../../Assets/Styles/CartItem.module.css'

const CartItem = ({itemData, removeFromCart, addQiy}) => {
    const [input, setInput] = useState(itemData.qiy)

    const onChangeHandler = (e) => {
        setInput(e.target.value)
        addQiy(itemData.id, e.target.value)
    }

    return (
        <div className={classes.container}>
            <div>
            <img src={itemData.image} alt={itemData.title}/>
            </div>
            <div className={classes.block}>
                <p className={classes.title}>{itemData.title}</p>
                <p className={classes.price}><span>$</span>{itemData.price}</p> 
            </div>
            <div className={classes.qty}>
                <p>Amount</p>
                <label htmlFor='qiy'></label>
                <input min="1" type="number" id="qiy" name="qiy" value={input} onChange={onChangeHandler}/>
            </div>
            <button className={classes.btnDlt} onClick={() => removeFromCart(itemData.id)}>Delete</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        addQiy: (id, value) => dispatch(addQiy(id, value))
    } 
}

export default connect(null, mapDispatchToProps)(CartItem);