import React from 'react'
import { useProductValue } from './ContextAPI';

function Basket() {

  const [products, setProducts] = useProductValue();
  { console.log(products) }

  return (
    <div>
      <h1>hayırlısı</h1>
      <p>
        {
          products?.map((product) => (
            <div>{product.title}</div>
          ))
        }
      </p>
    </div>
  )
}

export default Basket