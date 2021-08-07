import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="d-flex product-container row">
            <div className="d-flex align-items-center col-sm-12 col-md-4">
                <img src={img} alt="" />
            </div>
            <div className="col-sm-12 col-md-8">
                <h5 className='product-name m-4'>{name}</h5>
                <p className='mx-4'>By: <strong>{seller}</strong></p>
                <p className='mx-4'>Price: <strong>${price}</strong></p>
                <p className='mx-4'>Only <strong>{stock}</strong>  Left Stock - Soon </p>
                <button className="mx-4 mb-4 buy-now-btn">ADD TO CART  <FontAwesomeIcon style={{color:'black', fontSize:"15px", marginLeft:' 3px'}} icon={faCartPlus} /></button>
            </div>
            
        </div>
    );
};

export default Product;