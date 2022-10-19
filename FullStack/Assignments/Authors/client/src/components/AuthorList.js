import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const AuthorList = (props) => {
    const [authors, setAuthors] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then((res) => {
            console.log(res.data)
            setAuthors(res.data)
        })
        .catch((err) => console.log(err))
    }, [])

    return(
        <div>
            <div className='top'>
                <h1>Favorite authors</h1>
                <Link to={'/new'}>Add an author</Link>
            </div>
            <h2>We have quotes by:</h2>
            <div className='box'>
                <table>
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Actions available</th>
                        </tr>
                    </thead>
                    <tbody>
                            {authors.map((author, index) => {
                                return(
                                    <tr key={index}>
                                        <td>{author.name}</td>
                                        <td>
                                            <Link to={`/author/edit/${author._id}`}>edit</Link>
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

export default AuthorList