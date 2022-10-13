import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

const Detail = (props) => {
    const [person, setPerson] = useState({})
    const {id} = useParams()

    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
        .then(res => {
            console.log(res.data)
            setPerson(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    return(
        <div>
            <p>First Name: {person.firstName}</p>
            <p>Last Name: {person.lastName}</p>
            <br />
            <Link to={`/`}>Home</Link>
        </div>
    )
}

export default Detail