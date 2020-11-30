export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const ADJUST_ITEM_QUANTITY = 'ADJUST_ITEM_QUANTITY';

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        item,
    }
}
export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id,
    }
}
export const adjustItemQuantity = (id, value) => {
    return {
        type: ADJUST_ITEM_QUANTITY,
        id,
        value
    }
}