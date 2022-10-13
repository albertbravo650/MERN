import React, {useEffect, useState} from 'react'
import axios from  'axios'
import {useNavigate, useParams} from 'react-router-dom'
import PersonForm from './PersonForm'
import DeleteButton from './DeleteButton'

const Update = (props) => {
    const {id} = useParams()
    // const [firstName, setFirstName] = useState()
    // const [lastName, setLastName] = useState()
    const [person, setPerson] = useState({})
    const [loaded, setLoaded] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8000/api/people/' + id)
        .then(res => {
            setPerson(res.data)
            setLoaded(true)
        })
        .catch(err => console.log(err))
    }, [])

    const updatePerson = personParam => {
        axios.put('http://localhost:8000/api/people/' + id, personParam)
        .then(res => {
            console.log(res)
            navigate('/')
        })
        .catch(err => console.log(err))
    }

    return(
        <div>
            <h2>Update a Person:</h2>
            {
                loaded && (
                    <div>
                        <PersonForm onSubmitProp={updatePerson} initialFirstName={person.firstName}
                        initialLastName={person.lastName} />
                        <DeleteButton personID={person._id} successCallback={()=>navigate('/')} />
                    </div>
                )
            }
        </div>
    )
}

export default Update