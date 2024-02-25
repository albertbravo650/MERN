import React, {useState} from 'react'
import axios from  'axios'
import {useNavigate, Link} from 'react-router-dom'
import PetForm from './PetForm'

const CreatePet = (props) => {
    const [pets, setPets] = useState([])
    const[errors, setErrors] = useState([])
    const navigate = useNavigate()

    const createNewPet = petParam => {
        axios.post('http://localhost:8000/api/pet', petParam)
        .then(res => {
            console.log(res)
            console.log(res.data)
            setPets([...pets, res.data])
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
            <h2>Know a pet needing a home?</h2>
            {
                <div>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <PetForm onSubmitProp={createNewPet} initialName={""} initialType={""} initalDescription={""}
                    initialSkill1={""} initialSkill2={""} initialSkill3={""} />
                </div>
            }
        </div>
    )
}

export default CreatePet