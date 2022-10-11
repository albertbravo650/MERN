import React, {useEffect, useState} from 'react'
import axios from  'axios'
import {useNavigate, useParams} from 'react-router-dom'

const Update = (props) => {
    const {id} = useParams()
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
        .then(res => {
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
        })
        .catch(err => console.log(err))
    }, [])

    const updatePerson = (e) => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/people/' + id, {
            firstName,
            lastName
        })
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <h2>Update a Person:</h2>
            <form onSubmit={updatePerson}>
                <div>
                    <label>First Name:</label><br/>
                    <input type="text" name='firstName' defaultValue={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label>Last Name:</label><br/>
                    <input type="text" name='lastName' defaultValue={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <input className='submitButton' type="submit"/>
            </form>
        </div>
    )
}

export default Update