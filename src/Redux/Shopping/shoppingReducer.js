import * as actionTypes from './shoppingTypes';
import Prod1 from '../../Assets/Images/product1.png'
import Prod2 from '../../Assets/Images/product2.png'
import Prod3 from '../../Assets/Images/product3.png'
import Prod4 from '../../Assets/Images/product4.png'
import Prod5 from '../../Assets/Images/product5.png'
import Prod6 from '../../Assets/Images/product6.png'


// const fetchComments = function (item) {
//     const comments = [];
//     for ( let i = 1; i <= 6; i++) {
//         const url = `http://jsonplaceholder.typicode.com/comments/${i}`;
//         fetch((url)).then( res => { return res.json(); })
//         .then( data => {
//             const comment = {
//                 id: data.id, 
//                 name: data.name,   
//                 body: data.body    
//             };
//             comments.push(comment);
//             console.log(comments)
//         });
            
//     }
//   };
  
//   const comments = fetchComments()
//   console.log(comments)


const INITIAL_STATE = {
    products : [
        { id: 1, title: "Fresh Mint", description: "toothpaste", price: 30, rated: "Rated 4.9 out of 5", image: Prod1 },
        { id: 2, title: "Mouthwash Bits", description: "4-Month supply", price: 20, rated: "Rated 5.0 out of 5", image: Prod2 },
        { id: 3, title: "Whitening Gel", description: "One vial • 28 applications", price: 24, rated: "Rated 5.0 out of 5", image: Prod3 },
        { id: 4, title: "Dental Floss", description: "Dental Floss", price: 12, rated: "Rated 4.9 out of 5", image: Prod4 },
        { id: 5, title: "Bamboo Toothbrush", description: "Two-pack", price: 12, rated: "Rated 4.9 out of 5", image: Prod5 },
        { id: 6, title: "Daily Habits Kit", description: "5-Piece Oral Care Set", price: 60, rated: "Rated 4.9 out of 5", image: Prod6}
    ],
    cart: [],
    currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART: 
        const item = state.products.find((prod) => prod.id === action.payload.id)
        const inCart = state.cart.find((item) => 
            item.id === action.payload.id ? true : false
            );
        return {
            ...state,
            cart: inCart 
                ? state.cart.map((item) => 
                    item.id === action.payload.id 
                ? {...item, qiy: item.qiy + 1}
                : item
                )
                 :[...state.cart, {...item, qiy: 1}],
        };
        case actionTypes.REMOVE_FROM_CART:
        return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
        }
        case actionTypes.ADD_QIY:
        return {
            ...state,
            cart: state.cart.map((item) => 
                item.id === action.payload.id 
                ? {...item, qiy: +action.payload.qiy} 
                : item),
        };
        case actionTypes.LOAD_CURRENT_ITEM:
        return {
            ...state,
            currentItem: action.payload,
        };

        // case actionTypes.COM_CURRENT_ITEM:
        //     return {
        //         ...state,
        //         comments: action.payload
        //     };

        
        default: 
        return state;
    }
};

export default shopReducer;


// export function fetchAllItemsFromServer() {
//     return (dispatch, getState) => {
//       dispatch({type: actionTypes.COM_CURRENT_ITEM})
//       fetch('http://jsonplaceholder.typicode.com/comments/')
//         .then(res => res.toJSON())
//         .then(items => dispatch({type: actionTypes.COM_CURRENT_ITEM_SUC, payload: items}))
//         // .catch(errors => dispatch({type: FETCH_ALL_ITEMS_ERROR_ERROR, errors: errors}))
//     }
//   }
  
// export  function commentsReducer (state = {
//     items: [],
//     isLoading: false,
//     // errors: {}
//   }, action) {
//     switch (action.type) {
//     case actionTypes.COM_CURRENT_ITEM:
//       return Object.assign({}, state, {
//         isLoading: true
//       })
//     case actionTypes.COM_CURRENT_ITEM_SUC:
//       return Object.assign({}, state, {
//         isLoading: false,
//         items: action.payload
//       })
    // case FETCH_ALL_ITEMS_ERROR:
    //   return Object.assign({}, state, {
    //     isLoading: false,
    //     errors: action.errors
    //   })
//     default:
//       return state
//     }
//   }

// const commentsReducer = (state = INITIAL_STATE, action) => {
//     switch(action.type) {
//         case actionTypes.COM_CURRENT_ITEM:
//             return {
//                 ...state,
//                 comments: action.payload
//             };

        
//         default: 
//         return state;
//     }
// }

// export default commentsReducer;


// store.dispatch(fetchAllItemsFromServer())

// const state = store.getState()