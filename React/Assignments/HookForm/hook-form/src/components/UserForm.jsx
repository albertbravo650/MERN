import React, { useState } from  'react'
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("")
    console.log(firstName)
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")
    
    const createUser = (e) => {
        e.preventDefault()
        
        const newUser = { firstName, lastName, email, password, cPassword }
        console.log("Welcome", newUser)
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setCPassword("")
    }
    
    return(
        <div>
            <form onSubmit={ createUser }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" value={firstName} onChange={ (e) => setFirstName(e.target.value) } />
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" value={lastName} onChange={ (e) => setLastName(e.target.value) } />
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" value={cPassword} onChange={ (e) => setCPassword(e.target.value) } />
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h2>Your Form Data</h2>
                <h3>First Name: {firstName}</h3>
                <h3>Last Name: {lastName}</h3>
                <h3>Email: {email}</h3>
                <h3>Password: {password}</h3>
                <h3>Confirm Password: {cPassword}</h3>
            </div>
        </div>
    )
}
    
export default UserForm