import React, { useEffect, useState } from 'react';

const Pokemon = (props) => {
    const [names, setNames] = useState([]);

    useEffect(() => {
        console.log("hello")
        fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
            .then(response => response.json())
            .then(response => setNames({
                pokemon: response.results
            }))
    }, []);

    console.log("hi", names.pokemon)

    return (
        <div>
            {names.pokemon && names.pokemon.map((item, index)=>{
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

