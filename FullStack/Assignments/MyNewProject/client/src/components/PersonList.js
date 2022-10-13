import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import DeleteButton from './DeleteButton'
import '../App.css'

const PersonList = (props) => {
    const [people, setPeople] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
        .then((res) => {
            console.log(res.data)
            setPeople(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

    const removeFromDom = personID => {
        setPeople(people.filter(person => person._id !== personID))
    }

    return(
        <div>
            {
                people.map((person, index) => {
                    return(
                        <div className='person' key={index}>
                            <div className='personName'>
                                <div className='name'>{person.firstName} {person.lastName}</div>
                            </div>
                            <Link className='personLink' to={`/people/${person._id}`}>{person.firstName}'s Page!</Link>
                            <br />
                            <div className='updatePerson'>
                                <Link to={`/people/edit/${person._id}`}>Edit</Link>
                            </div>
                            <br />
                            <div className='deletePerson'>
                                <DeleteButton personID={person._id} successCallback={()=>removeFromDom(person._id)}/>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PersonList