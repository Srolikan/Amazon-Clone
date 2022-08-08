import React from 'react'
import './Product.css'
import { useProductValue } from './ContextAPI'

function Product({ id, title, star, price, img }) {

    const [products, setProducts] = useProductValue();

    const addProduct = (e) => {
        e.preventDefault();
        setProducts([...products, {
            title: title,
            price: price,
        }]);
    }

    console.log(products)

    return (
        <div className='product'>
            <img className='product__image' src={img} alt='' />
            <p className='title'>{title}</p>
            <p className='star'>{star}</p>
            <p className='price'>{price}</p>
            <button onClick={addProduct} className='buy'>Buy</button>
        </div>
    )
}

export default Product