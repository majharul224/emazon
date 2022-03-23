import React from 'react';
import './Product.css'
//import '../Shop/Shop.css'

const Product = (props) => {
   // console.log(props)
   
   const{name, img, price, seller, ratings} = props.product;
    return (
        <div className='product'>
       <img src= {img} alt="" />
       <h2 >{name}</h2>
       <h3>Price : $ {price}</h3>
       <h3>Seller : {seller}</h3>
       <h4>Rating : {ratings} </h4>
        </div>
    );
};

export default Product;
