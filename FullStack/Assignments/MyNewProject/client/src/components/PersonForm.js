import React, {useState} from 'react'

const PersonForm = (props) => {
    
    const {initialFirstName, initialLastName, onSubmitProp} = props
    const [firstName, setFirstName] = useState(initialFirstName)
    const [lastName, setLastName] = useState(initialLastName)
    
    const submitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({firstName, lastName})
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name:</label><br/>
                <input type="text" name='firstName' defaultValue={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name:</label><br/>
                <input type="text" name='lastName' defaultValue={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <input className='submitButton' type="submit"/>
        </form>
    )
}

export default PersonForm