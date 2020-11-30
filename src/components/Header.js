import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ cart }) => {
    return (
        <header className="bg-warning py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/">
                            <h3 className="mb-0 text-white">Redux Shopping Cart</h3>
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <Link to="/cart">
                            <button type="button" className="btn btn-light d-block ml-auto">
                                Cart <span className="badge badge-warning">{cart.length}</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => {
    return { cart: state.cart }
}

export default connect(mapStateToProps)(Header);