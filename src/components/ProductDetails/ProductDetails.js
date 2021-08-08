import React from "react";
import Header from "../Header/Header";
import {useParams} from "react-router-dom";
import Product from "../Product/Product";
import fakeData from "../../fakeData";
const ProductDetails = () => {
    const {key} = useParams();
    const product = fakeData.find(pd => pd.key === key)
    return (
        <div>
            <Header />
            <div className="container">
                <Product product={product} showAddToCart={false} />
            </div>
        </div>
    )
}

export default ProductDetails;