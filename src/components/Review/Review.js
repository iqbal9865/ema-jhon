import React from 'react';
import {useEffect, useState} from "react";
import Header from '../Header/Header';
import {getDatabaseCart} from "../../utilities/databaseManager"
import fakeData from '../../fakeData';
import ReviewItems from '../ReviewItems/ReviewItems'
const Review = () => {

    const [carts, setCarts] = useState([])

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map( key => {
            const product = fakeData.find( pd => pd.key === key )
            product.quantity = savedCart[key]; 
            return product;
        })
        setCarts(cartProducts)
    })
    return (
        <div>
            <Header />
            
            {
                carts.map(cart => <ReviewItems key={cart.key} product={cart} />)
            }
        </div>
    );
};

export default Review;