import React, {useState} from 'react'

const Form = (props) => {
    
    const {initialName, onSubmitProp} = props
    const [name, setName] = useState(initialName)
    
    const submitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({name})
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
                <input className='submitButton' type="submit"/>
            </form>
        </div>
    )
}

export default Form