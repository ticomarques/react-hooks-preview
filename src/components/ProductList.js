import React, {useContext} from 'react'
import ProductsContext from '../context/ProductsContext'
import Product from './Product'

const ProductList = () => {
    const {products} = useContext(ProductsContext)
    return products.map((product) => (
        <Product key={product.id} product={product}/>
    ))
}

export { ProductList as default }