import React from 'react';
import "./Cart.css";
import {Link} from "react-router-dom";

const Cart = ({cart}) => {

    let total = 0;
    for(let i = 0; i < cart.length; i++) {
        total = total + cart[i].price;
    }

    let shipping = 0;
    if(total > 35) {
        shipping = 0;
    }
    else if(total > 15) {
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    const formatNumber = (num) => {
        const precision = num.toFixed(2)
        return Number(precision)
    }
    const VAT = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(VAT)).toFixed(2);
    return (
        <div className="cart-container">
            <h3 id="heading">Order Summary</h3>
            <table class="table table-hover">
                <tbody>
                    <tr>
                        <td>Item Ordered: <strong>{cart.length}</strong></td>
                    </tr>
                   
                    <tr>
                        <td>Product Price: <strong> ${formatNumber(total)}</strong></td>
                    </tr>

                    <tr>
                        <td>Shipping Cost: <strong> ${shipping}</strong></td>
                    </tr>
                    <tr>
                        <td>Tax + VAT : <strong> ${VAT}</strong></td>
                    </tr>

                    <tr>
                        <h5>Total Price: <strong> ${grandTotal}</strong></h5>
                    </tr>
                </tbody>
                <Link to="/review"><button style={{color:"black", fontSize: "16px"}} className="rounded buy-now-btn">REVIEW ORDER</button></Link>
            </table>
            
        </div>
    );
};

export default Cart;