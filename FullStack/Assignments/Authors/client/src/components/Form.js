import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {
    
    const {initialName, onSubmitProp} = props
    const [name, setName] = useState(initialName)
    const navigate = useNavigate()
    
    const submitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({name})
    }

    const navigateHandle = () => {
        navigate('/')
    }

    return(
        <div className='box'>
            <form onSubmit={submitHandler}>
                <div className='form'>
                    <div>
                        <div>
                            <label>Name:</label><br/>
                            <input type="text" name='name' defaultValue={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <button className='cancel' onClick={navigateHandle}>Cancel</button>
                <input className='submit' type="submit" defaultValue={"Submit"}/>
            </form>
        </div>
    )
}

export default Form