import React from 'react';
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    //count total amounts for all products
    let totalAmount = 0;
    cart.forEach(item => totalAmount += item.price * item.qty);

    return (
        <div className="cart-area mt-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        {
                            cart && cart.length > 0 ? (
                                cart.map(item => <CartProduct product={item} key={item.id} />)
                            ) : (<h3>Cart is empty</h3>)
                        }
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title bg-warning p-2 text-center">Cart Summary</h5>
                                <p className="card-text">Total Amount: {totalAmount}</p>
                                {
                                    totalAmount > 0 ?
                                        <button
                                            className="btn btn-warning"
                                        >Proceed To Checkout
                                    </button> :
                                        <button
                                            className="btn btn-warning"
                                            disabled
                                        >Proceed To Checkout
                                        </button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;