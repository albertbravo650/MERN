import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthorList from './components/AuthorList'
import Create from './components/Create'
import Edit from './components/Edit'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AuthorList />} path='/' />
          <Route element={<Create />} path='/new' />
          <Route element={<Edit />} path='/author/edit/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
