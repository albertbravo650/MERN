import React, {useState} from 'react';
    
const PersonCard = (props) => {
    const [currentAge, setAddAge] = useState(props.age);

    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <h3>Age: {currentAge}</h3>
            <h3>Hair Color: {props.hairColor}</h3>
            <button onClick={(event) => setAddAge(currentAge + 1)}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
}
    
export default PersonCard;