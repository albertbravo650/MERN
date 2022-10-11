import React, {useState} from 'react'
import axios from 'axios'

const PersonForm = (props) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const {people, setPeople} = props

    const submitHandler = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
        .then(res => {
            console.log(res)
            console.log(res.data)
            setPeople([...people, res.data])
        })
        .catch(err => console.log(err))
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name:</label><br/>
                <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name:</label><br/>
                <input type="text" onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <input className='submitButton' type="submit"/>
        </form>
    )
}

export default PersonForm