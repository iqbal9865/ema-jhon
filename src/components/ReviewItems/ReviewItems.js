import React from "react";

const ReviewItems = (props) => {
    const {name, quantity, img} = props.product;
    return (
        <div className="container">
            <img className="mt-3" src={img} alt="" />
            <h5 className="product-name">{name}</h5>
            <h5 className="my-3">Quantity : {quantity}</h5>
            <button className="buy-now-btn rounded">Remove Item</button>
            <hr></hr>
        </div>
    )
}
export default ReviewItems;