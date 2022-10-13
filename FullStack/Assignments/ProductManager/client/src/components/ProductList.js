import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../App.css'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
    const {products, setProducts, removeFromDom} = props

    const deleteProduct = (productID) => {
        axios.delete('http://localhost:8000/api/product/delete/' + productID)
        .then(res => removeFromDom(productID))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
            console.log(res.data)
            setProducts(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <div>
            <h2>All Products:</h2>
            {
                products.map((product, index) => {
                    return(
                        <div key={index}>
                            <div className='listItem'>
                                <Link to={`/product/${product._id}`}>{product.title}</Link>
                                <br/>
                                <Link to={`/product/edit/${product._id}`}>Edit</Link>
                                <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList