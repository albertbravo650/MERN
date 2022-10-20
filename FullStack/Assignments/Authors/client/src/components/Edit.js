import React, {useEffect, useState} from 'react'
import axios from  'axios'
import {useNavigate, useParams, Link} from 'react-router-dom'
import Form from './Form'

const Edit = (props) => {
    const {id} = useParams()
    const [author, setAuthor] = useState({})
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()
    const[errors, setErrors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + id)
        .then(res => {
            setAuthor(res.data)
            setLoaded(true)
        })
        .catch(err => console.log(err))
    }, [])

    const updateAuthor = authorParam => {
        axios.put('http://localhost:8000/api/author/' + id, authorParam)
        .then(res => {
            console.log(res)
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
            <h2>Edit this author:</h2>
            {
                loaded && (
                    <div>
                        {errors.map((err, index) => <p key={index}>{err}</p>)}
                        <Form onSubmitProp={updateAuthor} initialName={author.name} />
                    </div>
                )
            }
        </div>
    )
}

export default Edit