import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useParams} from 'react-router'

const Home = (props) => {
  return(
    <div>
      <h1>Welcome</h1>
    </div>
  )
}

const Number = (props) => {
  const {number} = useParams()

  if (isNaN(number) === false) {
    return(
      <div>
        <h1>The number is: {number}</h1>
      </div>
    )
  } else {
    return(
      <div>
        <h1>The word is: {number}</h1>
      </div>
    )
  }
}

const Word = (props) => {
  const {word} = useParams()
  const {color1} = useParams()
  const {color2} = useParams()

  if (isNaN(word) === true) {
    return(
      <div style={{padding: '20px', height: 'auto', color: `${color1}`, backgroundColor: `${color2}`}}>
        <h1>The word is: {word}</h1>
      </div>
    )
  }
}

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>Routing Practice</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:number' element={<Number />} />
        <Route path='/:word' element={<Word />} />
        <Route path='/:word/:color1' element={<Word />} />
        <Route path='/:word/:color1/:color2' element={<Word />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
