import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const PetList = (props) => {
    const [pets, setPets] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
        .then((res) => {
            console.log(res.data)
            setPets(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <div>
            <div className='top'>
                <h1>Pet Shelter</h1>
                <Link to={'/pets/new'}>add a pet to the shelter</Link>
            </div>
            <h2>These pets are looking for a good home</h2>
            <div className='box'>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {pets.map((pet, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{pet.name}</td>
                                        <td>{pet.type}</td>
                                        <td>
                                            <Link className='petLink' to={`/pet/${pet._id}`}>details</Link>
                                            <Link to={`/pet/edit/${pet._id}`}>edit</Link>
                                        </td>
                                        
                                    </tr>
                                )
                            })}
                    </tbody>
                </table>
            </div>
            
        </div>
    )
}

export default PetList