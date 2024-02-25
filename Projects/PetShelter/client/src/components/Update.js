import React, {useEffect, useState} from 'react'
import axios from  'axios'
import {useNavigate, useParams, Link} from 'react-router-dom'
import PetForm from './PetForm'

const Update = (props) => {
    const {id} = useParams()
    // const [firstName, setFirstName] = useState()
    // const [lastName, setLastName] = useState()
    const [pet, setPet] = useState({})
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()
    const[errors, setErrors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
        .then(res => {
            setPet(res.data)
            setLoaded(true)
        })
        .catch(err => console.log(err))
    }, [])

    const updatePet = petParam => {
        axios.put('http://localhost:8000/api/pet/' + id, petParam)
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
                <h1>Pet Shelter</h1>
                <Link to={'/'}>back to home</Link>
            </div>
            <h2>Edit {pet.name}</h2>
            {
                loaded && (
                    <div>
                        {errors.map((err, index) => <p key={index}>{err}</p>)}
                        <PetForm onSubmitProp={updatePet} initialName={pet.name} initialType={pet.type} initialDescription={pet.description}
                        initialSkill1={pet.skill1} initialSkill2={pet.skill2} initialSkill3={pet.skill3} />
                    </div>
                )
                
            }
        </div>
    )
}

export default Update