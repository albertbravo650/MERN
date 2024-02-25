import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'

const Detail = (props) => {
    const [pet, setPet] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
        .then(res => {
            console.log(res.data)
            setPet(res.data)
        })
        .catch(err => console.log(err))
    }, [])

    const deletePet = e => {
        axios.delete('http://localhost:8000/api/pet/' + id)
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log("problem", err))
    }

    return(
        <div>
            <div className='top'>
                <h1>Pet Shelter</h1>
                <Link to={'/'}>back to home</Link>
            </div>
            <div className='bottom'>
                <h2>Details about: {pet.name}</h2>
                <button className='adopt' onClick={deletePet}>Adopt {pet.name}</button>
            </div>
            <div className='box'>
                <div className='detailRow'>
                    <h4>Pet Type:</h4><p>{pet.type}</p>
                </div>
                <div className='detailRow'>
                    <h4>Description:</h4><p>{pet.description}</p>
                </div>
                <div className='detailRow'>
                    <h4>Skills:</h4>
                        <div>
                            <p>{pet.skill1}</p>
                            <p>{pet.skill2}</p>
                            <p>{pet.skill3}</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Detail