import React from 'react'
import axios from 'axios'

const DeleteButton = (props) => {
    const {productID, successCallback} = props
    
    const deleteProduct = e => {
        console.log("hello")
        axios.delete('http://localhost:8000/api/product/delete/' + productID)
        .then(res => {
            successCallback()
        })
        .catch(err => console.log("delete error", err))
    }

    return(
        <button onClick={deleteProduct}>Delete</button>
    )
}

export default DeleteButton