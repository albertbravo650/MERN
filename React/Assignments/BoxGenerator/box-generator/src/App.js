import './App.css';
import AddBox from './components/AddBox';
import Box from './components/Box';
import {useState} from 'react'
import styles from './components/box.module.css'

function App() {
  const[boxes, setBoxes] = useState([])
  return (
    <div className="App">
      <AddBox boxes={boxes} setBoxes={setBoxes}/>
      <div className={styles.boxes}>
        {
          boxes.map((box) =>
            <Box color = {box.color}/>
          )
        }
      </div>
      
    </div>
  );
}

export default App;
