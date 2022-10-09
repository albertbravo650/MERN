import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import React, {useState} from 'react'

const Main = (props) => {
    const [products, setProducts] = useState([])

    return(
        <div>
            <ProductForm products={products} setProducts={setProducts}/>
            <hr/>
            <ProductList products={products} setProducts={setProducts}/>
        </div>
    )
}

export default Main