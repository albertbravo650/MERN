import PersonList from '../components/PersonList'
import PersonForm from '../components/PersonForm'
import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Main = (props) => {
    const [people, setPeople] = useState([])
    const[errors, setErrors] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
        .then(res => setPeople(res.data))
        .catch(err => console.log(err))
    }, [])

    const removeFromDom = personID => {
        axios.delete("http://localhost:8000/api/people/" + personID)
        .then(res => {
            console.log(res.data)
            setPeople(people.filter(person => person._id !== personID))
        })
        .catch(err => console.log(err))
    }

    const createPerson = personParam => {
        axios.post('http://localhost:8000/api/people', personParam)
        .then(res => {
            console.log(res)
            console.log(res.data)
            setPeople([...people, res.data])
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
        <div className='main'>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <PersonForm onSubmitProp={createPerson} initialFirstName="" initialLastName="" />
            <hr/>
            <PersonList people={people} removeFromDom={removeFromDom} />
        </div>
    )
}

export default Main