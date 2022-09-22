import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Pokemon = (props) => {
    const [names, setNames] = useState([]);

    useEffect(() => {
        console.log("hello")
        axios
            .get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then(response => {
                setNames(response.data.results)
                console.log(response)
            })
            // .then(response=>{console.log("wow", response.data.results)})
            .catch((err) => console.log(err))
            // .then(console.log("wooow", names))
    }, []);

    return (
        <div>
            <h1>Pokemon</h1>
            {names.map((item, index)=>{
                return (
                    <div key={index}>
                        <ul>
                            <li>{item.name}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    );
}
export default Pokemon;