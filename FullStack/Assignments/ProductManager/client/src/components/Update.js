import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import ProductForm from './ProductForm'
import DeleteButton from './DeleteButton'
import '../App.css'

const Update = (props) => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [loaded, setLoaded] = useState(false)
    // const [title, setTitle] = useState()
    // const [price, setPrice] = useState()
    // const [description, setDescription] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
        .then(res => {
            // setTitle(res.data.title)
            // setPrice(res.data.price)
            // setDescription(res.data.description)
            setProduct(res.data)
            setLoaded(true)
        })
        .catch(err => console.log(err))
    }, [])

    const updateProduct = productParam => {
        // e.preventDefault()

        axios.put('http://localhost:8000/api/product/edit/' + id, productParam)
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log("problem", err))
    }

    return(
        <div>
            <h1>Update Product</h1>
            {
                loaded && (
                    <div>
                        <ProductForm onSubmitProp={updateProduct} initialTitle={product.title}
                        initialPrice={product.price} initialDes={product.description}/>
                        <DeleteButton productID={product._id} successCallback={()=>navigate('/')} />
                    </div>
                )
            }
        </div>
    )
}

export default Update