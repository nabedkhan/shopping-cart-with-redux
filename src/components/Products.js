import React from 'react';
import { connect } from 'react-redux';
import ProductCard from './ProductCard';

const Products = ({ products }) => {
    return (
        <div className="products">
            {
                products.map(product => {
                    return (
                        <ProductCard key={product.id} product={product} />
                    )
                })
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Products);