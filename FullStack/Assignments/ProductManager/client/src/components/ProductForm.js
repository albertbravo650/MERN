import React, {useState} from 'react'
import axios from 'axios'
import '../App.css'

const ProductForm = () => {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
        .then(res => {
            console.log(res)
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Title:</label><br/>
                <input type="text" onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price:</label><br/>
                <input type="text" onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description:</label><br/>
                <input type="text" onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <input className='button' type="submit"/>
        </form>
    )
}

export default ProductForm