import React, {useState, useEffect} from 'react'
import axios from 'axios'
import '../App.css'
import { Link } from 'react-router-dom'

const ProductList = (props) => {
    const {products, setProducts} = props

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
                            <div>
                                <Link to={`/product/${product._id}`}>{product.title}</Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ProductList