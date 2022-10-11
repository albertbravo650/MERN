import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../App.css'

const PersonList = (props) => {
    const {removeFromDom, people, setPeople} = props

    const deletePerson = (personID) => {
        axios.delete('http://localhost:8000/api/people/' + personID)
        .then(res => {
            removeFromDom(personID)
            console.log(res.data)
        })
        .catch(err => console.log(err))

    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/people')
        .then((res) => {
            console.log(res.data)
            setPeople(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

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
                                <button onClick={(e)=>{deletePerson(person._id)}}>Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PersonList