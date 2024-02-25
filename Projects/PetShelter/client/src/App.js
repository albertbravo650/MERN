import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Detail from './components/Detail'
import Update from './components/Update'
import PetList from './components/PetList'
import CreatePet from './components/CreatePet'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<PetList />} path='/' default />
          <Route element={<Detail />} path='/pet/:id' />
          <Route element={<Update />} path='/pet/edit/:id' />
          <Route element={<CreatePet />} path='/pets/new' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
