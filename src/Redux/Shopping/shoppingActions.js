import * as actionTypes from './shoppingTypes';

export const addToCart = (itemId) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemId,
        },
    };
};


export const removeFromCart = (itemId) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemId,
        },
    };
};

export const addQiy = (itemId, value) => {
    return {
        type: actionTypes.ADD_QIY,
        payload: {
            id: itemId,
            qiy: value,
        },
    };
};

export const loadCurrentItem = (item) => {

    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    };
};
