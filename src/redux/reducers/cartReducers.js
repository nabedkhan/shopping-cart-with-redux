import { ADD_TO_CART, ADJUST_ITEM_QUANTITY, REMOVE_FROM_CART } from "../actions/cartAction";

const initialState = {
    cart: [],
    products: [
        {
            id: 1,
            title: "This is the COOLEST Cube Ever",
            description: "This cube will keep you busy the entire day and it is very fun to play with",
            price: 15,
            image: "https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 2,
            title: "Large Coffee Cup",
            description: "Get a big cup of coffee every morning before the day starts",
            price: 20,
            image: "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        },
        {
            id: 3,
            title: "Books That CHANGED My Life",
            description: "These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
            price: 150,
            image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80"
        },
    ],
}

export function cartReducers(state = initialState, action) {
    switch (action.type) {

        case ADD_TO_CART:
            // check item is already exist in cart
            const getItem = state.cart.find(item => item.id === action.item.id) ? true : false;
            // product quantity add
            let newCartItem;
            if (getItem) {
                newCartItem = state.cart.map(item =>
                    (item.id === action.item.id) ?
                        { ...item, qty: item.qty + 1 } : item)

            } else {
                newCartItem = [...state.cart, { ...action.item, qty: 1 }];
            }

            return {
                ...state,
                cart: newCartItem
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.id)
            }

        case ADJUST_ITEM_QUANTITY:
            const newCart = state.cart.map(item => item.id === action.id ?
                { ...item, qty: action.value } : item)
            return { ...state, cart: newCart }
        default:
            return state;
    }
}