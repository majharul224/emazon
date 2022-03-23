import React from 'react';
import './Product.css'

const Product = (props) => {
   // console.log(props)
   //const {handleAddToCart} = props;
   const{name, img, price, seller, ratings} = props.product;
   //console.log(props);
 

 /*   const handleAddToCart = ()=>{
       console.log('clicked')
   } */
    return (
            <div className='product'>
                <img src= {img} alt="" />
        <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p>Price : $ {price}</p>
            <p><small>Seller : {seller}</small></p>
            <p><small>Rating : {ratings} stars </small></p>
        </div>
        <button onClick={() => props.handleAddToCart(props.product)}  className='btn-cart'>
            <p> Add to Cart</p>
        </button>
            </div>
    );
};

export default Product;
