import React, {useState} from 'react'
import axios from  'axios'
import {useNavigate, Link} from 'react-router-dom'
import Form from './Form'

const Create = (props) => {
    const [authors, setAuthors] = useState([])
    const[errors, setErrors] = useState([])
    const navigate = useNavigate()

    const  createAuthor = authorParam => {
        axios.post('http://localhost:8000/api/author', authorParam)
        .then(res => {
            console.log(res)
            console.log(res.data)
            setAuthors([...authors, res.data])
            navigate('/')
        })
        .catch(err => {
            const errorResponse = err.response.data.errors
            const errorArr = []
            for(const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr)
        })
    }

    return(
        <div>
            <div className='top'>
                <h1>Favorite authors</h1>
                <Link to={'/'}>Home</Link>
            </div>
            <h2>Add a new author:</h2>
            {
                <div>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <Form onSubmitProp={createAuthor} initialName={""} />
                </div>
            }
        </div>
    )
}

export default Create