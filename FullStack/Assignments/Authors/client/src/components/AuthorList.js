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

    const deleteAuthor = id => {
        axios.delete('http://localhost:8000/api/author/' + id)
        .then(res => {
            console.log(res)
            setAuthors(authors.filter(author => author._id !== id))
        })
        .catch(err => console.log(err))
    }
    
    return(
        <div>
            <div className='top'>
                <h1>Favorite authors</h1>
                <Link className='link' to={'/new'}>Add an author</Link>
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
                                        <td className='authorName'>{author.name}</td>
                                        <td>
                                            <button><Link to={`/author/edit/${author._id}`}>edit</Link></button>
                                            <button onClick={() => deleteAuthor(author._id)}>Delete</button>
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