import React, { createContext, useContext, useState } from 'react'

export const ProductContext = createContext();

export const StateProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    return (
        <ProductContext.Provider value={[products, setProducts]}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProductValue = () => useContext(ProductContext);