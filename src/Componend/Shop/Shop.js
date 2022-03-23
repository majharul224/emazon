import React from 'react';
import './Shop.css'
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
const Shop = () => {
    const [prodects,setprodects] = useState([]);
    useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data =>setprodects(data))
  },[])
    return (
        <div className='container'>
            <div className="products-container">
              { prodects.length && prodects.map (product=><Product key ={product.id} 
            product= {product} >

              </Product>)
              }
            </div>
            <div className="cart-card">
                <h2>This is a cart!!!</h2>
            </div>
        </div>
    );
};

export default Shop;