import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import fakeData from './../../fakeData/index';
import './Shop.css'
const Shop = () => {

    const DataFirstTen = fakeData.slice(0, 10); 
    const [products, setProducts] = useState(DataFirstTen);
    const [cart, setCart] = useState([])
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    return (
        <div className="container-fluid">
            <div className='row my-5'>    
           <div className="shop-container offset-1 col-md-8">
            {
                products.map(product => <Product key={product.key} product={product} handleAddToCart={handleAddToCart} />)
            }
           </div>
           <div className="add-to-cart col-md-3">
               <Cart cart={cart}/>
           </div>
           </div>
        </div>
    );
};

export default Shop;