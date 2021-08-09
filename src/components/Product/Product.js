import React from 'react';
import "./Product.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

const Product = (props) => {
    const {name, img, seller, price, stock, key, features} = props.product;
    const {showAddToCart} = props;
    console.log(props.product)

    return (
        <div className="d-flex product-container row">
            <div className="d-flex align-items-center col-sm-12 col-md-4">
                <img src={img} alt="" />
            </div>
            <div className="col-sm-12 col-md-8">
                <h5 className='product-name m-4'> <Link id="name-link" to={"/product/"+key}> {name} </Link></h5>
                <p className='mx-4'>By: <strong>{seller}</strong></p>
                <p className='mx-4'>Price: <strong>${price}</strong></p>
                <p className='mx-4'>Only <strong>{stock}</strong>  Left Stock - Soon </p>

                { showAddToCart ? <button onClick={() => props.handleAddToCart(props.product)} className=" rounded mx-4 mb-4 buy-now-btn">ADD TO CART  <FontAwesomeIcon style={{color:'black', fontSize:"15px", marginLeft:' 3px'}} icon={faCartPlus} /></button> : 
                <div> 
                    {features.map(feature => <li className="mx-4">{feature.description} : {feature.value}</li>) }
                </div>              
                }
               
            </div>
            
        </div>
    );
};

export default Product;