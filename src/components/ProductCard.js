import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartAction';

const ProductCard = ({ product, addToCart }) => {
    return (
        <div className="product-card mt-3">
            <div className="container">
                <div className="row bg-light p-3 px-0">
                    <div className="col-md-4">
                        <img src={product.image} className="img-fluid rounded" alt="Product" />
                    </div>
                    <div className="col-md-8">
                        <div className="product-details p-2">
                            <h3 className="text-warning">{product.title}</h3>
                            <p>{product.description}</p>
                            <h3 className="text-warning mb-4">${product.price}</h3>
                            <button
                                className="btn btn-warning"
                                onClick={() => addToCart(product)}
                            >Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapDispatchToProps = {
    addToCart: addToCart
}

export default connect(null, mapDispatchToProps)(ProductCard);