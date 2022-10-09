import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Detail = (props) => {
    const [product, setProduct] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' +id)
        .then(res => {
            console.log(res.data)
            setProduct(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <h2>Name of Product: {product.title}</h2>
            <h3>Price: ${product.price}</h3>
            <h3>Description: {product.description}</h3>
        </div>
    )
}

export default Detail