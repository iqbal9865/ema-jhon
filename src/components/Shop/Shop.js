import React, { useState } from 'react';
import Product from '../Product/Product';
import fakeData from './../../fakeData/index';
import './Shop.css'
const Shop = () => {

    const DataFirstTen = fakeData.slice(0, 10); 
    const [products, setProducts] = useState(DataFirstTen);

    return (
        <div className="container-fluid">
            <div className='row my-5'>    
           <div className="shop-container offset-1 col-md-8">
            {
                products.map(product => <Product product={product} />)
            }
           </div>
           <div className="add-to-cart col-md-3">
                <h3>This is Add to Cart Items</h3>
           </div>
           </div>
        </div>
    );
};

export default Shop;