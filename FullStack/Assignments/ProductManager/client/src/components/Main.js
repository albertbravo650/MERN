import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import React, {useState} from 'react'

const Main = (props) => {
    const [products, setProducts] = useState([])
    const removeFromDom = productID => {
        setProducts(products.filter(product => product._id != productID))
    }

    return(
        <div>
            <ProductForm products={products} setProducts={setProducts}/>
            <hr/>
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main