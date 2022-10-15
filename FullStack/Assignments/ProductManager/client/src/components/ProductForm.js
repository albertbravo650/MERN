import React, {useState} from 'react'
// import axios from 'axios'
import '../App.css'

const ProductForm = (props) => {
    const {products, setProducts} = props
    const {initialTitle, initialPrice, initialDes, onSubmitProp} = props
    const [title, setTitle] = useState(initialTitle)
    const [price, setPrice] = useState(initialPrice)
    const [description, setDescription] = useState(initialDes)

    const submitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({title, price, description})

        // axios.post('http://localhost:8000/api/product', {
        //     title,
        //     price,
        //     description
        // })
        // .then(res => {
        //     console.log(res)
        //     console.log(res.data)
        //     setProducts([...products, res.data])
        // })
        // .catch(err => console.log(err))
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Title:</label><br/>
                <input type="text" defaultValue={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price:</label><br/>
                <input type="text" defaultValue={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description:</label><br/>
                <input type="text" defaultValue={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <input className='button' type="submit"/>
        </form>
    )
}

export default ProductForm