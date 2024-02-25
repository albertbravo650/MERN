import React, {useState} from 'react'

const PetForm = (props) => {
    
    const {initialName, initialType, initialDescription, initialSkill1, initialSkill2,
        initialSkill3, onSubmitProp} = props
    const [name, setName] = useState(initialName)
    const [type, setType] = useState(initialType)
    const [description, setDescription] = useState(initialDescription)
    const [skill1, setSkill1] = useState(initialSkill1)
    const [skill2, setSkill2] = useState(initialSkill2)
    const [skill3, setSkill3] = useState(initialSkill3)
    
    const submitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({name, type, description, skill1, skill2, skill3})
    }

    return(
        <div className='box'>
            <form onSubmit={submitHandler}>
                <div className='form'>
                    <div>
                        <div>
                            <label>Pet Name:</label><br/>
                            <input type="text" name='name' defaultValue={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div>
                            <label>Pet Type:</label><br/>
                            <input type="text" name='type' defaultValue={type} onChange={(e)=>setType(e.target.value)}/>
                        </div>
                        <div>
                            <label>Pet Description:</label><br/>
                            <input type="text" name='description' defaultValue={description} onChange={(e)=>setDescription(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <label>Skills (optional)</label><br/>
                        <div>
                            <label>Skill 1:</label><br/>
                            <input type="text" name='skill1' defaultValue={skill1} onChange={(e)=>setSkill1(e.target.value)}/>
                        </div>
                        <div>
                            <label>Skill 2:</label><br/>
                            <input type="text" name='skill2' defaultValue={skill2} onChange={(e)=>setSkill2(e.target.value)}/>
                        </div>
                        <div>
                            <label>Skill 3:</label><br/>
                            <input type="text" name='skill3' defaultValue={skill3} onChange={(e)=>setSkill3(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <input className='submitButton' type="submit"/>
            </form>
        </div>
    )
}

export default PetForm