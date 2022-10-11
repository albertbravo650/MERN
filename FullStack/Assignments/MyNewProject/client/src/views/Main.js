import PersonList from '../components/PersonList'
import PersonForm from '../components/PersonForm'
import React, {useState} from 'react'

const Main = (props) => {
    const [people, setPeople] = useState([])

    const removeFromDom = personID => {
        setPeople(people.filter(person => person._id != personID))
    }

    return(
        <div className='main'>
            <PersonForm people={people} setPeople={setPeople} />
            <hr/>
            <PersonList people={people} setPeople={setPeople} removeFromDom={removeFromDom} />
        </div>
    )
}

export default Main