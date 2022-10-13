import './App.css'
import Main from './components/Main'
import Detail from './components/Detail'
import Update from './components/Update'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path='/' default/>
          <Route element={<Detail />} path='/product/:id' />
          <Route element={<Update />} path='/product/edit/:id' />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
