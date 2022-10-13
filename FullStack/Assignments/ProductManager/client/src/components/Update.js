import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useNavigate, useParams} from 'react-router-dom'
import '../App.css'

const Update = (props) => {
    const {id} = useParams()
    const [title, setTitle] = useState()
    const [price, setPrice] = useState()
    const [description, setDescription] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/product/' + id)
        .then(res => {
            setTitle(res.data.title)
            setPrice(res.data.price)
            setDescription(res.data.description)
        })
        .catch(err => console.log(err))
    }, [])

    const updateProduct = (e) => {
        e.preventDefault()

        axios.put('http://localhost:8000/api/product/edit/' + id, {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log("problem", err))
    }

    return(
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <div>
                    <label>Title:</label><br/>
                    <input defaultValue={title} type="text" onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Price:</label><br/>
                    <input defaultValue={price} type="text" onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label>Description:</label><br/>
                    <input defaultValue={description} type="text" onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <input className='button' defaultValue="Update" type="submit"/>
            </form>
        </div>
    )
}

export default Update