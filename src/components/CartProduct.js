import React, { useState } from 'react';
import { connect } from 'react-redux';
import { adjustItemQuantity, removeFromCart } from '../redux/actions/cartAction';

const CartProduct = ({ product, removeFromCart, adjustItemQuantity }) => {
    const [quantity, setQuantity] = useState(product.qty)

    //handle quantity value change
    const handleQuantityChange = e => {
        adjustItemQuantity(product.id, e.target.value);
        setQuantity(e.target.value);
    }
    return (
        <div>
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={product.image} className="card-img" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product.title}</h5>
                            <p className="card-text">{product.description}</p>
                            <input
                                min="1"
                                type="number"
                                className="form-control w-25 d-inline-block"
                                value={quantity}
                                onChange={handleQuantityChange}
                            />
                            <button
                                className="btn btn-warning float-right"
                                onClick={() => removeFromCart(product.id)}
                            >Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    removeFromCart: removeFromCart,
    adjustItemQuantity: adjustItemQuantity
}

export default connect(null, mapDispatchToProps)(CartProduct);