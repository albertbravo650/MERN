import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthorList from './components/AuthorList'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthorList />} path='/' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
