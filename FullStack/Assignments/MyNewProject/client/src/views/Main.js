import PersonList from '../components/PersonList'
import PersonForm from '../components/PersonForm'
import React, {useState} from 'react'

const Main = (props) => {
    const [people, setPeople] = useState([])

    return(
        <div>
            <PersonForm people={people} setPeople={setPeople} />
            <hr/>
            <PersonList people={people} setPeople={setPeople} />
        </div>
    )
}

export default Main