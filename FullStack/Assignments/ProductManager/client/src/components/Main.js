import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import React, {useEffect, useState} from 'react'
import axios from "axios";

const Main = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setProducts(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const removeFromDom = productID => {
        axios.delete('http://localhost:8000/api/product/delete/' + productID)
        .then(res => {
            console.log(res)
            setProducts(products.filter(product => product._id !== productID))
        })
        .catch(err => console.log(err))
    }

    const createProduct = personParam => {
        axios.post('http://localhost:8000/api/product', personParam)
        .then(res => {
            console.log(res)
            setProducts([...products, res.data])
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <ProductForm products={products} setProducts={setProducts} onSubmitProp={createProduct}
            initialTitle="" initialPrice="" initialDes=""/>
            <hr/>
            <ProductList products={products} setProducts={setProducts} removeFromDom={removeFromDom}/>
        </div>
    )
}

export default Main