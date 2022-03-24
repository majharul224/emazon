import React from 'react';
import './Shop.css'
import { useEffect, useState } from 'react';
import Product from '../Product/Product';
const Shop = () => {
    const [product,setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
    fetch('products.json')
    .then(res => res.json())
    .then(data =>setProduct(data))
  },[]);
  //................
  const handleAddToCart = (product)=>{
    console.log(product)
    const newCart = [...cart, product];
    setCart(newCart)
}

//.................

    return (
        <div className='container'>
            <div className="products-container">
              { product.length && product.map (product=><Product key ={product.id} 
            product= {product} 
            handleAddToCart ={handleAddToCart }
            >

              </Product>)
              }
            </div>
            <div className="cart-card">
                <h2>Order Summary</h2>
                <p>Selected Items:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;