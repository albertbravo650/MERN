import React, { useState } from  'react'
    
const AddBox = ({boxes, setBoxes}) => {
    const [color, setColor] = useState("")
    
    const createBox = (e) => {
        e.preventDefault()
        const box = {
            color: color
        }
        setBoxes([...boxes, box])
        
        const newBox = { color }
        console.log("Welcome", newBox)
        setColor("")
    }
    
    return(
        <div>
            <form onSubmit={ createBox }>
                <div>
                    <label>Color</label> 
                    <input type="text" value={color} onChange={ (e) => setColor(e.target.value) } />
                    {
                        color && color.length < 3 ?
                        <p>Color must be atleast 2 characters</p>:
                        null
                    }
                </div>
                <input type="submit" value="Add" />
            </form>
            <div>
                <h2>Boxes</h2>
                <h3>{color}</h3>
            </div>
        </div>
    )
}
    
export default AddBox